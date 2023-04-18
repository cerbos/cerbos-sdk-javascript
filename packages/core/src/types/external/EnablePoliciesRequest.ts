/**
 * Input to {@link @cerbos/core#Client.enablePolicies}.
 *
 * @public
 */
export interface EnablePoliciesRequest {
  /**
   * IDs of policies to enable.
   *
   * @remarks
   * Available policy IDs can be listed with {@link @cerbos/core#Client.listPolicies}, setting {@link @cerbos/core#ListPoliciesRequest.includeDisabled} to `true`.
   */
  ids: string[];
}
