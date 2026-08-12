import { readFile } from "fs/promises";
import { resolve } from "path";

import { UnsecuredJWT } from "jose";

import type { DecodedJWTPayload } from "@cerbos/embedded-client";
import { Embedded } from "@cerbos/embedded-client";
import { metadata } from "@cerbos/embedded-server";

import { testInstrumentation } from "../../client/instrumentation.js";
import { readEmbeddedServerWASM } from "../../helpers.js";

testInstrumentation({
  type: "embedded",
  embedded: true,
  cerbosVersion: metadata.cerbosVersion,
  client: () =>
    new Embedded({
      policies: readFile(
        resolve(__dirname, "../../../bundles/SWFF3MKI4L1ACYAV.crrt"),
      ),
      wasm: readEmbeddedServerWASM(),
      decodeJWTPayload: ({ token }): DecodedJWTPayload =>
        UnsecuredJWT.decode(token).payload as DecodedJWTPayload,
      globals: {
        allow_deletion: true,
      },
    }),
});
