/**
 * Outcomes of policy decisions.
 *
 * @public
 */
export enum Effect {
  /**
   * The action is allowed.
   */
  ALLOW = "EFFECT_ALLOW",

  /**
   * The action is denied.
   */
  DENY = "EFFECT_DENY",
}
