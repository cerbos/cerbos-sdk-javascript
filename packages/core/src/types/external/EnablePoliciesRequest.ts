/**
 * Input to {@link Client.enablePolicies}.
 */
export interface EnablePoliciesRequest {
  /**
   * IDs of policies to enable.
   *
   * @remarks
   * Available policy IDs can be listed with {@link Client.listPolicies}, setting {@link ListPoliciesRequest.includeDisabled} to `true`.
   */
  ids: string[];
}
