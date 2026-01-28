/**
 * Input to {@link Client.purgeStoreRevisions}.
 */
export interface PurgeStoreRevisionsRequest {
  /**
   * The number of revisions to keep for each policy.
   *
   * @defaultValue `0`
   */
  keepLast?: number | undefined;
}
