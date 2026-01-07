import type { OmitFromEach } from "../internal.js";

import type { Policy } from "./Policy.js";

/**
 * Input to {@link @cerbos/core#Client.addOrUpdatePolicies}.
 *
 * @public
 */
export interface AddOrUpdatePoliciesRequest {
  /**
   * A set of policies to add or update.
   */
  policies: OmitFromEach<Policy, "metadata">[];
}
