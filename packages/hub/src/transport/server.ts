import type { Interceptor, Transport } from "@connectrpc/connect";
import {
  compressionGzip,
  createConnectTransport,
} from "@connectrpc/connect-node";

export function createTransport(
  baseUrl: string,
  interceptors: Interceptor[],
): Transport {
  return createConnectTransport({
    baseUrl,
    httpVersion: "2",
    interceptors,
    sendCompression: compressionGzip,
    useBinaryFormat: true,
    useHttpGet: true,
  });
}
