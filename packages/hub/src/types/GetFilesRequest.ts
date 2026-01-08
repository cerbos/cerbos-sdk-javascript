/**
 * Input to {@link StoresClient.getFiles}.
 */
export interface GetFilesRequest {
  /**
   * ID of the store from which to get files.
   */
  storeId: string;

  /**
   * Paths of the files to retrieve.
   */
  files: string[];
}
