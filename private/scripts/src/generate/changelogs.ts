import { readChangelog, writeChangelog } from "../utils/changelogs.js";
import type { Package } from "../utils/packages.js";
import { listPackages } from "../utils/packages.js";
import { planReleases } from "../utils/releases.js";

async function generateChangelog(pkg: Package): Promise<void> {
  try {
    await writeChangelog(pkg, await readChangelog(pkg));
  } catch (error) {
    throw new Error(`Failed to generate changelog for ${pkg.name}`, {
      cause: error,
    });
  }
}

const packages = await listPackages();

for (const result of await Promise.allSettled(
  packages.map(generateChangelog),
)) {
  if (result.status === "rejected") {
    throw result.reason;
  }
}

await planReleases(packages);
