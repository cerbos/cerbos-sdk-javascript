import type { CheckResourceRequest } from "./CheckResourceRequest.js";

/**
 * Input to {@link @cerbos/core!Client.isAllowed}.
 */
export type IsAllowedRequest = Omit<CheckResourceRequest, "actions"> & {
  /**
   * The action to check.
   */
  action: string;
};
