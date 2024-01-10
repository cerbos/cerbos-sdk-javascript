import type { PolicyBase } from "./PolicyBase";
import type { ResourcePolicyBody } from "./ResourcePolicyBody";

/**
 * A {@link https://docs.cerbos.dev/cerbos/latest/policies/resource_policies | policy} defining rules for actions that can be performed on a given resource.
 *
 * @public
 */
export interface ResourcePolicy extends PolicyBase {
  /**
   * The policy body.
   */
  resourcePolicy: ResourcePolicyBody;
}
