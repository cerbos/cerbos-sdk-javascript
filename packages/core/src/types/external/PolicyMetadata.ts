/**
 * Metadata describing a policy.
 *
 * @public
 */
export interface PolicyMetadata {
  /**
   * The source of the policy, for auditing purposes.
   */
  sourceFile: string;

  /**
   * Free-form data, for auditing purposes.
   */
  annotations: Record<string, string | undefined>;

  /**
   * Hash of policy contents.
   */
  hash: string | undefined;

  /**
   * Deprecated.
   *
   * @deprecated Use {@link PolicyMetadata.storeIdentifier} instead.
   */
  storeIdentifer: string;

  /**
   * The policy's identifier in the backend store.
   */
  storeIdentifier: string;
}
