import { Code, ConnectError } from "@connectrpc/connect";
import CircuitBreaker from "opossum";

import { Status } from "@cerbos/core";

import { errorCode } from "../errors/internal.js";

import type { Handler, Request, Response } from "./interceptor.js";
import { createInterceptor } from "./interceptor.js";

const circuitBreaker = new CircuitBreaker<[Request, Handler], Response>(
  async (request, next) => await next(request),
  {
    errorFilter,
    errorThresholdPercentage: 60,
    rollingCountTimeout: 15 * 1e3,
    resetTimeout: 60 * 1e3,
    timeout: false,
    volumeThreshold: 5,
  },
);

const ignoredStatuses = new Set([
  Status.ABORTED,
  Status.ALREADY_EXISTS,
  Status.CANCELLED,
  Status.DEADLINE_EXCEEDED,
  Status.FAILED_PRECONDITION,
]);

function errorFilter(error: unknown): boolean {
  return ignoredStatuses.has(errorCode(error));
}

export const errorInterceptor = createInterceptor(async (request, next) => {
  try {
    return await circuitBreaker.fire(request, next);
  } catch (error) {
    if (error instanceof Error && CircuitBreaker.isOurError(error)) {
      throw new ConnectError(
        "Too many failures",
        Code.Canceled,
        undefined,
        undefined,
        error,
      );
    }

    throw error;
  }
});
