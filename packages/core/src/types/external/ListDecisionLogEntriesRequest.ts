import type { AuditLogFilter } from "./AuditLogFilter.js";

/**
 * Input to {@link Client.listDecisionLogEntries}.
 */
export interface ListDecisionLogEntriesRequest {
  /**
   * Criteria to match decision log entries.
   */
  filter: AuditLogFilter;
}
