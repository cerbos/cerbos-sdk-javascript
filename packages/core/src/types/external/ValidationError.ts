import type { ValidationErrorSource } from "./ValidationErrorSource";

/**
 * An error that occurred while validating the principal or resource attributes against a schema.
 *
 * @public
 */
export interface ValidationError {
  /**
   * The path to the attribute that failed validation.
   */
  path: string;

  /**
   * The error message.
   */
  message: string;

  /**
   * The source of the invalid attributes.
   */
  source: ValidationErrorSource;
}
