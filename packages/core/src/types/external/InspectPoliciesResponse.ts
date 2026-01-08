import type { InspectedPolicy } from "./InspectedPolicy.js";

/**
 * Details of policies in the store.
 */
export interface InspectPoliciesResponse {
  /**
   * Details of policies in the store, by ID.
   */
  policies: Record<string, InspectedPolicy>;
}
