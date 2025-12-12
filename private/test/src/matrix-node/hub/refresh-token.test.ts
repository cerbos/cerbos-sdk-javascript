import { afterEach, beforeAll, describe, expect, it, vitest } from "vitest";

import type { ListFilesResponse } from "@cerbos/hub";

import { Server } from "./server";

describe("access token rotation", () => {
  const server = new Server();

  beforeAll(async () => {
    await server.start();
  });

  afterEach(() => {
    server.reset();
    vitest.useRealTimers();
  });

  it("refreshes access tokens 5 minutes before expiry", async () => {
    vitest.useFakeTimers();

    const client = server.storesClient();

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

    vitest.advanceTimersByTime(54 * 60 * 1e3);

    server.expectListFiles("let-me-in", { storeId: "MWPKEMFX3CK1" }, () => ({
      storeVersion: 2n,
      files: ["_schema/resource.json", "policy.yaml"],
    }));

    expect(await client.listFiles({ storeId: "MWPKEMFX3CK1" })).toEqual({
      storeVersion: 2n,
      files: ["_schema/resource.json", "policy.yaml"],
    } satisfies ListFilesResponse);

    vitest.advanceTimersByTime(60 * 1e3);

    server.expectIssueAccessToken(() => ({
      accessToken: "let-me-in-again",
      expiresIn: { seconds: 60n * 60n },
    }));

    server.expectListFiles(
      "let-me-in-again",
      { storeId: "MWPKEMFX3CK1" },
      () => ({
        storeVersion: 3n,
        files: ["_schema/resource.json"],
      }),
    );

    expect(await client.listFiles({ storeId: "MWPKEMFX3CK1" })).toEqual({
      storeVersion: 3n,
      files: ["_schema/resource.json"],
    } satisfies ListFilesResponse);
  });
});
