/**
 * Common types used by the Cerbos client libraries.
 *
 * @packageDocumentation
 */

import type { DescMethod } from "@bufbuild/protobuf";

export * from "./client";
export {
  auditTrailFromProtobuf as _auditTrailFromProtobuf,
  checkInputFromProtobuf as _checkInputFromProtobuf,
  checkOutputFromProtobuf as _checkOutputFromProtobuf,
  planResourcesInputFromProtobuf as _planResourcesInputFromProtobuf,
  planResourcesOutputFromProtobuf as _planResourcesOutputFromProtobuf,
  policyFromProtobuf as _policyFromProtobuf,
  requireField as _requireField,
  translateEnum as _translateEnum,
  unexpected as _unexpected,
  valuesFromProtobuf as _valuesFromProtobuf,
} from "./convert/fromProtobuf";
export {
  policyToProtobuf as _policyToProtobuf,
  valuesToProtobuf as _valuesToProtobuf,
} from "./convert/toProtobuf";
export * from "./errors";
export * from "./types/external";

/** @internal */
export function _methodName(method: DescMethod): string {
  return `${method.parent.typeName}/${method.name}`;
}
