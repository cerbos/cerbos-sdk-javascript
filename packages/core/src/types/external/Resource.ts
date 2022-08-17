import type { Value } from "./Value";

/**
 * A resource on which to check a principal's permissions.
 *
 * @public
 */
export interface Resource {
  /**
   * The type of resource.
   */
  kind: string;

  /**
   * A unique identifier for the resource.
   */
  id: string;

  /**
   * Application-specific attributes describing the resource.
   *
   * @defaultValue `{}`
   */
  attributes?: Record<string, Value>;

  /**
   * The policy version to use when checking the principal's permissions on the resource.
   *
   * @defaultValue The Cerbos policy decision point server's configured default version.
   */
  policyVersion?: string;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies.html | policy scope} to use when checking the principal's permissions on the resource.
   *
   * @defaultValue `""`
   */
  scope?: string;
}
