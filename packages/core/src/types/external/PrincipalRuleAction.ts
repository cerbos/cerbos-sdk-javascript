import type { Condition } from "./Condition";
import type { Effect } from "./Effect";
import type { Output } from "./Output";

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

  /**
   * User-defined output to be produced when evaluating the rule.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.27.
   */
  output?: Output | undefined;
}
