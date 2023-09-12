/* eslint-disable jest/no-conditional-expect */

import { readFileSync } from "fs";
import { resolve } from "path";

import type { Client } from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";
import type { DecodedJWTPayload } from "@cerbos/lite";
import { Lite } from "@cerbos/lite";
import { CerbosInstrumentation } from "@cerbos/opentelemetry";
import { ChannelCredentials } from "@grpc/grpc-js";
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from "@jest/globals";
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
import { SemanticAttributes } from "@opentelemetry/semantic-conventions";
import { UnsecuredJWT } from "jose";

import {
  TestMetricReader,
  captureSpan,
  expectMetrics,
  fetchSpans,
  invalidArgumentDetails,
} from "./helpers";
import { QueryServiceClient } from "./protobuf/jaeger/proto/api_v3/query_service";
import type { KeyValue as KeyValueProto } from "./protobuf/opentelemetry/proto/common/v1/common";
import type { Span as SpanProto } from "./protobuf/opentelemetry/proto/trace/v1/trace";
import { Span_SpanKind as SpanKindProto } from "./protobuf/opentelemetry/proto/trace/v1/trace";
import type { Ports } from "./servers";
import { cerbosVersionIsAtLeast, ports as serverPorts } from "./servers";

describe("CerbosInstrumentation", () => {
  let ports: Ports;
  let metricReader: MetricReader;
  let spanExporter: InMemorySpanExporter;

  const cerbosInstrumentation = new CerbosInstrumentation({ enabled: false });

  beforeAll(async () => {
    ports = await serverPorts();

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
        new GRPC(
          `localhost:${
            cerbosVersionIsAtLeast("0.30.0")
              ? ports.grpc.tracing
              : ports.grpc.plaintext
          }`,
          { tls: false },
        ),
    },
    {
      type: "HTTP",
      client: (): Client =>
        new HTTP(
          `http://localhost:${
            cerbosVersionIsAtLeast("0.30.0")
              ? ports.http.tracing
              : ports.http.plaintext
          }`,
        ),
    },
    {
      type: "Lite",
      client: (): Client =>
        new Lite(readFileSync(resolve(__dirname, "../servers/policies.wasm")), {
          decodeJWTPayload: ({ token }): DecodedJWTPayload =>
            UnsecuredJWT.decode(token).payload as DecodedJWTPayload,
        }),
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
          [SemanticAttributes.RPC_SYSTEM]: "grpc",
          [SemanticAttributes.RPC_SERVICE]: "cerbos.svc.v1.CerbosService",
          [SemanticAttributes.RPC_METHOD]: "CheckResources",
          [SemanticAttributes.RPC_GRPC_STATUS_CODE]: 0,
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

        // Lite policy bundles don't produce server spans, and Cerbos didn't include the otelgrpc interceptors until 0.30.0.
        if (type !== "Lite" && cerbosVersionIsAtLeast("0.30.0")) {
          const jaeger = new QueryServiceClient(
            `localhost:${ports.jaeger}`,
            ChannelCredentials.createInsecure(),
          );

          const spans = await fetchSpans(jaeger, span.spanContext().traceId);

          expect(spans).toContainEqual(
            expect.objectContaining({
              name: "cerbos.svc.v1.CerbosService/CheckResources",
              kind: SpanKindProto.SPAN_KIND_SERVER,
              attributes: expect.arrayContaining([
                {
                  key: SemanticAttributes.RPC_SYSTEM,
                  value: {
                    value: { $case: "stringValue", stringValue: "grpc" },
                  },
                },
                {
                  key: SemanticAttributes.RPC_SERVICE,
                  value: {
                    value: {
                      $case: "stringValue",
                      stringValue: "cerbos.svc.v1.CerbosService",
                    },
                  },
                },
                {
                  key: SemanticAttributes.RPC_METHOD,
                  value: {
                    value: {
                      $case: "stringValue",
                      stringValue: "CheckResources",
                    },
                  },
                },
                {
                  key: SemanticAttributes.RPC_GRPC_STATUS_CODE,
                  value: {
                    value: { $case: "intValue", intValue: "0" },
                  },
                },
              ] satisfies KeyValueProto[]) as unknown as KeyValueProto[],
            } satisfies Partial<SpanProto>),
          );
        }
      });

      // Lite policy bundles don't produce invalid argument errors
      if (type !== "Lite") {
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
            [SemanticAttributes.RPC_SYSTEM]: "grpc",
            [SemanticAttributes.RPC_SERVICE]: "cerbos.svc.v1.CerbosService",
            [SemanticAttributes.RPC_METHOD]: "CheckResources",
            [SemanticAttributes.RPC_GRPC_STATUS_CODE]: Status.INVALID_ARGUMENT,
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
