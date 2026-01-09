/**
 * Sources of invalid attributes.
 */
export enum ValidationErrorSource {
  /**
   * The principal's attributes failed schema validation.
   */
  PRINCIPAL = "SOURCE_PRINCIPAL",

  /**
   * The resource's attributes failed schema validation.
   */
  RESOURCE = "SOURCE_RESOURCE",
}
