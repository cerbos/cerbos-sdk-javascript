import type { OmitFromEach } from "../internal.js";

import type { Policy } from "./Policy.js";

/**
 * Input to {@link Client.addOrUpdatePolicies}.
 */
export interface AddOrUpdatePoliciesRequest {
  /**
   * A set of policies to add or update.
   */
  policies: OmitFromEach<Policy, "metadata">[];
}
