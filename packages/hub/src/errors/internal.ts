import type { Message } from "@bufbuild/protobuf";
import { createRegistry } from "@bufbuild/protobuf";
import type { Code } from "@connectrpc/connect";
import { ConnectError } from "@connectrpc/connect";

import { NotOK } from "@cerbos/core";

import {
  CannotModifyGitConnectedStore,
  ConditionUnsatisfied,
  NoUsableFiles,
  OperationDiscarded,
  ValidationFailure,
} from "./external";

const errors = [
  CannotModifyGitConnectedStore,
  ConditionUnsatisfied,
  NoUsableFiles,
  OperationDiscarded,
  ValidationFailure,
] as const;

const registry = createRegistry(...errors.map(({ schema }) => schema));

const constructors = new Map(
  errors.map((error) => [error.schema.typeName, error]),
) as ReadonlyMap<string, new (error: ConnectError, details: Message) => NotOK>;

export function createNotOK(error: unknown): NotOK {
  if (error instanceof NotOK) {
    return error;
  }

  const connectError = ConnectError.from(error);

  const [details] = connectError.findDetails(registry);
  const constructor = details && constructors.get(details.$typeName);
  if (constructor) {
    return new constructor(connectError, details);
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

export function errorCode(error: unknown): NotOK["code"] {
  if (error instanceof NotOK) {
    return error.code;
  }

  return connectCodeToStatus(ConnectError.from(error).code);
}

function connectCodeToStatus(code: Code): NotOK["code"] {
  return code as number as NotOK["code"];
}
