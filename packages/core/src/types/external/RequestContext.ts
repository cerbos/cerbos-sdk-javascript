import type { Value } from "./Value.js";

/**
 * Metadata attached to a request.
 *
 * @remarks
 * Requires the Cerbos policy decision point server to be at least v0.51.
 *
 * This information will be captured in the audit logs if audit logging is enabled in the policy decision point server.
 */
export interface RequestContext {
  /**
   * User-defined metadata.
   */
  annotations: Record<string, Value>;
}
