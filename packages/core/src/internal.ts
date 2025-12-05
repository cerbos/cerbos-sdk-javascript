import type { DescMethod } from "@bufbuild/protobuf";

export {
  checkInputFromProtobuf,
  checkOutputFromProtobuf,
  policyFromProtobuf,
  requireField,
  translateEnum,
  unexpected,
  valuesFromProtobuf,
} from "./convert/fromProtobuf";
export { policyToProtobuf } from "./convert/toProtobuf";
export * from "./transport";

/** @internal */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** @internal */
export function methodName(method: DescMethod): string {
  return `${method.parent.typeName}/${method.name}`;
}

/** @internal */
export function setErrorNameAndStack(error: Error): void {
  error.name = error.constructor.name;

  // `Error.captureStackTrace` is not available in all browsers
  if ("captureStackTrace" in Error) {
    Error.captureStackTrace(error, error.constructor);
  }
}
