/**
 * Criteria to match audit log entries.
 *
 * @public
 */
export type AuditLogFilter =
  | AuditLogFilterBetween
  | AuditLogFilterSince
  | AuditLogFilterTail;

/**
 * Match audit log entries captured between two timestamps.
 *
 * @public
 */
export interface AuditLogFilterBetween {
  /**
   * Timestamp from which entries should be returned.
   */
  start: Date;

  /**
   * Timestamp before which entries should be returned.
   */
  end: Date;
}

/**
 * Type guard to check if an {@link AuditLogFilter} is an {@link AuditLogFilterBetween}.
 *
 * @public
 */
export function auditLogFilterIsBetween(
  filter: AuditLogFilter,
): filter is AuditLogFilterBetween {
  return "start" in filter;
}

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

/**
 * Type guard to check if an {@link AuditLogFilter} is an {@link AuditLogFilterSince}.
 *
 * @public
 */
export function auditLogFilterIsSince(
  filter: AuditLogFilter,
): filter is AuditLogFilterSince {
  return "since" in filter;
}

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

/**
 * Type guard to check if an {@link AuditLogFilter} is an {@link AuditLogFilterTail}.
 *
 * @public
 */
export function auditLogFilterIsTail(
  filter: AuditLogFilter,
): filter is AuditLogFilterTail {
  return "tail" in filter;
}
