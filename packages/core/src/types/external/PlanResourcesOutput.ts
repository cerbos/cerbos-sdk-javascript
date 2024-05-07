import { PlanKind } from "./PlanKind";
import type { PlanResourcesConditionalOutput } from "./PlanResourcesConditionalOutput";
import type { PlanResourcesUnconditionalOutput } from "./PlanResourcesUnconditionalOutput";

/**
 * Output from a `PlanResources` invocation.
 *
 * @public
 */
export type PlanResourcesOutput =
  | PlanResourcesConditionalOutput
  | PlanResourcesUnconditionalOutput;

/**
 * Type guard to check if a {@link PlanResourcesOutput} is a {@link PlanResourcesConditionalOutput}.
 *
 * @public
 */
export function planResourcesOutputIsConditional(
  output: PlanResourcesOutput,
): output is PlanResourcesConditionalOutput {
  return output.kind === PlanKind.CONDITIONAL;
}

/**
 * Type guard to check if a {@link PlanResourcesOutput} is a {@link PlanResourcesUnconditionalOutput}.
 *
 * @public
 */
export function planResourcesOutputIsUnconditional(
  output: PlanResourcesOutput,
): output is PlanResourcesUnconditionalOutput {
  return output.kind !== PlanKind.CONDITIONAL;
}
