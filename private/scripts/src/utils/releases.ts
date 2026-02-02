import { formatISO } from "date-fns";
import { inc as semverBump, satisfies as semverSatisfies } from "semver";

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
  incompatible: boolean;
  unreleased: UnreleasedChanges;
  dependenciesToBump: Map<string, string>;
}

interface PackageWithoutUnreleasedChanges extends PackageWithMetadata {
  newVersion?: undefined;
  incompatible?: undefined;
  unreleased?: undefined;
}

interface ReleasePlan {
  packagesToReleaseNow: PackageWithUnreleasedChanges[];
  packagesToReleaseLater: PackageWithUnreleasedChanges[];
}

export async function planReleases(packages: Package[]): Promise<ReleasePlan> {
  const packagesWithMetadata = new Map(
    await Promise.all(packages.map(readMetadata)),
  );

  const api = packagesWithMetadata.get("@cerbos/api");
  const apiOnly = api?.incompatible;

  const plan: ReleasePlan = {
    packagesToReleaseNow: [],
    packagesToReleaseLater: [],
  };

  for (const [, pkg] of packagesWithMetadata) {
    if (pkg.newVersion) {
      if (pkg === api || !apiOnly) {
        plan.packagesToReleaseNow.push(pkg);
      } else {
        plan.packagesToReleaseLater.push(pkg);
      }
    }

    for (const dependencyName of Object.keys({
      ...pkg.manifest.peerDependencies,
      ...pkg.manifest.dependencies,
    })) {
      const dependency = packagesWithMetadata.get(dependencyName);
      const newVersion = dependency?.newVersion;
      if (newVersion) {
        if (!pkg.newVersion) {
          throw new Error(
            `"${pkg.name}" has an updated dependency ("${dependencyName}"), but has not been marked as having unreleased changes`,
          );
        }

        if (dependency === api || !apiOnly) {
          pkg.dependenciesToBump.set(dependencyName, newVersion);
        }
      }
    }
  }

  return plan;
}

async function readMetadata(
  pkg: Package,
): Promise<
  [string, PackageWithoutUnreleasedChanges | PackageWithUnreleasedChanges]
> {
  const [manifest, changelog] = await Promise.all([
    readPackageJson(pkg),
    readChangelog(pkg),
  ]);

  const withMetadata = { ...pkg, manifest, changelog };

  if (changelog.unreleased) {
    return [
      pkg.name,
      {
        ...withMetadata,
        ...bumpVersion(pkg, changelog.unreleased.type),
        unreleased: changelog.unreleased,
        dependenciesToBump: new Map(),
      },
    ];
  }

  return [pkg.name, withMetadata];
}

function bumpVersion(
  { name, version }: Package,
  type: ReleaseType,
): Pick<PackageWithUnreleasedChanges, "newVersion" | "incompatible"> {
  const newVersion = semverBump(version, type);
  if (!newVersion) {
    throw new Error(`${name}: failed to ${type} bump "${version}"`);
  }

  return {
    newVersion,
    incompatible: !semverSatisfies(newVersion, `^${version}`),
  };
}

export async function prepareReleases(
  { packagesToReleaseNow, packagesToReleaseLater }: ReleasePlan,
  pullRequest: number,
): Promise<void> {
  const date = formatISO(new Date(), { representation: "date" });

  await Promise.all([
    ...packagesToReleaseNow.map(async (pkg) => {
      await prepareRelease(pkg, date, pullRequest, true);
    }),
    ...packagesToReleaseLater.map(async (pkg) => {
      await prepareRelease(pkg, date, pullRequest, false);
    }),
  ]);
}

async function prepareRelease(
  pkg: PackageWithUnreleasedChanges,
  date: string,
  pullRequest: number,
  now: boolean,
): Promise<void> {
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

  if (now) {
    pkg.manifest.version = pkg.newVersion;

    const { type, ...entries } = pkg.unreleased;

    (pkg.changelog.releases ??= []).unshift({
      version: pkg.newVersion,
      date,
      ...entries,
    });

    pkg.changelog.unreleased = undefined;
  }

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
