import type { CheckResourcesRequest } from "./CheckResourcesRequest";
import type { ResourceCheck } from "./ResourceCheck";

/**
 * Input to {@link @cerbos/core#Client.checkResource}.
 *
 * @public
 */
export type CheckResourceRequest = Omit<CheckResourcesRequest, "resources"> &
  ResourceCheck;
