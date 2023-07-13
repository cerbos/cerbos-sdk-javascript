import type { DerivedRoleDefinition } from "./DerivedRoleDefinition";
import type { PolicyBase } from "./PolicyBase";
import type { Variables } from "./Variables";

/**
 * A set of {@link https://docs.cerbos.dev/cerbos/latest/policies/derived_roles.html | derived roles}
 * to augment static RBAC roles with contextual data to provide more fine-grained control at runtime.
 *
 * @public
 */
export interface DerivedRoles extends PolicyBase {
  /**
   * A set of derived roles.
   */
  derivedRoles: {
    /**
     * The name to use when importing the set of derived roles.
     */
    name: string;

    /**
     * The definitions of the derived roles.
     */
    definitions: DerivedRoleDefinition[];

    /**
     * {@link https://docs.cerbos.dev/cerbos/prerelease/policies/variables.html | Variables} defined for use in conditions.
     *
     * @remarks
     * Requires the Cerbos policy decision point server to be at least v0.29.
     */
    variables?: Variables | undefined;
  };
}
