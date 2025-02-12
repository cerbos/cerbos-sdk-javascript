import { readFileSync } from "fs";

import { ChannelCredentials } from "@grpc/grpc-js";
import type { Attributes } from "@opentelemetry/api";
import { SpanKind, SpanStatusCode, metrics } from "@opentelemetry/api";
import type { MetricReader } from "@opentelemetry/sdk-metrics";
import { MeterProvider } from "@opentelemetry/sdk-metrics";
import type { ReadableSpan } from "@opentelemetry/sdk-trace-base";
import {
  InMemorySpanExporter,
  SimpleSpanProcessor,
} from "@opentelemetry/sdk-trace-base";
import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";
import {
  ATTR_RPC_GRPC_STATUS_CODE,
  ATTR_RPC_METHOD,
  ATTR_RPC_SERVICE,
  ATTR_RPC_SYSTEM,
} from "@opentelemetry/semantic-conventions/incubating";
import { UnsecuredJWT } from "jose";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";

import type { Client, DecisionLogEntry } from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";
import type { DecodedJWTPayload } from "@cerbos/embedded";
import { Embedded } from "@cerbos/embedded";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";
import { CerbosInstrumentation } from "@cerbos/opentelemetry";

import {
  TestMetricReader,
  captureSpan,
  describeIfCerbosVersionIsAtLeast,
  expectMetrics,
  fetchSpans,
  getDecisionLogEntry,
  invalidArgumentDetails,
  newEmbeddedBundle,
  oldEmbeddedBundle,
} from "../helpers";
import { QueryServiceClient } from "../protobuf/jaeger/proto/api_v3/query_service";
import type { KeyValue as KeyValueProto } from "../protobuf/opentelemetry/proto/common/v1/common";
import type { Span as SpanProto } from "../protobuf/opentelemetry/proto/trace/v1/trace";
import { Span_SpanKind as SpanKindProto } from "../protobuf/opentelemetry/proto/trace/v1/trace";
import type { CerbosPorts } from "../servers";
import {
  adminCredentials,
  cerbosVersionIsAtLeast,
  ports as serverPorts,
  tls,
} from "../servers";

interface ExpectedAttributes extends Attributes {
  [ATTR_RPC_SYSTEM]: string;
  [ATTR_RPC_SERVICE]: string;
  [ATTR_RPC_METHOD]: string;
  [ATTR_RPC_GRPC_STATUS_CODE]: Status;
  "cerbos.error"?: string;
}

describe("CerbosInstrumentation", () => {
  let jaegerPort: number;
  let cerbosPorts: CerbosPorts;
  let metricReader: MetricReader;
  let spanExporter: InMemorySpanExporter;

  const cerbosInstrumentation = new CerbosInstrumentation({ enabled: false });

  beforeAll(async () => {
    const ports = await serverPorts();
    jaegerPort = ports.jaeger;
    cerbosPorts =
      cerbosVersionIsAtLeast("0.30.0") && !cerbosVersionIsAtLeast("0.32.0")
        ? ports.tracing
        : ports.tls;

    metricReader = new TestMetricReader();
    metrics.setGlobalMeterProvider(
      new MeterProvider({ readers: [metricReader] }),
    );

    spanExporter = new InMemorySpanExporter();

    new NodeTracerProvider({
      spanProcessors: [new SimpleSpanProcessor(spanExporter)],
    }).register();

    cerbosInstrumentation.enable();
  });

  beforeEach(async () => {
    await metricReader.forceFlush();
    spanExporter.reset();
  });

  afterAll(async () => {
    cerbosInstrumentation.disable();
    await spanExporter.shutdown();
  });

  const cases = [
    {
      type: "gRPC",
      embedded: false,
      client: (): Client =>
        new GRPC(`localhost:${cerbosPorts.grpc}`, {
          tls: tls(),
          adminCredentials,
        }),
    },
    {
      type: "HTTP",
      embedded: false,
      client: (): Client =>
        new HTTP(`https://localhost:${cerbosPorts.http}`, { adminCredentials }),
    },
    {
      type: "Embedded (old bundle)",
      embedded: true,
      client: (): Client =>
        new Embedded(readFileSync(oldEmbeddedBundle.path), {
          decodeJWTPayload: ({ token }): DecodedJWTPayload =>
            UnsecuredJWT.decode(token).payload as DecodedJWTPayload,
        }),
    },
    {
      type: "Embedded (new bundle)",
      embedded: true,
      client: (): Client =>
        new Embedded(readFileSync(newEmbeddedBundle.path), {
          decodeJWTPayload: ({ token }): DecodedJWTPayload =>
            UnsecuredJWT.decode(token).payload as DecodedJWTPayload,
        }),
    },
  ] as const;

  describe.each(cases)(
    "instruments $type clients",
    ({ embedded, client: factory }: (typeof cases)[number]) => {
      let client: Client;

      beforeAll(() => {
        client = factory();
      });

      describe("unary", () => {
        it("records spans for successful calls", async () => {
          const [result, span] = await captureSpan(
            spanExporter,
            async () =>
              await client.isAllowed({
                principal: {
                  id: "someone@example.com",
                  roles: ["USER"],
                },
                resource: {
                  kind: "folder",
                  id: "test",
                },
                action: "edit",
              }),
          );

          const attributes: ExpectedAttributes = {
            [ATTR_RPC_SYSTEM]: "grpc",
            [ATTR_RPC_SERVICE]: "cerbos.svc.v1.CerbosService",
            [ATTR_RPC_METHOD]: "CheckResources",
            [ATTR_RPC_GRPC_STATUS_CODE]: 0,
          };

          expect(result).toEqual({ value: false });

          expect(span).toMatchObject({
            name: "cerbos.svc.v1.CerbosService/CheckResources",
            kind: SpanKind.CLIENT,
            attributes,
            status: {
              code: SpanStatusCode.UNSET,
            },
          } satisfies Partial<ReadableSpan>);

          await expectMetrics(metricReader, attributes, span.duration);

          await expectServerSpan(span, attributes);
        });

        // Embedded policy bundles don't produce invalid argument errors
        if (!embedded) {
          it("records spans for unsuccessful calls", async () => {
            const [result, span] = await captureSpan(
              spanExporter,
              async () =>
                await client.isAllowed({
                  principal: {
                    id: "someone@example.com",
                    roles: ["USER"],
                  },
                  resource: {
                    kind: "folder",
                    id: "test",
                  },
                  action: "",
                }),
            );

            const attributes: ExpectedAttributes = {
              [ATTR_RPC_SYSTEM]: "grpc",
              [ATTR_RPC_SERVICE]: "cerbos.svc.v1.CerbosService",
              [ATTR_RPC_METHOD]: "CheckResources",
              [ATTR_RPC_GRPC_STATUS_CODE]: Status.INVALID_ARGUMENT,
              "cerbos.error": invalidArgumentDetails,
            };

            expect(result).toEqual({
              error: expect.objectContaining({
                constructor: NotOK,
                code: Status.INVALID_ARGUMENT,
                details: invalidArgumentDetails,
              }),
            });

            expect(span).toMatchObject({
              name: "cerbos.svc.v1.CerbosService/CheckResources",
              kind: SpanKind.CLIENT,
              attributes,
              status: {
                code: SpanStatusCode.ERROR,
              },
            } satisfies Partial<ReadableSpan>);

            await expectMetrics(metricReader, attributes, span.duration);

            await expectServerSpan(span, attributes);
          });
        }
      });

      // Embedded policy bundles don't implement server streams
      if (!embedded) {
        // Prior to 0.33.0, the minimum flushInterval for audit logs was 5s, which makes this painfully slow.
        describeIfCerbosVersionIsAtLeast("0.33.0")("serverStream", () => {
          it("records spans for successful calls", async () => {
            const { cerbosCallId: callId } = await client.checkResources({
              principal: {
                id: "someone@example.com",
                roles: ["USER"],
              },
              resources: [
                {
                  resource: {
                    kind: "folder",
                    id: "test",
                  },
                  actions: ["edit"],
                },
              ],
            });

            const entry = await getDecisionLogEntry(client, callId);

            await metricReader.forceFlush();

            const [result, span] = await captureSpan(spanExporter, async () => {
              let result: DecisionLogEntry | undefined = undefined;

              for await (const entry of client.listDecisionLogEntries({
                filter: { tail: 10 },
              })) {
                if (entry.callId === callId) {
                  result = entry;
                }
              }

              if (!result) {
                throw new Error(
                  `Decision log entry with call ID ${callId} not found`,
                );
              }

              return result;
            });

            const attributes: ExpectedAttributes = {
              [ATTR_RPC_SYSTEM]: "grpc",
              [ATTR_RPC_SERVICE]: "cerbos.svc.v1.CerbosAdminService",
              [ATTR_RPC_METHOD]: "ListAuditLogEntries",
              [ATTR_RPC_GRPC_STATUS_CODE]: 0,
            };

            expect(result).toEqual({ value: entry });

            expect(span).toMatchObject({
              name: "cerbos.svc.v1.CerbosAdminService/ListAuditLogEntries",
              kind: SpanKind.CLIENT,
              attributes,
              status: {
                code: SpanStatusCode.UNSET,
              },
            } satisfies Partial<ReadableSpan>);

            await expectMetrics(metricReader, attributes, span.duration);

            await expectServerSpan(span, attributes);
          });

          it("records spans for unsuccessful calls", async () => {
            const [result, span] = await captureSpan(
              spanExporter,
              async () => await client.getDecisionLogEntry("wat"),
            );

            const attributes: ExpectedAttributes = {
              [ATTR_RPC_SYSTEM]: "grpc",
              [ATTR_RPC_SERVICE]: "cerbos.svc.v1.CerbosAdminService",
              [ATTR_RPC_METHOD]: "ListAuditLogEntries",
              [ATTR_RPC_GRPC_STATUS_CODE]: Status.INVALID_ARGUMENT,
              "cerbos.error": invalidArgumentDetails,
            };

            expect(result).toEqual({
              error: expect.objectContaining({
                constructor: NotOK,
                code: Status.INVALID_ARGUMENT,
                details: invalidArgumentDetails,
              }),
            });

            expect(span).toMatchObject({
              name: "cerbos.svc.v1.CerbosAdminService/ListAuditLogEntries",
              kind: SpanKind.CLIENT,
              attributes,
              status: {
                code: SpanStatusCode.ERROR,
              },
            } satisfies Partial<ReadableSpan>);

            await expectMetrics(metricReader, attributes, span.duration);

            await expectServerSpan(span, attributes);
          });

          it("records spans for internally-aborted calls", async () => {
            const { cerbosCallId: callId } = await client.checkResources({
              principal: {
                id: "someone@example.com",
                roles: ["USER"],
              },
              resources: [
                {
                  resource: {
                    kind: "folder",
                    id: "test",
                  },
                  actions: ["edit"],
                },
              ],
            });

            const entry = await getDecisionLogEntry(client, callId);

            await metricReader.forceFlush();

            const [result, span] = await captureSpan(
              spanExporter,
              async () => await client.getDecisionLogEntry(callId),
            );

            const attributes = {
              [ATTR_RPC_SYSTEM]: "grpc",
              [ATTR_RPC_SERVICE]: "cerbos.svc.v1.CerbosAdminService",
              [ATTR_RPC_METHOD]: "ListAuditLogEntries",
              [ATTR_RPC_GRPC_STATUS_CODE]: Status.CANCELLED,
              "cerbos.error": expect.stringContaining("Aborted"),
            } satisfies Attributes;

            expect(result).toEqual({ value: entry });

            expect(span).toMatchObject({
              name: "cerbos.svc.v1.CerbosAdminService/ListAuditLogEntries",
              kind: SpanKind.CLIENT,
              attributes,
              status: {
                code: SpanStatusCode.ERROR,
              },
            } satisfies Partial<ReadableSpan>);

            await expectMetrics(metricReader, attributes, span.duration);

            await expectServerSpan(span, {
              ...attributes,
              [ATTR_RPC_GRPC_STATUS_CODE]: Status.OK, // Although the call is aborted after returning early from for-await on the client, it completes successfully on the server
            });
          });
        });
      }

      async function expectServerSpan(
        clientSpan: ReadableSpan,
        attributes: ExpectedAttributes,
      ): Promise<void> {
        // Embedded policy bundles don't produce server spans, and Cerbos didn't include the otelgrpc interceptors until 0.30.0.
        if (embedded || !cerbosVersionIsAtLeast("0.30.0")) {
          return;
        }

        const jaeger = new QueryServiceClient(
          `localhost:${jaegerPort}`,
          ChannelCredentials.createInsecure(),
        );

        const spans = await fetchSpans(
          jaeger,
          clientSpan.spanContext().traceId,
        );

        expect(spans).toContainEqual(
          expect.objectContaining({
            name: clientSpan.name,
            kind: SpanKindProto.SPAN_KIND_SERVER,
            attributes: expect.arrayContaining([
              {
                key: ATTR_RPC_SYSTEM,
                value: {
                  value: {
                    $case: "stringValue",
                    stringValue: attributes[ATTR_RPC_SYSTEM],
                  },
                },
              },
              {
                key: ATTR_RPC_SERVICE,
                value: {
                  value: {
                    $case: "stringValue",
                    stringValue: attributes[ATTR_RPC_SERVICE],
                  },
                },
              },
              {
                key: ATTR_RPC_METHOD,
                value: {
                  value: {
                    $case: "stringValue",
                    stringValue: attributes[ATTR_RPC_METHOD],
                  },
                },
              },
              {
                key: ATTR_RPC_GRPC_STATUS_CODE,
                value: {
                  value: {
                    $case: "intValue",
                    intValue: attributes[ATTR_RPC_GRPC_STATUS_CODE].toString(),
                  },
                },
              },
            ] satisfies KeyValueProto[]),
          } satisfies Partial<SpanProto>),
        );
      }
    },
  );
});
