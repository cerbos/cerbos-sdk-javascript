import type { PolicyMetadata } from "./PolicyMetadata";

/**
 * Common fields between different {@link Policy} types.
 *
 * @public
 */
export interface PolicyBase {
  apiVersion?: string;
  description?: string;
  disabled?: boolean;
  metadata?: PolicyMetadata | undefined;
  variables?: Record<string, string>;
}
