import type { CheckResourceRequest } from "./CheckResourceRequest.js";

/**
 * Input to {@link Client.isAllowed}.
 */
export type IsAllowedRequest = Omit<CheckResourceRequest, "actions"> & {
  /**
   * The action to check.
   */
  action: string;
};
