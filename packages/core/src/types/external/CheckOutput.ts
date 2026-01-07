import type { CheckOutputActionEffect } from "./CheckOutputActionEffect.js";
import type { OutputResult } from "./OutputResult.js";
import type { ValidationError } from "./ValidationError.js";

/**
 * Output from a `CheckResources` decision.
 *
 * @public
 */
export interface CheckOutput {
  /**
   * An identifier for tracing the request.
   */
  requestId: string;

  /**
   * Unique identifier of the resource that was checked.
   */
  resourceId: string;

  /**
   * The policy decisions for each action that was checked.
   */
  actions: Record<string, CheckOutputActionEffect>;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/derived_roles | derived roles} that were applied to the principal for the resource that was checked.
   */
  effectiveDerivedRoles: string[];

  /**
   * Any schema validation errors for the principal or resource attributes.
   */
  validationErrors: ValidationError[];

  /**
   * User-defined outputs from policy rule evaluations.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.27.
   */
  outputs: OutputResult[];
}
