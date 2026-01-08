import type { PrincipalRuleAction } from "./PrincipalRuleAction.js";

/**
 * A rule defining an override for a specific user.
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
