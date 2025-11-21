import type {
  DiagLogger,
  MeterProvider,
  Tracer,
  TracerProvider,
} from "@opentelemetry/api";
import { diag, metrics, trace } from "@opentelemetry/api";
import type {
  Instrumentation,
  InstrumentationConfig,
} from "@opentelemetry/instrumentation";

import type { _Instrumenter, _Transport } from "@cerbos/core";
import { _addInstrumenter, _removeInstrumenter } from "@cerbos/core";

import { Instruments } from "./instruments";
import { name, version } from "./metadata";
import { Transport } from "./transport";

/**
 * Configuration for OpenTelemetry instrumentation of Cerbos clients.
 *
 * @remarks
 * See {@link https://open-telemetry.github.io/opentelemetry-js/interfaces/_opentelemetry_instrumentation.InstrumentationConfig.html | `InstrumentationConfig` documentation from OpenTelemetry}.
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

  /** @internal */
  public _tracer: Tracer;

  private readonly diag: DiagLogger;
  private readonly instrumenter: _Instrumenter;
  private config: CerbosInstrumentationConfig;
  private instruments: Instruments | undefined;

  public constructor(config: CerbosInstrumentationConfig = {}) {
    this.diag = diag.createComponentLogger({
      namespace: name,
    });

    this.config = { enabled: true, ...config };
    this._tracer = trace.getTracer(name, version);

    this.instrumenter = (transport): _Transport =>
      new Transport(this, transport);

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
    this.instruments = new Instruments(meterProvider);
  }

  /**
   * Override the tracer provider, which otherwise defaults to the global tracer provider.
   */
  public setTracerProvider(tracerProvider: TracerProvider): void {
    this._tracer = tracerProvider.getTracer(name, version);
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

  /** @internal */
  public get _instruments(): Instruments {
    return (this.instruments ??= new Instruments(metrics));
  }
}
