import type { AuxData } from "./AuxData.js";
import type { Principal } from "./Principal.js";
import type { RequestContext } from "./RequestContext.js";
import type { ResourceQuery } from "./ResourceQuery.js";

/**
 * Input to {@link Client.planResources}.
 */
export type PlanResourcesRequest =
  | PlanResourcesRequestWithAction
  | PlanResourcesRequestWithActions;

/**
 * Common fields for inputs to {@link Client.planResources}.
 */
export interface PlanResourcesRequestBase {
  /**
   * The principal for whom to plan.
   */
  principal: Principal;

  /**
   * Partial details of the resources for which to plan.
   */
  resource: ResourceQuery;

  /**
   * Auxiliary data.
   *
   * @defaultValue `{}`
   */
  auxData?: AuxData | undefined;

  /**
   * Include {@link PlanResourcesMetadata | additional metadata} in the plan?
   *
   * @defaultValue `false`
   */
  includeMetadata?: boolean | undefined;

  /**
   * The identifier for tracing the request.
   *
   * @defaultValue A randomly-generated UUID.
   */
  requestId?: string | undefined;

  /**
   * Metadata to attach to the request.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.51.
   *
   * This information will be captured in the audit logs if audit logging is enabled in the policy decision point server.
   */
  requestContext?: RequestContext | undefined;
}

/**
 * Input to {@link Client.planResources}.
 */
export interface PlanResourcesRequestWithAction extends PlanResourcesRequestBase {
  /**
   * The action for which to plan.
   *
   * @deprecated Use {@link PlanResourcesRequestWithActions.actions | actions} instead.
   */
  action: string;
}

/**
 * Input to {@link Client.planResources}.
 */
export interface PlanResourcesRequestWithActions extends PlanResourcesRequestBase {
  /**
   * The actions for which to plan.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.44.
   */
  actions: string[];
}
