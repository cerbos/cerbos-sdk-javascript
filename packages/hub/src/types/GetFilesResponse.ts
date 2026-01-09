import type { File } from "./File.js";

/**
 * Output from {@link StoresClient.getFiles}.
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
