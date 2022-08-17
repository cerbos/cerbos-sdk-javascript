import type { Condition } from "./Condition";
import type { Effect } from "./Effect";

/**
 * An override for a given action for a specific user.
 *
 * @public
 */
export interface PrincipalRuleAction {
  /**
   * The action to override.
   *
   * @remarks
   * Wildcards are supported.
   */
  action: string;

  /**
   * The effect of the override.
   */
  effect: Effect;

  /**
   * The condition that must be met for the override to apply.
   */
  condition?: Condition | undefined;

  /**
   * A descriptive name for the rule.
   */
  name?: string;
}
