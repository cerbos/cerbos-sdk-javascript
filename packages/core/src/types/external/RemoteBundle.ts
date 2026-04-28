/**
 * A policy bundle downloaded from {@link https://www.cerbos.dev/product-cerbos-hub | Cerbos Hub}.
 */
export interface RemoteBundle {
  /**
   * The ID of the bundle.
   */
  bundleId: string;

  /**
   * The ID of the deployment from which the bundle was downloaded.
   */
  deploymentId: string;
}
