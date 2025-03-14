import type { DerivedRoles } from "./DerivedRoles";
import type { ExportConstants } from "./ExportConstants";
import type { ExportVariables } from "./ExportVariables";
import type { PrincipalPolicy } from "./PrincipalPolicy";
import type { ResourcePolicy } from "./ResourcePolicy";
import type { RolePolicy } from "./RolePolicy";

/**
 * A {@link https://docs.cerbos.dev/cerbos/latest/policies/ | policy} definition.
 *
 * @public
 */
export type Policy =
  | DerivedRoles
  | ExportConstants
  | ExportVariables
  | PrincipalPolicy
  | ResourcePolicy
  | RolePolicy;

/**
 * Type guard to check if a {@link Policy} is a set of {@link DerivedRoles}.
 *
 * @public
 */
export function policyIsDerivedRoles(policy: Policy): policy is DerivedRoles {
  return "derivedRoles" in policy;
}

/**
 * Type guard to check if a {@link Policy} is a set of {@link ExportConstants}.
 *
 * @public
 */
export function policyIsExportConstants(
  policy: Policy,
): policy is ExportConstants {
  return "exportConstants" in policy;
}

/**
 * Type guard to check if a {@link Policy} is a set of {@link ExportVariables}.
 *
 * @public
 */
export function policyIsExportVariables(
  policy: Policy,
): policy is ExportVariables {
  return "exportVariables" in policy;
}

/**
 * Type guard to check if a {@link Policy} is a {@link PrincipalPolicy}.
 *
 * @public
 */
export function policyIsPrincipalPolicy(
  policy: Policy,
): policy is PrincipalPolicy {
  return "principalPolicy" in policy;
}

/**
 * Type guard to check if a {@link Policy} is a {@link ResourcePolicy}.
 *
 * @public
 */
export function policyIsResourcePolicy(
  policy: Policy,
): policy is ResourcePolicy {
  return "resourcePolicy" in policy;
}

/** @alpha */
export function policyIsRolePolicy(policy: Policy): policy is RolePolicy {
  return "rolePolicy" in policy;
}
