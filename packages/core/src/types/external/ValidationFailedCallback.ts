import type { ValidationError } from "./ValidationError.js";

/**
 * A callback function to be invoked when input fails schema validation.
 */
export type ValidationFailedCallback = (
  validationErrors: ValidationError[],
) => void;
