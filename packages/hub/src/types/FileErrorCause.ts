/**
 * The reason a file was found to be invalid.
 */
export enum FileErrorCause {
  /**
   * The file path is invalid.
   */
  INVALID_FILE_PATH = "INVALID_FILE_PATH",

  /**
   * The file has an unsupported extension.
   *
   * @remarks
   * Supported extensions are `.json`, `.yaml`, and `.yml`.
   */
  UNSUPPORTED_FILE_EXTENSION = "UNSUPPORTED_FILE_EXTENSION",

  /**
   * The file has invalid contents.
   */
  INVALID_FILE_CONTENTS = "INVALID_FILE_CONTENTS",

  /**
   * Multiple files with the same path were provided in the request.
   */
  DUPLICATE_FILE_PATH = "DUPLICATE_FILE_PATH",

  /**
   * The file exceeds the maximum allowable size.
   */
  FILE_TOO_LARGE = "FILE_TOO_LARGE",
}
