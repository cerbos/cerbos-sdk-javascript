import "./fetch-polyfill";

import { readFileSync } from "fs";
import { resolve } from "path";
import { createSecureContext } from "tls";

import { Client } from "@cerbos/core";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";
import { beforeAll, describe, expect, it } from "@jest/globals";

import { Ports, cerbosVersion, ports as serverPorts } from "./servers";

const readPEM = (filename: string): string =>
  readFileSync(resolve(__dirname, "../servers/tmp/certificates", filename), {
    encoding: "utf-8",
  });

describe("client", () => {
  let ports: Ports;

  beforeAll(async () => {
    ports = await serverPorts();
  });

  const cases = [
    {
      type: "gRPC | TCP | plaintext",
      client: (): Client =>
        new GRPC(`localhost:${ports.grpc.plaintext}`, { tls: false }),
    },
    {
      type: "gRPC | TCP | TLS",
      client: (): Client =>
        new GRPC(`localhost:${ports.grpc.tls}`, {
          tls: createSecureContext({
            ca: readPEM("server.root.crt"),
          }),
        }),
    },
    {
      type: "gRPC | TCP | mTLS",
      client: (): Client =>
        new GRPC(`localhost:${ports.grpc.mtls}`, {
          tls: createSecureContext({
            ca: readPEM("server.root.crt"),
            cert: readPEM("client.crt"),
            key: readPEM("client.key"),
          }),
        }),
    },
    {
      type: "HTTP",
      client: (): Client => new HTTP(`http://localhost:${ports.http}`),
    },
  ];

  if (process.platform === "linux") {
    cases.push({
      type: "gRPC | Unix socket | plaintext",
      client: (): Client =>
        new GRPC(`unix:${resolve(__dirname, "../servers/tmp/socket/cerbos")}`, {
          tls: false,
        }),
    });
  }

  describe.each(cases)("$type", ({ client: factory }: typeof cases[number]) => {
    let client: Client;

    beforeAll(() => {
      client = factory();
    });

    describe("serverInfo", () => {
      it("returns information about the server", async () => {
        const result = await client.serverInfo();

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
