import type { Condition } from "./Condition.js";

/** @alpha */
export interface RoleRule {
  /** @alpha */
  resource: string;

  /** @alpha */
  allowActions: string[];

  /** @alpha */
  condition?: Condition | undefined;
}
