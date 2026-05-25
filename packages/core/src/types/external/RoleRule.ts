import type { Condition } from "./Condition.js";
import type { Output } from "./Output.js";

/**
 * A rule for actions that can be performed on a resource by a role.
 */
export interface RoleRule {
  /**
   * The resource kind to which the rule applies.
   */
  resource: string;

  /**
   * The list of allowable actions that the role can carry out on the given resource.
   */
  allowActions: string[];

  /**
   * A condition that must be met for the actions to be allowed.
   */
  condition?: Condition | undefined;

  /**
   * A descriptive name for the rule.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.54.
   */
  name?: string | undefined;

  /**
   * User-defined output to be produced when evaluating the rule.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.54.
   */
  output?: Output | undefined;
}
