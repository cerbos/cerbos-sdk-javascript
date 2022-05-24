import "./fetch-polyfill";

import { Client } from "@cerbos/core";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";
import { beforeAll, describe, expect, it } from "@jest/globals";

import { Ports, cerbosVersion, ports as serverPorts } from "./servers";

describe("client", () => {
  let ports: Ports;

  beforeAll(async () => {
    ports = await serverPorts();
  });

  const cases = [
    {
      type: "gRPC | TCP | plaintext",
      client: (): Client => new GRPC(`localhost:${ports.grpc.plaintext}`),
    },
    {
      type: "HTTP",
      client: (): Client => new HTTP(`http://localhost:${ports.http}`),
    },
  ];

  describe.each(cases)("$type", ({ client }: typeof cases[number]) => {
    describe("serverInfo", () => {
      it("returns information about the server", async () => {
        const result = await client().serverInfo();

        expect(result).toEqual({
          buildDate: expect.stringMatching(
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/
          ) as unknown,
          commit: expect.stringMatching(/^[0-9a-f]{40}$/) as unknown,
          version: cerbosVersion,
        });
      });
    });
  });
});
