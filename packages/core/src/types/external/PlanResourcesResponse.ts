import type { PlanExpressionOperand } from "./PlanExpressionOperand.js";
import { PlanKind } from "./PlanKind.js";
import type { PlanResourcesMetadata } from "./PlanResourcesMetadata.js";
import type { ValidationError } from "./ValidationError.js";

/**
 * A query plan that can be used to obtain a list of resources on which a principal is allowed to perform a particular action.
 */
export type PlanResourcesResponse =
  | PlanResourcesConditionalResponse
  | PlanResourcesUnconditionalResponse;

/**
 * Common fields between different {@link PlanResourcesResponse} types.
 */
export interface PlanResourcesResponseBase {
  /**
   * The unique identifier for the request used in audit logs.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.33.
   */
  cerbosCallId: string;

  /**
   * The identifier for tracing the request.
   */
  requestId: string;

  /**
   * Any schema validation errors for the principal or resource attributes.
   */
  validationErrors: ValidationError[];

  /**
   * Additional information about the query plan.
   *
   * @remarks
   * `undefined` if {@link PlanResourcesRequestBase.includeMetadata | includeMetadata} was `false`.
   */
  metadata: PlanResourcesMetadata | undefined;
}

/**
 * A query plan for when the specified action is conditionally allowed for the principal on resources matching the input.
 */
export interface PlanResourcesConditionalResponse extends PlanResourcesResponseBase {
  /**
   * The type of plan.
   */
  kind: PlanKind.CONDITIONAL;

  /**
   * The root node of the query condition abstract syntax tree.
   */
  condition: PlanExpressionOperand;
}

/**
 * Type guard to check if a {@link PlanResourcesResponse} is a {@link PlanResourcesConditionalResponse}.
 */
export function planResourcesResponseIsConditional(
  output: PlanResourcesResponse,
): output is PlanResourcesConditionalResponse {
  return output.kind === PlanKind.CONDITIONAL;
}

/**
 * A query plan for when the specified action is always allowed or denied for the principal on resources matching the input.
 */
export interface PlanResourcesUnconditionalResponse extends PlanResourcesResponseBase {
  /**
   * The type of plan.
   */
  kind: PlanKind.ALWAYS_ALLOWED | PlanKind.ALWAYS_DENIED;
}

/**
 * Type guard to check if a {@link PlanResourcesResponse} is a {@link PlanResourcesUnconditionalResponse}.
 */
export function planResourcesResponseIsUnconditional(
  output: PlanResourcesResponse,
): output is PlanResourcesUnconditionalResponse {
  return output.kind !== PlanKind.CONDITIONAL;
}
