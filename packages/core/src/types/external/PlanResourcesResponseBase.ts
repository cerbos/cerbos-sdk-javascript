import type { PlanResourcesMetadata } from "./PlanResourcesMetadata";
import type { ValidationError } from "./ValidationError";

/**
 * Common fields between different {@link PlanResourcesResponse} types.
 *
 * @public
 */
export interface PlanResourcesResponseBase {
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
   * `undefined` if {@link PlanResourcesRequest.includeMetadata | includeMetadata} was `false`.
   */
  metadata: PlanResourcesMetadata | undefined;
}
