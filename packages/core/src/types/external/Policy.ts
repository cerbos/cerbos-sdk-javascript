import type { DerivedRolesBody } from "./DerivedRolesBody";
import type { ExportConstantsBody } from "./ExportConstantsBody";
import type { ExportVariablesBody } from "./ExportVariablesBody";
import type { PolicyMetadata } from "./PolicyMetadata";
import type { PrincipalPolicyBody } from "./PrincipalPolicyBody";
import type { ResourcePolicyBody } from "./ResourcePolicyBody";
import type { RolePolicyBody } from "./RolePolicyBody";

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
 * Common fields between different {@link Policy} types.
 *
 * @public
 */
export interface PolicyBase {
  /**
   * API version of the policy.
   */
  apiVersion?: string | undefined;

  /**
   * Description of the policy.
   */
  description?: string | undefined;

  /**
   * Whether the policy is ignored by the Cerbos engine.
   */
  disabled?: boolean | undefined;

  /**
   * Metadata about the policy.
   */
  metadata?: PolicyMetadata | undefined;

  /**
   * Variable expressions defined for the policy.
   *
   * @remarks
   * Each variable is evaluated before any rule condition.
   * A variable expression can contain anything that condition expression can have.
   *
   * @deprecated Define variables within the policy body instead, provided the Cerbos policy decision point server is at least v0.29 ({@link DerivedRolesBody.variables}, {@link PrincipalPolicyBody.variables}, or {@link ResourcePolicyBody.variables}).
   */
  variables?: Record<string, string> | undefined;
}

/**
 * A set of {@link https://docs.cerbos.dev/cerbos/latest/policies/derived_roles | derived roles}
 * to augment static RBAC roles with contextual data to provide more fine-grained control at runtime.
 *
 * @public
 */
export interface DerivedRoles extends PolicyBase {
  /**
   * A set of derived roles.
   */
  derivedRoles: DerivedRolesBody;
}

/**
 * Type guard to check if a {@link Policy} is a set of {@link DerivedRoles}.
 *
 * @public
 */
export function policyIsDerivedRoles(policy: Policy): policy is DerivedRoles {
  return "derivedRoles" in policy;
}

/**
 * A set of {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#export-constants | exported constants}
 * to be reused in other policies.
 *
 * @remarks
 * Requires the Cerbos policy decision point server to be at least v0.40.
 *
 * @public
 */
export interface ExportConstants extends PolicyBase {
  /**
   * A set of exported constants.
   */
  exportConstants: ExportConstantsBody;
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
 * A set of {@link https://docs.cerbos.dev/cerbos/latest/policies/variables#export | exported variables}
 * to be reused in other policies.
 *
 * @remarks
 * Requires the Cerbos policy decision point server to be at least v0.29.
 *
 * @public
 */
export interface ExportVariables extends PolicyBase {
  /**
   * A set of exported variables.
   */
  exportVariables: ExportVariablesBody;
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
export interface RolePolicy extends PolicyBase {
  /** @alpha */
  rolePolicy: RolePolicyBody;
}

/** @alpha */
export function policyIsRolePolicy(policy: Policy): policy is RolePolicy {
  return "rolePolicy" in policy;
}
