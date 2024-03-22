import { readChangelog, writeChangelog } from "../utils/changelogs.js";
import type { Package } from "../utils/packages.js";
import { listPackages } from "../utils/packages.js";
import { planReleases } from "../utils/releases.js";

async function generateChangelog(pkg: Package): Promise<void> {
  await writeChangelog(pkg, await readChangelog(pkg));
}

const packages = await listPackages();
await Promise.all(packages.map(generateChangelog));
await planReleases(packages);
