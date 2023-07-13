import type { PolicyBase } from "./PolicyBase";

/**
 * A set of {@link https://docs.cerbos.dev/cerbos/prerelease/policies/variables.html#export | exported variables}
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
  exportVariables: {
    /**
     * The name to use when importing the set of variables.
     */
    name: string;

    /**
     * Variable expressions.
     */
    definitions: Record<string, string>;
  };
}
