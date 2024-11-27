/**
 * Kind of a {@link https://docs.cerbos.dev/cerbos/latest/policies/derived_roles | derived role} referenced by a policy.
 *
 * @public
 */
export enum InspectedDerivedRoleKind {
  /**
   * A derived role exported by a policy.
   */
  EXPORTED = "EXPORTED",

  /**
   * A derived role imported by a policy.
   */
  IMPORTED = "IMPORTED",

  /**
   * A derived role referenced in a policy, but not defined.
   */
  UNDEFINED = "UNDEFINED",
}
