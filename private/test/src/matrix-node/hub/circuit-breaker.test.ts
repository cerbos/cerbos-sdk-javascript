import { Code, ConnectError } from "@connectrpc/connect";
import { afterEach, beforeAll, describe, expect, it, vitest } from "vitest";

import { NotOK, Status } from "@cerbos/core";
import type { ListFilesResponse } from "@cerbos/hub";

import { Server } from "./server.js";

describe("repeated failures", () => {
  const server = new Server();

  beforeAll(async () => {
    await server.start();
  });

  afterEach(() => {
    server.reset();
    vitest.useRealTimers();
  });

  it("backs off", async () => {
    vitest.useFakeTimers();

    const client = server.storesClient();

    server.expectIssueAccessToken(() => ({
      accessToken: "let-me-in",
      expiresIn: { seconds: 60n * 60n },
    }));

    for (let i = 1; i <= 4; i++) {
      server.expectListFiles("let-me-in", { storeId: "MWPKEMFX3CK1" }, () => {
        throw new ConnectError("down", Code.Unavailable);
      });

      try {
        await client.listFiles({ storeId: "MWPKEMFX3CK1" });
        expect.unreachable();
      } catch (error) {
        expect(error).toBeInstanceOf(NotOK);
        expect(error).toMatchObject({
          code: Status.UNAVAILABLE,
          details: "down",
        });
      }
    }

    try {
      await client.listFiles({ storeId: "MWPKEMFX3CK1" });
      expect.unreachable();
    } catch (error) {
      expect(error).toBeInstanceOf(NotOK);
      expect(error).toMatchObject({
        code: Status.CANCELLED,
        details: "Too many failures",
      });
    }

    vitest.advanceTimersByTime(60 * 1e3);

    server.expectListFiles("let-me-in", { storeId: "MWPKEMFX3CK1" }, () => ({
      storeVersion: 1n,
      files: ["policy.yaml"],
    }));

    expect(await client.listFiles({ storeId: "MWPKEMFX3CK1" })).toEqual({
      storeVersion: 1n,
      files: ["policy.yaml"],
    } satisfies ListFilesResponse);
  });
});
