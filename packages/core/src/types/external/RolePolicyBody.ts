import type { RoleRule } from "./RoleRule.js";

/** @alpha */
export interface RolePolicyBody {
  /** @alpha */
  role: string;

  /** @alpha */
  parentRoles?: string[] | undefined;

  /** @alpha */
  scope?: string | undefined;

  /** @alpha */
  rules: RoleRule[];
}
