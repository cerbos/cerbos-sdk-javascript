import type {
  DescMessage,
  DescMethod,
  DescMethodServerStreaming,
  DescMethodUnary,
  MessageShape,
  MessageValidType,
} from "@bufbuild/protobuf";
import { fromBinary as bufFromBinary, toBinary } from "@bufbuild/protobuf";
import type { Client, StatusObject } from "@grpc/grpc-js";
import { Metadata } from "@grpc/grpc-js";

import { StatusSchema } from "@cerbos/api/google/rpc/status_pb";
import type {
  AbortHandler,
  Transport as CoreTransport,
  ErrorDetails,
} from "@cerbos/core/~internal";
import {
  AbstractErrorResponse,
  isObject,
  methodName,
} from "@cerbos/core/~internal";

export class Transport implements CoreTransport {
  public constructor(private readonly client: Client) {}

  public async unary<I extends DescMessage, O extends DescMessage>(
    method: DescMethodUnary<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
    abortHandler: AbortHandler,
  ): Promise<MessageShape<O>> {
    return await new Promise((resolve, reject) => {
      abortHandler.throwIfAborted();

      const call = this.client.makeUnaryRequest(
        path(method),
        serialize(method.input),
        deserialize(method.output),
        request,
        metadata(headers),
        (error, response) => {
          if (error) {
            reject(new ErrorResponse(error));
          } else if (!response) {
            reject(new Error("No response received"));
          } else {
            resolve(response);
          }
        },
      );

      abortHandler.onAbort((error) => {
        reject(error);
        call.cancel();
      });
    });
  }

  public async *serverStream<I extends DescMessage, O extends DescMessage>(
    method: DescMethodServerStreaming<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
    abortHandler: AbortHandler,
  ): AsyncGenerator<MessageShape<O>, void, undefined> {
    abortHandler.throwIfAborted();

    try {
      const stream = this.client.makeServerStreamRequest(
        path(method),
        serialize(method.input),
        deserialize(method.output),
        request,
        metadata(headers),
      );

      abortHandler.onAbort(() => {
        stream.cancel();
      });

      for await (const response of stream) {
        yield response;
      }
    } catch (error) {
      if (isStatus(error)) {
        throw new ErrorResponse(error);
      }

      throw error;
    }
  }
}

class ErrorResponse extends AbstractErrorResponse<Uint8Array> {
  private readonly metadata: Metadata;

  public constructor({ code, details, metadata }: StatusObject) {
    super(code, details);
    this.metadata = metadata;
  }

  protected override *details(): Generator<
    ErrorDetails<Uint8Array>,
    void,
    undefined
  > {
    const [encoded] = this.metadata.get("grpc-status-details-bin");
    if (!(encoded instanceof Uint8Array)) {
      return;
    }

    const { details } = fromBinary(StatusSchema, encoded);

    yield* details;
  }

  protected override readonly parseDetails = fromBinary;
}

function isStatus(error: unknown): error is StatusObject {
  return (
    isObject(error) &&
    typeof error["code"] === "number" &&
    typeof error["details"] === "string" &&
    error["metadata"] instanceof Metadata
  );
}

function metadata(headers: Headers): Metadata {
  const metadata = new Metadata();
  for (const [name, value] of headers) {
    metadata.set(name, value);
  }

  return metadata;
}

function path(method: DescMethod): string {
  return `/${methodName(method)}`;
}

function serialize<I extends DescMessage>(
  schema: I,
): (request: MessageValidType<I>) => Buffer {
  return (request) =>
    Buffer.from(toBinary(schema, request as MessageShape<I>).buffer);
}

function deserialize<O extends DescMessage>(
  schema: O,
): (output: Buffer) => MessageShape<O> {
  return (output) => fromBinary(schema, output);
}

function fromBinary<T extends DescMessage>(
  schema: T,
  bytes: Uint8Array,
): MessageShape<T> {
  return bufFromBinary(schema, bytes, { readUnknownFields: false });
}
