import type { DescMessage, MessageValidType } from "@bufbuild/protobuf";
import { createMutableRegistry } from "@bufbuild/protobuf";
import type { Code } from "@connectrpc/connect";
import { ConnectError } from "@connectrpc/connect";

import type { StatusNotOK } from "@cerbos/core";
import { NotOK } from "@cerbos/core";

import { fileErrorFromProto } from "../convert/fromProtobuf.js";
import {
  ErrDetailCannotModifyGitConnectedStoreSchema,
  ErrDetailConditionUnsatisfiedSchema,
  ErrDetailNoUsableFilesSchema,
  ErrDetailOperationDiscardedSchema,
  ErrDetailValidationFailureSchema,
} from "../protobuf/cerbos/cloud/store/v1/store_pb.js";

import {
  CannotModifyGitConnectedStore,
  ConditionUnsatisfied,
  NoUsableFiles,
  OperationDiscarded,
  ValidationFailure,
} from "./external.js";

const registry = createMutableRegistry();

type ErrorFromDetails<T extends DescMessage = DescMessage> = (
  error: ConnectError,
  details: MessageValidType<T>,
) => NotOK;

const errorsFromDetails = new Map<string, ErrorFromDetails>();

function addErrorFromDetails<T extends DescMessage>(
  schema: T,
  errorFromDetails: ErrorFromDetails<T>,
): void {
  registry.add(schema);
  errorsFromDetails.set(schema.typeName, errorFromDetails);
}

addErrorFromDetails(
  ErrDetailCannotModifyGitConnectedStoreSchema,
  (error) => new CannotModifyGitConnectedStore(error),
);

addErrorFromDetails(
  ErrDetailConditionUnsatisfiedSchema,
  (error, { currentStoreVersion }) =>
    new ConditionUnsatisfied(error, currentStoreVersion),
);

addErrorFromDetails(
  ErrDetailNoUsableFilesSchema,
  (error, { ignoredFiles }) => new NoUsableFiles(error, ignoredFiles),
);

addErrorFromDetails(
  ErrDetailOperationDiscardedSchema,
  (error, { currentStoreVersion, ignoredFiles }) =>
    new OperationDiscarded(error, currentStoreVersion, ignoredFiles),
);

addErrorFromDetails(
  ErrDetailValidationFailureSchema,
  (error, { errors }) =>
    new ValidationFailure(error, errors.map(fileErrorFromProto)),
);

export function createNotOK(error: unknown): NotOK {
  if (error instanceof NotOK) {
    return error;
  }

  const connectError = ConnectError.from(error);

  const [details] = connectError.findDetails(registry);
  const errorFromDetails = details && errorsFromDetails.get(details.$typeName);
  if (errorFromDetails) {
    return errorFromDetails(connectError, details);
  }

  return new NotOK(...notOKParams(connectError));
}

export function notOKParams({
  code,
  rawMessage,
  cause,
}: ConnectError): ConstructorParameters<typeof NotOK> {
  return [connectCodeToStatus(code), rawMessage, { cause }];
}

export function errorCode(error: unknown): StatusNotOK {
  if (error instanceof NotOK) {
    return error.code;
  }

  return connectCodeToStatus(ConnectError.from(error).code);
}

function connectCodeToStatus(code: Code): StatusNotOK {
  return code as number as StatusNotOK;
}
