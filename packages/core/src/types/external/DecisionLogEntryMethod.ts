import type { DecisionLogEntryCheckResources } from "./DecisionLogEntryCheckResources";
import type { DecisionLogEntryPlanResources } from "./DecisionLogEntryPlanResources";

/**
 * The outcome of a decision made by the policy decision point server.
 *
 * @public
 */
export type DecisionLogEntryMethod =
  | DecisionLogEntryCheckResources
  | DecisionLogEntryPlanResources;

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
 * Type guard to check if a {@link DecisionLogEntryMethod} is a {@link DecisionLogEntryPlanResources}.
 *
 * @public
 */
export function decisionLogEntryMethodIsPlanResources(
  method: DecisionLogEntryMethod,
): method is DecisionLogEntryPlanResources {
  return method.name === "PlanResources";
}
