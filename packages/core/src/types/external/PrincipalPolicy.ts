import type { PolicyBase } from "./PolicyBase";
import type { PrincipalPolicyBody } from "./PrincipalPolicyBody";

/**
 * A {@link https://docs.cerbos.dev/cerbos/latest/policies/principal_policies | policy} defining overrides for a specific user.
 *
 * @public
 */
export interface PrincipalPolicy extends PolicyBase {
  /**
   * The policy body.
   */
  principalPolicy: PrincipalPolicyBody;
}
