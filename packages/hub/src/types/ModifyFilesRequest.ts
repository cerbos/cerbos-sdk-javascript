import type { ChangeDetails } from "./ChangeDetails";
import type { FileModificationCondition } from "./FileModificationCondition";
import type { FileOperation } from "./FileOperation";

export interface ModifyFilesRequest {
  storeId: string;
  operations: FileOperation[];
  condition?: FileModificationCondition | undefined;
  changeDetails?: ChangeDetails | undefined;
  allowUnchanged?: boolean;
}
