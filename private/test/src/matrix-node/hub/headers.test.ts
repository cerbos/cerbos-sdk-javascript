import { afterEach, beforeAll, describe, expect, it } from "vitest";

import type { ListFilesResponse } from "@cerbos/hub";

import { Server } from "./server.js";

const { version } = require("../../../../../packages/hub/package.json") as {
  version: string;
};

describe("headers", () => {
  const server = new Server();

  beforeAll(async () => {
    await server.start();
  });

  afterEach(() => {
    server.reset();
  });

  const userAgentTestCases = [
    {
      description: "custom",
      userAgent: "test/9000",
      expectedUserAgent: `test/9000 cerbos-sdk-javascript-hub/${version}`,
    },
    {
      description: "default",
      userAgent: undefined,
      expectedUserAgent: `cerbos-sdk-javascript-hub/${version}`,
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

  describe.each(userAgentTestCases)(
    "with $description user agent",
    ({ userAgent, expectedUserAgent }) => {
      describe.each(clientHeadersTestCases)(
        "with headers option set to $description",
        ({ clientHeaders, expectedFoo }) => {
          it.each(requestHeadersTestCases)(
            "$title",
            async ({
              requestHeaders,
              expectedFoo: expectedFooOverride,
              expectedBar,
            }) => {
              const client = server.storesClient({
                headers: clientHeaders,
                userAgent,
              });

              server.expectIssueAccessToken(
                () => ({
                  accessToken: "let-me-in",
                  expiresIn: { seconds: 60n * 60n },
                }),
                {
                  foo: expectedFoo ?? null,
                  "user-agent": expectedUserAgent,
                },
              );

              server.expectListFiles(
                "let-me-in",
                { storeId: "MWPKEMFX3CK1" },
                () => ({
                  storeVersion: 1n,
                  files: ["policy.yaml"],
                }),
                {
                  foo: expectedFooOverride ?? expectedFoo ?? null,
                  bar: expectedBar ?? null,
                  "user-agent": expectedUserAgent,
                },
              );

              expect(
                await client.listFiles(
                  { storeId: "MWPKEMFX3CK1" },
                  { headers: requestHeaders },
                ),
              ).toEqual({
                storeVersion: 1n,
                files: ["policy.yaml"],
              } satisfies ListFilesResponse);
            },
          );
        },
      );
    },
  );
});
