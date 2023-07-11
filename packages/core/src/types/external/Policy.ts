import type { DerivedRoles } from "./DerivedRoles";
import type { PrincipalPolicy } from "./PrincipalPolicy";
import type { ResourcePolicy } from "./ResourcePolicy";

/**
 * A {@link https://docs.cerbos.dev/cerbos/latest/policies/index.html | policy} definition.
 *
 * @public
 */
export type Policy = DerivedRoles | PrincipalPolicy | ResourcePolicy;

/**
 * Type guard to check if a {@link Policy} is a set of {@link DerivedRoles}.
 *
 * @public
 */
export const policyIsDerivedRoles = (policy: Policy): policy is DerivedRoles =>
  "derivedRoles" in policy;

/**
 * Type guard to check if a {@link Policy} is a {@link PrincipalPolicy}.
 *
 * @public
 */
export const policyIsPrincipalPolicy = (
  policy: Policy,
): policy is PrincipalPolicy => "principalPolicy" in policy;

/**
 * Type guard to check if a {@link Policy} is a {@link ResourcePolicy}.
 *
 * @public
 */
export const policyIsResourcePolicy = (
  policy: Policy,
): policy is ResourcePolicy => "resourcePolicy" in policy;
