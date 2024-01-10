/**
 * OpenTelemetry instrumentation for the {@link @cerbos/grpc# | gRPC} and {@link @cerbos/http# | HTTP} client libraries.
 *
 * @packageDocumentation
 */

import type {
  _Instrumenter,
  _RPC,
  _Request,
  _Response,
  _Service,
} from "@cerbos/core";
import { NotOK, _addInstrumenter, _removeInstrumenter } from "@cerbos/core";
import type {
  Attributes,
  DiagLogger,
  Histogram,
  MeterProvider,
  SpanStatus,
  Tracer,
  TracerProvider,
} from "@opentelemetry/api";
import {
  SpanKind,
  SpanStatusCode,
  context,
  diag,
  metrics,
  propagation,
  trace,
} from "@opentelemetry/api";
import type {
  Instrumentation,
  InstrumentationConfig,
} from "@opentelemetry/instrumentation";
import { SemanticAttributes } from "@opentelemetry/semantic-conventions";

// eslint-disable-next-line @typescript-eslint/no-var-requires -- Can't import package.json because it is outside of the project's rootDir
const { name, version } = require("../package.json") as {
  name: string;
  version: string;
};

const serviceNames: Record<_Service, string> = {
  admin: "cerbos.svc.v1.CerbosAdminService",
  cerbos: "cerbos.svc.v1.CerbosService",
};

/**
 * Configuration for OpenTelemetry instrumentation of Cerbos clients.
 *
 * @remarks
 * See {@link https://open-telemetry.github.io/opentelemetry-js/interfaces/_opentelemetry_instrumentation.InstrumentationConfig.html | InstrumentationConfig documentation from OpenTelemetry}.
 *
 * @public
 */
export type CerbosInstrumentationConfig = InstrumentationConfig;

/**
 * OpenTelemetry instrumentation for Cerbos clients.
 *
 * @example
 * ```typescript
 * import { CerbosInstrumentation } from "@cerbos/opentelemetry";
 * import { registerInstrumentations } from "@opentelemetry/instrumentation";
 *
 * registerInstrumentations({
 *   instrumentations: [...yourOtherInstrumentations, new CerbosInstrumentation()],
 * });
 * ```
 *
 * @public
 */
export class CerbosInstrumentation implements Instrumentation {
  /**
   * Name of the instrumentation.
   */
  public readonly instrumentationName = name;

  /**
   * Version of the instrumentation.
   */
  public readonly instrumentationVersion = version;

  private readonly diag: DiagLogger;
  private readonly instrumenter: _Instrumenter;
  private config: CerbosInstrumentationConfig;
  private _instruments: Instruments | undefined;
  private tracer: Tracer;

  public constructor(config: CerbosInstrumentationConfig = {}) {
    this.diag = diag.createComponentLogger({
      namespace: name,
    });

    this.config = { enabled: true, ...config };
    this.tracer = trace.getTracer(name, version);

    this.instrumenter =
      (transport) =>
      async <Service extends _Service, RPC extends _RPC<Service>>(
        service: Service,
        rpc: RPC,
        request: _Request<Service, RPC>,
        headers: Headers,
      ): Promise<_Response<Service, RPC>> => {
        const startTime = performance.now();

        const serviceName = serviceNames[service];
        const methodName = rpcMethodName(rpc);
        const attributes: Attributes = {
          [SemanticAttributes.RPC_SYSTEM]: "grpc",
          [SemanticAttributes.RPC_SERVICE]: serviceName,
          [SemanticAttributes.RPC_METHOD]: methodName,
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

        try {
          const response = (await context.with(
            activeContext,
            transport,
            undefined,
            service,
            rpc,
            request,
            headers,
          )) as _Response<Service, RPC>;

          attributes[SemanticAttributes.RPC_GRPC_STATUS_CODE] = 0;

          return response;
        } catch (error) {
          const status: SpanStatus = { code: SpanStatusCode.ERROR };

          if (error instanceof Error) {
            status.message = error.message;
            attributes["cerbos.error"] = error.message;

            if (error instanceof NotOK) {
              attributes[SemanticAttributes.RPC_GRPC_STATUS_CODE] = error.code;
            }
          }

          span.setStatus(status);

          throw error;
        } finally {
          const endTime = performance.now();
          span.setAttributes(attributes);
          span.end(endTime);
          this.instruments.duration.record(endTime - startTime, attributes);
        }
      };

    if (this.config.enabled) {
      this.enable();
    }
  }

  /**
   * Gets the instrumentation configuration.
   */
  public getConfig(): CerbosInstrumentationConfig {
    return this.config;
  }

  /**
   * Sets the instrumentation configuration.
   *
   * @remarks
   * Changing `enabled` via this method has no effect.
   * Use the {@link CerbosInstrumentation.disable} and {@link CerbosInstrumentation.enable} methods instead.
   */
  public setConfig(config: CerbosInstrumentationConfig): void {
    this.config = config;
  }

  /**
   * Override the meter provider, which otherwise defaults to the global meter provider.
   */
  public setMeterProvider(meterProvider: MeterProvider): void {
    this._instruments = new Instruments(meterProvider);
  }

  /**
   * Override the tracer provider, which otherwise defaults to the global tracer provider.
   */
  public setTracerProvider(tracerProvider: TracerProvider): void {
    this.tracer = tracerProvider.getTracer(name, version);
  }

  /**
   * Enables the instrumentation.
   */
  public enable(): void {
    this.diag.debug("Enabling Cerbos client instrumentation");
    _addInstrumenter(this.instrumenter);
  }

  /**
   * Disables the instrumentation.
   */
  public disable(): void {
    this.diag.debug("Disabling Cerbos client instrumentation");
    _removeInstrumenter(this.instrumenter);
  }

  private get instruments(): Instruments {
    if (!this._instruments) {
      this._instruments = new Instruments(metrics);
    }

    return this._instruments;
  }
}

function rpcMethodName(rpc: _RPC<_Service>): string {
  return `${rpc.charAt(0).toUpperCase()}${rpc.slice(1)}`;
}

class Instruments {
  public readonly duration: Histogram;

  public constructor(meterProvider: MeterProvider) {
    const meter = meterProvider.getMeter(name, version);
    this.duration = meter.createHistogram("rpc.client.duration", {
      unit: "ms",
    });
  }
}
