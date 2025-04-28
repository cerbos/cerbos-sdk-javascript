import type { PlanResourcesMetadata } from "./PlanResourcesMetadata";
import type { ValidationError } from "./ValidationError";

/**
 * Common fields between different {@link PlanResourcesResponse} types.
 *
 * @public
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
