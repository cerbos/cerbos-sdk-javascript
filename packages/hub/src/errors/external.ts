import type { ConnectError } from "@connectrpc/connect";

import { NotOK } from "@cerbos/core";
import { setErrorNameAndStack } from "@cerbos/core/~internal";

import type { FileError } from "../types.js";

import { notOKParams } from "./internal.js";

/**
 * Error thrown when attempting to modify a store that is connected to a Git repository.
 *
 * @public
 */
export class CannotModifyGitConnectedStore extends NotOK {
  /** @internal */
  public constructor(error: ConnectError) {
    super(...notOKParams(error));
  }
}

/**
 * Error thrown when a store modification is rejected because the condition specified in the request wasn't met.
 *
 * @public
 */
export class ConditionUnsatisfied extends NotOK {
  /** @internal */
  public constructor(
    error: ConnectError,

    /**
     * The current version of the store.
     */
    public readonly currentStoreVersion: bigint,
  ) {
    super(...notOKParams(error));
  }
}

/**
 * Error thrown on failure to load credentials from environment variables.
 *
 * @public
 */
export class MissingCredentials extends Error {
  /** @internal */
  public constructor() {
    super(
      "Expected credentials to be provided in CERBOS_HUB_CLIENT_ID and CERBOS_HUB_CLIENT_SECRET environment variables",
    );

    setErrorNameAndStack(this);
  }
}

/**
 * Error thrown when {@link StoresClient.replaceFiles} fails because the request didn't contain any usable files.
 *
 * @public
 */
export class NoUsableFiles extends NotOK {
  /** @internal */
  public constructor(
    error: ConnectError,

    /**
     * Paths of files that were provided in the request but were ignored.
     *
     * @remarks
     * Files with unexpected paths, for example hidden files, will be ignored.
     */
    public readonly ignoredFiles: string[],
  ) {
    super(...notOKParams(error));
  }
}

/**
 * Error thrown when a store modification is aborted because it doesn't change the state of the store.
 *
 * @remarks
 * Use the `allowUnchanged` request parameter to avoid throwing an error and return the current store version instead.
 *
 * @public
 */
export class OperationDiscarded extends NotOK {
  /** @internal */
  public constructor(
    error: ConnectError,

    /**
     * The current version of the store.
     */
    public readonly currentStoreVersion: bigint,

    /**
     * Paths of files that were provided in the request but were ignored.
     *
     * @remarks
     * Files with unexpected paths, for example hidden files, will be ignored.
     */
    public readonly ignoredFiles: string[],
  ) {
    super(...notOKParams(error));
  }
}

/**
 * Error thrown when a store modification is rejected because it contains invalid files.
 *
 * @public
 */
export class ValidationFailure extends NotOK {
  /** @internal */
  public constructor(
    error: ConnectError,

    /**
     * The validation failures.
     */
    public readonly errors: FileError[],
  ) {
    super(...notOKParams(error));
  }
}
