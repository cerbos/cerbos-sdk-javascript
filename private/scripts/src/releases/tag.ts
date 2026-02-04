import { createInterface } from "readline/promises";

import { git, repositoryUrl } from "../utils/git.js";
import { abort } from "../utils/logging.js";
import { listPackages } from "../utils/packages.js";

const remote = "upstream";
const branch = "main";

const packages = await listPackages();

const refs = await git("ls-remote", "--refs", "--tags", remote);

const existingTags = new Set(
  Array.from(refs.matchAll(/(?<=refs\/tags\/)[^\n]+/g), ([match]) => match),
);

const tagsToCreate = packages
  .map(({ name, version }) => `${name}@${version}`)
  .filter((tag) => !existingTags.has(tag));

if (tagsToCreate.length === 0) {
  abort("All of the current package versions are already tagged");
}

await git("fetch", "--quiet", remote, branch);

const [commitHash, commitSubject] = (
  await git("show", "--format=%H\t%s", "--no-patch", `${remote}/${branch}`)
).split("\t", 2);

if (!commitHash || !commitSubject) {
  abort(`Failed to describe the latest commit on ${branch}`);
}

console.log(
  `\x1b[36mTagging the latest commit on ${branch}\x1b[0m

    ${commitSubject}

    ${repositoryUrl}/commit/${commitHash}

\x1b[36mCreating tags\x1b[0m

${tagsToCreate.map((tag) => `    ${tag}`).join("\n")}
`,
);

const prompt = createInterface(process.stdin, process.stdout);

try {
  const answer = await prompt.question(
    "\x1b[36mProceed?\x1b[0m \x1b[90m(y/N)\x1b[0m ",
  );

  if (!["y", "yes"].includes(answer.toLowerCase())) {
    abort("Cancelled");
  }
} finally {
  prompt.close();
}

for (const tag of tagsToCreate) {
  await git("tag", `--message=${tag}`, "--sign", tag, commitHash);
}

// Note: An event will not be created when you push more than three tags at once.
// https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#push
for (let i = 0; i < tagsToCreate.length; i += 3) {
  await git(
    "push",
    "--quiet",
    "--atomic",
    remote,
    ...tagsToCreate.slice(i, i + 3),
  );
}
