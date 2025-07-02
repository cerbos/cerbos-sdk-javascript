/**
 * A condition that must be met to make a file modification.
 *
 * @public
 */
export interface FileModificationCondition {
  /**
   * Only modify files if the store version is equal to the provided value.
   */
  storeVersionMustEqual: bigint;
}
