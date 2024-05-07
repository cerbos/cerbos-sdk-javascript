import type { Attributes, SpanStatus, Tracer } from "@opentelemetry/api";
import {
  SpanKind,
  SpanStatusCode,
  context,
  propagation,
  trace,
} from "@opentelemetry/api";
import {
  SEMATTRS_RPC_GRPC_STATUS_CODE,
  SEMATTRS_RPC_METHOD,
  SEMATTRS_RPC_SERVICE,
  SEMATTRS_RPC_SYSTEM,
} from "@opentelemetry/semantic-conventions";

import type {
  _AbortHandler,
  _Method,
  _MethodKind,
  _Request,
  _Response,
  _Service,
  _Transport,
} from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";

import type { CerbosInstrumentation } from "./instrumentation";
import type { Instruments } from "./instruments";

type TransportMethod<
  Service extends _Service,
  MethodKind extends _MethodKind,
  Method extends _Method<Service, MethodKind>,
> = (
  service: Service,
  method: Method,
  request: _Request<Service, MethodKind, Method>,
  headers: Headers,
  abortHandler: _AbortHandler,
) => TransportReturn<Service, MethodKind, Method>;

type TransportReturn<
  Service extends _Service,
  MethodKind extends _MethodKind,
  Method extends _Method<Service, MethodKind>,
> = MethodKind extends "unary"
  ? Promise<_Response<Service, MethodKind, Method>>
  : MethodKind extends "serverStream"
    ? AsyncGenerator<_Response<Service, MethodKind, Method>, void, undefined>
    : never;

const serviceNames: Record<_Service, string> = {
  admin: "cerbos.svc.v1.CerbosAdminService",
  cerbos: "cerbos.svc.v1.CerbosService",
};

export class Transport implements _Transport {
  private readonly transport: {
    [MethodKind in _MethodKind]: _Transport[MethodKind];
  };

  public constructor(
    private readonly instrumentation: CerbosInstrumentation,
    transport: _Transport,
  ) {
    this.transport = {
      unary: transport.unary.bind(transport),
      serverStream: transport.serverStream.bind(transport),
    };
  }

  public async unary<
    Service extends _Service,
    Method extends _Method<Service, "unary">,
  >(
    service: Service,
    method: Method,
    request: _Request<Service, "unary", Method>,
    headers: Headers,
    abortHandler: _AbortHandler,
  ): Promise<_Response<Service, "unary", Method>> {
    const call = this.call(
      service,
      "unary",
      method,
      request,
      headers,
      abortHandler,
    );

    try {
      const response = await call.result;
      call.succeeded();
      return response;
    } catch (error) {
      call.failed(error);
      throw error;
    }
  }

  public async *serverStream<
    Service extends _Service,
    Method extends _Method<Service, "serverStream">,
  >(
    service: Service,
    method: Method,
    request: _Request<Service, "serverStream", Method>,
    headers: Headers,
    abortHandler: _AbortHandler,
  ): AsyncGenerator<
    _Response<Service, "serverStream", Method>,
    void,
    undefined
  > {
    const call = this.call(
      service,
      "serverStream",
      method,
      request,
      headers,
      abortHandler,
    );

    let done = false;

    try {
      yield* call.result;
      done = true;
      call.succeeded();
    } catch (error) {
      done = true;
      call.failed(error);
      throw error;
    } finally {
      if (!done) {
        call.failed(abortHandler.error());
      }
    }
  }

  private call<
    Service extends _Service,
    MethodKind extends _MethodKind,
    Method extends _Method<Service, MethodKind>,
  >(
    service: Service,
    methodKind: MethodKind,
    method: Method,
    request: _Request<Service, MethodKind, Method>,
    headers: Headers,
    abortHandler: _AbortHandler,
  ): {
    result: TransportReturn<Service, MethodKind, Method>;
    succeeded: () => void;
    failed: (error: unknown) => void;
  } {
    const startTime = performance.now();

    const serviceName = serviceNames[service];
    const methodName = `${method.charAt(0).toUpperCase()}${method.slice(1)}`;

    const status: SpanStatus = { code: SpanStatusCode.UNSET };

    const attributes: Attributes = {
      [SEMATTRS_RPC_SYSTEM]: "grpc",
      [SEMATTRS_RPC_SERVICE]: serviceName,
      [SEMATTRS_RPC_METHOD]: methodName,
    };

    const span = this.tracer.startSpan(`${serviceName}/${methodName}`, {
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

    const call = {
      succeeded: (): void => {
        attributes[SEMATTRS_RPC_GRPC_STATUS_CODE] = Status.OK;
        finish();
      },
      failed: (error: unknown): void => {
        status.code = SpanStatusCode.ERROR;

        if (error instanceof Error) {
          status.message = error.message;
          attributes["cerbos.error"] = error.message;

          if (error instanceof NotOK) {
            attributes[SEMATTRS_RPC_GRPC_STATUS_CODE] = error.code;
          }
        }

        finish();
      },
    };

    const transport = this.transport[methodKind] as TransportMethod<
      Service,
      MethodKind,
      Method
    >;

    try {
      return {
        result: context.with(
          activeContext,
          transport,
          undefined,
          service,
          method,
          request,
          headers,
          abortHandler,
        ),
        ...call,
      };
    } catch (error) {
      call.failed(error);
      throw error;
    }
  }

  private get instruments(): Instruments {
    return this.instrumentation._instruments;
  }

  private get tracer(): Tracer {
    return this.instrumentation._tracer;
  }
}
