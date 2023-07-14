/**
 * {@link https://docs.cerbos.dev/cerbos/prerelease/policies/variables.html | Variables} defined for use in policy conditions.
 *
 * @public
 */
export interface Variables {
  /**
   * Names of variable sets to import.
   */
  import?: string[];

  /**
   * Variable expressions defined for the policy.
   */
  local?: Record<string, string>;
}
