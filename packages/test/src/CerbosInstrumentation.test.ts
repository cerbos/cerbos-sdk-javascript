/* eslint-disable jest/no-conditional-expect */

import "./fetch-polyfill";

import { readFileSync } from "fs";
import { resolve } from "path";

import type { Client } from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";
import type { DecodedJWTPayload } from "@cerbos/lite";
import { Lite } from "@cerbos/lite";
import { CerbosInstrumentation } from "@cerbos/opentelemetry";
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from "@jest/globals";
import type { AttributeValue } from "@opentelemetry/api";
import { SpanKind, SpanStatusCode } from "@opentelemetry/api";
import type { ReadableSpan } from "@opentelemetry/sdk-trace-base";
import {
  InMemorySpanExporter,
  SimpleSpanProcessor,
} from "@opentelemetry/sdk-trace-base";
import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";
import { SemanticAttributes } from "@opentelemetry/semantic-conventions";
import { UnsecuredJWT } from "jose";

import { captureSpan } from "./helpers";
import type { KeyValue as KeyValueProto } from "./protobuf/opentelemetry/proto/common/v1/common";
import {
  Span_SpanKind as SpanKindProto,
  Span as SpanProto,
  Status_StatusCode as SpanStatusCodeProto,
} from "./protobuf/opentelemetry/proto/trace/v1/trace";
import type { Ports } from "./servers";
import { cerbosVersionIsAtLeast, ports as serverPorts } from "./servers";

describe("CerbosInstrumentation", () => {
  let ports: Ports;
  let spanExporter: InMemorySpanExporter;
  const cerbosInstrumentation = new CerbosInstrumentation({ enabled: false });

  beforeAll(async () => {
    ports = await serverPorts();

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

        expect(result).toEqual({ value: false });
        expect(span).toMatchObject({
          name: "cerbos.svc.v1.CerbosService/CheckResources",
          kind: SpanKind.CLIENT,
          attributes: {
            [SemanticAttributes.RPC_SYSTEM]: "grpc",
            [SemanticAttributes.RPC_SERVICE]: "cerbos.svc.v1.CerbosService",
            [SemanticAttributes.RPC_METHOD]: "CheckResources",
            [SemanticAttributes.RPC_GRPC_STATUS_CODE]: 0,
          },
          status: {
            code: SpanStatusCode.UNSET,
          },
        } satisfies Partial<ReadableSpan>);

        // Lite policy bundles don't produce server spans, and Cerbos didn't include the otelgrpc interceptors until 0.30.0.
        if (type !== "Lite" && cerbosVersionIsAtLeast("0.30.0")) {
          const response = await fetch(
            `http://localhost:${ports.otelcol}/${span.spanContext().traceId}`,
          );

          if (!response.ok) {
            throw new Error(
              `Failed to get spans from OpenTelemetry collector: HTTP ${response.status} ${response.statusText}`,
            );
          }

          const spans = (
            (await response.json()) as { spans: unknown[] }
          ).spans.map((span) => SpanProto.fromJSON(span));

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
              status: {
                code: SpanStatusCodeProto.STATUS_CODE_UNSET,
                message: "",
              },
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

          expect(result).toEqual({
            error: expect.objectContaining({
              constructor: NotOK,
              code: Status.INVALID_ARGUMENT,
              details: expect.stringContaining("invalid CheckResourcesRequest"),
            }),
          });

          expect(span).toMatchObject({
            name: "cerbos.svc.v1.CerbosService/CheckResources",
            kind: SpanKind.CLIENT,
            attributes: {
              [SemanticAttributes.RPC_SYSTEM]: "grpc",
              [SemanticAttributes.RPC_SERVICE]: "cerbos.svc.v1.CerbosService",
              [SemanticAttributes.RPC_METHOD]: "CheckResources",
              [SemanticAttributes.RPC_GRPC_STATUS_CODE]:
                Status.INVALID_ARGUMENT,
              "cerbos.error": expect.stringContaining(
                "invalid CheckResourcesRequest",
              ) as unknown as AttributeValue,
            },
            status: {
              code: SpanStatusCode.ERROR,
            },
          } satisfies Partial<ReadableSpan>);
        });
      }
    },
  );
});
