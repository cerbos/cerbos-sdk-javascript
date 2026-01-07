import type { Histogram, MeterProvider } from "@opentelemetry/api";

import { name, version } from "./metadata.js";

export class Instruments {
  public readonly duration: Histogram;

  public constructor(meterProvider: MeterProvider) {
    const meter = meterProvider.getMeter(name, version);
    this.duration = meter.createHistogram("rpc.client.duration", {
      unit: "ms",
    });
  }
}
