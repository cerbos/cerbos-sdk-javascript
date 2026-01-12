import type { Condition } from "./Condition.js";

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
}
