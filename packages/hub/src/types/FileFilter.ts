import type { StringMatch } from "./StringMatch.js";

/**
 * A filter to match files when listing store contents.
 */
export interface FileFilter {
  /**
   * Match files by path.
   */
  path?: StringMatch | undefined;
}
