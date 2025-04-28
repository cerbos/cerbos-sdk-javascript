/**
 * Additional information about the query plan.
 *
 * @public
 */
export interface PlanResourcesMetadata {
  /**
   * The query condition abstract syntax tree rendered as a human-readable string, to help with debugging.
   */
  conditionString: string;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies | policy scope} that was used to plan the query.
   *
   * @deprecated Use {@link PlanResourcesMetadata.matchedScopes | matchedScopes} instead.
   */
  matchedScope: string;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies | policy scopes}that were used to plan the query for each action.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.44.
   */
  matchedScopes: Record<string, string>;
}
