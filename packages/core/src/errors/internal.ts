/** @internal */
export function joinErrorMessage(message: string, error: unknown): string {
  return error instanceof Error ? `${message}: ${error.message}` : message;
}

/** @internal */
export function setErrorNameAndStack(error: Error): void {
  error.name = error.constructor.name;

  // `Error.captureStackTrace` is not available in all browsers
  if ("captureStackTrace" in Error) {
    Error.captureStackTrace(error, error.constructor);
  }
}
