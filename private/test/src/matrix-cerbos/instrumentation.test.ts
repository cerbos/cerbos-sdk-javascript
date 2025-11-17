import { GRPC } from "@cerbos/grpc";
import { HTTP } from "@cerbos/http";

import { testInstrumentation } from "../client/instrumentation";
import type { CerbosPorts, Ports } from "../servers";
import {
  adminCredentials,
  cerbosVersion,
  tls,
  versionIsAtLeast,
} from "../servers";

function cerbosPorts(ports: Ports): CerbosPorts {
  return versionIsAtLeast("0.30.0", cerbosVersion) &&
    !versionIsAtLeast("0.32.0", cerbosVersion)
    ? ports.tracing
    : ports.tls;
}

testInstrumentation(
  {
    type: "gRPC",
    client: (ports) =>
      new GRPC(`localhost:${cerbosPorts(ports).grpc}`, {
        tls: tls(),
        adminCredentials,
      }),
  },
  {
    type: "HTTP",
    client: (ports) =>
      new HTTP(`https://localhost:${cerbosPorts(ports).http}`, {
        adminCredentials,
      }),
  },
);
