import type { ChangeDetails } from "./ChangeDetails";
import type { FileModificationCondition } from "./FileModificationCondition";
import type { ReplaceFilesContents } from "./ReplaceFilesContents";

/**
 * Input to {@link StoresClient.replaceFiles}.
 *
 * @public
 */
export interface ReplaceFilesRequest {
  /**
   * ID of the store in which to replace files.
   */
  storeId: string;

  /**
   * Files to upload to the store.
   */
  contents: ReplaceFilesContents;

  /**
   * A condition that must be met for the replacement to be made.
   */
  condition?: FileModificationCondition | undefined;

  /**
   * Metadata describing the change being made.
   */
  changeDetails?: ChangeDetails | undefined;

  /**
   * Allow replacements that do not change the state of the store.
   *
   * @remarks
   * If `false` (the default), an {@link OperationDiscarded} error will be thrown if the contents match those of the store.
   * If `true`, no error will be thrown and the current store version will be returned.
   *
   * @defaultValue `false`
   */
  allowUnchanged?: boolean;
}
