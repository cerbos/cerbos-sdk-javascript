import type {
  MessageInitShape as BufMessageInitShape,
  DescMessage,
  DescMethod,
  DescMethodUnary,
  DescService,
  MessageValidType,
} from "@bufbuild/protobuf";
import type { CallOptions, Interceptor, Transport } from "@connectrpc/connect";
import { makeAnyClient } from "@connectrpc/connect";
import {
  compressionGzip,
  createConnectTransport,
} from "@connectrpc/connect-node";

import type { Options, RequestOptions } from "@cerbos/core";

import type { Credentials } from "./credentials";
import { createNotOK } from "./errors/internal";
import { createAuthInterceptor } from "./interceptors/auth";
import { errorInterceptor } from "./interceptors/error";
import { createHeadersInterceptor } from "./interceptors/headers";
import { validationInterceptor } from "./interceptors/validation";
import type { MessageInitShape } from "./protobuf";

/**
 * Options for connecting to Cerbos Hub.
 *
 * @public
 */
export interface ClientOptions extends Pick<Options, "headers" | "userAgent"> {
  /**
   * Client credentials to authenticate with Cerbos Hub.
   */
  credentials: Credentials;

  /**
   * Base URL of the Cerbos Hub server.
   *
   * @defaultValue `"https://api.cerbos.cloud"`
   */
  baseUrl?: string | undefined;
}

// Adapted from https://github.com/connectrpc/connect-es/blob/v2.0.2/packages/connect/src/promise-client.ts#L39-L46
export type Client<Desc extends DescService> = {
  [P in keyof Desc["method"]]: Method<Desc["method"][P]>;
};

type Method<M extends DescMethod> =
  M extends DescMethodUnary<infer I, infer O> ? MethodUnary<I, O> : never;

type MethodUnary<I extends DescMessage, O extends DescMessage> = (
  request: MessageInitShape<I>,
  options: CallOptions,
) => Promise<MessageValidType<O>>;

export function createClient<T extends DescService>(
  service: T,
  {
    baseUrl = "https://api.cerbos.cloud",
    credentials,
    headers,
    userAgent,
  }: Partial<ClientOptions> = {},
): Client<T> {
  const interceptors: Interceptor[] = [
    validationInterceptor,
    createHeadersInterceptor({ headers, userAgent }),
    errorInterceptor,
  ];

  if (credentials) {
    interceptors.push(createAuthInterceptor(credentials));
  }

  const transport = createConnectTransport({
    baseUrl,
    httpVersion: "2",
    interceptors,
    sendCompression: compressionGzip,
    useBinaryFormat: true,
    useHttpGet: true,
  });

  return makeAnyClient(service, (method) => {
    switch (method.methodKind) {
      case "unary":
        return createUnaryMethod(transport, method);

      default:
        return null;
    }
  }) as Client<T>;
}

// Adapted from https://github.com/connectrpc/connect-es/blob/v2.0.2/packages/connect/src/promise-client.ts#L80-L97
function createUnaryMethod<I extends DescMessage, O extends DescMessage>(
  transport: Transport,
  method: DescMethodUnary<I, O>,
): MethodUnary<I, O> {
  return async (input, options) => {
    try {
      const response = await transport.unary(
        method,
        options.signal,
        options.timeoutMs,
        options.headers,
        input as unknown as BufMessageInitShape<I>,
        options.contextValues,
      );

      options.onHeader?.(response.header);
      options.onTrailer?.(response.trailer);

      return response.message as MessageValidType<O>;
    } catch (error) {
      throw createNotOK(error);
    }
  };
}

export function callOptions({
  headers,
  signal,
}: RequestOptions = {}): CallOptions {
  const options: CallOptions = {};

  if (headers) {
    options.headers = headers;
  }

  if (signal) {
    options.signal = signal;
  }

  return options;
}
