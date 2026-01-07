import type { Resource } from "./Resource.js";

/**
 * Partial details of resources to be queried.
 *
 * @public
 */
export type ResourceQuery = Omit<Resource, "id">;
