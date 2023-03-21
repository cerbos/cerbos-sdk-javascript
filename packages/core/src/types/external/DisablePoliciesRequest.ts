/**
 * Input to {@link @cerbos/core#Client.disablePolicies}.
 *
 * @public
 */
export interface DisablePoliciesRequest {
  /**
   * IDs of policies to disable.
   *
   * @remarks
   * Available policy IDs can be listed with {@link @cerbos/core#Client.listPolicies}.
   */
  ids: string[];
}
