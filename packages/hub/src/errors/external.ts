import type { ConnectError } from "@connectrpc/connect";

import { NotOK } from "@cerbos/core";

import { fileErrorFromProto } from "../convert/fromProtobuf";
import type {
  ErrDetailCannotModifyGitConnectedStoreValid,
  ErrDetailConditionUnsatisfiedValid,
  ErrDetailNoUsableFilesValid,
  ErrDetailOperationDiscardedValid,
  ErrDetailValidationFailureValid,
} from "../protobuf/cerbos/cloud/store/v1/store_pb";
import {
  ErrDetailCannotModifyGitConnectedStoreSchema,
  ErrDetailConditionUnsatisfiedSchema,
  ErrDetailNoUsableFilesSchema,
  ErrDetailOperationDiscardedSchema,
  ErrDetailValidationFailureSchema,
} from "../protobuf/cerbos/cloud/store/v1/store_pb";
import type { FileError } from "../types";

import { notOKParams } from "./internal";

export class CannotModifyGitConnectedStore extends NotOK {
  /** @internal */
  public static readonly schema = ErrDetailCannotModifyGitConnectedStoreSchema;

  /** @internal */
  public constructor(
    error: ConnectError,
    _: ErrDetailCannotModifyGitConnectedStoreValid,
  ) {
    super(...notOKParams(error));
  }
}

export class ConditionUnsatisfied extends NotOK {
  /** @internal */
  public static readonly schema = ErrDetailConditionUnsatisfiedSchema;

  public readonly currentStoreVersion: bigint;

  /** @internal */
  public constructor(
    error: ConnectError,
    { currentStoreVersion }: ErrDetailConditionUnsatisfiedValid,
  ) {
    super(...notOKParams(error));
    this.currentStoreVersion = currentStoreVersion;
  }
}

export class NoUsableFiles extends NotOK {
  /** @internal */
  public static readonly schema = ErrDetailNoUsableFilesSchema;

  public readonly ignoredFiles: string[];

  /** @internal */
  public constructor(
    error: ConnectError,
    { ignoredFiles }: ErrDetailNoUsableFilesValid,
  ) {
    super(...notOKParams(error));
    this.ignoredFiles = ignoredFiles;
  }
}

export class OperationDiscarded extends NotOK {
  /** @internal */
  public static readonly schema = ErrDetailOperationDiscardedSchema;

  public readonly currentStoreVersion: bigint;
  public readonly ignoredFiles: string[];

  /** @internal */
  public constructor(
    error: ConnectError,
    { currentStoreVersion, ignoredFiles }: ErrDetailOperationDiscardedValid,
  ) {
    super(...notOKParams(error));
    this.currentStoreVersion = currentStoreVersion;
    this.ignoredFiles = ignoredFiles;
  }
}

export class ValidationFailure extends NotOK {
  /** @internal */
  public static readonly schema = ErrDetailValidationFailureSchema;

  public readonly errors: FileError[];

  /** @internal */
  public constructor(
    error: ConnectError,
    { errors }: ErrDetailValidationFailureValid,
  ) {
    super(...notOKParams(error));
    this.errors = errors.map(fileErrorFromProto);
  }
}
