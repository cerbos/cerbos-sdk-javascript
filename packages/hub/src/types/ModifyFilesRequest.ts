import type { ChangeDetails } from "./ChangeDetails";
import type { FileModificationCondition } from "./FileModificationCondition";
import type { FileOperation } from "./FileOperation";

/**
 * Input to {@link StoresClient.modifyFiles}.
 *
 * @public
 */
export interface ModifyFilesRequest {
  /**
   * ID of the store in which to modify files.
   */
  storeId: string;

  /**
   * Modifications to make.
   */
  operations: FileOperation[];

  /**
   * A condition that must be met for the modifications to be made.
   */
  condition?: FileModificationCondition | undefined;

  /**
   * Metadata describing the change being made.
   */
  changeDetails?: ChangeDetails | undefined;

  /**
   * Allow modifications that do not change the state of the store.
   *
   * @remarks
   * If `false` (the default), an {@link OperationDiscarded} error will be thrown if the modifications leave the store unchanged.
   * If `true`, no error will be thrown and the current store version will be returned.
   *
   * @defaultValue `false`
   */
  allowUnchanged?: boolean;
}
