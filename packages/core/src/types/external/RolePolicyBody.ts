import type { RoleRule } from "./RoleRule";
import type { ScopePermissions } from "./ScopePermissions";

/** @alpha */
export interface RolePolicyBody {
  /** @alpha */
  role: string;

  /** @alpha */
  parentRoles?: string[] | undefined;

  /** @alpha */
  scope?: string | undefined;

  /** @alpha */
  scopePermissions: ScopePermissions;

  /** @alpha */
  rules: RoleRule[];
}
