import type { InspectedVariableKind } from "./InspectedVariableKind.js";

/**
 * Details of a {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#variables | variable} referenced by a policy.
 */
export interface InspectedVariable {
  /**
   * Kind of the variable.
   */
  kind: InspectedVariableKind;

  /**
   * Name of the variable.
   */
  name: string;

  /**
   * Definition of the variable, if known.
   */
  definition: string | undefined;

  /**
   * Source of the variable, if it was imported.
   */
  source: string | undefined;

  /**
   * Whether the variable is used in a policy condition.
   */
  used: boolean;
}
