import type { CheckInput } from "./CheckInput";
import type { CheckOutput } from "./CheckOutput";

/**
 * The outcome of a `CheckResources` decision made by the policy decision point server.
 *
 * @public
 */
export interface DecisionLogEntryCheckResources {
  /**
   * The method that was called.
   */
  name: "CheckResources";

  /**
   * The inputs to the `CheckResources` call.
   */
  inputs: CheckInput[];

  /**
   * The outputs from the `CheckResources` call.
   */
  outputs: CheckOutput[];

  /**
   * The error (if any) encountered while evaluating the `CheckResources` call.
   */
  error: string | undefined;
}
