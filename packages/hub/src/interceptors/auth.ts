import type { Interceptor } from "@connectrpc/connect";

import type { Credentials } from "../credentials";

import { createInterceptor } from "./interceptor";

export function createAuthInterceptor(credentials: Credentials): Interceptor {
  return createInterceptor(async (request, next) => {
    request.header.set(
      "x-cerbos-auth",
      await credentials._issueAccessToken(request.signal),
    );

    return await next(request);
  });
}
