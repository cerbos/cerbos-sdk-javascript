import type { Value } from "@cerbos/core";

/**
 * Origin of a change that was made to a store.
 */
export type ChangeOrigin = ChangeOriginGit | ChangeOriginInternal;

/**
 * Details of a change made to a store when syncing it with a Git repository.
 */
export interface ChangeOriginGit {
  /**
   * Discriminator to mark the change as being made when syncing the store with a Git repository.
   */
  from: "git";

  /**
   * The Git repository with which the store was synced.
   */
  repo?: string | undefined;

  /**
   * The Git ref with which the store was synced.
   */
  ref?: string | undefined;

  /**
   * The hash of the commit with which the store was synced.
   */
  hash?: string | undefined;

  /**
   * The message of the commit with which the store was synced.
   */
  message?: string | undefined;

  /**
   * The committer of the commit with which the store was synced.
   */
  committer?: string | undefined;

  /**
   * The commit date of the commit with which the store was synced.
   */
  commitDate?: Date | undefined;

  /**
   * The author of the commit with which the store was synced.
   */
  author?: string | undefined;

  /**
   * The author date of the commit with which the store was synced.
   */
  authorDate?: Date | undefined;
}

/**
 * Type guard to check if a {@link ChangeOrigin} is a {@link ChangeOriginGit}.
 */
export function changeOriginIsChangeOriginGit(
  origin: ChangeOrigin,
): origin is ChangeOriginGit {
  return origin.from === "git";
}

/**
 * Details of a change made to a store by an internal application.
 */
export interface ChangeOriginInternal {
  /**
   * Discriminator to mark the change as being made by an internal application.
   */
  from: "internal";

  /**
   * The source of the change.
   */
  source?: string | undefined;

  /**
   * User-defined metadata about the origin of the change.
   */
  metadata?: Record<string, Value> | undefined;
}

/**
 * Type guard to check if a {@link ChangeOrigin} is a {@link ChangeOriginInternal}.
 */
export function changeOriginIsChangeOriginInternal(
  origin: ChangeOrigin,
): origin is ChangeOriginInternal {
  return origin.from === "internal";
}
