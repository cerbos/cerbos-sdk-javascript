/**
 * OpenTelemetry instrumentation for the {@link @cerbos/grpc# | gRPC} and {@link @cerbos/http# | HTTP} client libraries.
 *
 * @packageDocumentation
 */

import type {
  AdminCredentials,
  _Instrumenter,
  _RPC,
  _Request,
  _Response,
  _Service,
} from "@cerbos/core";
import { NotOK, _addInstrumenter, _removeInstrumenter } from "@cerbos/core";
import type {
  DiagLogger,
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
        adminCredentials?: AdminCredentials,
      ): Promise<_Response<Service, RPC>> => {
        const span = this.tracer
          .startSpan(`cerbos.rpc.${service}.${rpc}`, { kind: SpanKind.CLIENT })
          .setAttributes({
            [SemanticAttributes.RPC_SYSTEM]: "grpc",
            [SemanticAttributes.RPC_SERVICE]: service,
            [SemanticAttributes.RPC_METHOD]: rpc,
          });

        try {
          const response = (await context.with(
            trace.setSpan(context.active(), span),
            transport,
            undefined,
            service,
            rpc,
            request,
            adminCredentials,
          )) as _Response<Service, RPC>;

          span.setAttribute(SemanticAttributes.RPC_GRPC_STATUS_CODE, 0);

          return response;
        } catch (error) {
          const status: SpanStatus = { code: SpanStatusCode.ERROR };

          if (error instanceof Error) {
            status.message = error.message;
            span.setAttribute("cerbos.error", error.message);

            if (error instanceof NotOK) {
              span.setAttribute(
                SemanticAttributes.RPC_GRPC_STATUS_CODE,
                error.code,
              );
            }
          }

          span.setStatus(status);

          throw error;
        } finally {
          span.end();
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
   * No-op to implement the {@link https://open-telemetry.github.io/opentelemetry-js/interfaces/_opentelemetry_instrumentation.Instrumentation.html | Instrumentation} interface.
   */
  public setMeterProvider(_meterProvider: MeterProvider): void {} // eslint-disable-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars

  /**
   * Override the tracer provider, which otherwise defaults to the global trace provider.
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
}
