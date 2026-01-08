import type { Resource } from "./Resource.js";

/**
 * Partial details of resources to be queried.
 */
export type ResourceQuery = Omit<Resource, "id">;
