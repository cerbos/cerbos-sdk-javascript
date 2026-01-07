import type { Effect } from "./Effect.js";

/**
 * The `CheckResources` decision made for an action.
 *
 * @public
 */
export interface CheckOutputActionEffect {
  /**
   * The outcome of the decision.
   */
  effect: Effect;

  /**
   * The ID of the policy that was used to make the decision.
   */
  policy: string;

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies.html | scope} of the policy that was used to make the decision.
   */
  scope: string;
}
