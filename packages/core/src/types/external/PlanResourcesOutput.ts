import type { PlanExpressionOperand } from "./PlanExpressionOperand.js";
import { PlanKind } from "./PlanKind.js";
import type { ValidationError } from "./ValidationError.js";

/**
 * Output from a `PlanResources` invocation.
 */
export type PlanResourcesOutput =
  | PlanResourcesConditionalOutput
  | PlanResourcesUnconditionalOutput;

/**
 * Common fields between different {@link PlanResourcesOutput} types.
 */
export interface PlanResourcesOutputBase {
  /**
   * An identifier for tracing the request.
   */
  requestId: string;

  /**
   * The action for which the plan was made.
   *
   * @deprecated Use {@link PlanResourcesOutputBase.actions | actions} instead.
   */
  action: string;

  /**
   * The actions for which the plan was made.
   */
  actions: string[];

  /**
   * The version of the policy that was used to make the plan.
   */
  policyVersion: string;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies.html | scope} of the policy that was used to make the plan.
   */
  scope: string;

  /**
   * Any schema validation errors for the principal or resource attributes.
   */
  validationErrors: ValidationError[];
}

/**
 * A query plan for when the specified action is conditionally allowed for the principal on resources matching the input.
 */
export interface PlanResourcesConditionalOutput extends PlanResourcesOutputBase {
  /**
   * The type of plan.
   */
  kind: PlanKind.CONDITIONAL;

  /**
   * The root node of the query condition abstract syntax tree.
   */
  condition: PlanExpressionOperand;

  /**
   * The query condition abstract syntax tree rendered as a human-readable string.
   */
  conditionString: string;
}

/**
 * Type guard to check if a {@link PlanResourcesOutput} is a {@link PlanResourcesConditionalOutput}.
 */
export function planResourcesOutputIsConditional(
  output: PlanResourcesOutput,
): output is PlanResourcesConditionalOutput {
  return output.kind === PlanKind.CONDITIONAL;
}

/**
 * A query plan for when the specified action is always allowed or denied for the principal on resources matching the input.
 */
export interface PlanResourcesUnconditionalOutput extends PlanResourcesOutputBase {
  /**
   * The type of plan.
   */
  kind: PlanKind.ALWAYS_ALLOWED | PlanKind.ALWAYS_DENIED;
}

/**
 * Type guard to check if a {@link PlanResourcesOutput} is a {@link PlanResourcesUnconditionalOutput}.
 */
export function planResourcesOutputIsUnconditional(
  output: PlanResourcesOutput,
): output is PlanResourcesUnconditionalOutput {
  return output.kind !== PlanKind.CONDITIONAL;
}
