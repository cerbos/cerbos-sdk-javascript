export interface ReplaceFilesResponse {
  newStoreVersion: bigint;
  ignoredFiles: string[];
  changed: boolean;
}
