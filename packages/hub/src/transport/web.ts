import type { Interceptor, Transport } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

export function createTransport(
  baseUrl: string,
  interceptors: Interceptor[],
): Transport {
  return createConnectTransport({
    baseUrl,
    fetch,
    interceptors,
    useBinaryFormat: true,
    useHttpGet: true,
  });
}

// Workaround for lack of support for `redirect: "error"` in edge workers.
async function fetch(
  input: string | URL | Request,
  init?: RequestInit,
): Promise<Response> {
  if (init?.redirect !== "error") {
    return await globalThis.fetch(input, init);
  }

  const response = await globalThis.fetch(input, {
    ...init,
    redirect: "manual",
  });

  if (response.status >= 300 && response.status < 400) {
    throw new TypeError("Failed to fetch", {
      cause: new Error("Unexpected redirect"),
    });
  }

  return response;
}
