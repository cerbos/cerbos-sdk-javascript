import type { File } from "./File";

export interface GetFilesResponse {
  storeVersion: bigint;
  files: File[];
}
