/* eslint-disable */

export const protobufPackage = "google.protobuf";

export enum Edition {
  EDITION_UNKNOWN = 0,
  EDITION_PROTO2 = 998,
  EDITION_PROTO3 = 999,
  EDITION_2023 = 1000,
  EDITION_1_TEST_ONLY = 1,
  EDITION_2_TEST_ONLY = 2,
  EDITION_99997_TEST_ONLY = 99997,
  EDITION_99998_TEST_ONLY = 99998,
  EDITION_99999_TEST_ONLY = 99999,
}

export interface FileOptions {
  javaPackage?: string | undefined;
  javaOuterClassname?: string | undefined;
  javaMultipleFiles?: boolean | undefined;
  javaGenerateEqualsAndHash?: boolean | undefined;
  javaStringCheckUtf8?: boolean | undefined;
  optimizeFor?: FileOptions_OptimizeMode | undefined;
  goPackage?: string | undefined;
  ccGenericServices?: boolean | undefined;
  javaGenericServices?: boolean | undefined;
  pyGenericServices?: boolean | undefined;
  phpGenericServices?: boolean | undefined;
  deprecated?: boolean | undefined;
  ccEnableArenas?: boolean | undefined;
  objcClassPrefix?: string | undefined;
  csharpNamespace?: string | undefined;
  swiftPrefix?: string | undefined;
  phpClassPrefix?: string | undefined;
  phpNamespace?: string | undefined;
  phpMetadataNamespace?: string | undefined;
  rubyPackage?: string | undefined;
  features?: FeatureSet | undefined;
  uninterpretedOption: UninterpretedOption[];
}

export enum FileOptions_OptimizeMode {
  SPEED = 1,
  CODE_SIZE = 2,
  LITE_RUNTIME = 3,
}

export interface MessageOptions {
  messageSetWireFormat?: boolean | undefined;
  noStandardDescriptorAccessor?: boolean | undefined;
  deprecated?: boolean | undefined;
  mapEntry?: boolean | undefined;
  deprecatedLegacyJsonFieldConflicts?: boolean | undefined;
  features?: FeatureSet | undefined;
  uninterpretedOption: UninterpretedOption[];
}

export interface FieldOptions {
  ctype?: FieldOptions_CType | undefined;
  packed?: boolean | undefined;
  jstype?: FieldOptions_JSType | undefined;
  lazy?: boolean | undefined;
  unverifiedLazy?: boolean | undefined;
  deprecated?: boolean | undefined;
  weak?: boolean | undefined;
  debugRedact?: boolean | undefined;
  retention?: FieldOptions_OptionRetention | undefined;
  targets: FieldOptions_OptionTargetType[];
  editionDefaults: FieldOptions_EditionDefault[];
  features?: FeatureSet | undefined;
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

export interface FieldOptions_EditionDefault {
  edition?: Edition | undefined;
  value?: string | undefined;
}

export interface OneofOptions {
  features?: FeatureSet | undefined;
  uninterpretedOption: UninterpretedOption[];
}

export interface ServiceOptions {
  features?: FeatureSet | undefined;
  deprecated?: boolean | undefined;
  uninterpretedOption: UninterpretedOption[];
}

export interface MethodOptions {
  deprecated?: boolean | undefined;
  idempotencyLevel?: MethodOptions_IdempotencyLevel | undefined;
  features?: FeatureSet | undefined;
  uninterpretedOption: UninterpretedOption[];
}

export enum MethodOptions_IdempotencyLevel {
  IDEMPOTENCY_UNKNOWN = 0,
  NO_SIDE_EFFECTS = 1,
  IDEMPOTENT = 2,
}

export interface UninterpretedOption {
  name: UninterpretedOption_NamePart[];
  identifierValue?: string | undefined;
  positiveIntValue?: string | undefined;
  negativeIntValue?: string | undefined;
  doubleValue?: number | undefined;
  stringValue?: Uint8Array | undefined;
  aggregateValue?: string | undefined;
}

export interface UninterpretedOption_NamePart {
  namePart: string;
  isExtension: boolean;
}

export interface FeatureSet {
  fieldPresence?: FeatureSet_FieldPresence | undefined;
  enumType?: FeatureSet_EnumType | undefined;
  repeatedFieldEncoding?: FeatureSet_RepeatedFieldEncoding | undefined;
  utf8Validation?: FeatureSet_Utf8Validation | undefined;
  messageEncoding?: FeatureSet_MessageEncoding | undefined;
  jsonFormat?: FeatureSet_JsonFormat | undefined;
}

export enum FeatureSet_FieldPresence {
  FIELD_PRESENCE_UNKNOWN = 0,
  EXPLICIT = 1,
  IMPLICIT = 2,
  LEGACY_REQUIRED = 3,
}

export enum FeatureSet_EnumType {
  ENUM_TYPE_UNKNOWN = 0,
  OPEN = 1,
  CLOSED = 2,
}

export enum FeatureSet_RepeatedFieldEncoding {
  REPEATED_FIELD_ENCODING_UNKNOWN = 0,
  PACKED = 1,
  EXPANDED = 2,
}

export enum FeatureSet_Utf8Validation {
  UTF8_VALIDATION_UNKNOWN = 0,
  NONE = 1,
  VERIFY = 2,
}

export enum FeatureSet_MessageEncoding {
  MESSAGE_ENCODING_UNKNOWN = 0,
  LENGTH_PREFIXED = 1,
  DELIMITED = 2,
}

export enum FeatureSet_JsonFormat {
  JSON_FORMAT_UNKNOWN = 0,
  ALLOW = 1,
  LEGACY_BEST_EFFORT = 2,
}
