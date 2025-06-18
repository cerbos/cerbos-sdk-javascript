import type {
  DescMessage,
  DescMethod,
  DescMethodBiDiStreaming,
  DescMethodClientStreaming,
  DescMethodServerStreaming,
  DescMethodUnary,
  DescService,
  MessageShape,
  MessageValidType,
} from "@bufbuild/protobuf";
import { createValidator } from "@bufbuild/protovalidate";
import type {
  CallOptions,
  Interceptor,
  StreamRequest,
  StreamResponse,
  UnaryRequest,
  UnaryResponse,
} from "@connectrpc/connect";
import { createClient as createConnectClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

import type { Options, RequestOptions } from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";

import type { Credentials } from "./credentials";
import { createNotOK } from "./errors";
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
  M extends DescMethodUnary<infer I, infer O>
    ? MethodUnary<I, O>
    : M extends DescMethodServerStreaming<infer I, infer O>
      ? MethodServerStreaming<I, O>
      : M extends DescMethodClientStreaming<infer I, infer O>
        ? MethodClientStreaming<I, O>
        : M extends DescMethodBiDiStreaming<infer I, infer O>
          ? MethodBiDiStreaming<I, O>
          : never;

type MethodUnary<I extends DescMessage, O extends DescMessage> = (
  request: MessageInitShape<I>,
  options: CallOptions,
) => Promise<MessageValidType<O>>;

type MethodServerStreaming<I extends DescMessage, O extends DescMessage> = (
  request: MessageInitShape<I>,
  options: CallOptions,
) => AsyncIterable<MessageValidType<O>>;

type MethodClientStreaming<I extends DescMessage, O extends DescMessage> = (
  request: AsyncIterable<MessageInitShape<I>>,
  options: CallOptions,
) => Promise<MessageValidType<O>>;

type MethodBiDiStreaming<I extends DescMessage, O extends DescMessage> = (
  request: AsyncIterable<MessageInitShape<I>>,
  options: CallOptions,
) => AsyncIterable<MessageValidType<O>>;

export function createClient<T extends DescService>(
  service: T,
  {
    baseUrl = "https://api.cerbos.cloud",
    credentials,
  }: Partial<ClientOptions> = {},
): Client<T> {
  const interceptors: Interceptor[] = [validationInterceptor, errorInterceptor];

  if (credentials) {
    interceptors.push(createAuthInterceptor(credentials));
  }

  const transport = createConnectTransport({
    baseUrl,
    interceptors,
    useBinaryFormat: true,
    useHttpGet: true,
  });

  return createConnectClient(service, transport) as unknown as Client<T>;
}

type Request = UnaryRequest | StreamRequest;
type Response = UnaryResponse | StreamResponse;
type Handler = (request: Request) => Promise<Response>;

function createInterceptor(
  interceptor: (request: Request, next: Handler) => Promise<Response>,
): Interceptor {
  return (next) => async (request) => await interceptor(request, next);
}

function createAuthInterceptor(credentials: Credentials): Interceptor {
  return createInterceptor(async (request, next) => {
    request.header.set(
      "x-cerbos-auth",
      await credentials._issueAccessToken(request.signal),
    );

    return await next(request);
  });
}

const validator = createValidator();

function validateRequest<Desc extends DescMessage>(
  schema: Desc,
  message: MessageShape<Desc>,
): void {
  const { kind, error } = validator.validate(schema, message);
  if (kind === "invalid") {
    throw new NotOK(Status.INVALID_ARGUMENT, "Invalid request", {
      cause: error,
    });
  }
}

async function* validateRequests<Desc extends DescMessage>(
  schema: Desc,
  messages: AsyncIterable<MessageShape<Desc>>,
): AsyncIterable<MessageShape<Desc>> {
  for await (const message of messages) {
    validateRequest(schema, message);
    yield message;
  }
}

const validationInterceptor = createInterceptor(async (request, next) => {
  if (request.stream) {
    request = {
      ...request,
      message: validateRequests(request.method.input, request.message),
    };
  } else {
    validateRequest(request.method.input, request.message);
  }

  return await next(request);
});

const errorInterceptor = createInterceptor(async (request, next) => {
  try {
    return await next(request);
  } catch (error) {
    throw createNotOK(error);
  }
});

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
