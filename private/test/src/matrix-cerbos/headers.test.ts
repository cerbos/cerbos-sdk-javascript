import { beforeAll } from "vitest";

import type { Client, DecisionLogEntry } from "@cerbos/core";
import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";

import { testHeaders } from "../client/headers";
import {
  describeIfVersionIsAtLeast,
  getDecisionLogEntry as getDecisionLogEntryFromPDP,
  grpcUserAgent,
  httpUserAgent,
} from "../helpers";
import type { Ports } from "../servers";
import {
  adminCredentials,
  cerbosVersion,
  ports as serverPorts,
  tls,
} from "../servers";

// Prior to 0.33.0, the minimum flushInterval for audit logs was 5s, which makes this painfully slow.
describeIfVersionIsAtLeast("0.33.0", cerbosVersion)("Client", () => {
  let ports: Ports;
  let admin: Client;

  beforeAll(async () => {
    ports = await serverPorts();
    admin = new GRPC(`localhost:${ports.tls.grpc}`, {
      tls: tls(),
      adminCredentials,
    });
  });

  async function getDecisionLogEntry(
    callId: string,
  ): Promise<DecisionLogEntry> {
    return await getDecisionLogEntryFromPDP(admin, callId);
  }

  testHeaders(
    {
      type: "gRPC",
      client: (options) =>
        new GRPC(`localhost:${ports.tls.grpc}`, {
          ...options,
          tls: tls(),
        }),
      defaultUserAgent: grpcUserAgent,
      getDecisionLogEntry,
    },
    {
      type: "HTTP",
      client: (options) =>
        new HTTP(`https://localhost:${ports.tls.http}`, options),
      defaultUserAgent: httpUserAgent,
      getDecisionLogEntry,
    },
  );
});
