import type { AuditLogFilter } from "./AuditLogFilter";

/**
 * Input to {@link @cerbos/core#Client.listAccessLogEntries}.
 *
 * @public
 */
export interface ListAccessLogEntriesRequest {
  /**
   * Criteria to match access log entries.
   */
  filter: AuditLogFilter;
}
