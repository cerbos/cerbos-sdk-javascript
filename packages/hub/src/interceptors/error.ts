import CircuitBreaker from "opossum";

import { NotOK, Status } from "@cerbos/core";

import { errorCode } from "../errors/internal";

import type { Handler, Request, Response } from "./interceptor";
import { createInterceptor } from "./interceptor";

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
      throw new NotOK(Status.CANCELLED, "Too many failures", { cause: error });
    }

    throw error;
  }
});
