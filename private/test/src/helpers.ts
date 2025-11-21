import { resolve } from "path";
import { hrtime } from "process";
import { setTimeout } from "timers/promises";

import type { ServiceError } from "@grpc/grpc-js";
import { Metadata } from "@grpc/grpc-js";
import type { Attributes, HrTime } from "@opentelemetry/api";
import { ValueType, context, trace } from "@opentelemetry/api";
import type { Histogram, MetricDescriptor } from "@opentelemetry/sdk-metrics";
import {
  AggregationTemporality,
  DataPointType,
  MetricReader,
} from "@opentelemetry/sdk-metrics";
import type {
  InMemorySpanExporter,
  ReadableSpan,
} from "@opentelemetry/sdk-trace-base";
import { describe, expect } from "vitest";

import type { Client, DecisionLogEntry } from "@cerbos/core";
import { CheckResourcesResult } from "@cerbos/core";
import type { BundleMetadata } from "@cerbos/embedded";

import type { QueryServiceClient } from "./protobuf/jaeger/proto/api_v3/query_service";
import type {
  Span as SpanProto,
  TracesData,
} from "./protobuf/opentelemetry/proto/trace/v1/trace";
import { versionIsAtLeast } from "./servers";

const { version: embeddedV1SdkVersion } =
  require("../../../packages/embedded/package.json") as { version: string };

const { version: embeddedV2SdkVersion } =
  require("../../../packages/embedded-client/package.json") as {
    version: string;
  };

const { version: grpcSdkVersion } =
  require("../../../packages/grpc/package.json") as { version: string };

const { version: httpSdkVersion } =
  require("../../../packages/http/package.json") as { version: string };

const {
  devDependencies: { "@grpc/grpc-js": grpcJsVersion },
} = require("../package.json") as {
  devDependencies: { "@grpc/grpc-js": string };
};

export function buildResultsForResources({
  id,
  policyVersions,
  scopes,
}: {
  id: string;
  policyVersions: string[];
  scopes: string[];
}): CheckResourcesResult[] {
  return ["document", "image"].flatMap((kind) =>
    policyVersions.flatMap((policyVersion) =>
      scopes.map((scope) =>
        buildResult({ resource: { kind, id, policyVersion, scope } }),
      ),
    ),
  );
}

export function buildResult(
  result: Partial<ConstructorParameters<typeof CheckResourcesResult>[0]>,
): CheckResourcesResult {
  return new CheckResourcesResult({
    resource: {
      kind: "document",
      id: "1",
      policyVersion: "default",
      scope: "",
    },
    actions: {},
    validationErrors: [],
    metadata: undefined,
    outputs: [],
    ...result,
  });
}

export function shuffle<T>(values: T[]): T[] {
  return values
    .map((value) => ({ value, order: Math.random() }))
    .sort((a, b) => a.order - b.order)
    .map(({ value }) => value);
}

type Result<T> = { value: T } | { error: unknown };

export async function captureSpan<T>(
  spanExporter: InMemorySpanExporter,
  fn: () => Promise<T>,
): Promise<[Result<T>, ReadableSpan]> {
  const parentSpan = trace
    .getTracer("@cerbos/test")
    .startSpan("cerbos.test.parent");

  const result = await context.with(
    trace.setSpan(context.active(), parentSpan),
    async (): Promise<Result<T>> => {
      try {
        return { value: await fn() };
      } catch (error) {
        return { error };
      } finally {
        parentSpan.end();
      }
    },
  );

  const childSpan = spanExporter
    .getFinishedSpans()
    .find(
      (span) =>
        span.parentSpanContext?.spanId === parentSpan.spanContext().spanId,
    );

  if (!childSpan) {
    throw new Error("No child span created");
  }

  return [result, childSpan];
}

export async function fetchSpans(
  jaeger: QueryServiceClient,
  traceId: string,
): Promise<SpanProto[]> {
  const start = hrtime.bigint();
  do {
    try {
      const spans: SpanProto[] = [];

      const stream = jaeger.getTrace({
        traceId,
        startTime: undefined,
        endTime: undefined,
        rawTraces: false,
      });

      for await (const chunk of stream) {
        const { resourceSpans } = chunk as TracesData;
        for (const resourceSpan of resourceSpans) {
          for (const scopeSpan of resourceSpan.scopeSpans) {
            spans.push(...scopeSpan.spans);
          }
        }
      }

      return spans;
    } catch (error) {
      if (!isTraceNotFound(error)) {
        throw error;
      }

      await setTimeout(100);
    }
  } while (secondsSince(start) < 15);

  throw new Error(`Trace ${traceId} not found`);
}

function isServiceError(error: unknown): error is ServiceError {
  return (
    error instanceof Error &&
    "code" in error &&
    typeof error.code === "number" &&
    "details" in error &&
    typeof error.details === "string" &&
    "metadata" in error &&
    error.metadata instanceof Metadata
  );
}

function isTraceNotFound(error: unknown): error is ServiceError {
  return (
    isServiceError(error) &&
    error.details === "cannot retrieve trace: trace not found"
  );
}

function secondsSince(start: bigint): number {
  return Number(hrtime.bigint() - start) / 1e9;
}

export class TestMetricReader extends MetricReader {
  public constructor() {
    super({
      aggregationTemporalitySelector: () => AggregationTemporality.DELTA,
    });
  }

  protected override async onForceFlush(): Promise<void> {
    await this.collect();
  }

  protected override async onShutdown(): Promise<void> {
    // no-op
  }
}

export async function expectMetrics(
  metricReader: MetricReader,
  attributes: Attributes,
  duration: HrTime,
): Promise<void> {
  const { resourceMetrics } = await metricReader.collect();
  const metric = resourceMetrics.scopeMetrics[0]?.metrics[0];
  expect(metric?.dataPointType).toEqual(DataPointType.HISTOGRAM);
  expect(metric?.descriptor).toMatchObject({
    name: "rpc.client.duration",
    description: "",
    valueType: ValueType.DOUBLE,
    unit: "ms",
  } satisfies MetricDescriptor);

  const dataPoint = metric?.dataPoints[0];
  expect(dataPoint?.attributes).toEqual(attributes);

  const durationMilliseconds = hrTimeToMilliseconds(duration);

  const value = dataPoint?.value as Histogram;
  expect(value.count).toEqual(1);
  expect(value.min).toBeCloseTo(durationMilliseconds, 5);
  expect(value.max).toBeCloseTo(durationMilliseconds, 5);
  expect(value.sum).toBeCloseTo(durationMilliseconds, 5);
}

function hrTimeToMilliseconds([seconds, nanoseconds]: HrTime): number {
  return seconds * 1e3 + nanoseconds * 1e-6;
}

export function invalidArgumentDetails(cerbosVersion: string): any {
  return expect.stringContaining(
    versionIsAtLeast("0.30.0", cerbosVersion)
      ? "validation error"
      : "invalid CheckResourcesRequest",
  );
}

export function describeIfVersionIsAtLeast(
  want: string,
  have: string,
): (typeof describe)["skip"] {
  if (versionIsAtLeast(want, have)) {
    return describe;
  }

  return describe.skip;
}

export const callIdPattern = /^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/;

export const callIdMatcher = expect.stringMatching(callIdPattern);

export function versionDependentCallIdMatcher(cerbosVersion: string): any {
  return expect.stringMatching(
    // cerbosCallId was not available on API responses before 0.33.0
    versionIsAtLeast("0.33.0", cerbosVersion) ? callIdPattern : /^$/,
  );
}

export async function retry<T>(
  { attempts, delay }: { attempts: number; delay: number },
  fn: () => Promise<T>,
): Promise<T> {
  let attempt = 1;
  while (true) {
    try {
      return await fn();
    } catch (error) {
      if (attempt < attempts) {
        attempt++;
        await setTimeout(delay);
      } else {
        throw error;
      }
    }
  }
}

export const embeddedV1UserAgent = `cerbos-sdk-javascript-embedded/${embeddedV1SdkVersion}`;

export const embeddedV2UserAgent = `cerbos-sdk-javascript-embedded-client/${embeddedV2SdkVersion}`;

export const grpcUserAgent = `cerbos-sdk-javascript-grpc/${grpcSdkVersion} grpc-node-js/${grpcJsVersion}`;

export const httpUserAgent = `cerbos-sdk-javascript-http/${httpSdkVersion}`;

export async function getDecisionLogEntry(
  client: Client,
  callId: string,
): Promise<DecisionLogEntry> {
  return await retry({ attempts: 10, delay: 250 }, async () => {
    const entry = await client.getDecisionLogEntry(callId);

    if (!entry) {
      throw new Error(`Decision log entry with call ID ${callId} not found`);
    }

    return entry;
  });
}

export interface EmbeddedBundle {
  path: string;
  etag: string;
  metadata: BundleMetadata;
}

function embeddedBundle(
  etag: string,
  metadata: BundleMetadata,
): EmbeddedBundle {
  return {
    path: resolve(__dirname, `../bundles/${metadata.commit}.wasm`),
    etag,
    metadata,
  };
}

export const oldEmbeddedBundle = embeddedBundle(
  '"9017f17ef4224dc634cf33b25201d463"',
  {
    builtAt: new Date(Date.UTC(2024, 2, 25, 11, 45, 14)),
    commit: "68337848cb3f987627da7381653d82c6d4e368a5",
    policies: [
      "cerbos.resource.document.v1",
      "cerbos.resource.document.v1/test",
    ],
    sourceAttributes: {},
  },
);

export const newEmbeddedBundle = embeddedBundle(
  '"89b9908716aa06e61be705156e3ae61c"',
  {
    builtAt: new Date(Date.UTC(2025, 1, 10, 9, 44, 24)),
    commit: "0647f50e09a801132ca15110c6d6ca8a3496f1b0",
    policies: [],
    sourceAttributes: {
      "cerbos.resource.document.v1": {
        source: "document.yaml",
      },
      "cerbos.resource.document.v1/test": {
        source: "test/document.yaml",
      },
    },
  },
);
