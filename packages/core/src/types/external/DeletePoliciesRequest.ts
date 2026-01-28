/**
 * Input to {@link Client.deletePolicies}.
 */
export interface DeletePoliciesRequest {
  /**
   * IDs of policies to delete.
   *
   * @remarks
   * Available policy IDs can be listed with {@link Client.listPolicies}.
   */
  ids: string[];
}
