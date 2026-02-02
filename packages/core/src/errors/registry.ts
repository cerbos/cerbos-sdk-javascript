import type { DescMessage, MessageShape } from "@bufbuild/protobuf";

import type {
  DeletePolicyErrorDetails,
  DisablePolicyErrorDetails,
} from "@cerbos/api/cerbos/response/v1/response_pb";
import {
  DeletePolicyErrorDetailsSchema,
  DisablePolicyErrorDetailsSchema,
} from "@cerbos/api/cerbos/response/v1/response_pb";

import { policyStoreIntegrityViolationsFromProtobuf } from "../convert/fromProtobuf.js";
import type { StatusNotOK } from "../types/external.js";

import type { NotOK } from "./external.js";
import { PolicyStoreIntegrityViolated } from "./external.js";

type ConvertError<T extends DescMessage = DescMessage> = (
  code: StatusNotOK,
  message: string,
  details: MessageShape<T>,
) => NotOK;

interface ErrorConverter {
  schema: DescMessage;
  convert: ConvertError;
}

export class ErrorRegistry {
  private readonly registry = new Map<string, ErrorConverter>();

  public add<T extends DescMessage>(schema: T, convert: ConvertError<T>): void {
    this.registry.set(`type.googleapis.com/${schema.typeName}`, {
      schema,
      convert,
    });
  }

  public get(typeUrl: string): ErrorConverter | undefined {
    return this.registry.get(typeUrl);
  }
}

export const deletePoliciesErrorRegistry = new ErrorRegistry();

deletePoliciesErrorRegistry.add(
  DeletePolicyErrorDetailsSchema,
  policyStoreIntegrityViolated,
);

export const disablePoliciesErrorRegistry = new ErrorRegistry();

disablePoliciesErrorRegistry.add(
  DisablePolicyErrorDetailsSchema,
  policyStoreIntegrityViolated,
);

function policyStoreIntegrityViolated(
  code: StatusNotOK,
  message: string,
  { errors }: DeletePolicyErrorDetails | DisablePolicyErrorDetails,
  options?: ErrorOptions,
): PolicyStoreIntegrityViolated {
  return new PolicyStoreIntegrityViolated(
    code,
    message,
    policyStoreIntegrityViolationsFromProtobuf(errors),
    options,
  );
}
