/**
 * {@link https://docs.cerbos.dev/cerbos/latest/policies/conditions | Common Expression Language} expressions to evaluate to produce {@link https://docs.cerbos.dev/cerbos/latest/policies/outputs | user-defined output} from a policy rule.
 */
export interface OutputExpressions {
  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/conditions | Common Expression Language} expression to evaluate when the policy rule is fully activated
   * (action, roles, and derived roles match, and condition is met).
   */
  ruleActivated?: string | undefined;

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/conditions | Common Expression Language} expression to evaluate when the policy rule is partially activated
   * (action, roles, and derived roles match, but condition is not met).
   */
  conditionNotMet?: string | undefined;
}
