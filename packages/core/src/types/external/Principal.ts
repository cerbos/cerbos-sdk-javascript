import type { Value } from "./Value";

/**
 * A principal (often a user, but potentially another actor like a service account) to authorize.
 *
 * @public
 */
export interface Principal {
  /**
   * A unique identifier for the principal.
   */
  id: string;

  /**
   * The roles held by the principal.
   */
  roles: string[];

  /**
   * Application-specific attributes describing the principal.
   *
   * @defaultValue `{}`
   */
  attr?: Record<string, Value>;

  /**
   * Application-specific attributes describing the principal (deprecated).
   *
   * @defaultValue `{}`
   * @deprecated Use {@link Principal.attr} instead, for consistency with policy expressions.
   */
  attributes?: Record<string, Value>;

  /**
   * The policy version to use when authorizing the principal.
   *
   * @defaultValue The Cerbos policy decision point server's configured default version.
   */
  policyVersion?: string;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies | policy scope} to use when authorizing the principal.
   *
   * @defaultValue `""`
   */
  scope?: string;
}
