import type { ChannelOptions as Theirs } from "@grpc/grpc-js";
import { describe, expectTypeOf, it } from "vitest";

import type { ChannelOptions as Ours } from "@cerbos/grpc";

type UnsupportedOptions =
  | "grpc.default_compression_algorithm" // set using `compression` option
  | "grpc.http_connect_creds" // internal use
  | "grpc.http_connect_target" // internal use
  | "grpc.max_concurrent_streams" // server-only
  | "grpc.max_connection_age_grace_ms" // server-only
  | "grpc.max_connection_age_ms" // server-only
  | "grpc.max_connection_idle_ms" // server-only
  | "grpc.primary_user_agent" // set using `userAgent` option
  | "grpc.secondary_user_agent" // set using `userAgent` option
  | "grpc-node.max_session_memory"; // server-only

describe("ChannelOptions", () => {
  it("is compatible with the supported upstream options", () => {
    expectTypeOf<Ours>().toEqualTypeOf<{
      [K in keyof Theirs as string extends K
        ? never
        : K extends UnsupportedOptions
          ? never
          : K]?: Theirs[K] | undefined;
    }>();
  });
});
