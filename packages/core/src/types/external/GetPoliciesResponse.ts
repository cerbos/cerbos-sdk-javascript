import type { Policy } from "./Policy";

/**
 * Fetched policies.
 *
 * @public
 */
export interface GetPoliciesResponse {
  policies: Policy[];
}
