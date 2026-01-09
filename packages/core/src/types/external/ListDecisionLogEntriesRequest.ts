import type { AuditLogFilter } from "./AuditLogFilter.js";

/**
 * Input to {@link @cerbos/core!Client.listDecisionLogEntries}.
 */
export interface ListDecisionLogEntriesRequest {
  /**
   * Criteria to match decision log entries.
   */
  filter: AuditLogFilter;
}
