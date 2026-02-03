import type { AuxData } from "./AuxData.js";
import type { Principal } from "./Principal.js";
import type { RequestContext } from "./RequestContext.js";
import type { ResourceCheck } from "./ResourceCheck.js";

/**
 * Input to {@link Client.checkResources}.
 */
export interface CheckResourcesRequest {
  /**
   * The principal to check.
   */
  principal: Principal;

  /**
   * The resources and actions to check.
   */
  resources: ResourceCheck[];

  /**
   * Auxiliary data.
   *
   * @defaultValue `{}`
   */
  auxData?: AuxData | undefined;

  /**
   * Include {@link CheckResourcesResultMetadata | additional metadata} in the results?
   *
   * @defaultValue `false`
   */
  includeMetadata?: boolean | undefined;

  /**
   * An identifier for tracing the request.
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
