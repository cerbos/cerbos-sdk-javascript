/**
 * Input to {@link Client.disablePolicies}.
 */
export interface DisablePoliciesRequest {
  /**
   * IDs of policies to disable.
   *
   * @remarks
   * Available policy IDs can be listed with {@link Client.listPolicies}.
   */
  ids: string[];
}
