import type { File } from "./File";

export type ReplaceFilesContents =
  | ReplaceFilesZippedContents
  | ReplaceFilesUnzippedContents;

export interface ReplaceFilesZippedContents {
  zippedContents: Uint8Array;
}

export function replaceFilesContentsIsReplaceFilesZippedContents(
  contents: ReplaceFilesContents,
): contents is ReplaceFilesZippedContents {
  return "zippedContents" in contents;
}

export interface ReplaceFilesUnzippedContents {
  files: File[];
}

export function replaceFilesContentsIsReplaceFilesUnzippedContents(
  contents: ReplaceFilesContents,
): contents is ReplaceFilesUnzippedContents {
  return "files" in contents;
}
