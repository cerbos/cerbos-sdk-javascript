/**
 * A resource that was checked.
 *
 * @public
 */
export interface CheckResourcesResultResource {
  /**
   * The type of resource.
   */
  kind: string;

  /**
   * The unique identifier of the resource.
   */
  id: string;

  /**
   * The policy version against which the check was performed.
   */
  policyVersion: string;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies | policy scope} against which the check was performed.
   */
  scope: string;
}
