import type { ChangeOrigin } from "./ChangeOrigin.js";
import type { Uploader } from "./Uploader.js";

/**
 * Metadata describing a change that was made to a store.
 *
 * @public
 */
export interface ChangeDetails {
  /**
   * Description of the change.
   */
  description?: string | undefined;

  /**
   * Origin of the change.
   */
  origin?: ChangeOrigin | undefined;

  /**
   * Metadata describing the uploader who made the change.
   */
  uploader?: Uploader | undefined;
}
