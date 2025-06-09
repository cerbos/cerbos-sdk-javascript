import type { FileErrorCause } from "./FileErrorCause";

export interface FileError {
  file: string;
  cause: FileErrorCause;
  details: string;
}
