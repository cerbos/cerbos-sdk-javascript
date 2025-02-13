import type { AuditTrail } from "./AuditTrail";
import type { DecisionLogEntryMethod } from "./DecisionLogEntryMethod";
import type { Peer } from "./Peer";

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
}
