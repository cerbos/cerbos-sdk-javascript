import type { File } from "./File";

export type FileOperation = FileOperationAddOrUpdate | FileOperationDelete;

export interface FileOperationAddOrUpdate {
  addOrUpdate: File;
}

export function fileOperationIsFileOperationAddOrUpdate(
  operation: FileOperation,
): operation is FileOperationAddOrUpdate {
  return "addOrUpdate" in operation;
}

export interface FileOperationDelete {
  delete: string;
}

export function fileOperationIsFileOperationDelete(
  operation: FileOperation,
): operation is FileOperationDelete {
  return "delete" in operation;
}
