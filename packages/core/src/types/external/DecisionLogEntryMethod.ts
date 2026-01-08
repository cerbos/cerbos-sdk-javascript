import type { CheckInput } from "./CheckInput.js";
import type { CheckOutput } from "./CheckOutput.js";
import type { PlanResourcesInput } from "./PlanResourcesInput.js";
import type { PlanResourcesOutput } from "./PlanResourcesOutput.js";

/**
 * The outcome of a decision made by the policy decision point server.
 */
export type DecisionLogEntryMethod =
  | DecisionLogEntryCheckResources
  | DecisionLogEntryPlanResources;

/**
 * The outcome of a `CheckResources` decision made by the policy decision point server.
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
 */
export function decisionLogEntryMethodIsCheckResources(
  method: DecisionLogEntryMethod,
): method is DecisionLogEntryCheckResources {
  return method.name === "CheckResources";
}

/**
 * The outcome of a `PlanResources` decision made by the policy decision point server.
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
   * The output from the `PlanResources` call.
   */
  output: PlanResourcesOutput | undefined;

  /**
   * The error (if any) encountered while evaluating the `PlanResources` call.
   */
  error: string | undefined;
}

/**
 * Type guard to check if a {@link DecisionLogEntryMethod} is a {@link DecisionLogEntryPlanResources}.
 */
export function decisionLogEntryMethodIsPlanResources(
  method: DecisionLogEntryMethod,
): method is DecisionLogEntryPlanResources {
  return method.name === "PlanResources";
}
