import type { Peer } from "./Peer";
import type { Status } from "./Status";

/**
 * An access log entry in the policy decision point's audit log.
 *
 * @public
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
}
