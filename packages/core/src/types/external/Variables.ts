/**
 * {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#variables | Variables} defined for use in policy conditions.
 */
export interface Variables {
  /**
   * Names of variable sets to import.
   */
  import?: string[] | undefined;

  /**
   * Variable expressions defined for the policy.
   */
  local?: Record<string, string> | undefined;
}
