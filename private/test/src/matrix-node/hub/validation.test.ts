import { afterEach, beforeAll, describe, expect, it } from "vitest";

import { NotOK, Status } from "@cerbos/core";

import { Server } from "./server";

describe("request validation", () => {
  const server = new Server();

  beforeAll(async () => {
    await server.start();
  });

  afterEach(() => {
    server.reset();
  });

  it("doesn't send invalid requests to the server", async () => {
    const client = server.storesClient();

    try {
      await client.listFiles({ storeId: "" });
      expect.unreachable();
    } catch (error) {
      expect(error).toBeInstanceOf(NotOK);
      expect(error).toMatchObject({
        code: Status.INVALID_ARGUMENT,
        details: "store_id: value length must be 12 characters [string.len]",
      });
    }
  });
});
