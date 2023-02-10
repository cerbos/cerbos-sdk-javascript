import type { PolicyMetadata } from "./PolicyMetadata";

/**
 * Common fields between different {@link Policy} types.
 *
 * @public
 */
export interface PolicyBase {
  /**
   * API version of the policy.
   */
  apiVersion?: string;

  /**
   * Description of the policy.
   */
  description?: string;

  /**
   * Whether the policy is ignored by the Cerbos engine.
   */
  disabled?: boolean;

  /**
   * Metadata about the policy.
   */
  metadata?: PolicyMetadata | undefined;

  /**
   * Variable expressions defined for the policy.
   *
   * @remarks
   * Each variable is evaluated before any rule condition.
   * A variable expression can contain anything that condition expression can have.
   */
  variables?: Record<string, string>;
}
