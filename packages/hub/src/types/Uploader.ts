import type { Value } from "@cerbos/core";

/**
 * Metadata describing the uploader who made a change to a store.
 */
export interface Uploader {
  /**
   * The name of the uploader.
   */
  name?: string | undefined;

  /**
   * User-defined metadata describing the uploader.
   */
  metadata?: Record<string, Value> | undefined;
}
