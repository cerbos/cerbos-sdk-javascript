/**
 * {@link https://docs.cerbos.dev/cerbos/latest/policies/scope_permissions | Scope permissions} determining how rules are evaluated within a scope hierarchy.
 */
export enum ScopePermissions {
  /**
   * Evaluate policies from the bottom of the scope chain and move up.
   * The first policy to produce a decision for a given action is the winner.
   * Any policies further up the chain cannot influence that decision.
   */
  OVERRIDE_PARENT = "SCOPE_PERMISSIONS_OVERRIDE_PARENT",

  /**
   * Inherit and restrict the permissions of parent scopes.
   * Policies at this level must define rules within the maximum set of permissions allowed by parent policies — they cannot introduce new permissions that exceed what a parent scope already permits.
   */
  REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS = "SCOPE_PERMISSIONS_REQUIRE_PARENTAL_CONSENT_FOR_ALLOWS",
}
