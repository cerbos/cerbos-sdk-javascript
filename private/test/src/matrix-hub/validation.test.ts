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
    const client = server.client();

    try {
      await client.listFiles({ storeId: "" });
      expect.unreachable();
    } catch (error) {
      expect(error).toBeInstanceOf(NotOK);
      expect(error).toMatchObject({
        code: Status.INVALID_ARGUMENT,
        details: "Invalid request",
      });
    }
  });
});
