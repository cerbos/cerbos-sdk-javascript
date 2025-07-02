import type { FileFilter } from "./FileFilter";

/**
 * Input to {@link StoresClient.listFiles}.
 *
 * @public
 */
export interface ListFilesRequest {
  /**
   * ID of the store from which to list files.
   */
  storeId: string;

  /**
   * Filter to limit which files are listed.
   */
  filter?: FileFilter | undefined;
}
