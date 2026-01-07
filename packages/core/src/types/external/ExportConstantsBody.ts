import type { Value } from "./Value.js";

/**
 * A set of {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#export-constants | exported constants}
 * to be reused in other policies.
 *
 * @remarks
 * Requires the Cerbos policy decision point server to be at least v0.40.
 *
 * @public
 */
export interface ExportConstantsBody {
  /**
   * The name to use when importing the set of constants.
   */
  name: string;

  /**
   * Constant values.
   */
  definitions: Record<string, Value>;
}
