import { randomUUID } from "crypto";
import { createSecureContext } from "tls";

import type { Client, Options } from "@cerbos/core";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";
import { beforeAll, describe, expect, it } from "@jest/globals";

import {
  describeIfCerbosVersionIsAtLeast,
  fetchDecisionLogEntry,
} from "../helpers";
import type { DecisionLogEntry } from "../protobuf/cerbos/audit/v1/audit";
import type { Ports } from "../servers";
import { ca, ports as serverPorts } from "../servers";

/* eslint-disable @typescript-eslint/no-var-requires -- Can't import package.json files because they're outside of the project's rootDir */
const { version: grpcSdkVersion } = require("../../../grpc/package.json") as {
  version: string;
};

const { version: httpSdkVersion } = require("../../../http/package.json") as {
  version: string;
};

const {
  devDependencies: { "@grpc/grpc-js": grpcJsVersion },
} = require("../../package.json") as {
  devDependencies: { "@grpc/grpc-js": string };
};
/* eslint-enable @typescript-eslint/no-var-requires */

describeIfCerbosVersionIsAtLeast("0.33.0")("Client", () => {
  let ports: Ports;

  beforeAll(async () => {
    ports = await serverPorts();
  });

  describe("headers", () => {
    describe.each([
      {
        type: "gRPC with default user agent",
        client: (headers: Options["headers"]): Client =>
          new GRPC(`localhost:${ports.tls.grpc}`, {
            tls: createSecureContext({ ca }),
            headers,
          }),
        expectedUserAgent: `cerbos-sdk-javascript-grpc/${grpcSdkVersion} grpc-node-js/${grpcJsVersion}`,
      },
      {
        type: "gRPC with custom user agent",
        client: (headers: Options["headers"]): Client =>
          new GRPC(`localhost:${ports.tls.grpc}`, {
            tls: createSecureContext({ ca }),
            headers,
            userAgent: "test/9000",
          }),
        expectedUserAgent: `test/9000 cerbos-sdk-javascript-grpc/${grpcSdkVersion} grpc-node-js/${grpcJsVersion}`,
      },
      {
        type: "HTTP with default user agent",
        client: (headers: Options["headers"]): Client =>
          new HTTP(`https://localhost:${ports.tls.http}`, {
            headers,
          }),
        expectedUserAgent: `cerbos-sdk-javascript-http/${httpSdkVersion}`,
      },
      {
        type: "HTTP with custom user agent",
        client: (headers: Options["headers"]): Client =>
          new HTTP(`https://localhost:${ports.tls.http}`, {
            headers,
            userAgent: "test/9000",
          }),
        expectedUserAgent: `test/9000 cerbos-sdk-javascript-http/${httpSdkVersion}`,
      },
    ])("$type", ({ client: factory, expectedUserAgent }) => {
      describe.each([
        {
          description: "an object",
          clientHeaders: {
            Foo: "42",
            "User-Agent": "ignored",
          },
          expectedFoo: "42",
        },
        {
          description: "a function",
          clientHeaders: (): HeadersInit => ({
            Foo: "42",
            "User-Agent": "ignored",
          }),
          expectedFoo: "42",
        },
        {
          description: "an async function",
          clientHeaders: async (): Promise<HeadersInit> =>
            await Promise.resolve({
              Foo: "42",
              "User-Agent": "ignored",
            }),
          expectedFoo: "42",
        },
        {
          description: "undefined",
          clientHeaders: undefined,
          expectedFoo: undefined,
        },
      ])(
        "with headers option set to $description",
        ({ clientHeaders, expectedFoo }) => {
          let client: Client;

          beforeAll(() => {
            client = factory(clientHeaders);
          });

          it.each([
            {
              title: "sets client-wide headers on all requests",
              requestHeaders: undefined,
              expectedFoo,
              expectedBar: undefined,
            },
            {
              title: "adds per-request headers",
              requestHeaders: {
                Bar: "99",
                "User-Agent": "ignored again",
              },
              expectedFoo,
              expectedBar: "99",
            },
            {
              title: "overrides client-wide headers with per-request headers",
              requestHeaders: {
                Foo: "43",
                Bar: "99",
                "User-Agent": "ignored again",
              },
              expectedFoo: "43",
              expectedBar: "99",
            },
          ])("$title", async ({ requestHeaders, expectedFoo, expectedBar }) => {
            const requestId = randomUUID();

            await client.isAllowed(
              {
                requestId,
                principal: {
                  id: "me@example.com",
                  roles: ["USER"],
                },
                resource: {
                  kind: "document",
                  id: "test",
                },
                action: "edit",
              },
              { headers: requestHeaders },
            );

            const entry = await fetchDecisionLogEntry(ports.tls, requestId);

            const expectedMetadata: DecisionLogEntry["metadata"] = {};

            if (expectedFoo) {
              expectedMetadata["foo"] = { values: [expectedFoo] };
            }

            if (expectedBar) {
              expectedMetadata["bar"] = { values: [expectedBar] };
            }

            expect(entry.metadata).toEqual(expectedMetadata);
            expect(entry.peer?.userAgent).toEqual(expectedUserAgent);
          });
        },
      );
    });
  });
});
