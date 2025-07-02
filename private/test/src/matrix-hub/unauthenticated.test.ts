import { Code, ConnectError } from "@connectrpc/connect";
import { afterEach, beforeAll, describe, expect, it } from "vitest";

import { NotOK, Status } from "@cerbos/core";

import { Server } from "./server";

describe("with invalid credentials", () => {
  const server = new Server();

  beforeAll(async () => {
    await server.start();
  });

  afterEach(() => {
    server.reset();
  });

  it("only tries to issue access token once", async () => {
    const client = server.client();

    server.expectIssueAccessToken(() => {
      throw new ConnectError("wrong", Code.Unauthenticated);
    });

    try {
      await client.listFiles({ storeId: "MWPKEMFX3CK1" });
      expect.unreachable();
    } catch (error) {
      expect(error).toBeInstanceOf(NotOK);
      expect(error).toMatchObject({
        code: Status.UNAUTHENTICATED,
        details: "wrong",
      });
    }

    try {
      await client.listFiles({ storeId: "MWPKEMFX3CK1" });
      expect.unreachable();
    } catch (error) {
      expect(error).toBeInstanceOf(NotOK);
      expect(error).toMatchObject({
        code: Status.UNAUTHENTICATED,
        details: "wrong",
      });
    }
  });
});
