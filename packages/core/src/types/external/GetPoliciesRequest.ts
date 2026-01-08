/**
 * Input to {@link Client.getPolicies}.
 */
export interface GetPoliciesRequest {
  /**
   * IDs of policies to fetch.
   *
   * @remarks
   * Available policy IDs can be listed with {@link Client.listPolicies}.
   */
  ids: string[];
}
