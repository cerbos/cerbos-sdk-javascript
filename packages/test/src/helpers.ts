import { CheckResourcesResult } from "@cerbos/core";
import { context, trace } from "@opentelemetry/api";
import type {
  InMemorySpanExporter,
  ReadableSpan,
} from "@opentelemetry/sdk-trace-base";

export const buildResultsForResources = ({
  id,
  policyVersions,
  scopes,
}: {
  id: string;
  policyVersions: string[];
  scopes: string[];
}): CheckResourcesResult[] =>
  ["document", "image"].flatMap((kind) =>
    policyVersions.flatMap((policyVersion) =>
      scopes.map((scope) =>
        buildResult({ resource: { kind, id, policyVersion, scope } })
      )
    )
  );

export const buildResult = (
  result: Partial<ConstructorParameters<typeof CheckResourcesResult>[0]>
): CheckResourcesResult =>
  new CheckResourcesResult({
    resource: {
      kind: "document",
      id: "1",
      policyVersion: "default",
      scope: "",
    },
    actions: {},
    validationErrors: [],
    metadata: undefined,
    ...result,
  });

export const shuffle = <T>(values: T[]): T[] =>
  values
    .map((value) => ({ value, order: Math.random() }))
    .sort((a, b) => a.order - b.order)
    .map(({ value }) => value);

type Result<T> = { value: T } | { error: unknown };

export const captureSpan = async <T>(
  spanExporter: InMemorySpanExporter,
  fn: () => Promise<T>
): Promise<[Result<T>, ReadableSpan]> => {
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
    }
  );

  const childSpan = spanExporter
    .getFinishedSpans()
    .find((span) => span.parentSpanId === parentSpan.spanContext().spanId);

  if (!childSpan) {
    throw new Error("No child span created");
  }

  return [result, childSpan];
};
