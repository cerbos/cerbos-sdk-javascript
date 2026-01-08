import type { Condition } from "./Condition.js";
import type { Effect } from "./Effect.js";
import type { Output } from "./Output.js";

/**
 * A rule for actions that can be performed on a given resource.
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
  derivedRoles?: string[] | undefined;

  /**
   * Static roles to which the rule applies.
   *
   * @remarks
   * The special value `*` can be used to disregard roles when evaluating the rule.
   */
  roles?: string[] | undefined;

  /**
   * The condition that must be met for the rule to apply.
   */
  condition?: Condition | undefined;

  /**
   * A descriptive name for the rule.
   */
  name?: string | undefined;

  /**
   * User-defined output to be produced when evaluating the rule.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.27.
   */
  output?: Output | undefined;
}
