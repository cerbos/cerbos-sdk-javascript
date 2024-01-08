/**
 * Additional information about how a policy decision was reached.
 *
 * @public
 */
export interface CheckResourcesResultMetadataEffect {
  /**
   * The policy that was used to make the decision.
   */
  matchedPolicy: string;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies | policy scope} that was used to make the decision.
   */
  matchedScope: string;
}
