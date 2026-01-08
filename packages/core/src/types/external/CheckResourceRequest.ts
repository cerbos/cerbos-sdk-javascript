import type { CheckResourcesRequest } from "./CheckResourcesRequest.js";
import type { ResourceCheck } from "./ResourceCheck.js";

/**
 * Input to {@link @cerbos/core!Client.checkResource}.
 */
export type CheckResourceRequest = Omit<CheckResourcesRequest, "resources"> &
  ResourceCheck;
