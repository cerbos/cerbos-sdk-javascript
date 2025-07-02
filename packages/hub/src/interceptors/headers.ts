import type { Interceptor } from "@connectrpc/connect";

import type { Options } from "@cerbos/core";

import { createInterceptor } from "./interceptor";

const { version } = require("../../package.json") as { version: string };

const defaultUserAgent = `cerbos-sdk-javascript-hub/${version}`;

export function createHeadersInterceptor({
  headers: init,
  userAgent,
}: Pick<Options, "headers" | "userAgent">): Interceptor {
  return createInterceptor(async (request, next) => {
    const headers = new Headers(
      typeof init === "function" ? await init() : init,
    );

    for (const [name, value] of headers) {
      if (!request.header.has(name)) {
        request.header.set(name, value);
      }
    }

    request.header.set(
      "User-Agent",
      `${userAgent ? `${userAgent} ` : ""}${defaultUserAgent}`,
    );

    return await next(request);
  });
}
