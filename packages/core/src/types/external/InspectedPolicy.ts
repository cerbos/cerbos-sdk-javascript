import type { InspectedAttribute } from "./InspectedAttribute";
import type { InspectedConstant } from "./InspectedConstant";
import type { InspectedDerivedRole } from "./InspectedDerivedRole";
import type { InspectedVariable } from "./InspectedVariable";

/**
 * Details of a policy in the store.
 *
 * @public
 */
export interface InspectedPolicy {
  /**
   * ID of the policy.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.37.
   */
  id: string;

  /**
   * Actions defined in the policy.
   */
  actions: string[];

  /**
   * Attributes referenced in the policy.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.38.
   */
  attributes: InspectedAttribute[];

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#constants | Constants} referenced in the policy.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.40.
   */
  constants: InspectedConstant[];

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/derived_roles | Derived roles} referenced in the policy.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.37.
   */
  derivedRoles: InspectedDerivedRole[];

  /**
   * {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#variables | Variables} referenced in the policy.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.37.
   */
  variables: InspectedVariable[];
}
