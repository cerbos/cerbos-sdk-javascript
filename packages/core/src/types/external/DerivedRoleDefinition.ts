import type { Condition } from "./Condition";

/**
 * The definition of a {@link https://docs.cerbos.dev/cerbos/latest/policies/derived_roles | derived role}.
 *
 * @public
 */
export interface DerivedRoleDefinition {
  /**
   * A descriptive name for the derived role.
   */
  name: string;

  /**
   * The static roles (from the identity provider) to which this derived role applies.
   *
   * @remarks
   * The special value `*` can be used to match any role.
   */
  parentRoles: string[];

  /**
   * A set of expressions that must evaluate to true to activate the derived role.
   */
  condition?: Condition | undefined;
}
