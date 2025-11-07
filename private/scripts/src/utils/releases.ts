import { formatISO } from "date-fns";
import { inc as semverBump } from "semver";

import type {
  Changelog,
  ReleaseType,
  UnreleasedChanges,
} from "./changelogs.js";
import { readChangelog, writeChangelog } from "./changelogs.js";
import type { Package, PackageJson } from "./packages.js";
import { readPackageJson, writePackageJson } from "./packages.js";

interface PackageWithMetadata extends Package {
  manifest: PackageJson;
  changelog: Changelog;
}

export interface PackageWithUnreleasedChanges extends PackageWithMetadata {
  newVersion: string;
  unreleased: UnreleasedChanges;
  dependenciesToBump: Map<string, string>;
}

interface PackageWithoutUnreleasedChanges extends PackageWithMetadata {
  newVersion?: undefined;
  unreleased?: undefined;
}

export async function planReleases(
  packages: Package[],
): Promise<PackageWithUnreleasedChanges[]> {
  const packagesWithMetadata = await Promise.all(packages.map(readMetadata));

  const newVersions = new Map(
    packagesWithMetadata.map(({ name, newVersion }) => [name, newVersion]),
  );

  const packagesToRelease: PackageWithUnreleasedChanges[] = [];

  for (const pkg of packagesWithMetadata) {
    if (pkg.newVersion) {
      packagesToRelease.push(pkg);
    }

    for (const dependency of Object.keys({
      ...pkg.manifest.peerDependencies,
      ...pkg.manifest.dependencies,
    })) {
      const newVersion = newVersions.get(dependency);
      if (newVersion) {
        if (!pkg.newVersion) {
          throw new Error(
            `"${pkg.name}" has an updated dependency ("${dependency}"), but has not been marked as having unreleased changes`,
          );
        }

        pkg.dependenciesToBump.set(dependency, newVersion);
      }
    }
  }

  return packagesToRelease;
}

async function readMetadata(
  pkg: Package,
): Promise<PackageWithoutUnreleasedChanges | PackageWithUnreleasedChanges> {
  const [manifest, changelog] = await Promise.all([
    readPackageJson(pkg),
    readChangelog(pkg),
  ]);

  const withMetadata = { ...pkg, manifest, changelog };

  if (changelog.unreleased) {
    return {
      ...withMetadata,
      newVersion: bumpVersion(pkg, changelog.unreleased.type),
      unreleased: changelog.unreleased,
      dependenciesToBump: new Map(),
    };
  }

  return withMetadata;
}

function bumpVersion({ name, version }: Package, type: ReleaseType): string {
  const bumped = semverBump(version, type);
  if (!bumped) {
    throw new Error(`${name}: failed to ${type} bump "${version}"`);
  }

  return bumped;
}

export async function prepareReleases(
  packages: PackageWithUnreleasedChanges[],
  pullRequest: number,
): Promise<void> {
  const date = formatISO(new Date(), { representation: "date" });

  await Promise.all(
    packages.map(async (pkg) => {
      await prepareRelease(pkg, date, pullRequest);
    }),
  );
}

async function prepareRelease(
  pkg: PackageWithUnreleasedChanges,
  date: string,
  pullRequest: number,
): Promise<void> {
  pkg.manifest.version = pkg.newVersion;

  for (const [dependency, newVersion] of pkg.dependenciesToBump) {
    setDependencyVersion(pkg.manifest.peerDependencies, dependency, newVersion);
    setDependencyVersion(pkg.manifest.dependencies, dependency, newVersion);

    if (pkg.changelog.releases?.length) {
      (pkg.unreleased.bumped ??= {})[dependency] = {
        to: newVersion,
        pull: pullRequest,
      };

      (pkg.changelog.references ??= {})[dependency] =
        `../${dependency.replace("@cerbos/", "")}/README.md`;
    }
  }

  const { type, ...entries } = pkg.unreleased;

  (pkg.changelog.releases ??= []).unshift({
    version: pkg.newVersion,
    date,
    ...entries,
  });

  pkg.changelog.unreleased = undefined;

  await Promise.all([
    writePackageJson(pkg, pkg.manifest),
    writeChangelog(pkg, pkg.changelog),
  ]);
}

function setDependencyVersion(
  dependencies: Record<string, string> | undefined,
  dependency: string,
  newVersion: string,
): void {
  if (dependencies?.[dependency]) {
    dependencies[dependency] = `^${newVersion}`;
  }
}
