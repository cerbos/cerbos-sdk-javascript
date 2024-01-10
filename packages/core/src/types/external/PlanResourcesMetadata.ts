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
   */
  matchedScope: string;
}
