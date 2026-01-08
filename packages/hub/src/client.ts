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

import type { Options, RequestOptions } from "@cerbos/core";
import { createTransport } from "@cerbos/hub/~internal/transport";

import type { Credentials } from "./credentials.js";
import { createNotOK } from "./errors/internal.js";
import { createAuthInterceptor } from "./interceptors/auth.js";
import { errorInterceptor } from "./interceptors/error.js";
import { createHeadersInterceptor } from "./interceptors/headers.js";
import { validationInterceptor } from "./interceptors/validation.js";
import type { MessageInitShape } from "./protobuf.js";

/**
 * Options for connecting to Cerbos Hub.
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

interface InternalClientOptions extends Partial<ClientOptions> {
  createError?: (error: unknown) => Error;
}

// Adapted from https://github.com/connectrpc/connect-es/blob/v2.0.2/packages/connect/src/promise-client.ts#L39-L46
/** @internal */
export type Client<Desc extends DescService> = {
  [P in keyof Desc["method"]]: Method<Desc["method"][P]>;
};

type Method<M extends DescMethod> =
  M extends DescMethodUnary<infer I, infer O> ? MethodUnary<I, O> : never;

type MethodUnary<I extends DescMessage, O extends DescMessage> = (
  request: MessageInitShape<I>,
  options: CallOptions,
) => Promise<MessageValidType<O>>;

/** @internal */
export function createClient<T extends DescService>(
  service: T,
  {
    credentials,
    createError = createNotOK,
    ...options
  }: InternalClientOptions = {},
): Client<T> {
  const { baseUrl = "https://api.cerbos.cloud", headers, userAgent } = options;

  const interceptors: Interceptor[] = [
    validationInterceptor,
    createHeadersInterceptor({ headers, userAgent }),
    errorInterceptor,
  ];

  if (credentials) {
    interceptors.push(createAuthInterceptor({ ...options, credentials }));
  }

  const transport = createTransport(baseUrl, interceptors);

  return makeAnyClient(service, (method) => {
    switch (method.methodKind) {
      case "unary":
        return createUnaryMethod(transport, method, createError);

      default:
        return null;
    }
  }) as Client<T>;
}

// Adapted from https://github.com/connectrpc/connect-es/blob/v2.0.2/packages/connect/src/promise-client.ts#L80-L97
function createUnaryMethod<I extends DescMessage, O extends DescMessage>(
  transport: Transport,
  method: DescMethodUnary<I, O>,
  createError: (error: unknown) => Error,
): MethodUnary<I, O> {
  return async (request, options) => {
    try {
      const response = await transport.unary(
        method,
        options.signal,
        options.timeoutMs,
        options.headers,
        request as unknown as BufMessageInitShape<I>,
        options.contextValues,
      );

      options.onHeader?.(response.header);
      options.onTrailer?.(response.trailer);

      return response.message as MessageValidType<O>;
    } catch (error) {
      throw createError(error);
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
