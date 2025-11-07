/**
 * Common types used by the Cerbos client libraries.
 *
 * @packageDocumentation
 */

import type { DescMethod } from "@bufbuild/protobuf";

export * from "./client";
export {
  checkInputFromProtobuf as _checkInputFromProtobuf,
  checkOutputFromProtobuf as _checkOutputFromProtobuf,
  policyFromProtobuf as _policyFromProtobuf,
  requireField as _requireField,
  translateEnum as _translateEnum,
  unexpected as _unexpected,
  valuesFromProtobuf as _valuesFromProtobuf,
} from "./convert/fromProtobuf";
export { policyToProtobuf as _policyToProtobuf } from "./convert/toProtobuf";
export * from "./errors";
export * from "./types/external";

/** @internal */
export function _methodName(method: DescMethod): string {
  return `${method.parent.typeName}/${method.name}`;
}
