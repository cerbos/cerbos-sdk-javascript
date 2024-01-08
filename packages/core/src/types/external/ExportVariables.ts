import type { ExportVariablesBody } from "./ExportVariablesBody";
import type { PolicyBase } from "./PolicyBase";

/**
 * A set of {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#export | exported variables}
 * to be reused in other policies.
 *
 * @remarks
 * Requires the Cerbos policy decision point server to be at least v0.29.
 *
 * @public
 */
export interface ExportVariables extends PolicyBase {
  /**
   * A set of exported variables.
   */
  exportVariables: ExportVariablesBody;
}
