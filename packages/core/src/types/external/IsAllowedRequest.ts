import type { CheckResourceRequest } from "./CheckResourceRequest";

/**
 * Input to {@link @cerbos/core#Client.isAllowed}.
 *
 * @public
 */
export type IsAllowedRequest = Omit<CheckResourceRequest, "actions"> & {
  action: string;
};
