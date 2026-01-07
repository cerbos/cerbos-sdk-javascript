import { userAgent } from "@cerbos/core/~internal";

import pkg from "../package.json" with { type: "json" };

const defaultUserAgent = `cerbos-sdk-javascript-embedded-client/${pkg.version}`;

export async function download(
  url: string | URL,
  userAgent: string,
): Promise<Response> {
  try {
    return await fetch(url, { headers: { "User-Agent": userAgent } });
  } catch (error) {
    const message = `Failed to download from ${url.toString()}`;
    throw new Error(
      error instanceof Error ? `${message}: ${error.message}` : message,
      { cause: error },
    );
  }
}

export function cancelBody(response: Response): void {
  response.body?.cancel().catch(() => {
    // ignore failure to cancel
  });
}

export function createUserAgent(customUserAgent: string | undefined): string {
  return userAgent(customUserAgent, defaultUserAgent);
}
