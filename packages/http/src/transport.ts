import type { ReadableStream } from "stream/web";

import type {
  DescMessage,
  DescMethod,
  DescMethodServerStreaming,
  DescMethodUnary,
  JsonValue,
  Message,
  MessageShape,
  MessageValidType,
} from "@bufbuild/protobuf";
import { fromJson as bufFromJson } from "@bufbuild/protobuf";
import type { AnyJson } from "@bufbuild/protobuf/wkt";

import type { StatusJson } from "@cerbos/api/google/rpc/status_pb";
import { NotOK, Status } from "@cerbos/core";
import type {
  AbortHandler,
  Transport as CoreTransport,
  ErrorDetails,
} from "@cerbos/core/~internal";
import {
  AbstractErrorResponse,
  cancelBody,
  isObject,
  methodName,
} from "@cerbos/core/~internal";

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
    const json = (await response.json()) as JsonValue;

    if (!response.ok) {
      throw new ErrorResponse(json);
    }

    return fromJson(method.output, json);
  }

  public async *serverStream<I extends DescMessage, O extends DescMessage>(
    method: DescMethodServerStreaming<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
    abortHandler: AbortHandler,
  ): AsyncGenerator<MessageShape<O>, void, undefined> {
    const response = await this.fetch(method, request, headers, abortHandler);

    if (!response.body) {
      throw new Error("Missing response body");
    }

    try {
      for await (const line of eachLine(
        response.body as ReadableStream<Uint8Array>,
      )) {
        const message = JSON.parse(line) as JsonValue;

        if (!isObject(message)) {
          throw new Error(`Unexpected message: wanted object, got ${line}`);
        }

        const { result, error } = message;

        if (error) {
          throw new ErrorResponse(error);
        }

        if (!result) {
          throw new Error(`Missing result in ${line}`);
        }

        yield fromJson(method.output, result);
      }
    } finally {
      cancelBody(response);
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

    return await fetch(url, rest);
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

class ErrorResponse extends AbstractErrorResponse<JsonValue> {
  private readonly jsonDetails: JsonValue[] | undefined;

  public constructor(json: JsonValue) {
    if (!isStatus(json)) {
      throw new Error(`Invalid error response: ${JSON.stringify(json)}`);
    }

    super(json.code, json.message);
    this.jsonDetails = json.details;
  }

  protected override *details(): Generator<
    ErrorDetails<JsonValue>,
    void,
    undefined
  > {
    if (!this.jsonDetails) {
      return;
    }

    for (const details of this.jsonDetails) {
      if (isAny(details)) {
        const { "@type": typeUrl, ...value } = details;
        yield { typeUrl, value };
      }
    }
  }

  protected override readonly parseDetails = fromJson;
}

type StatusObject = Required<Pick<StatusJson, "code" | "message">> & {
  details?: JsonValue[];
};

function isStatus(json: JsonValue): json is StatusObject {
  return (
    isObject(json) &&
    typeof json["code"] === "number" &&
    typeof json["message"] === "string" &&
    (json["details"] === undefined || Array.isArray(json["details"]))
  );
}

function isAny(json: JsonValue): json is Required<AnyJson> {
  return isObject(json) && typeof json["@type"] === "string";
}

function fromJson<T extends DescMessage>(
  schema: T,
  json: JsonValue,
): MessageShape<T> {
  return bufFromJson(schema, json, { ignoreUnknownFields: true });
}
