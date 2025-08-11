import type { DatabaseDriver } from "./DatabaseDriver";
import type { LocalBundle } from "./LocalBundle";

/**
 * Source of policies.
 *
 * @public
 */
export type PolicySource =
  | PolicySourceBlob
  | PolicySourceDatabase
  | PolicySourceDisk
  | PolicySourceEmbeddedPDP
  | PolicySourceGit
  | PolicySourceHub;

/**
 * Policies sourced from Amazon-S3-compatible storage using the {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#blob-driver | `blob` storage driver}.
 *
 * @public
 */
export interface PolicySourceBlob {
  /**
   * Discriminator to mark the policy source as blob storage.
   */
  kind: "blob";

  /**
   * URL of the bucket from which policies were downloaded.
   */
  bucketUrl: string;

  /**
   * Subdirectory within the bucket from which policies were loaded.
   */
  prefix: string;
}

/**
 * Type guard to check if a {@link PolicySource} is a {@link PolicySourceBlob}.
 *
 * @public
 */
export function policySourceIsBlob(
  source: PolicySource,
): source is PolicySourceBlob {
  return source.kind === "blob";
}

/**
 * Policies sourced from a database using the {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#mysql | `mysql`},
 * {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#postgres | `postgres`}, or
 * {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#sqlite3 | `sqlite3`} storage drivers.
 *
 * @public
 */
export interface PolicySourceDatabase {
  /**
   * Discriminator to mark the policy source as database.
   */
  kind: "database";

  /**
   * Driver used to load policies.
   */
  driver: DatabaseDriver;
}

/**
 * Type guard to check if a {@link PolicySource} is a {@link PolicySourceDatabase}.
 *
 * @public
 */
export function policySourceIsDatabase(
  source: PolicySource,
): source is PolicySourceDatabase {
  return source.kind === "database";
}

/**
 * Policies sourced from a directory on the filesystem using the {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#disk-driver | `disk` storage driver}.
 *
 * @public
 */
export interface PolicySourceDisk {
  /**
   * Discriminator to mark the policy source as disk.
   */
  kind: "disk";

  /**
   * Path of the directory from which policies were loaded.
   */
  directory: string;
}

/**
 * Type guard to check if a {@link PolicySource} is a {@link PolicySourceDisk}.
 *
 * @public
 */
export function policySourceIsDisk(
  source: PolicySource,
): source is PolicySourceDisk {
  return source.kind === "disk";
}

/**
 * Policies sourced from an {@link https://docs.cerbos.dev/cerbos-hub/legacy/decision-points-embedded | embedded policy decision point}.
 *
 * @public
 */
export interface PolicySourceEmbeddedPDP {
  /**
   * Discriminator to mark the policy source as an embedded PDP.
   */
  kind: "embeddedPDP";

  /**
   * URL from which the embedded PDP was loaded.
   */
  url: string;

  /**
   * Hash of the commit from which the embedded PDP was built.
   */
  commit: string;

  /**
   * Time at which the embedded PDP was built.
   */
  builtAt?: Date | undefined;
}

/**
 * Type guard to check if a {@link PolicySource} is a {@link PolicySourceEmbeddedPDP}.
 *
 * @public
 */
export function policySourceIsEmbeddedPDP(
  source: PolicySource,
): source is PolicySourceEmbeddedPDP {
  return source.kind === "embeddedPDP";
}

/**
 * Policies sourced from a Git repository using the {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#git-driver | `git` storage driver}.
 *
 * @public
 */
export interface PolicySourceGit {
  /**
   * Discriminator to mark the policy source as Git.
   */
  kind: "git";

  /**
   * URL of the Git repository.
   */
  repositoryUrl: string;

  /**
   * Branch from which policies were cloned.
   */
  branch: string;

  /**
   * Subdirectory within the repository from which policies were loaded.
   */
  subdirectory: string;
}

/**
 * Type guard to check if a {@link PolicySource} is a {@link PolicySourceGit}.
 *
 * @public
 */
export function policySourceIsGit(
  source: PolicySource,
): source is PolicySourceGit {
  return source.kind === "git";
}

/**
 * Policies sourced from {@link https://www.cerbos.dev/product-cerbos-hub | Cerbos Hub} using the {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#hub | `hub` storage driver}.
 *
 * @public
 */
export type PolicySourceHub =
  | PolicySourceHubLabel
  | PolicySourceHubDeployment
  | PolicySourceHubPlayground
  | PolicySourceHubLocalBundle;

/**
 * Type guard to check if a {@link PolicySource} is a {@link PolicySourceHub}.
 *
 * @public
 */
export function policySourceIsHub(
  source: PolicySource,
): source is PolicySourceHub {
  return source.kind === "hub";
}

/**
 * Common fields between different {@link PolicySourceHub} types.
 *
 * @public
 */
export interface PolicySourceHubBase {
  /**
   * Discriminator to mark the policy source as Cerbos Hub.
   */
  kind: "hub";
}

/**
 * Policies sourced from a {@link https://docs.cerbos.dev/cerbos-hub/legacy/deployment-labels | label} in {@link https://www.cerbos.dev/product-cerbos-hub | Cerbos Hub} using the {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#hub | `hub` storage driver}.
 *
 * @public
 */
export interface PolicySourceHubLabel extends PolicySourceHubBase {
  /**
   * The {@link https://docs.cerbos.dev/cerbos-hub/legacy/deployment-labels | label} from which the policy bundle was downloaded.
   */
  label: string;
}

/**
 * Type guard to check if a {@link PolicySource} is a {@link PolicySourceHubLabel}.
 *
 * @public
 */
export function policySourceIsHubLabel(
  source: PolicySource,
): source is PolicySourceHubLabel {
  return policySourceIsHub(source) && "label" in source;
}

/**
 * Policies sourced from a deployment in {@link https://www.cerbos.dev/product-cerbos-hub | Cerbos Hub} using the {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#hub | `hub` storage driver}.
 *
 * @public
 */
export interface PolicySourceHubDeployment extends PolicySourceHubBase {
  /**
   * ID of the deployment from which the policy bundle was downloaded.
   */
  deploymentId: string;
}

/**
 * Type guard to check if a {@link PolicySource} is a {@link PolicySourceHubDeployment}.
 *
 * @public
 */
export function policySourceIsHubDeployment(
  source: PolicySource,
): source is PolicySourceHubDeployment {
  return policySourceIsHub(source) && "deploymentId" in source;
}

/**
 * Policies sourced from a {@link https://docs.cerbos.dev/cerbos-hub/playground | playground} in {@link https://www.cerbos.dev/product-cerbos-hub | Cerbos Hub} using the {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#hub | `hub` storage driver}.
 *
 * @public
 */
export interface PolicySourceHubPlayground extends PolicySourceHubBase {
  /**
   * ID of the {@link https://docs.cerbos.dev/cerbos-hub/playground | playground} from which the policy bundle was downloaded.
   */
  playgroundId: string;
}

/**
 * Type guard to check if a {@link PolicySource} is a {@link PolicySourceHubPlayground}.
 *
 * @public
 */
export function policySourceIsHubPlayground(
  source: PolicySource,
): source is PolicySourceHubPlayground {
  return policySourceIsHub(source) && "playgroundId" in source;
}

/**
 * Policies sourced from a local policy bundle using the {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html#hub | `hub` storage driver}.
 *
 * @public
 */
export interface PolicySourceHubLocalBundle extends PolicySourceHubBase {
  /**
   * Details of the local policy bundle.
   */
  localBundle: LocalBundle;
}

/**
 * Type guard to check if a {@link PolicySource} is a {@link PolicySourceHubLocalBundle}.
 *
 * @public
 */
export function policySourceIsHubLocalBundle(
  source: PolicySource,
): source is PolicySourceHubLocalBundle {
  return policySourceIsHub(source) && "localBundle" in source;
}
