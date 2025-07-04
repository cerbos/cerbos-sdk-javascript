import type { CheckInput } from "./CheckInput";
import type { CheckOutput } from "./CheckOutput";
import type { PlanResourcesInput } from "./PlanResourcesInput";
import type { PlanResourcesOutput } from "./PlanResourcesOutput";

/**
 * The outcome of a decision made by the policy decision point server.
 *
 * @public
 */
export type DecisionLogEntryMethod =
  | DecisionLogEntryCheckResources
  | DecisionLogEntryPlanResources;

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

/**
 * Type guard to check if a {@link DecisionLogEntryMethod} is a {@link DecisionLogEntryCheckResources}.
 *
 * @public
 */
export function decisionLogEntryMethodIsCheckResources(
  method: DecisionLogEntryMethod,
): method is DecisionLogEntryCheckResources {
  return method.name === "CheckResources";
}

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

/**
 * Type guard to check if a {@link DecisionLogEntryMethod} is a {@link DecisionLogEntryPlanResources}.
 *
 * @public
 */
export function decisionLogEntryMethodIsPlanResources(
  method: DecisionLogEntryMethod,
): method is DecisionLogEntryPlanResources {
  return method.name === "PlanResources";
}
