import type { Policy } from "./Policy.js";

/**
 * Fetched policies.
 *
 * @public
 */
export interface GetPoliciesResponse {
  policies: Policy[];
}
