/**
 * Details of a violation of the policy store's integrity caused by attempting to disable or delete a policy.
 */
export interface PolicyStoreIntegrityViolation {
  /**
   * Disabling or deleting the policy breaks the scope chain.
   */
  breaksScopeChain: PolicyStoreIntegrityViolationBreaksScopeChain | undefined;

  /**
   * The policy cannot be disabled or deleted because it is required by other policies.
   */
  requiredByOtherPolicies:
    | PolicyStoreIntegrityViolationRequiredByOtherPolicies
    | undefined;
}

/**
 * Disabling or deleting the policy breaks the scope chain.
 */
export interface PolicyStoreIntegrityViolationBreaksScopeChain {
  /**
   * IDs of policies further down the scope chain.
   */
  descendants: string[];
}

/**
 * The policy cannot be disabled or deleted because it is required by other policies.
 */
export interface PolicyStoreIntegrityViolationRequiredByOtherPolicies {
  /**
   * IDs of policies that depend on the one being disabled or deleted.
   */
  dependents: string[];
}
