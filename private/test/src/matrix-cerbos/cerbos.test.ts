import { resolve } from "path";

import { beforeAll, describe } from "vitest";

import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";

import type { CerbosServiceClientTestCase } from "../client/cerbos.js";
import { testCerbosServiceClient } from "../client/cerbos.js";
import type { Ports } from "../servers.js";
import { mtls, ports as serverPorts, tls } from "../servers.js";

describe("Client", () => {
  let ports: Ports;

  beforeAll(async () => {
    ports = await serverPorts();
  });

  describe("cerbos", () => {
    const cases: CerbosServiceClientTestCase[] = [
      {
        type: "gRPC | TCP | plaintext",
        client: (options) =>
          new GRPC(`localhost:${ports.plaintext.grpc}`, {
            ...options,
            tls: false,
          }),
        adminServiceEnabled: false,
      },
      {
        type: "gRPC | TCP | TLS",
        client: (options) =>
          new GRPC(`localhost:${ports.tls.grpc}`, {
            ...options,
            tls: tls(),
          }),
        adminServiceEnabled: true,
      },
      {
        type: "gRPC | TCP | mTLS",
        client: (options) =>
          new GRPC(`localhost:${ports.mtls}`, {
            ...options,
            tls: mtls(),
          }),
        adminServiceEnabled: false,
      },
      {
        type: "HTTP",
        client: (options) =>
          new HTTP(`http://localhost:${ports.plaintext.http}`, options),
        adminServiceEnabled: false,
      },
    ];

    if (process.platform === "linux") {
      cases.push({
        type: "gRPC | Unix socket | plaintext",
        client: (options) =>
          new GRPC(
            `unix:${resolve(__dirname, "../../servers/tmp/socket/cerbos")}`,
            {
              ...options,
              tls: false,
            },
          ),
        adminServiceEnabled: false,
      });
    }

    testCerbosServiceClient(...cases);
  });
});
