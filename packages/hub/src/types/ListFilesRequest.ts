import type { FileFilter } from "./FileFilter";

export interface ListFilesRequest {
  storeId: string;
  filter?: FileFilter | undefined;
}
