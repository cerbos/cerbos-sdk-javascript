import type { DecodedAuxData } from "./DecodedAuxData";
import type { Principal } from "./Principal";
import type { ResourceQuery } from "./ResourceQuery";

/**
 * Input to a `PlanResources` invocation.
 *
 * @public
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
   */
  action: string;

  /**
   * Auxiliary data that was used in the plan.
   */
  auxData: DecodedAuxData | undefined;
}
