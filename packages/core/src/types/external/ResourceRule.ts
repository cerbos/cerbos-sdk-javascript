import type { Condition } from "./Condition";
import type { Effect } from "./Effect";
import type { Output } from "./Output";

/**
 * A rule for actions that can be performed on a given resource.
 *
 * @public
 */
export interface ResourceRule {
  /**
   * The actions to which the rule applies.
   *
   * @remarks
   * Actions can contain wildcards. Wildcards honour the `:` delimiter (e.g. `a:*:d` would match `a:x:d` but not `a:x`).
   */
  actions: string[];

  /**
   * The effect of the rule.
   */
  effect: Effect;

  /**
   * Derived roles to which the rule applies.
   */
  derivedRoles?: string[];

  /**
   * Static roles to which the rule applies.
   *
   * @remarks
   * The special value `*` can be used to disregard roles when evaluating the rule.
   */
  roles?: string[];

  /**
   * The condition that must be met for the rule to apply.
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
