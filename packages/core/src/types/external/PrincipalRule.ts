import type { PrincipalRuleAction } from "./PrincipalRuleAction";

/**
 * A rule defining an override for a specific user.
 *
 * @public
 */
export interface PrincipalRule {
  /**
   * The resource to which the override applies.
   */
  resource: string;

  /**
   * The actions to which the override applies.
   */
  actions: PrincipalRuleAction[];
}
