/* eslint-disable */

export const protobufPackage = "google.protobuf";

export interface FileOptions {
  javaPackage: string;
  javaOuterClassname: string;
  javaMultipleFiles: boolean;
  javaGenerateEqualsAndHash: boolean;
  javaStringCheckUtf8: boolean;
  optimizeFor: FileOptions_OptimizeMode;
  goPackage: string;
  ccGenericServices: boolean;
  javaGenericServices: boolean;
  pyGenericServices: boolean;
  phpGenericServices: boolean;
  deprecated: boolean;
  ccEnableArenas: boolean;
  objcClassPrefix: string;
  csharpNamespace: string;
  swiftPrefix: string;
  phpClassPrefix: string;
  phpNamespace: string;
  phpMetadataNamespace: string;
  rubyPackage: string;
  uninterpretedOption: UninterpretedOption[];
}

export enum FileOptions_OptimizeMode {
  SPEED = 1,
  CODE_SIZE = 2,
  LITE_RUNTIME = 3,
}

export interface MessageOptions {
  messageSetWireFormat: boolean;
  noStandardDescriptorAccessor: boolean;
  deprecated: boolean;
  mapEntry: boolean;
  deprecatedLegacyJsonFieldConflicts: boolean;
  uninterpretedOption: UninterpretedOption[];
}

export interface FieldOptions {
  ctype: FieldOptions_CType;
  packed: boolean;
  jstype: FieldOptions_JSType;
  lazy: boolean;
  unverifiedLazy: boolean;
  deprecated: boolean;
  weak: boolean;
  debugRedact: boolean;
  retention: FieldOptions_OptionRetention;
  target: FieldOptions_OptionTargetType;
  uninterpretedOption: UninterpretedOption[];
}

export enum FieldOptions_CType {
  STRING = 0,
  CORD = 1,
  STRING_PIECE = 2,
}

export enum FieldOptions_JSType {
  JS_NORMAL = 0,
  JS_STRING = 1,
  JS_NUMBER = 2,
}

export enum FieldOptions_OptionRetention {
  RETENTION_UNKNOWN = 0,
  RETENTION_RUNTIME = 1,
  RETENTION_SOURCE = 2,
}

export enum FieldOptions_OptionTargetType {
  TARGET_TYPE_UNKNOWN = 0,
  TARGET_TYPE_FILE = 1,
  TARGET_TYPE_EXTENSION_RANGE = 2,
  TARGET_TYPE_MESSAGE = 3,
  TARGET_TYPE_FIELD = 4,
  TARGET_TYPE_ONEOF = 5,
  TARGET_TYPE_ENUM = 6,
  TARGET_TYPE_ENUM_ENTRY = 7,
  TARGET_TYPE_SERVICE = 8,
  TARGET_TYPE_METHOD = 9,
}

export interface OneofOptions {
  uninterpretedOption: UninterpretedOption[];
}

export interface ServiceOptions {
  deprecated: boolean;
  uninterpretedOption: UninterpretedOption[];
}

export interface MethodOptions {
  deprecated: boolean;
  idempotencyLevel: MethodOptions_IdempotencyLevel;
  uninterpretedOption: UninterpretedOption[];
}

export enum MethodOptions_IdempotencyLevel {
  IDEMPOTENCY_UNKNOWN = 0,
  NO_SIDE_EFFECTS = 1,
  IDEMPOTENT = 2,
}

export interface UninterpretedOption {
  name: UninterpretedOption_NamePart[];
  identifierValue: string;
  positiveIntValue: string;
  negativeIntValue: string;
  doubleValue: number;
  stringValue: Uint8Array;
  aggregateValue: string;
}

export interface UninterpretedOption_NamePart {
  namePart: string;
  isExtension: boolean;
}
