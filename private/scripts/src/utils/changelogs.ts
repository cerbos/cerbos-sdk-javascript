import { join } from "path";

import { compare as semverCompare } from "semver";
import type { YAMLMap, YAMLSeq } from "yaml";
import {
  Document,
  isCollection,
  isNode,
  isScalar,
  isSeq,
  parse as parseYaml,
  visit,
} from "yaml";
import { z } from "zod";

import { read, repositoryPath, write } from "./files.js";
import { repositoryUrl } from "./git.js";
import type { Package } from "./packages.js";
import {
  isoDateSchema,
  semverSchema,
  sortedArray,
  sortedRecord,
  toJSONSchema,
} from "./schemas.js";

const pullRequests = {
  pullRequests: sortedArray(z.number().int().positive()),
};

const entrySchema = z.strictObject({
  summary: z.string(),
  details: z.string().optional(),
  ...pullRequests,
});

export type Entry = z.infer<typeof entrySchema>;

const bumpSchema = z.strictObject({
  to: z.string(),
  ...pullRequests,
});

export type Bump = z.infer<typeof bumpSchema>;

const packageRenameSchema = z.strictObject({
  from: z.string(),
  ...pullRequests,
});

export type PackageRename = z.infer<typeof packageRenameSchema>;

const entriesSchema = z.strictObject({
  added: z.array(entrySchema).min(1).optional(),
  changed: z.array(entrySchema).min(1).optional(),
  bumped: sortedRecord(bumpSchema).optional(),
  removed: z.array(entrySchema).min(1).optional(),
  renamedPackage: packageRenameSchema.optional(),
});

export type Entries = z.infer<typeof entriesSchema>;

const releaseSchema = z.strictObject({
  version: semverSchema,
  date: isoDateSchema,
  ...entriesSchema.shape,
});

export type Release = z.infer<typeof releaseSchema>;

function compareReleases(a: Release, b: Release): number {
  return b.date.localeCompare(a.date) || semverCompare(b.version, a.version);
}

const releaseTypeSchema = z.enum(["major", "minor", "patch"]);

export type ReleaseType = z.infer<typeof releaseTypeSchema>;

const unreleasedChangesSchema = z.strictObject({
  type: releaseTypeSchema,
  ...entriesSchema.shape,
});

export type UnreleasedChanges = z.infer<typeof unreleasedChangesSchema>;

const changelogSchema = z
  .strictObject({
    unreleased: unreleasedChangesSchema.optional(),
    releases: sortedArray(releaseSchema, compareReleases).optional(),
    references: sortedRecord(z.string()).optional(),
    initialCommit: z.string(),
  })
  .check((ctx) => {
    const { unreleased, releases = [], references = {} } = ctx.value;
    const entries: Entries[] = [unreleased ?? {}, ...releases];

    const dependencies = new Set(
      entries.flatMap(({ bumped = {} }) => Object.keys(bumped)),
    );

    for (const dependency of dependencies) {
      if (!references[dependency]) {
        ctx.issues.push({
          code: "custom",
          message: `Provide a URL for dependency "${dependency}"`,
          input: references,
          path: ["references"],
        });
      }
    }
  });

export type Changelog = z.infer<typeof changelogSchema>;

export async function readChangelog({ path }: Package): Promise<Changelog> {
  return changelogSchema.parse(
    parseYaml(await read(join(path, "changelog.yaml"))),
  );
}

export async function writeChangelog(
  { name, path }: Package,
  changelog: Changelog,
): Promise<void> {
  const validated = changelogSchema.parse(changelog);

  await Promise.all([
    write(join(path, "changelog.yaml"), changelogToYaml(validated)),
    write(join(path, "CHANGELOG.md"), changelogToMarkdown(name, validated)),
  ]);
}

export async function writeChangelogSchema(): Promise<void> {
  await write(
    repositoryPath("packages/changelog.schema.json"),
    JSON.stringify(toJSONSchema(changelogSchema), null, 2),
  );
}

function changelogToYaml(changelog: Changelog): string {
  const document = new Document(changelog, {
    aliasDuplicateObjects: false,
  });

  document.commentBefore =
    " yaml-language-server: $schema=../changelog.schema.json";

  visit(document, {
    Map(_, node) {
      for (const [previous, current] of eachSlice(node.items, 2)) {
        if (isScalar(current.key)) {
          if (current.key.value === "pullRequests" && isSeq(current.value)) {
            current.value.flow = true;
          }

          current.key.spaceBefore =
            isBlockCollection(previous.value) ||
            isBlockCollection(current.value);
        }
      }
    },
    Seq(_, node) {
      for (const [previous, current] of eachSlice(node.items, 2)) {
        if (isNode(current)) {
          current.spaceBefore =
            isBlockCollection(previous) || isBlockCollection(current);
        }
      }
    },
  });

  return document.toString({
    blockQuote: "literal",
    lineWidth: 0,
  });
}

type Tuple<T, N, A extends readonly T[] = []> = A["length"] extends N
  ? A
  : Tuple<T, N, readonly [...A, T]>;

function* eachSlice<T, N extends number>(
  array: readonly T[],
  length: N,
): Iterable<Tuple<T, N>> {
  for (let i = 0; i + length <= array.length; i++) {
    yield array.slice(i, i + length) as Tuple<T, N>;
  }
}

function isBlockCollection(node: unknown): node is YAMLMap | YAMLSeq {
  return isCollection(node) && !node.flow;
}

function changelogToMarkdown(
  packageName: string,
  { unreleased, releases = [], references = {}, initialCommit }: Changelog,
): string {
  let markdown =
    "<!-- Do not edit this file. It is automatically generated from changelog.yaml. -->\n\n";

  markdown += `## [Unreleased]\n\n${entriesToMarkdown(packageName, unreleased ?? {})}\n\n`;

  const taggedReleases: (Release & { tag: string })[] = [];
  let releasePackageName = packageName;
  for (const release of releases) {
    markdown += `## [${release.version}] - ${release.date}\n\n${entriesToMarkdown(releasePackageName, release)}\n\n`;

    taggedReleases.push({
      ...release,
      tag: `${releasePackageName}@${release.version}`,
    });

    if (release.renamedPackage) {
      releasePackageName = release.renamedPackage.from;
    }
  }

  function releaseTag(index: number): string {
    return taggedReleases[index]?.tag ?? initialCommit;
  }

  markdown += diffReference("unreleased", releaseTag(0), "HEAD");

  for (const [i, release] of taggedReleases.entries()) {
    markdown += diffReference(release.version, releaseTag(i + 1), release.tag);
  }

  for (const [name, url] of Object.entries(references)) {
    markdown += `[${name}]: ${url}\n`;
  }

  return markdown;
}

function entriesToMarkdown(
  packageName: string,
  {
    added = [],
    changed = [],
    bumped = {},
    removed = [],
    renamedPackage,
  }: Entries,
): string {
  let markdown = "";

  if (added.length > 0) {
    markdown += `### Added\n\n${entryListToMarkdown(added)}\n\n`;
  }

  const changes = [
    ...changed,
    ...Object.entries(bumped).map(([dependency, { to, pullRequests }]) => ({
      summary: `Bump dependency on [${dependency}] to ${to}`,
      pullRequests,
    })),
  ];

  if (renamedPackage) {
    const { from, pullRequests } = renamedPackage;
    changes.unshift({
      summary: `Renamed package from \`${from}\` to \`${packageName}\``,
      pullRequests,
    });
  }

  if (changes.length > 0) {
    markdown += `### Changed\n\n${entryListToMarkdown(changes)}\n\n`;
  }

  if (removed.length > 0) {
    markdown += `### Removed\n\n${entryListToMarkdown(removed)}\n\n`;
  }

  if (markdown === "") {
    return "No notable changes.\n\n";
  }

  return markdown;
}

function entryListToMarkdown(entries: Entry[]): string {
  return entries.map(entryToMarkdown).join("\n\n");
}

function entryToMarkdown({ summary, details, pullRequests }: Entry): string {
  let markdown = `- ${summary} (${pullRequests.map(pullRequestToMarkdown).join(", ")})\n\n`;

  if (details) {
    markdown += `${details.replaceAll(/^(?!\n)/gm, "  ")}\n\n`;
  }

  return markdown;
}

function pullRequestToMarkdown(pullRequest: number): string {
  return `[#${pullRequest}](${repositoryUrl}/pull/${pullRequest})`;
}

function diffReference(version: string, from: string, to: string): string {
  return `[${version}]: ${repositoryUrl}/compare/${from}...${to}\n`;
}
