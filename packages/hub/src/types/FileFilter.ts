import type { StringMatch } from "./StringMatch";

export interface FileFilter {
  path?: StringMatch | undefined;
}
