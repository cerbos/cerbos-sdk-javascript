import type { Value } from "./Value.js";

/**
 * {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#constants | Constants} defined for use in policy conditions.
 */
export interface Constants {
  /**
   * Names of constant sets to import.
   */
  import?: string[] | undefined;

  /**
   * Constant values defined for the policy.
   */
  local?: Record<string, Value> | undefined;
}
