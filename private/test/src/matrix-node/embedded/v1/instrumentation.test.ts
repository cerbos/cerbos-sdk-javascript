import { readFileSync } from "fs";

import { UnsecuredJWT } from "jose";

import type { DecodedJWTPayload } from "@cerbos/embedded";
import { Embedded } from "@cerbos/embedded";

import { testInstrumentation } from "../../../client/instrumentation.js";
import { newEmbeddedBundle, oldEmbeddedBundle } from "../../../helpers.js";

testInstrumentation(
  {
    type: "embedded | v1 | old bundle",
    embedded: "v1",
    client: () =>
      new Embedded(readFileSync(oldEmbeddedBundle.path), {
        decodeJWTPayload: ({ token }): DecodedJWTPayload =>
          UnsecuredJWT.decode(token).payload as DecodedJWTPayload,
      }),
  },
  {
    type: "embedded | v1 | new bundle",
    embedded: "v1",
    client: () =>
      new Embedded(readFileSync(newEmbeddedBundle.path), {
        decodeJWTPayload: ({ token }): DecodedJWTPayload =>
          UnsecuredJWT.decode(token).payload as DecodedJWTPayload,
      }),
  },
);
