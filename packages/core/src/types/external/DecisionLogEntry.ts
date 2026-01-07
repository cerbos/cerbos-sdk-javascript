import type { AuditTrail } from "./AuditTrail.js";
import type { DecisionLogEntryMethod } from "./DecisionLogEntryMethod.js";
import type { Peer } from "./Peer.js";
import type { PolicySource } from "./PolicySource.js";

/**
 * A decision log entry in the policy decision point's audit log.
 *
 * @public
 */
export interface DecisionLogEntry {
  /**
   * A unique identifier for the logged request.
   */
  callId: string;

  /**
   * The time at which the decision was made by the policy decision point server.
   */
  timestamp: Date;

  /**
   * Details of the client who made the logged request.
   */
  peer: Peer;

  /**
   * Metadata (a.k.a. HTTP headers) sent with the logged request.
   */
  metadata: Record<string, string[]>;

  /**
   * Details about how the decision was reached.
   */
  auditTrail: AuditTrail;

  /**
   * The decision that was made.
   */
  method: DecisionLogEntryMethod;

  /**
   * Whether the log entry was truncated because it was too large.
   */
  oversized: boolean;

  /**
   * Where the policy decision point server sourced its policies.
   */
  policySource: PolicySource | undefined;
}
