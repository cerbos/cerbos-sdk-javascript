import type { FileErrorCause } from "./FileErrorCause";

/**
 * A validation error that occurred when attempting to add a file to a store.
 *
 * @public
 */
export interface FileError {
  /**
   * The path of the invalid file.
   */
  file: string;

  /**
   * The reason validation failed.
   */
  cause: FileErrorCause;

  /**
   * The validation error message.
   */
  details: string;
}
