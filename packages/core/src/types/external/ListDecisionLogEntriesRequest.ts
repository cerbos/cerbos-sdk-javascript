import type { AuditLogFilter } from "./AuditLogFilter.js";

/**
 * Input to {@link @cerbos/core#Client.listDecisionLogEntries}.
 *
 * @public
 */
export interface ListDecisionLogEntriesRequest {
  /**
   * Criteria to match decision log entries.
   */
  filter: AuditLogFilter;
}
