import type { ValidationError } from "./types/external";

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
   * The operation failed because a resource has been exhausted.
   */
  RESOURCE_EXHAUSTED = 8,

  /**
   * The operation was rejected because it did not have valid authentication credentials.
   */
  UNAUTHENTICATED = 16,

  /**
   * The operation was rejected because it did not have valid authentication credentials.
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
 * Error thrown when the Cerbos policy decision point server returns an unsuccessful response.
 *
 * @public
 */
export class NotOK extends Error {
  /**
   * Parse a JSON-serialized unsuccessful response.
   */
  public static fromJSON(text: string): NotOK {
    try {
      const error: unknown = JSON.parse(text);
      return new NotOK(code(error), details(error));
    } catch (_) {
      return new NotOK(Status.UNKNOWN, text);
    }
  }

  public constructor(
    /**
     * The status code returned by the Cerbos policy decision point server.
     */
    public readonly code: Status,

    /**
     * Additional error details.
     */
    public readonly details: string,
  ) {
    super(`gRPC error ${code} (${Status[code]}): ${details}`);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

function code(error: unknown): Status {
  if (
    has(error, "code") &&
    typeof error.code === "number" &&
    error.code in Status
  ) {
    return error.code || Status.UNKNOWN;
  }

  throw new Error("Error does not include expected code");
}

function details(error: unknown): string {
  if (has(error, "message") && typeof error.message === "string") {
    return error.message;
  }

  throw new Error("Error does not include expected details");
}

function has<K extends string>(
  object: unknown,
  property: K,
): object is Record<K, unknown> {
  return !!object && Object.prototype.hasOwnProperty.call(object, property);
}

/**
 * Error thrown when input fails schema validation, if the {@link @cerbos/core#Client} is configured with {@link @cerbos/core#Options.onValidationError | onValidationError} set to `"throw"`.
 *
 * @public
 */
export class ValidationFailed extends Error {
  public constructor(
    /**
     * The validation errors that occurred.
     */
    public readonly validationErrors: ValidationError[],
  ) {
    super("Input failed schema validation");
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
