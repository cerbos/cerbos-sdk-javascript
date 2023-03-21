import type { IncomingHttpHeaders } from "http";
import { createServer } from "http";
import type { AddressInfo } from "net";

import { HTTP } from "@cerbos/http";
import { describe, expect, it } from "@jest/globals";

// eslint-disable-next-line @typescript-eslint/no-var-requires -- Can't import package.json because it is outside of the project's rootDir
const { version } = require("../../http/package.json") as { version: string };

describe("HTTP", () => {
  describe.each([
    {
      description: "an object",
      headers: {
        Foo: "bar",
        "User-Agent": "test/9000",
      },
      expected: {
        foo: "bar",
        "user-agent": `test/9000, cerbos-sdk-javascript-http/${version}`,
      },
    },
    {
      description: "a function",
      headers: (): HeadersInit => ({
        Foo: "bar",
        "User-Agent": "test/9000",
      }),
      expected: {
        foo: "bar",
        "user-agent": `test/9000, cerbos-sdk-javascript-http/${version}`,
      },
    },
    {
      description: "undefined",
      headers: undefined,
      expected: {
        "user-agent": `cerbos-sdk-javascript-http/${version}`,
      },
    },
  ])("with headers option set to $description", ({ headers, expected }) => {
    it("adds headers to every request", async () => {
      let resolveActual: (value: IncomingHttpHeaders) => void;
      const actual = new Promise<IncomingHttpHeaders>((resolve) => {
        resolveActual = resolve;
      });

      const server = createServer((request, response) => {
        resolveActual(request.headers);
        response.write("{}");
        response.end();
      });

      const port = await new Promise<number>((resolve) => {
        server.listen(0, () => {
          resolve((server.address() as AddressInfo).port);
        });
      });

      try {
        const client = new HTTP(`http://localhost:${port}`, { headers });

        await client.serverInfo();

        expect(await actual).toMatchObject(expected);
      } finally {
        await new Promise((resolve) => {
          server.close(resolve);
        });
      }
    });
  });
});
