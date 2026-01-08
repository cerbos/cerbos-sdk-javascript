import type { Constants } from "./Constants.js";
import type { PrincipalRule } from "./PrincipalRule.js";
import type { ScopePermissions } from "./ScopePermissions.js";
import type { Variables } from "./Variables.js";

/**
 * A {@link https://docs.cerbos.dev/cerbos/latest/policies/principal_policies | policy} defining overrides for a specific user.
 */
export interface PrincipalPolicyBody {
  /**
   * The ID of the principal to whom the policy applies.
   */
  principal: string;

  /**
   * The version of the policy.
   *
   * @remarks
   * Policies are uniquely identified by the principal name and version pair.
   * You can have multiple policy versions for the same principal (e.g. production vs. staging).
   * The version value `default` is special as it is the default fallback when no version is specified in the request.
   */
  version: string;

  /**
   * Rules defining the overrides that apply to the principal.
   */
  rules: PrincipalRule[];

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies | Scope} of the policy.
   */
  scope?: string | undefined;

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/scope_permissions | Scope permissions} determining how rules are evaluated within a scope hierarchy.
   */
  scopePermissions?: ScopePermissions | undefined;

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#constants | Constants} defined for use in conditions.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.40.
   */
  constants?: Constants | undefined;

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#variables | Variables} defined for use in conditions.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.29.
   */
  variables?: Variables | undefined;
}
