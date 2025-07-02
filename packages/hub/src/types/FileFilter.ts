import type { StringMatch } from "./StringMatch";

/**
 * A filter to match files when listing store contents.
 *
 * @public
 */
export interface FileFilter {
  /**
   * Match files by path.
   */
  path?: StringMatch | undefined;
}
