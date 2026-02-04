import { CircuitBreaker } from "../circuit-breaker.js";

import type { Handler, Request, Response } from "./interceptor.js";
import { createInterceptor } from "./interceptor.js";

const circuitBreaker = new CircuitBreaker<[Request, Handler], Response>(
  async (request, next) => await next(request),
);

export const errorInterceptor = createInterceptor(
  async (request, next) => await circuitBreaker.call(request, next),
);
