import type { SourceAttributes } from "./SourceAttributes";

/**
 * Details about how a policy decision was reached.
 *
 * @public
 */
export interface AuditTrail {
  /**
   * Details about the policies that were used to reach a decision.
   * Keys are policy IDs.
   */
  effectivePolicies: Record<string, SourceAttributes>;
}
