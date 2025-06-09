import type { ChangeDetails } from "./ChangeDetails";
import type { FileModificationCondition } from "./FileModificationCondition";
import type { ReplaceFilesContents } from "./ReplaceFilesContents";

export interface ReplaceFilesRequest {
  storeId: string;
  contents: ReplaceFilesContents;
  condition?: FileModificationCondition | undefined;
  changeDetails?: ChangeDetails | undefined;
  allowUnchanged?: boolean;
}
