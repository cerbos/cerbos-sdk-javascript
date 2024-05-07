/**
 * Match the audit log entries captured since N seconds ago.
 *
 * @public
 */
export interface AuditLogFilterSince {
  /**
   * The maximum age (in seconds) of entries to return.
   */
  since: number;
}
