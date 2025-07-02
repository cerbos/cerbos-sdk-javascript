import type { File } from "./File";

/**
 * Output from {@link StoresClient.getFiles}.
 *
 * @public
 */
export interface GetFilesResponse {
  /**
   * The current version of the store.
   */
  storeVersion: bigint;

  /**
   * The files that were retrieved from the store.
   */
  files: File[];
}
