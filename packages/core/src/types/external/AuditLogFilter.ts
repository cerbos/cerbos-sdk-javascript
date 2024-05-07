import type { AuditLogFilterBetween } from "./AuditLogFilterBetween";
import type { AuditLogFilterSince } from "./AuditLogFilterSince";
import type { AuditLogFilterTail } from "./AuditLogFilterTail";

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
 * Type guard to check if an {@link AuditLogFilter} is an {@link AuditLogFilterTail}.
 *
 * @public
 */
export function auditLogFilterIsTail(
  filter: AuditLogFilter,
): filter is AuditLogFilterTail {
  return "tail" in filter;
}
