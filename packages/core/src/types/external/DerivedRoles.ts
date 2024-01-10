import type { DerivedRolesBody } from "./DerivedRolesBody";
import type { PolicyBase } from "./PolicyBase";

/**
 * A set of {@link https://docs.cerbos.dev/cerbos/latest/policies/derived_roles | derived roles}
 * to augment static RBAC roles with contextual data to provide more fine-grained control at runtime.
 *
 * @public
 */
export interface DerivedRoles extends PolicyBase {
  /**
   * A set of derived roles.
   */
  derivedRoles: DerivedRolesBody;
}
