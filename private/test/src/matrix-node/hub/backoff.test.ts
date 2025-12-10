import { Code, ConnectError } from "@connectrpc/connect";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vitest,
} from "vitest";

import { NotOK, Status } from "@cerbos/core";
import type { ListFilesResponse } from "@cerbos/hub";

import { Server } from "./server";

describe("authentication failure", () => {
  const server = new Server();

  beforeAll(async () => {
    await server.start();
  });

  afterEach(() => {
    server.reset();
    vitest.useRealTimers();
  });

  afterAll(async () => {
    await server.stop();
  });

  it("backs off", async () => {
    vitest.useFakeTimers();

    const client = server.storesClient();

    server.expectIssueAccessToken(() => {
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

    vitest.advanceTimersByTime(200);

    try {
      await client.listFiles({ storeId: "MWPKEMFX3CK1" });
      expect.unreachable();
    } catch (error) {
      expect(error).toBeInstanceOf(NotOK);
      expect(error).toMatchObject({
        code: Status.CANCELLED,
        details: expect.stringContaining(
          "Previous authentication attempt failed, backing off",
        ),
      });

      const { cause } = error as NotOK;
      expect(cause).toBeInstanceOf(NotOK);
      expect(cause).toMatchObject({
        code: Status.UNAVAILABLE,
        details: "down",
      });
    }

    vitest.advanceTimersByTime(600);

    server.expectIssueAccessToken(() => {
      throw new ConnectError("abort", Code.Aborted);
    });

    try {
      await client.listFiles({ storeId: "MWPKEMFX3CK1" });
      expect.unreachable();
    } catch (error) {
      expect(error).toBeInstanceOf(NotOK);
      expect(error).toMatchObject({
        code: Status.ABORTED,
        details: "abort",
      });
    }

    server.expectIssueAccessToken(() => ({
      accessToken: "let-me-in",
      expiresIn: { seconds: 60n * 60n },
    }));

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
