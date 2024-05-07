import type { ValidationError } from "./ValidationError";

/**
 * Common fields between different {@link PlanResourcesOutput} types.
 *
 * @public
 */
export interface PlanResourcesOutputBase {
  /**
   * An identifier for tracing the request.
   */
  requestId: string;

  /**
   * The action for which the plan was made.
   */
  action: string;

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
