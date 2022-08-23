import type { OmitFromEach } from "../internal";

import type { Policy } from "./Policy";

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
