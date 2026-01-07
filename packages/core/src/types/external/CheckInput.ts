import type { DecodedAuxData } from "./DecodedAuxData.js";
import type { Principal } from "./Principal.js";
import type { Resource } from "./Resource.js";

/**
 * Input to a `CheckResources` decision.
 *
 * @public
 */
export interface CheckInput {
  /**
   * An identifier for tracing the request.
   */
  requestId: string;

  /**
   * The principal that was checked.
   */
  principal: Required<Omit<Principal, "attributes">>;

  /**
   * The resource that was checked.
   */
  resource: Required<Omit<Resource, "attributes">>;

  /**
   * The actions that were checked.
   */
  actions: string[];

  /**
   * Auxiliary data that was used in the check.
   */
  auxData: DecodedAuxData | undefined;
}
