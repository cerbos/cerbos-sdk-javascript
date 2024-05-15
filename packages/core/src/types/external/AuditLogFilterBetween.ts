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
