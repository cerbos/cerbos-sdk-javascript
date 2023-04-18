/**
 * Input to {@link @cerbos/core#Client.listPolicies}.
 *
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * Include disabled policies in the list?
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.26.
   *
   * @defaultValue `false`
   */
  includeDisabled?: boolean;
}
