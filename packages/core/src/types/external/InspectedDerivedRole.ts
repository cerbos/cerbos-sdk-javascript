import type { InspectedDerivedRoleKind } from "./InspectedDerivedRoleKind.js";

/**
 * Details of a {@link https://docs.cerbos.dev/cerbos/latest/policies/derived_roles | derived role} referenced by a policy.
 *
 * @public
 */
export interface InspectedDerivedRole {
  /**
   * Kind of the derived role.
   */
  kind: InspectedDerivedRoleKind;

  /**
   * Name of the derived role.
   */
  name: string;

  /**
   * Source of the derived role, if known.
   */
  source: string | undefined;
}
