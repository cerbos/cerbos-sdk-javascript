import type { FileFilter } from "./FileFilter.js";

/**
 * Input to {@link StoresClient.listFiles}.
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
