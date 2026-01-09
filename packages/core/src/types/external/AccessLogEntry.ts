import type { Peer } from "./Peer.js";
import type { PolicySource } from "./PolicySource.js";
import type { Status } from "./Status.js";

/**
 * An access log entry in the policy decision point's audit log.
 */
export interface AccessLogEntry {
  /**
   * A unique identifier for the logged request.
   */
  callId: string;

  /**
   * The time at which the logged request was received by the policy decision point server.
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
   * The gRPC method that was invoked.
   */
  method: string;

  /**
   * The status code returned by the policy decision point server.
   */
  statusCode: Status;

  /**
   * Whether the log entry was truncated because it was too large.
   */
  oversized: boolean;

  /**
   * Where the policy decision point server sourced its policies.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.46.
   */
  policySource: PolicySource | undefined;
}
