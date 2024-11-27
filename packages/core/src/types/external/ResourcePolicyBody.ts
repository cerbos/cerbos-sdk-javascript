import type { Constants } from "./Constants";
import type { ResourceRule } from "./ResourceRule";
import type { SchemaRefs } from "./SchemaRefs";
import type { ScopePermissions } from "./ScopePermissions";
import type { Variables } from "./Variables";

/**
 * A {@link https://docs.cerbos.dev/cerbos/latest/policies/resource_policies | policy} defining rules for actions that can be performed on a given resource.
 *
 * @public
 */
export interface ResourcePolicyBody {
  /**
   * The name of the resource to which the policy applies.
   */
  resource: string;

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
   * Name of a set of {@link https://docs.cerbos.dev/cerbos/latest/policies/derived_roles | derived roles} to import.
   */
  importDerivedRoles?: string[] | undefined;

  /**
   * Rules defining the actions that can be performed on the resource.
   */
  rules: ResourceRule[];

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies | Scope} of the policy.
   */
  scope?: string | undefined;

  /** @alpha */
  scopePermissions?: ScopePermissions | undefined;

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/schemas | Schemas} for principal and resource attributes.
   */
  schemas?: SchemaRefs | undefined;

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
