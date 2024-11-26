import type { PolicyBase } from "./PolicyBase";
import type { RolePolicyBody } from "./RolePolicyBody";

/** @alpha */
export interface RolePolicy extends PolicyBase {
  /** @alpha */
  rolePolicy: RolePolicyBody;
}
