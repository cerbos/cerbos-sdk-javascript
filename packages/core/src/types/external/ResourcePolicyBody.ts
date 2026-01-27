import type { Constants } from "./Constants.js";
import type { ResourceRule } from "./ResourceRule.js";
import type { SchemaRefs } from "./SchemaRefs.js";
import type { ScopePermissions } from "./ScopePermissions.js";
import type { Variables } from "./Variables.js";

/**
 * A {@link https://docs.cerbos.dev/cerbos/latest/policies/resource_policies | policy} defining rules for actions that can be performed on a given resource.
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
   * Policies are uniquely identified by the resource kind and version pair.
   * You can have multiple policy versions for the same resource (e.g. production vs. staging).
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

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/scope_permissions | Scope permissions} determining how rules are evaluated within a scope hierarchy.
   */
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
