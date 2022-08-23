import type { PolicyBase } from "./PolicyBase";
import type { ResourceRule } from "./ResourceRule";
import type { SchemaRefs } from "./SchemaRefs";

/**
 * A {@link https://docs.cerbos.dev/cerbos/latest/policies/resource_policies.html | policy} defining rules for actions that can be performed on a given resource.
 *
 * @public
 */
export interface ResourcePolicy extends PolicyBase {
  /**
   * The policy body.
   */
  resourcePolicy: {
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
     * Name of a set of {@link https://docs.cerbos.dev/cerbos/latest/policies/derived_roles.html | derived roles} to import.
     */
    importDerivedRoles?: string[];

    /**
     * Rules defining the actions that can be performed on the resource.
     */
    rules: ResourceRule[];

    /**
     * {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies.html | Scope} of the policy.
     */
    scope?: string;

    /**
     * {@link https://docs.cerbos.dev/cerbos/latest/policies/schemas.html | Schemas} for principal and resource attributes.
     */
    schemas?: SchemaRefs | undefined;
  };
}
