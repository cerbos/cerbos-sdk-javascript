import type { CheckResourcesRequest } from "./CheckResourcesRequest.js";
import type { ResourceCheck } from "./ResourceCheck.js";

/**
 * Input to {@link Client.checkResource}.
 */
export type CheckResourceRequest = Omit<CheckResourcesRequest, "resources"> &
  ResourceCheck;
