/**
 * Kind of a {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#constants | constant} referenced by a policy.
 */
export enum InspectedConstantKind {
  /**
   * A constant exported by a policy.
   */
  EXPORTED = "EXPORTED",

  /**
   * A constant imported by a policy.
   */
  IMPORTED = "IMPORTED",

  /**
   * A constant defined locally in a policy.
   */
  LOCAL = "LOCAL",

  /**
   * A constant referenced in a policy condition, but not defined.
   */
  UNDEFINED = "UNDEFINED",

  /**
   * A constant whose source is unknown because the policy store uses precompiled policy bundles.
   */
  UNKNOWN = "UNKNOWN",
}
