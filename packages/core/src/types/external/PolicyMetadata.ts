import type { SourceAttributes } from "./SourceAttributes.js";

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
   * More details about the source of the policy, for auditing purposes.
   */
  sourceAttributes: SourceAttributes;

  /**
   * Free-form data, for auditing purposes.
   */
  annotations: Record<string, string>;

  /**
   * Hash of policy contents.
   */
  hash: bigint | undefined;

  /**
   * Deprecated.
   *
   * @deprecated Use {@link PolicyMetadata.storeIdentifier | storeIdentifier} instead.
   */
  storeIdentifer: string;

  /**
   * The policy's identifier in the backend store.
   */
  storeIdentifier: string;
}
