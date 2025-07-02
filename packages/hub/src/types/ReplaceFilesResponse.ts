/**
 * Output from {@link StoresClient.replaceFiles}.
 *
 * @public
 */
export interface ReplaceFilesResponse {
  /**
   * The new version of the store after the files were replaced.
   *
   * @remarks
   * If {@link ReplaceFilesRequest.allowUnchanged} was `true`, this will be the existing store version if no changes were made.
   */
  newStoreVersion: bigint;

  /**
   * Paths of files that were provided in the request but were ignored.
   *
   * @remarks
   * Files with unexpected paths, for example hidden files, will be ignored.
   */
  ignoredFiles: string[];

  /**
   * Whether any changes were made to the store contents.
   *
   * @remarks
   * This can only be `false` if {@link ReplaceFilesRequest.allowUnchanged} was `true`.
   */
  changed: boolean;
}
