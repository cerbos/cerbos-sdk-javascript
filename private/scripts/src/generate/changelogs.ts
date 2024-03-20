import { readChangelog, writeChangelog } from "../utils/changelogs.js";
import type { Package } from "../utils/packages.js";
import { listPackages } from "../utils/packages.js";

async function generateChangelog(pkg: Package): Promise<void> {
  await writeChangelog(pkg, await readChangelog(pkg));
}

await Promise.all((await listPackages()).map(generateChangelog));
