/**
 * Status codes returned by the Cerbos policy decision point server.
 */
export enum Status {
  /**
   * The operation was aborted.
   */
  ABORTED = 10,

  /**
   * The entity that the client attempted to create already exists.
   */
  ALREADY_EXISTS = 6,

  /**
   * The operation was cancelled.
   */
  CANCELLED = 1,

  /**
   * The operation resulted in unrecoverable data loss or corruption.
   */
  DATA_LOSS = 15,

  /**
   * The operation timed out.
   */
  DEADLINE_EXCEEDED = 4,

  /**
   * The operation was rejected because the system is not in a state required for the operation's execution.
   */
  FAILED_PRECONDITION = 9,

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
   * The operation was attempted past the valid range.
   */
  OUT_OF_RANGE = 11,

  /**
   * The caller does not have permission to execute the specified operation.
   */
  PERMISSION_DENIED = 7,

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

/**
 * Status codes of errors returned by the Cerbos policy decision point server.
 */
export type StatusNotOK = Exclude<Status, Status.OK>;
