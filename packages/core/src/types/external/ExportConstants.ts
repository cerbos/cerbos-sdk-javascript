import type { ExportConstantsBody } from "./ExportConstantsBody";
import type { PolicyBase } from "./PolicyBase";

/**
 * A set of {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#export-constants | exported constants}
 * to be reused in other policies.
 *
 * @remarks
 * Requires the Cerbos policy decision point server to be at least v0.40.
 *
 * @public
 */
export interface ExportConstants extends PolicyBase {
  /**
   * A set of exported constants.
   */
  exportConstants: ExportConstantsBody;
}
