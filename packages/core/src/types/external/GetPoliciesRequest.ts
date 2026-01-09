/**
 * Input to {@link @cerbos/core!Client.getPolicies}.
 */
export interface GetPoliciesRequest {
  /**
   * IDs of policies to fetch.
   *
   * @remarks
   * Available policy IDs can be listed with {@link @cerbos/core!Client.listPolicies}.
   */
  ids: string[];
}
