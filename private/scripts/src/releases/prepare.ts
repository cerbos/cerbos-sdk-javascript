import { execa } from "execa";

import { gh, git, parsePullRequestUrl } from "../utils/git.js";
import { abort } from "../utils/logging.js";
import { listPackages } from "../utils/packages.js";
import { planReleases, prepareReleases } from "../utils/releases.js";

const plan = await planReleases(await listPackages());
const releases = plan.packagesToReleaseNow.length;

if (releases === 0) {
  abort("Nothing to release");
}

if (await git("status", "--porcelain")) {
  abort("You have uncommitted changes");
}

const releaseOrReleases = `release${releases > 1 ? "s" : ""}`;

const baseRemote = "upstream";
const baseBranch = "main";
const headRemote = "origin";
const headBranch = `prepare-${releaseOrReleases}`;

await git("fetch", "--quiet", baseRemote, baseBranch);

await git(
  "switch",
  "--quiet",
  "--no-track",
  "--force-create",
  headBranch,
  `${baseRemote}/${baseBranch}`,
);

const title = `Prepare ${releaseOrReleases}`;

const body = plan.packagesToReleaseNow
  .map(({ name, newVersion }) => `${name}: ${newVersion}\n`)
  .join("");

await git(
  "commit",
  "--quiet",
  "--allow-empty",
  `--message=${title}\n\n${body}`,
  "--signoff",
);

await git("push", "--quiet", "--set-upstream", headRemote, headBranch);

const pullRequestUrl = await gh(
  "pr",
  "create",
  `--base=${baseBranch}`,
  "--draft",
  `--title=${title}`,
  `--body=${body}`,
);

await prepareReleases(plan, parsePullRequestUrl(pullRequestUrl));

await execa("pnpm", ["install"]);

await git("commit", "--quiet", "--all", "--amend", "--no-edit");

await git("push", "--quiet", "--force-with-lease");

await gh("pr", "ready", pullRequestUrl);

await git("switch", "--quiet", "-");

console.log(pullRequestUrl);
