import type { Resource } from "./Resource";

/**
 * Search criteria to match a resource in results.
 *
 * @remarks
 * `kind` and `id` are required; `policy_version` and `scope` may also be provided if needed to distinguish between multiple results for the same `kind` and `id`.
 *
 * @public
 */
export type ResourceSearch = Omit<Resource, "attr" | "attributes">;
