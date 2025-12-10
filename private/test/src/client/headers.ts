import { beforeAll, describe, expect, it } from "vitest";

import type {
  Awaitable,
  Client,
  DecisionLogEntry,
  Options,
} from "@cerbos/core";

export interface HeadersTestCase {
  type: string;
  client: (options: Pick<Options, "headers" | "userAgent">) => Client;
  defaultUserAgent: string;
  getDecisionLogEntry: (callId: string) => Awaitable<DecisionLogEntry>;
}

export function testHeaders(...cases: HeadersTestCase[]): void {
  describe("headers", () => {
    const clientUserAgentTestCases = [
      {
        description: "default",
        clientUserAgent: undefined,
        expectedUserAgent: (defaultUserAgent: string): string =>
          defaultUserAgent,
      },
      {
        description: "custom",
        clientUserAgent: "test/9000",
        expectedUserAgent: (defaultUserAgent: string): string =>
          `test/9000 ${defaultUserAgent}`,
      },
    ];

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
        } as HeadersInit,
        expectedBar: "99",
      },
      {
        title: "overrides client-wide headers with per-request headers",
        requestHeaders: {
          Foo: "43",
          Bar: "99",
          "User-Agent": "ignored again",
        } as HeadersInit,
        expectedFoo: "43",
        expectedBar: "99",
      },
    ];

    const clientTestCases = cases.map(
      ({ defaultUserAgent, ...clientTestCase }) => ({
        ...clientTestCase,
        clientUserAgentTestCases: clientUserAgentTestCases.map(
          ({ expectedUserAgent, ...clientUserAgentTestCase }) => ({
            ...clientUserAgentTestCase,
            expectedUserAgent: expectedUserAgent(defaultUserAgent),
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
          }),
        ),
      }),
    );

    beforeAll(async () => {
      await Promise.all(
        clientTestCases.flatMap(
          ({ client: factory, clientUserAgentTestCases }) =>
            clientUserAgentTestCases.flatMap(
              ({ clientUserAgent, clientHeadersTestCases }) =>
                clientHeadersTestCases.flatMap(
                  ({ clientHeaders, requestHeadersTestCases }) => {
                    const client = factory({
                      headers: clientHeaders,
                      userAgent: clientUserAgent,
                    });

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
        ),
      );
    });

    describe.each(clientTestCases)(
      "$type",
      ({ clientUserAgentTestCases, getDecisionLogEntry }) => {
        describe.each(clientUserAgentTestCases)(
          "with $description user agent",
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
                    const entry = await getDecisionLogEntry(callId);

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
      },
    );
  });
}
