import { execa } from "execa";

export const repositoryUrl = "https://github.com/cerbos/cerbos-sdk-javascript";

export async function git(...args: string[]): Promise<string> {
  const { stdout } = await execa("git", args);
  return stdout;
}

export async function gh(...args: string[]): Promise<string> {
  const { stdout } = await execa("gh", [`--repo=${repositoryUrl}`, ...args]);
  return stdout;
}

export function parsePullRequestUrl(url: string): number {
  const prefix = `${repositoryUrl}/pull/`;
  const number = parseInt(url.slice(prefix.length), 10);

  if (url !== `${prefix}${number}`) {
    throw new Error(`Invalid pull request URL: "${url}"`);
  }

  return number;
}
