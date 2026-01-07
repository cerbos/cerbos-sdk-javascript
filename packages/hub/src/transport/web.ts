import type { Interceptor, Transport } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

export function createTransport(
  baseUrl: string,
  interceptors: Interceptor[],
): Transport {
  return createConnectTransport({
    baseUrl,
    interceptors,
    useBinaryFormat: true,
    useHttpGet: true,
  });
}
