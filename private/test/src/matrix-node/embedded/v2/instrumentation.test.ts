import { readFile } from "fs/promises";
import { resolve } from "path";

import { UnsecuredJWT } from "jose";

import type { DecodedJWTPayload } from "@cerbos/embedded-client";
import { Embedded } from "@cerbos/embedded-client";
import { metadata } from "@cerbos/embedded-server";

import { testInstrumentation } from "../../../client/instrumentation";

testInstrumentation({
  type: "embedded | v2",
  embedded: "v2",
  cerbosVersion: metadata.cerbosVersion,
  client: () =>
    new Embedded({
      policies: readFile(
        resolve(__dirname, "../../../../bundles/PS2MX9855QURB3Y8.crrt"),
      ),
      wasm: readFile(require.resolve("@cerbos/embedded-server/server.wasm")),
      decodeJWTPayload: ({ token }): DecodedJWTPayload =>
        UnsecuredJWT.decode(token).payload as DecodedJWTPayload,
      globals: {
        allow_deletion: true,
      },
    }),
});
