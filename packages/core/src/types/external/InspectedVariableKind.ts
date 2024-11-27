/**
 * Kind of a {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#variables | variable} referenced by a policy.
 *
 * @public
 */
export enum InspectedVariableKind {
  /**
   * A variable exported by a policy.
   */
  EXPORTED = "EXPORTED",

  /**
   * A variable imported by a policy.
   */
  IMPORTED = "IMPORTED",

  /**
   * A variable defined locally in a policy.
   */
  LOCAL = "LOCAL",

  /**
   * A variable referenced in a policy condition, but not defined.
   */
  UNDEFINED = "UNDEFINED",

  /**
   * A variable whose source is unknown because the policy store uses precompiled policy bundles.
   */
  UNKNOWN = "UNKNOWN",
}
