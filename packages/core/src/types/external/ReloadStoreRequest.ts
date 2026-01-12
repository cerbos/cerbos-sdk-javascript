/**
 * Input to {@link Client.reloadStore}.
 */
export interface ReloadStoreRequest {
  /**
   * `true` to block until the reload completes, and throw an error if it fails.
   * `false` to return as soon as the reload is initiated.
   */
  wait: boolean;
}
