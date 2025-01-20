import type { Condition } from "./Condition";

/** @alpha */
export interface RoleRule {
  /** @alpha */
  resource: string;

  /** @alpha */
  allowActions: string[];

  /** @alpha */
  condition?: Condition | undefined;
}
