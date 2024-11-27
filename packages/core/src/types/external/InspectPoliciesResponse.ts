import type { InspectedPolicy } from "./InspectedPolicy";

/**
 * Details of policies in the store.
 *
 * @public
 */
export interface InspectPoliciesResponse {
  /**
   * Details of policies in the store, by ID.
   */
  policies: Record<string, InspectedPolicy>;
}
