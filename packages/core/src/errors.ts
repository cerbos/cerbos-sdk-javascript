import type { ValidationError } from "./types/external";
import { Status } from "./types/external";

/**
 * Options for creating an error.
 *
 * @public
 */
export interface ErrorOptions {
  /**
   * The original error that caused this one.
   */
  cause?: unknown;
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
    } catch {
      return new NotOK(Status.UNKNOWN, text);
    }
  }

  public constructor(
    /**
     * The status code returned by the Cerbos policy decision point server.
     */
    public readonly code: Exclude<Status, Status.OK>,

    /**
     * Additional error details.
     */
    public readonly details: string,

    options?: ErrorOptions,
  ) {
    super(`gRPC error ${code} (${Status[code]}): ${details}`, options);
    _setErrorNameAndStack(this);
  }
}

function code(error: unknown): Exclude<Status, Status.OK> {
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
    _setErrorNameAndStack(this);
  }
}

/** @internal */
export function _setErrorNameAndStack(error: Error): void {
  error.name = error.constructor.name;

  // `Error.captureStackTrace` is not available in all browsers
  if ("captureStackTrace" in Error) {
    Error.captureStackTrace(error, error.constructor);
  }
}
