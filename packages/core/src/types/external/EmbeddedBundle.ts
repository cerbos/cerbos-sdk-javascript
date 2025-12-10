/**
 * A policy bundle downloaded from {@link https://www.cerbos.dev/product-cerbos-hub | Cerbos Hub} for an embedded policy decision point.
 *
 * @public
 */
export interface EmbeddedBundle {
  /**
   * The ID of the policy bundling rule.
   */
  ruleId: string;

  /**
   * Scopes requested by the client.
   */
  scopes: string[];
}
