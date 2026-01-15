import type { ReadableStream } from "stream/web";

import type {
  DescMessage,
  DescMethod,
  DescMethodServerStreaming,
  DescMethodUnary,
  Message,
  MessageShape,
  MessageValidType,
} from "@bufbuild/protobuf";
import { fromJson } from "@bufbuild/protobuf";

import type { Value } from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";
import type {
  AbortHandler,
  Transport as CoreTransport,
} from "@cerbos/core/~internal";
import { isObject, methodName } from "@cerbos/core/~internal";

import type { RequestInitWithUrl } from "./endpoints.js";
import { endpoints } from "./endpoints.js";

export class Transport implements CoreTransport {
  public constructor(
    private readonly baseUrl: string,
    private readonly userAgent: string,
  ) {}

  public async unary<I extends DescMessage, O extends DescMessage>(
    method: DescMethodUnary<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
    abortHandler: AbortHandler,
  ): Promise<MessageShape<O>> {
    const response = await this.fetch(method, request, headers, abortHandler);

    if (!response.ok) {
      throw NotOK.fromJSON(await response.text());
    }

    return fromJson(method.output, (await response.json()) as Value, {
      ignoreUnknownFields: true,
    });
  }

  public async *serverStream<I extends DescMessage, O extends DescMessage>(
    method: DescMethodServerStreaming<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
    abortHandler: AbortHandler,
  ): AsyncGenerator<MessageShape<O>, void, undefined> {
    const response = await this.fetch(method, request, headers, abortHandler);

    try {
      if (!response.body) {
        throw new Error("Missing response body");
      }

      for await (const line of eachLine(
        response.body as ReadableStream<Uint8Array>,
      )) {
        const message = JSON.parse(line) as Value;

        if (!isObject(message)) {
          throw new Error(`Unexpected message: wanted object, got ${line}`);
        }

        const { result, error } = message;

        if (error) {
          throw NotOK.fromJSON(JSON.stringify(error));
        }

        if (!result) {
          throw new Error(`Missing result in ${line}`);
        }

        yield fromJson(method.output, result, { ignoreUnknownFields: true });
      }
    } catch (error) {
      response.body?.cancel().catch(() => {
        // ignore failure to cancel
      });

      abortHandler.throwIfAborted();

      if (error instanceof NotOK) {
        throw error;
      }

      throw new NotOK(
        Status.INTERNAL,
        error instanceof Error
          ? `Invalid stream: ${error.message}`
          : "Invalid stream",
        { cause: error },
      );
    }
  }

  private async fetch(
    method: DescMethod,
    request: Message,
    headers: Headers,
    abortHandler: AbortHandler,
  ): Promise<Response> {
    const endpoint = endpoints.get(methodName(method));

    if (!endpoint) {
      throw new NotOK(Status.UNIMPLEMENTED, "Unimplemented");
    }

    headers.set("User-Agent", this.userAgent);

    const init: RequestInitWithUrl = {
      url: this.baseUrl + endpoint.path,
      method: endpoint.method,
      headers,
    };

    if (abortHandler.signal) {
      init.signal = abortHandler.signal;
    }

    const { url, ...rest } = endpoint.serialize(request, init);

    try {
      return await fetch(url, rest);
    } catch (error) {
      abortHandler.throwIfAborted();

      throw new NotOK(
        Status.UNKNOWN,
        error instanceof Error
          ? `Request failed: ${error.message}`
          : "Request failed",
        { cause: error },
      );
    }
  }
}

export async function* eachLine(
  stream: ReadableStream<Uint8Array>,
): AsyncGenerator<string, void, undefined> {
  const utf8Decoder = new TextDecoder("utf-8", { fatal: true });

  let buffer = "";
  let start = 0;

  for await (const chunk of stream) {
    buffer += utf8Decoder.decode(chunk, { stream: true });

    let end: number;
    while ((end = buffer.indexOf("\n", start)) >= 0) {
      yield buffer.slice(start, end);
      start = end + 1;
    }

    buffer = buffer.slice(start);
    start = 0;
  }

  if (buffer.length > 0) {
    yield buffer;
  }
}
