import { readChangelog, writeChangelog } from "./utils/changelogs.js";
import type { Package } from "./utils/packages.js";
import { isPublic, listPackages } from "./utils/packages.js";

async function generateChangelog(pkg: Package): Promise<void> {
  if (isPublic(pkg)) {
    await writeChangelog(pkg, await readChangelog(pkg));
  }
}

await Promise.all((await listPackages()).map(generateChangelog));
