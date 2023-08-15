import { hrtime } from "process";
import { setTimeout } from "timers/promises";

import { CheckResourcesResult } from "@cerbos/core";
import type { ServiceError } from "@grpc/grpc-js";
import { Metadata } from "@grpc/grpc-js";
import { context, trace } from "@opentelemetry/api";
import type {
  InMemorySpanExporter,
  ReadableSpan,
} from "@opentelemetry/sdk-trace-base";

import type {
  QueryServiceClient,
  SpansResponseChunk,
} from "./protobuf/jaeger/proto/api_v3/query_service";
import type { Span as SpanProto } from "./protobuf/opentelemetry/proto/trace/v1/trace";

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
        const { resourceSpans } = chunk as SpansResponseChunk;
        for (const resourceSpan of resourceSpans) {
          for (const scopeSpan of resourceSpan.scopeSpans) {
            spans.push(...scopeSpan.spans);
          }
        }
      }

      return spans;
    } catch (error) {
      if (!(isServiceError(error) && error.details === "trace not found")) {
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

function secondsSince(start: bigint): number {
  return Number(hrtime.bigint() - start) / 1e9;
}
