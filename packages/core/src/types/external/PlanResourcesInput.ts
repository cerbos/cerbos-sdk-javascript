import type { DecodedAuxData } from "./DecodedAuxData.js";
import type { Principal } from "./Principal.js";
import type { ResourceQuery } from "./ResourceQuery.js";

/**
 * Input to a `PlanResources` invocation.
 */
export interface PlanResourcesInput {
  /**
   * An identifier for tracing the request.
   */
  requestId: string;

  /**
   * The principal for whom the plan was made.
   */
  principal: Required<Omit<Principal, "attributes">>;

  /**
   * Partial details of the resources for which the plan was made.
   */
  resource: Required<Omit<ResourceQuery, "attributes">>;

  /**
   * The action for which the plan was made.
   *
   * @deprecated Use {@link PlanResourcesInput.actions | actions} instead.
   */
  action: string;

  /**
   * The actions for which the plan was made.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.44.
   */
  actions: string[];

  /**
   * Auxiliary data that was used in the plan.
   */
  auxData: DecodedAuxData | undefined;
}
