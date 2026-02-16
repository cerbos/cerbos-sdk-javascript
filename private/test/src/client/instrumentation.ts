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
  ATTR_RPC_RESPONSE_STATUS_CODE,
  ATTR_RPC_SERVICE,
  ATTR_RPC_SYSTEM,
  ATTR_RPC_SYSTEM_NAME,
} from "@opentelemetry/semantic-conventions/incubating";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";

import type { Client, DecisionLogEntry } from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";
import { CerbosInstrumentation } from "@cerbos/opentelemetry";

import {
  TestMetricReader,
  captureSpan,
  describeIfVersionIsAtLeast,
  expectMetrics,
  fetchSpans,
  getDecisionLogEntry,
  invalidArgumentDetails,
} from "../helpers.js";
import { QueryServiceClient } from "../protobuf/jaeger/proto/api_v3/query_service.js";
import type { KeyValue as KeyValueProto } from "../protobuf/opentelemetry/proto/common/v1/common.js";
import type { Span as SpanProto } from "../protobuf/opentelemetry/proto/trace/v1/trace.js";
import { Span_SpanKind as SpanKindProto } from "../protobuf/opentelemetry/proto/trace/v1/trace.js";
import type { Ports } from "../servers.js";
import {
  cerbosVersion as defaultCerbosVersion,
  ports as serverPorts,
  versionIsAtLeast,
} from "../servers.js";

export type InstrumentationTestCase = {
  type: string;
  cerbosVersion?: string;
} & (
  | {
      client: (ports: Ports) => Client;
      embedded?: undefined;
    }
  | {
      client: () => Client;
      embedded: "v1" | "v2";
    }
);

export function testInstrumentation(...cases: InstrumentationTestCase[]): void {
  describe("CerbosInstrumentation", () => {
    let ports: Ports;
    let metricReader: MetricReader;
    let spanExporter: InMemorySpanExporter;

    const cerbosInstrumentation = new CerbosInstrumentation({ enabled: false });

    beforeAll(async () => {
      if (cases.some(({ embedded }) => !embedded)) {
        ports = await serverPorts();
      }

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

    describe.each(cases)(
      "$type",
      ({
        client: factory,
        embedded,
        cerbosVersion = defaultCerbosVersion,
      }: (typeof cases)[number]) => {
        let client: Client;

        beforeAll(() => {
          client = factory(ports);
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
              service: "cerbos.svc.v1.CerbosService",
              method: "CheckResources",
              status: Status.OK,
            };

            expect(result).toEqual({ value: false });

            expect(span).toMatchObject({
              name: "cerbos.svc.v1.CerbosService/CheckResources",
              kind: SpanKind.CLIENT,
              attributes: clientAttributes(attributes),
              status: {
                code: SpanStatusCode.UNSET,
              },
            } satisfies Partial<ReadableSpan>);

            await expectMetrics(
              metricReader,
              clientAttributes(attributes),
              span.duration,
            );

            await expectServerSpan(span, attributes);
          });

          // v1 embedded PDPs don't produce invalid argument errors
          if (embedded !== "v1") {
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
                service: "cerbos.svc.v1.CerbosService",
                method: "CheckResources",
                status: Status.INVALID_ARGUMENT,
                "cerbos.error": invalidArgumentDetails(cerbosVersion),
              };

              expect(result).toEqual({
                error: expect.objectContaining({
                  constructor: NotOK,
                  code: Status.INVALID_ARGUMENT,
                  details: invalidArgumentDetails(cerbosVersion),
                }),
              });

              expect(span).toMatchObject({
                name: "cerbos.svc.v1.CerbosService/CheckResources",
                kind: SpanKind.CLIENT,
                attributes: clientAttributes(attributes),
                status: {
                  code: SpanStatusCode.ERROR,
                },
              } satisfies Partial<ReadableSpan>);

              await expectMetrics(
                metricReader,
                clientAttributes(attributes),
                span.duration,
              );

              await expectServerSpan(span, attributes);
            });
          }
        });

        // Embedded policy bundles don't implement server streams
        if (!embedded) {
          // Prior to 0.33.0, the minimum flushInterval for audit logs was 5s, which makes this painfully slow.
          describeIfVersionIsAtLeast("0.33.0", cerbosVersion)(
            "serverStream",
            () => {
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

                const [result, span] = await captureSpan(
                  spanExporter,
                  async () => {
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
                  },
                );

                const attributes: ExpectedAttributes = {
                  service: "cerbos.svc.v1.CerbosAdminService",
                  method: "ListAuditLogEntries",
                  status: Status.OK,
                };

                expect(result).toEqual({ value: entry });

                expect(span).toMatchObject({
                  name: "cerbos.svc.v1.CerbosAdminService/ListAuditLogEntries",
                  kind: SpanKind.CLIENT,
                  attributes: clientAttributes(attributes),
                  status: {
                    code: SpanStatusCode.UNSET,
                  },
                } satisfies Partial<ReadableSpan>);

                await expectMetrics(
                  metricReader,
                  clientAttributes(attributes),
                  span.duration,
                );

                await expectServerSpan(span, attributes);
              });

              it("records spans for unsuccessful calls", async () => {
                const [result, span] = await captureSpan(
                  spanExporter,
                  async () => await client.getDecisionLogEntry("wat"),
                );

                const attributes: ExpectedAttributes = {
                  service: "cerbos.svc.v1.CerbosAdminService",
                  method: "ListAuditLogEntries",
                  status: Status.INVALID_ARGUMENT,
                  "cerbos.error": invalidArgumentDetails(cerbosVersion),
                };

                expect(result).toEqual({
                  error: expect.objectContaining({
                    constructor: NotOK,
                    code: Status.INVALID_ARGUMENT,
                    details: invalidArgumentDetails(cerbosVersion),
                  }),
                });

                expect(span).toMatchObject({
                  name: "cerbos.svc.v1.CerbosAdminService/ListAuditLogEntries",
                  kind: SpanKind.CLIENT,
                  attributes: clientAttributes(attributes),
                  status: {
                    code: SpanStatusCode.ERROR,
                  },
                } satisfies Partial<ReadableSpan>);

                await expectMetrics(
                  metricReader,
                  clientAttributes(attributes),
                  span.duration,
                );

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
                  service: "cerbos.svc.v1.CerbosAdminService",
                  method: "ListAuditLogEntries",
                  status: Status.CANCELLED,
                  "cerbos.error": expect.stringContaining("Aborted"),
                } satisfies Attributes;

                expect(result).toEqual({ value: entry });

                expect(span).toMatchObject({
                  name: "cerbos.svc.v1.CerbosAdminService/ListAuditLogEntries",
                  kind: SpanKind.CLIENT,
                  attributes: clientAttributes(attributes),
                  status: {
                    code: SpanStatusCode.ERROR,
                  },
                } satisfies Partial<ReadableSpan>);

                await expectMetrics(
                  metricReader,
                  clientAttributes(attributes),
                  span.duration,
                );

                await expectServerSpan(span, {
                  ...attributes,
                  status: Status.OK, // Although the call is aborted after returning early from for-await on the client, it completes successfully on the server
                });
              });
            },
          );
        }

        async function expectServerSpan(
          clientSpan: ReadableSpan,
          attributes: ExpectedAttributes,
        ): Promise<void> {
          // Embedded PDPs don't produce server spans, and Cerbos didn't include the otelgrpc interceptors until 0.30.0.
          if (embedded || !versionIsAtLeast("0.30.0", cerbosVersion)) {
            return;
          }

          const jaeger = new QueryServiceClient(
            `localhost:${ports.jaeger}`,
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
              attributes: expect.arrayContaining(
                serverAttributes(cerbosVersion, attributes),
              ),
            } satisfies Partial<SpanProto>),
          );
        }
      },
    );
  });
}

interface ExpectedAttributes {
  service: string;
  method: string;
  status: Status;
  "cerbos.error"?: string;
}

function clientAttributes({
  service,
  method,
  status,
  ...rest
}: ExpectedAttributes): Attributes {
  return {
    [ATTR_RPC_SYSTEM_NAME]: "grpc",
    [ATTR_RPC_METHOD]: `${service}/${method}`,
    [ATTR_RPC_RESPONSE_STATUS_CODE]: Status[status],
    ...rest,
  };
}

function serverAttributes(
  cerbosVersion: string,
  { service, method, status }: ExpectedAttributes,
): KeyValueProto[] {
  return versionIsAtLeast("0.52.0", cerbosVersion)
    ? [
        {
          key: ATTR_RPC_SYSTEM_NAME,
          value: {
            value: {
              $case: "stringValue",
              stringValue: "grpc",
            },
          },
        },
        {
          key: ATTR_RPC_METHOD,
          value: {
            value: {
              $case: "stringValue",
              stringValue: `${service}/${method}`,
            },
          },
        },
        {
          key: ATTR_RPC_RESPONSE_STATUS_CODE,
          value: {
            value: {
              $case: "stringValue",
              stringValue: serverStatus[status],
            },
          },
        },
      ]
    : [
        {
          key: ATTR_RPC_SYSTEM, // eslint-disable-line @typescript-eslint/no-deprecated
          value: {
            value: {
              $case: "stringValue",
              stringValue: "grpc",
            },
          },
        },
        {
          key: ATTR_RPC_SERVICE, // eslint-disable-line @typescript-eslint/no-deprecated
          value: {
            value: {
              $case: "stringValue",
              stringValue: service,
            },
          },
        },
        {
          key: ATTR_RPC_METHOD,
          value: {
            value: {
              $case: "stringValue",
              stringValue: method,
            },
          },
        },
        {
          key: ATTR_RPC_GRPC_STATUS_CODE, // eslint-disable-line @typescript-eslint/no-deprecated
          value: {
            value: {
              $case: "intValue",
              intValue: BigInt(status),
            },
          },
        },
      ];
}

// https://github.com/open-telemetry/opentelemetry-go-contrib/issues/8543
const serverStatus: Record<Status, string> = {
  [Status.ABORTED]: "Aborted",
  [Status.ALREADY_EXISTS]: "AlreadyExists",
  [Status.CANCELLED]: "Cancelled",
  [Status.DATA_LOSS]: "DataLoss",
  [Status.DEADLINE_EXCEEDED]: "DeadlineExceeded",
  [Status.FAILED_PRECONDITION]: "FailedPrecondition",
  [Status.INTERNAL]: "Internal",
  [Status.INVALID_ARGUMENT]: "InvalidArgument",
  [Status.NOT_FOUND]: "NotFound",
  [Status.OK]: "OK",
  [Status.OUT_OF_RANGE]: "OutOfRange",
  [Status.PERMISSION_DENIED]: "PermissionDenied",
  [Status.RESOURCE_EXHAUSTED]: "ResourceExhausted",
  [Status.UNAUTHENTICATED]: "Unauthenticated",
  [Status.UNAVAILABLE]: "Unavailable",
  [Status.UNIMPLEMENTED]: "Unimplemented",
  [Status.UNKNOWN]: "Unknown",
};
