/**
 * Output from {@link StoresClient.modifyFiles}.
 */
export interface ModifyFilesResponse {
  /**
   * The new version of the store after the modifcations have been made.
   *
   * @remarks
   * If {@link ModifyFilesRequest.allowUnchanged} was `true`, this will be the existing store version if no changes were made.
   */
  newStoreVersion: bigint;

  /**
   * Whether any changes were made to the store contents.
   *
   * @remarks
   * This can only be `false` if {@link ModifyFilesRequest.allowUnchanged} was `true`.
   */
  changed: boolean;
}
