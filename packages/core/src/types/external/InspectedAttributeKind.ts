/**
 * Kind of an attribute referenced by a policy.
 *
 * @public
 */
export enum InspectedAttributeKind {
  /**
   * An attribute of the principal.
   */
  PRINCIPAL = "PRINCIPAL",

  /**
   * An attribute of the resource.
   */
  RESOURCE = "RESOURCE",
}
