import type { ValidationError } from "./ValidationError";

/**
 * A callback function to be invoked when input fails schema validation.
 *
 * @public
 */
export type ValidationFailedCallback = (
  validationErrors: ValidationError[],
) => void;
