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
  InstrumentType,
  MetricReader,
} from "@opentelemetry/sdk-metrics";
import type {
  InMemorySpanExporter,
  ReadableSpan,
} from "@opentelemetry/sdk-trace-base";
import { describe, expect } from "vitest";

import { CheckResourcesResult } from "@cerbos/core";

import type { DecisionLogEntry } from "./protobuf/cerbos/audit/v1/audit";
import { ListAuditLogEntriesResponse } from "./protobuf/cerbos/response/v1/response";
import type { QueryServiceClient } from "./protobuf/jaeger/proto/api_v3/query_service";
import type {
  Span as SpanProto,
  TracesData,
} from "./protobuf/opentelemetry/proto/trace/v1/trace";
import type { CerbosPorts } from "./servers";
import { adminCredentials, cerbosVersionIsAtLeast } from "./servers";

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
    .find((span) => span.parentSpanId === parentSpan.spanContext().spanId);

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
    // no-op
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
    type: InstrumentType.HISTOGRAM,
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

export const invalidArgumentDetails = expect.stringContaining(
  cerbosVersionIsAtLeast("0.30.0")
    ? "validation error"
    : "invalid CheckResourcesRequest",
);

export async function fetchDecisionLogEntry(
  ports: CerbosPorts,
  requestId: string,
): Promise<DecisionLogEntry> {
  for (let attempt = 1; attempt <= 10; attempt++) {
    await setTimeout(250);

    const response = await fetch(
      `https://localhost:${ports.http}/admin/auditlog/list/KIND_DECISION?since=1h`,
      {
        headers: {
          Authorization: `Basic ${btoa(
            `${adminCredentials.username}:${adminCredentials.password}`,
          )}`,
        },
      },
    );

    const body = await response.text();

    for (const line of body.split("\n")) {
      if (line === "") {
        continue;
      }

      const chunk = JSON.parse(line) as { result: unknown; error: unknown };
      if (chunk.error) {
        throw new Error(`Error streaming decision logs: ${line}`);
      }

      const response = ListAuditLogEntriesResponse.fromJSON(chunk.result);

      if (
        response.entry?.$case === "decisionLogEntry" &&
        response.entry.decisionLogEntry.method?.$case === "checkResources" &&
        response.entry.decisionLogEntry.method.checkResources.inputs[0]
          ?.requestId === requestId
      ) {
        return response.entry.decisionLogEntry;
      }
    }
  }

  throw new Error(`Didn't find a decision log entry for request ${requestId}`);
}

export function describeIfCerbosVersionIsAtLeast(
  version: string,
): (typeof describe)["skip"] {
  if (cerbosVersionIsAtLeast(version)) {
    return describe;
  }

  return describe.skip;
}
