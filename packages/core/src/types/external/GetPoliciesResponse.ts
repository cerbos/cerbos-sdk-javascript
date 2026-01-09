import type { Policy } from "./Policy.js";

/**
 * Fetched policies.
 */
export interface GetPoliciesResponse {
  /**
   * The policies fetched from the policy decision point server.
   */
  policies: Policy[];
}
