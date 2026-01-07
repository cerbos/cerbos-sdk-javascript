import type { InspectedConstantKind } from "./InspectedConstantKind.js";
import type { Value } from "./Value.js";

/**
 * Details of a {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#constants | constant} referenced by a policy.
 *
 * @public
 */
export interface InspectedConstant {
  /**
   * Kind of the constant.
   */
  kind: InspectedConstantKind;

  /**
   * Name of the constant.
   */
  name: string;

  /**
   * Value of the constant, if known.
   */
  value: Value | undefined;

  /**
   * Source of the constant, if it was imported.
   */
  source: string | undefined;

  /**
   * Whether the constant is used in a policy condition.
   */
  used: boolean;
}
