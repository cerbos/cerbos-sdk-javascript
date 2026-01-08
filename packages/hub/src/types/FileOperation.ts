import type { File } from "./File.js";

/**
 * An operation modifying a file in a store.
 */
export type FileOperation = FileOperationAddOrUpdate | FileOperationDelete;

/**
 * Add or update a file.
 */
export interface FileOperationAddOrUpdate {
  /**
   * The file to add or update.
   */
  addOrUpdate: File;
}

/**
 * Type guard to check if a {@link FileOperation} is a {@link FileOperationAddOrUpdate}.
 */
export function fileOperationIsFileOperationAddOrUpdate(
  operation: FileOperation,
): operation is FileOperationAddOrUpdate {
  return "addOrUpdate" in operation;
}

/**
 * Delete a file.
 */
export interface FileOperationDelete {
  /**
   * Path of the file to delete.
   */
  delete: string;
}

/**
 * Type guard to check if a {@link FileOperation} is a {@link FileOperationDelete}.
 */
export function fileOperationIsFileOperationDelete(
  operation: FileOperation,
): operation is FileOperationDelete {
  return "delete" in operation;
}
