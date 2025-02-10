import { writeFile } from "fs/promises";

import { formatISO } from "date-fns";
import {
  major,
  minor,
  prerelease,
  satisfies,
  inc as semverBump,
  compare as semverCompare,
} from "semver";
import type { ZodType, ZodTypeDef } from "zod";
import { z } from "zod";

import { read } from "../utils/files.js";
import { isoDateSchema } from "../utils/schemas.js";

async function fetchJson<T>(
  url: string,
  schema: ZodType<T, ZodTypeDef, unknown>,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`${init?.method ?? "GET"} ${url}: HTTP ${response.status}`);
  }

  return schema.parse(await response.json());
}

function latestVersion(name: string, versions: string[]): string {
  const latest = versions.at(-1);

  if (!latest) {
    throw new Error(`Expected at least one ${name} version`);
  }

  return latest;
}

function groupMinorVersions(versions: string[]): string[] {
  const versionsByMinor: Record<string, string> = {};

  for (const version of versions) {
    versionsByMinor[`${major(version)}.${minor(version)}`] = version;
  }

  return Object.values(versionsByMinor);
}

const versionSchema = z
  .string()
  .transform((version) => version.replace(/^v/, ""));

async function fetchNodeVersions(): Promise<string[]> {
  const schedule = await fetchJson(
    "https://raw.githubusercontent.com/nodejs/Release/main/schedule.json",
    z.record(
      versionSchema,
      z.object({ start: isoDateSchema, end: isoDateSchema }),
    ),
  );

  const today = formatISO(Date.now(), { representation: "date" });

  const versions: string[] = [];

  for (const [version, { start, end }] of Object.entries(schedule)) {
    if (start < today && today <= end) {
      versions.push(version);
    }
  }

  return versions;
}

interface Versions {
  previous: string[];
  latest: string;
  prerelease: string;
}

async function fetchCerbosVersions(): Promise<Versions> {
  const minimumVersion = "0.16.0";

  const allVersions: string[] = [];

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };

  const githubToken = process.env["GITHUB_TOKEN"];

  if (githubToken) {
    headers["Authorization"] = `Bearer ${githubToken}`;
  }

  for (let page = 1, done = false; !done; page++) {
    const releases = await fetchJson(
      `https://api.github.com/repos/cerbos/cerbos/releases?page=${page}&per_page=100`,
      z.array(
        z
          .object({ tag_name: versionSchema })
          .transform(({ tag_name }) => tag_name),
      ),
      { headers },
    );

    for (const version of releases) {
      switch (semverCompare(version, minimumVersion)) {
        case -1: // version < minimumVersion
          continue;

        case 0: // version == minimumVersion
          done = true;
      }

      allVersions.push(version);
    }
  }

  const versions = groupMinorVersions(allVersions.sort(semverCompare));
  const latest = latestVersion("Cerbos", versions);

  return {
    previous: versions.slice(0, -1),
    latest,
    prerelease: `${semverBump(latest, "minor")}-prerelease`,
  };
}

async function fetchReactVersions(): Promise<Versions> {
  const {
    peerDependencies: { react: requirement },
  } = z
    .object({
      peerDependencies: z.object({ react: z.string() }),
    })
    .parse(
      JSON.parse(
        await read(
          new URL("../../../../packages/react/package.json", import.meta.url),
        ),
      ),
    );

  const {
    "dist-tags": { canary },
    versions: allVersions,
  } = await fetchJson(
    "https://registry.npmjs.org/react",
    z.object({
      "dist-tags": z.object({ canary: z.string() }),
      versions: z
        .record(z.unknown())
        .transform((versions) => Object.keys(versions).sort(semverCompare)),
    }),
    { headers: { Accept: "application/vnd.npm.install-v1+json" } },
  );

  const matchingVersions = allVersions.filter(
    (version) => satisfies(version, requirement) && !prerelease(version),
  );

  const minimumVersion = matchingVersions[0];
  const versions = groupMinorVersions(matchingVersions);

  if (minimumVersion && minimumVersion !== versions[0]) {
    versions.unshift(minimumVersion);
  }

  return {
    previous: versions.slice(0, -1),
    latest: latestVersion("React", versions),
    prerelease: canary,
  };
}

interface MatrixEntry {
  required: boolean;
  title: string;
  setup?: string;
  test: string;
  node: string;
  cerbos?: string;
  react?: string;
}

function nodeEntry(node: string): MatrixEntry {
  return {
    required: true,
    title: `Node ${node}`,
    test: "pnpm run test matrix-node",
    node,
  };
}

function cerbosEntry(node: string, cerbos: string): MatrixEntry {
  return {
    required: !prerelease(cerbos),
    title: `Cerbos ${cerbos} | Node ${node}`,
    setup: `CERBOS_VERSION=${cerbos} pnpm run test:servers:start`,
    test: `CERBOS_VERSION=${cerbos} pnpm run test matrix-cerbos`,
    node,
    cerbos,
  };
}

function reactEntry(node: string, react: string): MatrixEntry {
  return {
    required: !prerelease(react),
    title: `React ${react} | Node ${node}`,
    setup: `pnpm --filter=./packages/react add --save-dev react@${react}
pnpm --filter=./private/test add --save-dev react@${react} react-dom@${react}`,
    test: "pnpm run test matrix-react",
    node,
    react,
  };
}

function matrixEntries(
  nodes: string[],
  others: Versions,
  entry: (node: string, other: string) => MatrixEntry,
): MatrixEntry[] {
  const latestNode = latestVersion("Node.js", nodes);

  return [
    ...others.previous.map((other) => entry(latestNode, other)),
    ...nodes.map((node) => entry(node, others.latest)),
    entry(latestNode, others.prerelease),
  ];
}

const [nodes, cerboses, reacts] = await Promise.all([
  fetchNodeVersions(),
  fetchCerbosVersions(),
  fetchReactVersions(),
]);

const matrix = {
  include: [
    ...nodes.map((node) => nodeEntry(node)),
    ...matrixEntries(nodes, cerboses, cerbosEntry),
    ...matrixEntries(nodes, reacts, reactEntry),
  ],
};

console.log(JSON.stringify(matrix, null, 2));

const outputPath = process.env["GITHUB_OUTPUT"];
if (outputPath) {
  await writeFile(outputPath, `matrix=${JSON.stringify(matrix)}`);
}
