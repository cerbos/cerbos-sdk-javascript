/**
 * Metadata describing a policy.
 *
 * @public
 */
export interface PolicyMetadata {
  sourceFile: string;
  annotations: Record<string, string | undefined>;
  hash: string | undefined;
  storeIdentifer: string;
}
