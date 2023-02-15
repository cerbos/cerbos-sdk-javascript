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
import { SpanStatusCode } from "@opentelemetry/api";
import {
  InMemorySpanExporter,
  SimpleSpanProcessor,
} from "@opentelemetry/sdk-trace-base";
import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";
import { SemanticAttributes } from "@opentelemetry/semantic-conventions";
import { UnsecuredJWT } from "jose";

import { captureSpan } from "./helpers";
import type { Ports } from "./servers";
import { ports as serverPorts } from "./servers";

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
        new GRPC(`localhost:${ports.grpc.plaintext}`, { tls: false }),
    },
    {
      type: "HTTP",
      client: (): Client =>
        new HTTP(`http://localhost:${ports.http.plaintext}`),
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
            })
        );

        expect(result).toEqual({ value: false });
        expect(span).toMatchObject({
          name: "cerbos.rpc.cerbos.checkResources",
          attributes: {
            [SemanticAttributes.RPC_SYSTEM]: "grpc",
            [SemanticAttributes.RPC_SERVICE]: "cerbos",
            [SemanticAttributes.RPC_METHOD]: "checkResources",
            [SemanticAttributes.RPC_GRPC_STATUS_CODE]: 0,
          },
          status: {
            code: SpanStatusCode.UNSET,
          },
        });
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
              })
          );

          expect(result).toEqual({
            error: expect.objectContaining({
              constructor: NotOK,
              code: Status.INVALID_ARGUMENT,
              details: expect.stringContaining("invalid CheckResourcesRequest"),
            }),
          });

          expect(span).toMatchObject({
            name: "cerbos.rpc.cerbos.checkResources",
            attributes: {
              [SemanticAttributes.RPC_SYSTEM]: "grpc",
              [SemanticAttributes.RPC_SERVICE]: "cerbos",
              [SemanticAttributes.RPC_METHOD]: "checkResources",
              [SemanticAttributes.RPC_GRPC_STATUS_CODE]:
                Status.INVALID_ARGUMENT,
              "cerbos.error": expect.stringContaining(
                "invalid CheckResourcesRequest"
              ),
            },
            status: {
              code: SpanStatusCode.ERROR,
            },
          });
        });
      }
    }
  );
});
