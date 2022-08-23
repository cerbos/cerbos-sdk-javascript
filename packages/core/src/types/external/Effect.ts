/**
 * Outcomes of policy decisions.
 *
 * @public
 */
export enum Effect {
  /**
   * The action should be allowed.
   */
  ALLOW = "EFFECT_ALLOW",

  /**
   * The action should be denied.
   */
  DENY = "EFFECT_DENY",
}
