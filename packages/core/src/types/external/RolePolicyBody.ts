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
   * The version of the policy.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.51.
   *
   * Policies are uniquely identified by the role name and version pair.
   * You can have multiple policy versions for the same role (e.g. production vs. staging).
   * The version value `default` is special as it is the default fallback when no version is specified in the request.
   *
   * @defaultValue `"default"`
   */
  version?: string | undefined;

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
