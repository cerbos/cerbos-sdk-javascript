import { beforeAll, describe, expect, it } from "vitest";

import type { Client, Options } from "@cerbos/core";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";

import {
  describeIfCerbosVersionIsAtLeast,
  getDecisionLogEntry,
  grpcUserAgent,
  httpUserAgent,
} from "../helpers";
import type { Ports } from "../servers";
import { adminCredentials, ports as serverPorts, tls } from "../servers";

// Prior to 0.33.0, the minimum flushInterval for audit logs was 5s, which makes this painfully slow.
describeIfCerbosVersionIsAtLeast("0.33.0")("Client", () => {
  let ports: Ports;
  let admin: Client;

  beforeAll(async () => {
    ports = await serverPorts();
    admin = new GRPC(`localhost:${ports.tls.grpc}`, {
      tls: tls(),
      adminCredentials,
    });
  });

  describe("headers", () => {
    const clientHeadersTestCases = [
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
    ];

    const requestHeadersTestCases = [
      {
        title: "sets client-wide headers on all requests",
        requestHeaders: undefined,
        expectedBar: undefined,
      },
      {
        title: "adds per-request headers",
        requestHeaders: {
          Bar: "99",
          "User-Agent": "ignored again",
        },
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
    ];

    const clientTestCases = [
      {
        type: "gRPC with default user agent",
        client: (headers: Options["headers"]): Client =>
          new GRPC(`localhost:${ports.tls.grpc}`, {
            tls: tls(),
            headers,
          }),
        expectedUserAgent: grpcUserAgent,
      },
      {
        type: "gRPC with custom user agent",
        client: (headers: Options["headers"]): Client =>
          new GRPC(`localhost:${ports.tls.grpc}`, {
            tls: tls(),
            headers,
            userAgent: "test/9000",
          }),
        expectedUserAgent: `test/9000 ${grpcUserAgent}`,
      },
      {
        type: "HTTP with default user agent",
        client: (headers: Options["headers"]): Client =>
          new HTTP(`https://localhost:${ports.tls.http}`, {
            headers,
          }),
        expectedUserAgent: httpUserAgent,
      },
      {
        type: "HTTP with custom user agent",
        client: (headers: Options["headers"]): Client =>
          new HTTP(`https://localhost:${ports.tls.http}`, {
            headers,
            userAgent: "test/9000",
          }),
        expectedUserAgent: `test/9000 ${httpUserAgent}`,
      },
    ].map((clientTestCase) => ({
      ...clientTestCase,
      clientHeadersTestCases: clientHeadersTestCases.map(
        (clientHeadersTestCase) => ({
          ...clientHeadersTestCase,
          requestHeadersTestCases: requestHeadersTestCases.map(
            (requestHeadersTestCase) => ({
              ...requestHeadersTestCase,
              callId: "",
            }),
          ),
        }),
      ),
    }));

    beforeAll(async () => {
      await Promise.all(
        clientTestCases.flatMap(({ client: factory, clientHeadersTestCases }) =>
          clientHeadersTestCases.flatMap(
            ({ clientHeaders, requestHeadersTestCases }) => {
              const client = factory(clientHeaders);
              return requestHeadersTestCases.map(async (testCase) => {
                const { cerbosCallId } = await client.checkResources(
                  {
                    principal: {
                      id: "me@example.com",
                      roles: ["USER"],
                    },
                    resources: [
                      {
                        resource: {
                          kind: "document",
                          id: "test",
                        },
                        actions: ["edit"],
                      },
                    ],
                  },
                  { headers: testCase.requestHeaders },
                );

                testCase.callId = cerbosCallId;
              });
            },
          ),
        ),
      );
    });

    describe.each(clientTestCases)(
      "$type",
      ({ clientHeadersTestCases, expectedUserAgent }) => {
        describe.each(clientHeadersTestCases)(
          "with headers option set to $description",
          ({ requestHeadersTestCases, expectedFoo }) => {
            it.each(requestHeadersTestCases)(
              "$title",
              async ({
                callId,
                expectedFoo: expectedFooOverride,
                expectedBar,
              }) => {
                const entry = await getDecisionLogEntry(admin, callId);

                const expectedMetadata: Record<string, string[]> = {};

                if (expectedFooOverride) {
                  expectedMetadata["foo"] = [expectedFooOverride];
                } else if (expectedFoo) {
                  expectedMetadata["foo"] = [expectedFoo];
                }

                if (expectedBar) {
                  expectedMetadata["bar"] = [expectedBar];
                }

                expect(entry.metadata).toEqual(expectedMetadata);
                expect(entry.peer.userAgent).toEqual(expectedUserAgent);
              },
            );
          },
        );
      },
    );
  });
});
