/**
 * Status codes returned by the Cerbos policy decision point server.
 *
 * @public
 */
export enum Status {
  /**
   * The operation was cancelled.
   */
  CANCELLED = 1,

  /**
   * The operation timed out.
   */
  DEADLINE_EXCEEDED = 4,

  /**
   * The operation failed due to an internal error.
   */
  INTERNAL = 13,

  /**
   * The operation was rejected because an argument was invalid.
   */
  INVALID_ARGUMENT = 3,

  /**
   * The requested entity was not found.
   */
  NOT_FOUND = 5,

  /**
   * The operation completed successfully.
   */
  OK = 0,

  /**
   * The operation failed because a resource has been exhausted.
   */
  RESOURCE_EXHAUSTED = 8,

  /**
   * The operation was rejected because it did not have valid authentication credentials.
   */
  UNAUTHENTICATED = 16,

  /**
   * The operation failed because the service is unavailable.
   */
  UNAVAILABLE = 14,

  /**
   * The operation is not supported.
   */
  UNIMPLEMENTED = 12,

  /**
   * An unknown error occurred.
   */
  UNKNOWN = 2,
}
