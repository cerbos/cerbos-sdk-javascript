import type { PolicyBase } from "./PolicyBase";
import type { PrincipalRule } from "./PrincipalRule";

/**
 * A {@link https://docs.cerbos.dev/cerbos/latest/policies/principal_policies.html | policy} defining overrides for a specific user.
 *
 * @public
 */
export interface PrincipalPolicy extends PolicyBase {
  /**
   * The policy body.
   */
  principalPolicy: {
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
     * {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies.html | Scope} of the policy.
     */
    scope?: string;
  };
}
