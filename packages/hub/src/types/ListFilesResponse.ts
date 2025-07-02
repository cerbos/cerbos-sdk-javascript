/**
 * Output from {@link StoresClient.listFiles}.
 *
 * @public
 */
export interface ListFilesResponse {
  /**
   * The current version of the store.
   */
  storeVersion: bigint;

  /**
   * Paths of the files that were found in the store.
   */
  files: string[];
}
