import type {
  DescMessage,
  DescMethod,
  DescMethodServerStreaming,
  DescMethodUnary,
  MessageShape,
  MessageValidType,
} from "@bufbuild/protobuf";
import type { Attributes, SpanStatus, Tracer } from "@opentelemetry/api";
import {
  SpanKind,
  SpanStatusCode,
  context,
  propagation,
  trace,
} from "@opentelemetry/api";
import {
  ATTR_RPC_METHOD,
  ATTR_RPC_RESPONSE_STATUS_CODE,
  ATTR_RPC_SYSTEM_NAME,
} from "@opentelemetry/semantic-conventions/incubating";

import { NotOK, Status } from "@cerbos/core";
import type {
  AbortHandler,
  Transport as CoreTransport,
} from "@cerbos/core/~internal";
import { AbstractErrorResponse, methodName } from "@cerbos/core/~internal";

import type { CerbosInstrumentation } from "./instrumentation.js";
import type { Instruments } from "./instruments.js";

export class Transport implements CoreTransport {
  private readonly transport: {
    [MethodKind in keyof CoreTransport]: CoreTransport[MethodKind];
  };

  public constructor(
    private readonly instrumentation: CerbosInstrumentation,
    transport: CoreTransport,
  ) {
    this.transport = {
      unary: transport.unary.bind(transport),
      serverStream: transport.serverStream.bind(transport),
    };
  }

  public async unary<I extends DescMessage, O extends DescMessage>(
    method: DescMethodUnary<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
    abortHandler: AbortHandler,
  ): Promise<MessageShape<O>> {
    const { call, succeeded, failed } = this.instrument(
      this.transport.unary,
      method,
      headers,
    );

    try {
      const output = await call(method, request, headers, abortHandler);
      succeeded();
      return output;
    } catch (error) {
      failed(error);
      throw error;
    }
  }

  public async *serverStream<I extends DescMessage, O extends DescMessage>(
    method: DescMethodServerStreaming<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
    abortHandler: AbortHandler,
  ): AsyncGenerator<MessageShape<O>, void, undefined> {
    const { call, succeeded, failed } = this.instrument(
      this.transport.serverStream,
      method,
      headers,
    );

    let done = false;

    try {
      yield* call(method, request, headers, abortHandler);
      done = true;
      succeeded();
    } catch (error) {
      done = true;
      failed(error);
      throw error;
    } finally {
      if (!done) {
        failed(abortHandler.error());
      }
    }
  }

  private instrument<F>(
    fn: F,
    method: DescMethod,
    headers: Headers,
  ): {
    call: F;
    succeeded: () => void;
    failed: (error: unknown) => void;
  } {
    const startTime = performance.now();

    const status: SpanStatus = { code: SpanStatusCode.UNSET };

    const attributes: Attributes = {
      [ATTR_RPC_SYSTEM_NAME]: "grpc",
      [ATTR_RPC_METHOD]: `${method.parent.typeName}/${method.name}`,
    };

    const span = this.tracer.startSpan(methodName(method), {
      kind: SpanKind.CLIENT,
      startTime,
    });

    const activeContext = trace.setSpan(context.active(), span);
    propagation.inject(activeContext, headers, {
      set(carrier, key, value) {
        carrier.set(key, value);
      },
    });

    const finish = (): void => {
      const endTime = performance.now();
      span.setStatus(status);
      span.setAttributes(attributes);
      span.end(endTime);
      this.instruments.duration.record(endTime - startTime, attributes);
    };

    return {
      call: context.bind(activeContext, fn),
      succeeded: (): void => {
        attributes[ATTR_RPC_RESPONSE_STATUS_CODE] = Status[Status.OK];
        finish();
      },
      failed: (error: unknown): void => {
        status.code = SpanStatusCode.ERROR;

        if (error instanceof Error) {
          status.message = error.message;
          attributes["cerbos.error"] = error.message;

          if (
            error instanceof AbstractErrorResponse ||
            error instanceof NotOK
          ) {
            attributes[ATTR_RPC_RESPONSE_STATUS_CODE] = Status[error.code];
          }
        }

        finish();
      },
    };
  }

  private get instruments(): Instruments {
    return this.instrumentation["~instruments"];
  }

  private get tracer(): Tracer {
    return this.instrumentation["~tracer"];
  }
}
