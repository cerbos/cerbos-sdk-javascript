import { readFileSync } from "fs";
import { resolve } from "path";

import type { Client } from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";
import type { DecodedJWTPayload } from "@cerbos/embedded";
import { Embedded } from "@cerbos/embedded";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";
import { CerbosInstrumentation } from "@cerbos/opentelemetry";
import { ChannelCredentials } from "@grpc/grpc-js";
import type { AttributeValue, Attributes } from "@opentelemetry/api";
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
  SEMATTRS_RPC_GRPC_STATUS_CODE,
  SEMATTRS_RPC_METHOD,
  SEMATTRS_RPC_SERVICE,
  SEMATTRS_RPC_SYSTEM,
} from "@opentelemetry/semantic-conventions";
import { UnsecuredJWT } from "jose";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";

import {
  TestMetricReader,
  captureSpan,
  expectMetrics,
  fetchSpans,
  invalidArgumentDetails,
} from "../helpers";
import { QueryServiceClient } from "../protobuf/jaeger/proto/api_v3/query_service";
import type { KeyValue as KeyValueProto } from "../protobuf/opentelemetry/proto/common/v1/common";
import type { Span as SpanProto } from "../protobuf/opentelemetry/proto/trace/v1/trace";
import { Span_SpanKind as SpanKindProto } from "../protobuf/opentelemetry/proto/trace/v1/trace";
import type { CerbosPorts } from "../servers";
import { cerbosVersionIsAtLeast, ports as serverPorts } from "../servers";

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
        : ports.plaintext;

    metricReader = new TestMetricReader();
    const meterProvider = new MeterProvider();
    meterProvider.addMetricReader(metricReader);
    metrics.setGlobalMeterProvider(meterProvider);

    spanExporter = new InMemorySpanExporter();
    const tracerProvider = new NodeTracerProvider();
    tracerProvider.addSpanProcessor(new SimpleSpanProcessor(spanExporter));
    tracerProvider.register();

    cerbosInstrumentation.enable();
  });

  beforeEach(() => {
    spanExporter.reset();
  });

  afterAll(async () => {
    cerbosInstrumentation.disable();
    await spanExporter.shutdown();
  });

  const cases = [
    {
      type: "gRPC",
      client: (): Client =>
        new GRPC(`localhost:${cerbosPorts.grpc}`, { tls: false }),
    },
    {
      type: "HTTP",
      client: (): Client => new HTTP(`http://localhost:${cerbosPorts.http}`),
    },
    {
      type: "Embedded",
      client: (): Client =>
        new Embedded(
          readFileSync(resolve(__dirname, "../../servers/policies.wasm")),
          {
            decodeJWTPayload: ({ token }): DecodedJWTPayload =>
              UnsecuredJWT.decode(token).payload as DecodedJWTPayload,
          },
        ),
    },
  ] as const;

  describe.each(cases)(
    "instruments $type clients",
    ({ type, client: factory }: (typeof cases)[number]) => {
      let client: Client;

      beforeAll(() => {
        client = factory();
      });

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

        const attributes: Attributes = {
          [SEMATTRS_RPC_SYSTEM]: "grpc",
          [SEMATTRS_RPC_SERVICE]: "cerbos.svc.v1.CerbosService",
          [SEMATTRS_RPC_METHOD]: "CheckResources",
          [SEMATTRS_RPC_GRPC_STATUS_CODE]: 0,
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

        // Embedded policy bundles don't produce server spans, and Cerbos didn't include the otelgrpc interceptors until 0.30.0.
        if (type !== "Embedded" && cerbosVersionIsAtLeast("0.30.0")) {
          const jaeger = new QueryServiceClient(
            `localhost:${jaegerPort}`,
            ChannelCredentials.createInsecure(),
          );

          const spans = await fetchSpans(jaeger, span.spanContext().traceId);

          expect(spans).toContainEqual(
            expect.objectContaining({
              name: "cerbos.svc.v1.CerbosService/CheckResources",
              kind: SpanKindProto.SPAN_KIND_SERVER,
              attributes: expect.arrayContaining([
                {
                  key: SEMATTRS_RPC_SYSTEM,
                  value: {
                    value: { $case: "stringValue", stringValue: "grpc" },
                  },
                },
                {
                  key: SEMATTRS_RPC_SERVICE,
                  value: {
                    value: {
                      $case: "stringValue",
                      stringValue: "cerbos.svc.v1.CerbosService",
                    },
                  },
                },
                {
                  key: SEMATTRS_RPC_METHOD,
                  value: {
                    value: {
                      $case: "stringValue",
                      stringValue: "CheckResources",
                    },
                  },
                },
                {
                  key: SEMATTRS_RPC_GRPC_STATUS_CODE,
                  value: {
                    value: { $case: "intValue", intValue: "0" },
                  },
                },
              ] satisfies KeyValueProto[]) as unknown as KeyValueProto[],
            } satisfies Partial<SpanProto>),
          );
        }
      });

      // Embedded policy bundles don't produce invalid argument errors
      if (type !== "Embedded") {
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

          const attributes: Attributes = {
            [SEMATTRS_RPC_SYSTEM]: "grpc",
            [SEMATTRS_RPC_SERVICE]: "cerbos.svc.v1.CerbosService",
            [SEMATTRS_RPC_METHOD]: "CheckResources",
            [SEMATTRS_RPC_GRPC_STATUS_CODE]: Status.INVALID_ARGUMENT,
            "cerbos.error": invalidArgumentDetails as unknown as AttributeValue,
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
        });
      }
    },
  );
});
