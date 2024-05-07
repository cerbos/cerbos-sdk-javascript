/**
 * Match the last N audit log entries.
 *
 * @public
 */
export interface AuditLogFilterTail {
  /**
   * The maximum number of entries to return.
   */
  tail: number;
}
