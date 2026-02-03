import { joinErrorMessage, userAgent } from "@cerbos/core/~internal";

import pkg from "../package.json" with { type: "json" };

const defaultUserAgent = `cerbos-sdk-javascript-embedded-client/${pkg.version}`;

export async function download(
  url: string | URL,
  userAgent: string,
): Promise<Response> {
  try {
    return await fetch(url, { headers: { "User-Agent": userAgent } });
  } catch (error) {
    throw new Error(
      joinErrorMessage(`Failed to download from ${url.toString()}`, error),
      { cause: error },
    );
  }
}

export function createUserAgent(customUserAgent: string | undefined): string {
  return userAgent(customUserAgent, defaultUserAgent);
}
