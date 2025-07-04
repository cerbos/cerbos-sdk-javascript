import type { AuxData } from "./AuxData";
import type { Principal } from "./Principal";
import type { ResourceQuery } from "./ResourceQuery";

/**
 * Input to {@link @cerbos/core#Client.planResources}.
 *
 * @public
 */
export type PlanResourcesRequest =
  | PlanResourcesRequestWithAction
  | PlanResourcesRequestWithActions;

/**
 * Common fields for inputs to {@link @cerbos/core#Client.planResources}.
 *
 * @public
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
}

/**
 * Input to {@link @cerbos/core#Client.planResources}.
 *
 * @public
 */
export interface PlanResourcesRequestWithAction
  extends PlanResourcesRequestBase {
  /**
   * The action for which to plan.
   *
   * @deprecated Use {@link PlanResourcesRequestWithActions.actions | actions} instead.
   */
  action: string;
}

/**
 * Input to {@link @cerbos/core#Client.planResources}.
 *
 * @public
 */
export interface PlanResourcesRequestWithActions
  extends PlanResourcesRequestBase {
  /**
   * The actions for which to plan.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.44.
   */
  actions: string[];
}
