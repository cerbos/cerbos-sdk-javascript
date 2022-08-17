/**
 * Types of query plans.
 *
 * @public
 */
export enum PlanKind {
  /**
   * The specified action is always allowed for the principal on resources matching the input.
   */
  ALWAYS_ALLOWED = "KIND_ALWAYS_ALLOWED",

  /**
   * The specified action is always denied for the principal on resources matching the input.
   */
  ALWAYS_DENIED = "KIND_ALWAYS_DENIED",

  /**
   * The specified action is conditionally allowed for the principal on resources matching the input.
   */
  CONDITIONAL = "KIND_CONDITIONAL",
}
