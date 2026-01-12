import type { AuditLogFilter } from "./AuditLogFilter.js";

/**
 * Input to {@link Client.listAccessLogEntries}.
 */
export interface ListAccessLogEntriesRequest {
  /**
   * Criteria to match access log entries.
   */
  filter: AuditLogFilter;
}
