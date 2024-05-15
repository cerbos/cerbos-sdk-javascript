import type { PlanResourcesInput } from "./PlanResourcesInput";
import type { PlanResourcesOutput } from "./PlanResourcesOutput";

/**
 * The outcome of a `PlanResources` decision made by the policy decision point server.
 *
 * @public
 */
export interface DecisionLogEntryPlanResources {
  /**
   * The method that was called.
   */
  name: "PlanResources";

  /**
   * The input to the `PlanResources` call.
   */
  input: PlanResourcesInput;

  /**
   * The outputs from the `PlanResources` call.
   */
  output: PlanResourcesOutput;

  /**
   * The error (if any) encountered while evaluating the `PlanResources` call.
   */
  error: string | undefined;
}
