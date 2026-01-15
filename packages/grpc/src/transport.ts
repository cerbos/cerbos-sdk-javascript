import type {
  DescMessage,
  DescMethod,
  DescMethodServerStreaming,
  DescMethodUnary,
  MessageShape,
  MessageValidType,
} from "@bufbuild/protobuf";
import { fromBinary, toBinary } from "@bufbuild/protobuf";
import type { Client } from "@grpc/grpc-js";
import { Metadata } from "@grpc/grpc-js";

import { NotOK, Status } from "@cerbos/core";
import type {
  AbortHandler,
  Transport as CoreTransport,
} from "@cerbos/core/~internal";
import { isObject, methodName } from "@cerbos/core/~internal";

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
            reject(
              new NotOK(
                (error.code || Status.UNKNOWN) as NotOK["code"],
                error.details,
              ),
            );
          } else if (!response) {
            reject(new NotOK(Status.UNKNOWN, "No response received"));
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
      abortHandler.throwIfAborted();

      if (isObject(error)) {
        const { code, details } = error;
        if (typeof code === "number" && typeof details === "string") {
          throw new NotOK(code in Status ? code : Status.UNKNOWN, details);
        }
      }

      throw new NotOK(
        Status.UNKNOWN,
        error instanceof Error
          ? `Error reading stream: ${error.message}`
          : "Error reading stream",
        { cause: error },
      );
    }
  }
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
  return (output) => fromBinary(schema, output, { readUnknownFields: false });
}
