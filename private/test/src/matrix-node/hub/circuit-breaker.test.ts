import { Code, ConnectError } from "@connectrpc/connect";
import { describe, expect, it, vitest } from "vitest";

import { NotOK, Status } from "@cerbos/core";
import type { ListFilesResponse } from "@cerbos/hub";

describe("repeated failures", () => {
  it("trips the circuit breaker", async () => {
    vitest.useFakeTimers();

    const { Server } = await import("./server.js");

    const server = new Server();

    await server.start();

    const client = server.storesClient();

    async function expectUp(): Promise<void> {
      server.expectListFiles("let-me-in", { storeId: "MWPKEMFX3CK1" }, () => ({
        storeVersion: 1n,
        files: ["policy.yaml"],
      }));

      expect(await client.listFiles({ storeId: "MWPKEMFX3CK1" })).toEqual({
        storeVersion: 1n,
        files: ["policy.yaml"],
      } satisfies ListFilesResponse);
    }

    async function expectDown(): Promise<void> {
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

    async function expectCancelled(): Promise<void> {
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
    }

    server.expectIssueAccessToken(() => ({
      accessToken: "let-me-in",
      expiresIn: { seconds: 60n * 60n },
    }));

    await expectDown();
    await expectDown();
    await expectDown();

    vitest.advanceTimersByTime(15 * 1e3);

    await expectDown();
    await expectUp();
    await expectDown();
    await expectUp();
    await expectDown();
    await expectCancelled();

    vitest.advanceTimersByTime(60 * 1e3);

    await expectDown();
    await expectCancelled();

    vitest.advanceTimersByTime(60 * 1e3);

    await expectUp();
    await expectDown();
    await expectDown();
    await expectDown();

    server.reset();
  });
});
