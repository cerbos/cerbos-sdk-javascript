import type { RoleRule } from "./RoleRule.js";

/**
 * A {@link https://docs.cerbos.dev/cerbos/latest/policies/role_policies | policy} defining rules for actions that can be performed by a given role.
 */
export interface RolePolicyBody {
  /**
   * The role to which this policy applies.
   */
  role: string;

  /**
   * The list of parent roles that a custom role inherits.
   */
  parentRoles?: string[] | undefined;

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies | Scope} of the policy.
   */
  scope?: string | undefined;

  /**
   * Rules defining the actions that can be performed by the role.
   */
  rules: RoleRule[];
}
