import type { ChangeOrigin } from "./ChangeOrigin";
import type { Uploader } from "./Uploader";

export interface ChangeDetails {
  description?: string | undefined;
  origin?: ChangeOrigin | undefined;
  uploader?: Uploader | undefined;
}
