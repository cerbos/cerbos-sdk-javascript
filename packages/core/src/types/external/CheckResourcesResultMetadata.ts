import type { CheckResourcesResultMetadataEffect } from "./CheckResourcesResultMetadataEffect.js";

/**
 * Additional information about how policy decisions were reached.
 */
export interface CheckResourcesResultMetadata {
  /**
   * Additional information about how the policy decision was reached for each action.
   */
  actions: Record<string, CheckResourcesResultMetadataEffect>;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/derived_roles | derived roles} that were applied to the principal for the resource.
   */
  effectiveDerivedRoles: string[];
}
