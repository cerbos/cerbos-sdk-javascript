/**
 * A policy bundle downloaded from {@link https://www.cerbos.dev/product-cerbos-hub | Cerbos Hub} and saved locally.
 */
export interface LocalBundle {
  /**
   * The path to the local policy bundle file.
   */
  path: string;

  /**
   * The ID of the local policy bundle.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.52.
   */
  bundleId: string;
}
