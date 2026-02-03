import { setErrorNameAndStack } from "../internal.js";
import type {
  PolicyStoreIntegrityViolation,
  StatusNotOK,
  ValidationError,
} from "../types/external.js";
import { Status } from "../types/external.js";

/**
 * Options for creating an error.
 */
export interface ErrorOptions {
  /**
   * The original error that caused this one.
   */
  cause?: unknown;
}

/**
 * Error thrown when the Cerbos policy decision point server returns an unsuccessful response.
 */
export class NotOK extends Error {
  /** @deprecated */
  public static fromJSON(text: string): NotOK {
    try {
      const error: unknown = JSON.parse(text);
      return new NotOK(code(error), details(error));
    } catch {
      return new NotOK(Status.UNKNOWN, text);
    }
  }

  /** @internal */
  public constructor(
    /**
     * The status code returned by the Cerbos policy decision point server.
     */
    public readonly code: StatusNotOK,

    /**
     * Additional error details.
     */
    public readonly details: string,

    options?: ErrorOptions,
  ) {
    super(`gRPC error ${code} (${Status[code]}): ${details}`, options);
    setErrorNameAndStack(this);
  }
}

function code(error: unknown): StatusNotOK {
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
 * Error thrown when input fails schema validation, if the {@link Client} is configured with {@link Options.onValidationError | onValidationError} set to `"throw"`.
 */
export class ValidationFailed extends Error {
  /** @internal */
  public constructor(
    /**
     * The validation errors that occurred.
     */
    public readonly validationErrors: ValidationError[],
  ) {
    super("Input failed schema validation");
    setErrorNameAndStack(this);
  }
}

/**
 * Error thrown when disabling or deleting a policy violates the integrity of the store.
 */
export class PolicyStoreIntegrityViolated extends NotOK {
  /** @internal */
  public constructor(
    code: StatusNotOK,
    message: string,

    /**
     * Details of the integrity violations for each policy ID.
     */
    public readonly violations: Record<string, PolicyStoreIntegrityViolation>,

    options?: ErrorOptions,
  ) {
    super(code, message, options);
  }
}
