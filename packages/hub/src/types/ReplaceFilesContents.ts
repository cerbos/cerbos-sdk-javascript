import type { File } from "./File";

/**
 * Files to upload to a store.
 *
 * @public
 */
export type ReplaceFilesContents =
  | ReplaceFilesContentsUnzipped
  | ReplaceFilesContentsZipped;

/**
 * Files to upload to a store.
 *
 * @public
 */
export interface ReplaceFilesContentsUnzipped {
  /**
   * The files to upload.
   */
  files: File[];
}

/**
 * Type guard to check if a {@link ReplaceFilesContents} is a {@link ReplaceFilesContentsUnzipped}.
 *
 * @public
 */
export function replaceFilesContentsIsReplaceFilesContentsUnzipped(
  contents: ReplaceFilesContents,
): contents is ReplaceFilesContentsUnzipped {
  return "files" in contents;
}

/**
 * Zipped files to upload to a store.
 *
 * @public
 */
export interface ReplaceFilesContentsZipped {
  /**
   * A zip file containing files to upload to a store.
   */
  zipped: Uint8Array;
}

/**
 * Type guard to check if a {@link ReplaceFilesContents} is a {@link ReplaceFilesContentsZipped}.
 *
 * @public
 */
export function replaceFilesContentsIsReplaceFilesContentsZipped(
  contents: ReplaceFilesContents,
): contents is ReplaceFilesContentsZipped {
  return "zipped" in contents;
}
