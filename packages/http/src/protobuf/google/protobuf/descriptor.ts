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

export function editionFromJSON(object: any): Edition {
  switch (object) {
    case 0:
    case "EDITION_UNKNOWN":
      return Edition.EDITION_UNKNOWN;
    case 998:
    case "EDITION_PROTO2":
      return Edition.EDITION_PROTO2;
    case 999:
    case "EDITION_PROTO3":
      return Edition.EDITION_PROTO3;
    case 1000:
    case "EDITION_2023":
      return Edition.EDITION_2023;
    case 1:
    case "EDITION_1_TEST_ONLY":
      return Edition.EDITION_1_TEST_ONLY;
    case 2:
    case "EDITION_2_TEST_ONLY":
      return Edition.EDITION_2_TEST_ONLY;
    case 99997:
    case "EDITION_99997_TEST_ONLY":
      return Edition.EDITION_99997_TEST_ONLY;
    case 99998:
    case "EDITION_99998_TEST_ONLY":
      return Edition.EDITION_99998_TEST_ONLY;
    case 99999:
    case "EDITION_99999_TEST_ONLY":
      return Edition.EDITION_99999_TEST_ONLY;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Edition",
      );
  }
}

export function editionToJSON(object: Edition): string {
  switch (object) {
    case Edition.EDITION_UNKNOWN:
      return "EDITION_UNKNOWN";
    case Edition.EDITION_PROTO2:
      return "EDITION_PROTO2";
    case Edition.EDITION_PROTO3:
      return "EDITION_PROTO3";
    case Edition.EDITION_2023:
      return "EDITION_2023";
    case Edition.EDITION_1_TEST_ONLY:
      return "EDITION_1_TEST_ONLY";
    case Edition.EDITION_2_TEST_ONLY:
      return "EDITION_2_TEST_ONLY";
    case Edition.EDITION_99997_TEST_ONLY:
      return "EDITION_99997_TEST_ONLY";
    case Edition.EDITION_99998_TEST_ONLY:
      return "EDITION_99998_TEST_ONLY";
    case Edition.EDITION_99999_TEST_ONLY:
      return "EDITION_99999_TEST_ONLY";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Edition",
      );
  }
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

export function fileOptions_OptimizeModeFromJSON(
  object: any,
): FileOptions_OptimizeMode {
  switch (object) {
    case 1:
    case "SPEED":
      return FileOptions_OptimizeMode.SPEED;
    case 2:
    case "CODE_SIZE":
      return FileOptions_OptimizeMode.CODE_SIZE;
    case 3:
    case "LITE_RUNTIME":
      return FileOptions_OptimizeMode.LITE_RUNTIME;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FileOptions_OptimizeMode",
      );
  }
}

export function fileOptions_OptimizeModeToJSON(
  object: FileOptions_OptimizeMode,
): string {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return "SPEED";
    case FileOptions_OptimizeMode.CODE_SIZE:
      return "CODE_SIZE";
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return "LITE_RUNTIME";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FileOptions_OptimizeMode",
      );
  }
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

export function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType {
  switch (object) {
    case 0:
    case "STRING":
      return FieldOptions_CType.STRING;
    case 1:
    case "CORD":
      return FieldOptions_CType.CORD;
    case 2:
    case "STRING_PIECE":
      return FieldOptions_CType.STRING_PIECE;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FieldOptions_CType",
      );
  }
}

export function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string {
  switch (object) {
    case FieldOptions_CType.STRING:
      return "STRING";
    case FieldOptions_CType.CORD:
      return "CORD";
    case FieldOptions_CType.STRING_PIECE:
      return "STRING_PIECE";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FieldOptions_CType",
      );
  }
}

export enum FieldOptions_JSType {
  JS_NORMAL = 0,
  JS_STRING = 1,
  JS_NUMBER = 2,
}

export function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return FieldOptions_JSType.JS_NORMAL;
    case 1:
    case "JS_STRING":
      return FieldOptions_JSType.JS_STRING;
    case 2:
    case "JS_NUMBER":
      return FieldOptions_JSType.JS_NUMBER;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FieldOptions_JSType",
      );
  }
}

export function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return "JS_NORMAL";
    case FieldOptions_JSType.JS_STRING:
      return "JS_STRING";
    case FieldOptions_JSType.JS_NUMBER:
      return "JS_NUMBER";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FieldOptions_JSType",
      );
  }
}

export enum FieldOptions_OptionRetention {
  RETENTION_UNKNOWN = 0,
  RETENTION_RUNTIME = 1,
  RETENTION_SOURCE = 2,
}

export function fieldOptions_OptionRetentionFromJSON(
  object: any,
): FieldOptions_OptionRetention {
  switch (object) {
    case 0:
    case "RETENTION_UNKNOWN":
      return FieldOptions_OptionRetention.RETENTION_UNKNOWN;
    case 1:
    case "RETENTION_RUNTIME":
      return FieldOptions_OptionRetention.RETENTION_RUNTIME;
    case 2:
    case "RETENTION_SOURCE":
      return FieldOptions_OptionRetention.RETENTION_SOURCE;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FieldOptions_OptionRetention",
      );
  }
}

export function fieldOptions_OptionRetentionToJSON(
  object: FieldOptions_OptionRetention,
): string {
  switch (object) {
    case FieldOptions_OptionRetention.RETENTION_UNKNOWN:
      return "RETENTION_UNKNOWN";
    case FieldOptions_OptionRetention.RETENTION_RUNTIME:
      return "RETENTION_RUNTIME";
    case FieldOptions_OptionRetention.RETENTION_SOURCE:
      return "RETENTION_SOURCE";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FieldOptions_OptionRetention",
      );
  }
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

export function fieldOptions_OptionTargetTypeFromJSON(
  object: any,
): FieldOptions_OptionTargetType {
  switch (object) {
    case 0:
    case "TARGET_TYPE_UNKNOWN":
      return FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN;
    case 1:
    case "TARGET_TYPE_FILE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_FILE;
    case 2:
    case "TARGET_TYPE_EXTENSION_RANGE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE;
    case 3:
    case "TARGET_TYPE_MESSAGE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE;
    case 4:
    case "TARGET_TYPE_FIELD":
      return FieldOptions_OptionTargetType.TARGET_TYPE_FIELD;
    case 5:
    case "TARGET_TYPE_ONEOF":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF;
    case 6:
    case "TARGET_TYPE_ENUM":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM;
    case 7:
    case "TARGET_TYPE_ENUM_ENTRY":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY;
    case 8:
    case "TARGET_TYPE_SERVICE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE;
    case 9:
    case "TARGET_TYPE_METHOD":
      return FieldOptions_OptionTargetType.TARGET_TYPE_METHOD;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FieldOptions_OptionTargetType",
      );
  }
}

export function fieldOptions_OptionTargetTypeToJSON(
  object: FieldOptions_OptionTargetType,
): string {
  switch (object) {
    case FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN:
      return "TARGET_TYPE_UNKNOWN";
    case FieldOptions_OptionTargetType.TARGET_TYPE_FILE:
      return "TARGET_TYPE_FILE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE:
      return "TARGET_TYPE_EXTENSION_RANGE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE:
      return "TARGET_TYPE_MESSAGE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_FIELD:
      return "TARGET_TYPE_FIELD";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF:
      return "TARGET_TYPE_ONEOF";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM:
      return "TARGET_TYPE_ENUM";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY:
      return "TARGET_TYPE_ENUM_ENTRY";
    case FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE:
      return "TARGET_TYPE_SERVICE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_METHOD:
      return "TARGET_TYPE_METHOD";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FieldOptions_OptionTargetType",
      );
  }
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

export function methodOptions_IdempotencyLevelFromJSON(
  object: any,
): MethodOptions_IdempotencyLevel {
  switch (object) {
    case 0:
    case "IDEMPOTENCY_UNKNOWN":
      return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
    case 1:
    case "NO_SIDE_EFFECTS":
      return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
    case 2:
    case "IDEMPOTENT":
      return MethodOptions_IdempotencyLevel.IDEMPOTENT;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum MethodOptions_IdempotencyLevel",
      );
  }
}

export function methodOptions_IdempotencyLevelToJSON(
  object: MethodOptions_IdempotencyLevel,
): string {
  switch (object) {
    case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
      return "IDEMPOTENCY_UNKNOWN";
    case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
      return "NO_SIDE_EFFECTS";
    case MethodOptions_IdempotencyLevel.IDEMPOTENT:
      return "IDEMPOTENT";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum MethodOptions_IdempotencyLevel",
      );
  }
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

export function featureSet_FieldPresenceFromJSON(
  object: any,
): FeatureSet_FieldPresence {
  switch (object) {
    case 0:
    case "FIELD_PRESENCE_UNKNOWN":
      return FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN;
    case 1:
    case "EXPLICIT":
      return FeatureSet_FieldPresence.EXPLICIT;
    case 2:
    case "IMPLICIT":
      return FeatureSet_FieldPresence.IMPLICIT;
    case 3:
    case "LEGACY_REQUIRED":
      return FeatureSet_FieldPresence.LEGACY_REQUIRED;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FeatureSet_FieldPresence",
      );
  }
}

export function featureSet_FieldPresenceToJSON(
  object: FeatureSet_FieldPresence,
): string {
  switch (object) {
    case FeatureSet_FieldPresence.FIELD_PRESENCE_UNKNOWN:
      return "FIELD_PRESENCE_UNKNOWN";
    case FeatureSet_FieldPresence.EXPLICIT:
      return "EXPLICIT";
    case FeatureSet_FieldPresence.IMPLICIT:
      return "IMPLICIT";
    case FeatureSet_FieldPresence.LEGACY_REQUIRED:
      return "LEGACY_REQUIRED";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FeatureSet_FieldPresence",
      );
  }
}

export enum FeatureSet_EnumType {
  ENUM_TYPE_UNKNOWN = 0,
  OPEN = 1,
  CLOSED = 2,
}

export function featureSet_EnumTypeFromJSON(object: any): FeatureSet_EnumType {
  switch (object) {
    case 0:
    case "ENUM_TYPE_UNKNOWN":
      return FeatureSet_EnumType.ENUM_TYPE_UNKNOWN;
    case 1:
    case "OPEN":
      return FeatureSet_EnumType.OPEN;
    case 2:
    case "CLOSED":
      return FeatureSet_EnumType.CLOSED;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FeatureSet_EnumType",
      );
  }
}

export function featureSet_EnumTypeToJSON(object: FeatureSet_EnumType): string {
  switch (object) {
    case FeatureSet_EnumType.ENUM_TYPE_UNKNOWN:
      return "ENUM_TYPE_UNKNOWN";
    case FeatureSet_EnumType.OPEN:
      return "OPEN";
    case FeatureSet_EnumType.CLOSED:
      return "CLOSED";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FeatureSet_EnumType",
      );
  }
}

export enum FeatureSet_RepeatedFieldEncoding {
  REPEATED_FIELD_ENCODING_UNKNOWN = 0,
  PACKED = 1,
  EXPANDED = 2,
}

export function featureSet_RepeatedFieldEncodingFromJSON(
  object: any,
): FeatureSet_RepeatedFieldEncoding {
  switch (object) {
    case 0:
    case "REPEATED_FIELD_ENCODING_UNKNOWN":
      return FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN;
    case 1:
    case "PACKED":
      return FeatureSet_RepeatedFieldEncoding.PACKED;
    case 2:
    case "EXPANDED":
      return FeatureSet_RepeatedFieldEncoding.EXPANDED;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FeatureSet_RepeatedFieldEncoding",
      );
  }
}

export function featureSet_RepeatedFieldEncodingToJSON(
  object: FeatureSet_RepeatedFieldEncoding,
): string {
  switch (object) {
    case FeatureSet_RepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN:
      return "REPEATED_FIELD_ENCODING_UNKNOWN";
    case FeatureSet_RepeatedFieldEncoding.PACKED:
      return "PACKED";
    case FeatureSet_RepeatedFieldEncoding.EXPANDED:
      return "EXPANDED";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FeatureSet_RepeatedFieldEncoding",
      );
  }
}

export enum FeatureSet_Utf8Validation {
  UTF8_VALIDATION_UNKNOWN = 0,
  NONE = 1,
  VERIFY = 2,
}

export function featureSet_Utf8ValidationFromJSON(
  object: any,
): FeatureSet_Utf8Validation {
  switch (object) {
    case 0:
    case "UTF8_VALIDATION_UNKNOWN":
      return FeatureSet_Utf8Validation.UTF8_VALIDATION_UNKNOWN;
    case 1:
    case "NONE":
      return FeatureSet_Utf8Validation.NONE;
    case 2:
    case "VERIFY":
      return FeatureSet_Utf8Validation.VERIFY;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FeatureSet_Utf8Validation",
      );
  }
}

export function featureSet_Utf8ValidationToJSON(
  object: FeatureSet_Utf8Validation,
): string {
  switch (object) {
    case FeatureSet_Utf8Validation.UTF8_VALIDATION_UNKNOWN:
      return "UTF8_VALIDATION_UNKNOWN";
    case FeatureSet_Utf8Validation.NONE:
      return "NONE";
    case FeatureSet_Utf8Validation.VERIFY:
      return "VERIFY";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FeatureSet_Utf8Validation",
      );
  }
}

export enum FeatureSet_MessageEncoding {
  MESSAGE_ENCODING_UNKNOWN = 0,
  LENGTH_PREFIXED = 1,
  DELIMITED = 2,
}

export function featureSet_MessageEncodingFromJSON(
  object: any,
): FeatureSet_MessageEncoding {
  switch (object) {
    case 0:
    case "MESSAGE_ENCODING_UNKNOWN":
      return FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN;
    case 1:
    case "LENGTH_PREFIXED":
      return FeatureSet_MessageEncoding.LENGTH_PREFIXED;
    case 2:
    case "DELIMITED":
      return FeatureSet_MessageEncoding.DELIMITED;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FeatureSet_MessageEncoding",
      );
  }
}

export function featureSet_MessageEncodingToJSON(
  object: FeatureSet_MessageEncoding,
): string {
  switch (object) {
    case FeatureSet_MessageEncoding.MESSAGE_ENCODING_UNKNOWN:
      return "MESSAGE_ENCODING_UNKNOWN";
    case FeatureSet_MessageEncoding.LENGTH_PREFIXED:
      return "LENGTH_PREFIXED";
    case FeatureSet_MessageEncoding.DELIMITED:
      return "DELIMITED";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum FeatureSet_MessageEncoding",
      );
  }
}

export enum FeatureSet_JsonFormat {
  JSON_FORMAT_UNKNOWN = 0,
  ALLOW = 1,
  LEGACY_BEST_EFFORT = 2,
}

export function featureSet_JsonFormatFromJSON(
  object: any,
): FeatureSet_JsonFormat {
  switch (object) {
    case 0:
    case "JSON_FORMAT_UNKNOWN":
      return FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN;
    case 1:
    case "ALLOW":
      return FeatureSet_JsonFormat.ALLOW;
    case 2:
    case "LEGACY_BEST_EFFORT":
      return FeatureSet_JsonFormat.LEGACY_BEST_EFFORT;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FeatureSet_JsonFormat",
      );
  }
}

export function featureSet_JsonFormatToJSON(
  object: FeatureSet_JsonFormat,
): string {
  switch (object) {
    case FeatureSet_JsonFormat.JSON_FORMAT_UNKNOWN:
      return "JSON_FORMAT_UNKNOWN";
    case FeatureSet_JsonFormat.ALLOW:
      return "ALLOW";
    case FeatureSet_JsonFormat.LEGACY_BEST_EFFORT:
      return "LEGACY_BEST_EFFORT";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FeatureSet_JsonFormat",
      );
  }
}

export const FileOptions = {
  fromJSON(object: any): FileOptions {
    return {
      javaPackage: isSet(object.javaPackage)
        ? globalThis.String(object.javaPackage)
        : "",
      javaOuterClassname: isSet(object.javaOuterClassname)
        ? globalThis.String(object.javaOuterClassname)
        : "",
      javaMultipleFiles: isSet(object.javaMultipleFiles)
        ? globalThis.Boolean(object.javaMultipleFiles)
        : false,
      javaGenerateEqualsAndHash: isSet(object.javaGenerateEqualsAndHash)
        ? globalThis.Boolean(object.javaGenerateEqualsAndHash)
        : false,
      javaStringCheckUtf8: isSet(object.javaStringCheckUtf8)
        ? globalThis.Boolean(object.javaStringCheckUtf8)
        : false,
      optimizeFor: isSet(object.optimizeFor)
        ? fileOptions_OptimizeModeFromJSON(object.optimizeFor)
        : 1,
      goPackage: isSet(object.goPackage)
        ? globalThis.String(object.goPackage)
        : "",
      ccGenericServices: isSet(object.ccGenericServices)
        ? globalThis.Boolean(object.ccGenericServices)
        : false,
      javaGenericServices: isSet(object.javaGenericServices)
        ? globalThis.Boolean(object.javaGenericServices)
        : false,
      pyGenericServices: isSet(object.pyGenericServices)
        ? globalThis.Boolean(object.pyGenericServices)
        : false,
      phpGenericServices: isSet(object.phpGenericServices)
        ? globalThis.Boolean(object.phpGenericServices)
        : false,
      deprecated: isSet(object.deprecated)
        ? globalThis.Boolean(object.deprecated)
        : false,
      ccEnableArenas: isSet(object.ccEnableArenas)
        ? globalThis.Boolean(object.ccEnableArenas)
        : true,
      objcClassPrefix: isSet(object.objcClassPrefix)
        ? globalThis.String(object.objcClassPrefix)
        : "",
      csharpNamespace: isSet(object.csharpNamespace)
        ? globalThis.String(object.csharpNamespace)
        : "",
      swiftPrefix: isSet(object.swiftPrefix)
        ? globalThis.String(object.swiftPrefix)
        : "",
      phpClassPrefix: isSet(object.phpClassPrefix)
        ? globalThis.String(object.phpClassPrefix)
        : "",
      phpNamespace: isSet(object.phpNamespace)
        ? globalThis.String(object.phpNamespace)
        : "",
      phpMetadataNamespace: isSet(object.phpMetadataNamespace)
        ? globalThis.String(object.phpMetadataNamespace)
        : "",
      rubyPackage: isSet(object.rubyPackage)
        ? globalThis.String(object.rubyPackage)
        : "",
      features: isSet(object.features)
        ? FeatureSet.fromJSON(object.features)
        : undefined,
      uninterpretedOption: globalThis.Array.isArray(object?.uninterpretedOption)
        ? object.uninterpretedOption.map((e: any) =>
            UninterpretedOption.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: FileOptions): unknown {
    const obj: any = {};
    if (message.javaPackage !== undefined && message.javaPackage !== "") {
      obj.javaPackage = message.javaPackage;
    }
    if (
      message.javaOuterClassname !== undefined &&
      message.javaOuterClassname !== ""
    ) {
      obj.javaOuterClassname = message.javaOuterClassname;
    }
    if (
      message.javaMultipleFiles !== undefined &&
      message.javaMultipleFiles !== false
    ) {
      obj.javaMultipleFiles = message.javaMultipleFiles;
    }
    if (
      message.javaGenerateEqualsAndHash !== undefined &&
      message.javaGenerateEqualsAndHash !== false
    ) {
      obj.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
    }
    if (
      message.javaStringCheckUtf8 !== undefined &&
      message.javaStringCheckUtf8 !== false
    ) {
      obj.javaStringCheckUtf8 = message.javaStringCheckUtf8;
    }
    if (message.optimizeFor !== undefined && message.optimizeFor !== 1) {
      obj.optimizeFor = fileOptions_OptimizeModeToJSON(message.optimizeFor);
    }
    if (message.goPackage !== undefined && message.goPackage !== "") {
      obj.goPackage = message.goPackage;
    }
    if (
      message.ccGenericServices !== undefined &&
      message.ccGenericServices !== false
    ) {
      obj.ccGenericServices = message.ccGenericServices;
    }
    if (
      message.javaGenericServices !== undefined &&
      message.javaGenericServices !== false
    ) {
      obj.javaGenericServices = message.javaGenericServices;
    }
    if (
      message.pyGenericServices !== undefined &&
      message.pyGenericServices !== false
    ) {
      obj.pyGenericServices = message.pyGenericServices;
    }
    if (
      message.phpGenericServices !== undefined &&
      message.phpGenericServices !== false
    ) {
      obj.phpGenericServices = message.phpGenericServices;
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      obj.deprecated = message.deprecated;
    }
    if (
      message.ccEnableArenas !== undefined &&
      message.ccEnableArenas !== true
    ) {
      obj.ccEnableArenas = message.ccEnableArenas;
    }
    if (
      message.objcClassPrefix !== undefined &&
      message.objcClassPrefix !== ""
    ) {
      obj.objcClassPrefix = message.objcClassPrefix;
    }
    if (
      message.csharpNamespace !== undefined &&
      message.csharpNamespace !== ""
    ) {
      obj.csharpNamespace = message.csharpNamespace;
    }
    if (message.swiftPrefix !== undefined && message.swiftPrefix !== "") {
      obj.swiftPrefix = message.swiftPrefix;
    }
    if (message.phpClassPrefix !== undefined && message.phpClassPrefix !== "") {
      obj.phpClassPrefix = message.phpClassPrefix;
    }
    if (message.phpNamespace !== undefined && message.phpNamespace !== "") {
      obj.phpNamespace = message.phpNamespace;
    }
    if (
      message.phpMetadataNamespace !== undefined &&
      message.phpMetadataNamespace !== ""
    ) {
      obj.phpMetadataNamespace = message.phpMetadataNamespace;
    }
    if (message.rubyPackage !== undefined && message.rubyPackage !== "") {
      obj.rubyPackage = message.rubyPackage;
    }
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.uninterpretedOption?.length) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        UninterpretedOption.toJSON(e),
      );
    }
    return obj;
  },
};

export const MessageOptions = {
  fromJSON(object: any): MessageOptions {
    return {
      messageSetWireFormat: isSet(object.messageSetWireFormat)
        ? globalThis.Boolean(object.messageSetWireFormat)
        : false,
      noStandardDescriptorAccessor: isSet(object.noStandardDescriptorAccessor)
        ? globalThis.Boolean(object.noStandardDescriptorAccessor)
        : false,
      deprecated: isSet(object.deprecated)
        ? globalThis.Boolean(object.deprecated)
        : false,
      mapEntry: isSet(object.mapEntry)
        ? globalThis.Boolean(object.mapEntry)
        : false,
      deprecatedLegacyJsonFieldConflicts: isSet(
        object.deprecatedLegacyJsonFieldConflicts,
      )
        ? globalThis.Boolean(object.deprecatedLegacyJsonFieldConflicts)
        : false,
      features: isSet(object.features)
        ? FeatureSet.fromJSON(object.features)
        : undefined,
      uninterpretedOption: globalThis.Array.isArray(object?.uninterpretedOption)
        ? object.uninterpretedOption.map((e: any) =>
            UninterpretedOption.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: MessageOptions): unknown {
    const obj: any = {};
    if (
      message.messageSetWireFormat !== undefined &&
      message.messageSetWireFormat !== false
    ) {
      obj.messageSetWireFormat = message.messageSetWireFormat;
    }
    if (
      message.noStandardDescriptorAccessor !== undefined &&
      message.noStandardDescriptorAccessor !== false
    ) {
      obj.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      obj.deprecated = message.deprecated;
    }
    if (message.mapEntry !== undefined && message.mapEntry !== false) {
      obj.mapEntry = message.mapEntry;
    }
    if (
      message.deprecatedLegacyJsonFieldConflicts !== undefined &&
      message.deprecatedLegacyJsonFieldConflicts !== false
    ) {
      obj.deprecatedLegacyJsonFieldConflicts =
        message.deprecatedLegacyJsonFieldConflicts;
    }
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.uninterpretedOption?.length) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        UninterpretedOption.toJSON(e),
      );
    }
    return obj;
  },
};

export const FieldOptions = {
  fromJSON(object: any): FieldOptions {
    return {
      ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : 0,
      packed: isSet(object.packed) ? globalThis.Boolean(object.packed) : false,
      jstype: isSet(object.jstype)
        ? fieldOptions_JSTypeFromJSON(object.jstype)
        : 0,
      lazy: isSet(object.lazy) ? globalThis.Boolean(object.lazy) : false,
      unverifiedLazy: isSet(object.unverifiedLazy)
        ? globalThis.Boolean(object.unverifiedLazy)
        : false,
      deprecated: isSet(object.deprecated)
        ? globalThis.Boolean(object.deprecated)
        : false,
      weak: isSet(object.weak) ? globalThis.Boolean(object.weak) : false,
      debugRedact: isSet(object.debugRedact)
        ? globalThis.Boolean(object.debugRedact)
        : false,
      retention: isSet(object.retention)
        ? fieldOptions_OptionRetentionFromJSON(object.retention)
        : 0,
      targets: globalThis.Array.isArray(object?.targets)
        ? object.targets.map((e: any) =>
            fieldOptions_OptionTargetTypeFromJSON(e),
          )
        : [],
      editionDefaults: globalThis.Array.isArray(object?.editionDefaults)
        ? object.editionDefaults.map((e: any) =>
            FieldOptions_EditionDefault.fromJSON(e),
          )
        : [],
      features: isSet(object.features)
        ? FeatureSet.fromJSON(object.features)
        : undefined,
      uninterpretedOption: globalThis.Array.isArray(object?.uninterpretedOption)
        ? object.uninterpretedOption.map((e: any) =>
            UninterpretedOption.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: FieldOptions): unknown {
    const obj: any = {};
    if (message.ctype !== undefined && message.ctype !== 0) {
      obj.ctype = fieldOptions_CTypeToJSON(message.ctype);
    }
    if (message.packed !== undefined && message.packed !== false) {
      obj.packed = message.packed;
    }
    if (message.jstype !== undefined && message.jstype !== 0) {
      obj.jstype = fieldOptions_JSTypeToJSON(message.jstype);
    }
    if (message.lazy !== undefined && message.lazy !== false) {
      obj.lazy = message.lazy;
    }
    if (
      message.unverifiedLazy !== undefined &&
      message.unverifiedLazy !== false
    ) {
      obj.unverifiedLazy = message.unverifiedLazy;
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      obj.deprecated = message.deprecated;
    }
    if (message.weak !== undefined && message.weak !== false) {
      obj.weak = message.weak;
    }
    if (message.debugRedact !== undefined && message.debugRedact !== false) {
      obj.debugRedact = message.debugRedact;
    }
    if (message.retention !== undefined && message.retention !== 0) {
      obj.retention = fieldOptions_OptionRetentionToJSON(message.retention);
    }
    if (message.targets?.length) {
      obj.targets = message.targets.map((e) =>
        fieldOptions_OptionTargetTypeToJSON(e),
      );
    }
    if (message.editionDefaults?.length) {
      obj.editionDefaults = message.editionDefaults.map((e) =>
        FieldOptions_EditionDefault.toJSON(e),
      );
    }
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.uninterpretedOption?.length) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        UninterpretedOption.toJSON(e),
      );
    }
    return obj;
  },
};

export const FieldOptions_EditionDefault = {
  fromJSON(object: any): FieldOptions_EditionDefault {
    return {
      edition: isSet(object.edition) ? editionFromJSON(object.edition) : 0,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: FieldOptions_EditionDefault): unknown {
    const obj: any = {};
    if (message.edition !== undefined && message.edition !== 0) {
      obj.edition = editionToJSON(message.edition);
    }
    if (message.value !== undefined && message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
};

export const OneofOptions = {
  fromJSON(object: any): OneofOptions {
    return {
      features: isSet(object.features)
        ? FeatureSet.fromJSON(object.features)
        : undefined,
      uninterpretedOption: globalThis.Array.isArray(object?.uninterpretedOption)
        ? object.uninterpretedOption.map((e: any) =>
            UninterpretedOption.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: OneofOptions): unknown {
    const obj: any = {};
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.uninterpretedOption?.length) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        UninterpretedOption.toJSON(e),
      );
    }
    return obj;
  },
};

export const ServiceOptions = {
  fromJSON(object: any): ServiceOptions {
    return {
      features: isSet(object.features)
        ? FeatureSet.fromJSON(object.features)
        : undefined,
      deprecated: isSet(object.deprecated)
        ? globalThis.Boolean(object.deprecated)
        : false,
      uninterpretedOption: globalThis.Array.isArray(object?.uninterpretedOption)
        ? object.uninterpretedOption.map((e: any) =>
            UninterpretedOption.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: ServiceOptions): unknown {
    const obj: any = {};
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.deprecated !== undefined && message.deprecated !== false) {
      obj.deprecated = message.deprecated;
    }
    if (message.uninterpretedOption?.length) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        UninterpretedOption.toJSON(e),
      );
    }
    return obj;
  },
};

export const MethodOptions = {
  fromJSON(object: any): MethodOptions {
    return {
      deprecated: isSet(object.deprecated)
        ? globalThis.Boolean(object.deprecated)
        : false,
      idempotencyLevel: isSet(object.idempotencyLevel)
        ? methodOptions_IdempotencyLevelFromJSON(object.idempotencyLevel)
        : 0,
      features: isSet(object.features)
        ? FeatureSet.fromJSON(object.features)
        : undefined,
      uninterpretedOption: globalThis.Array.isArray(object?.uninterpretedOption)
        ? object.uninterpretedOption.map((e: any) =>
            UninterpretedOption.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: MethodOptions): unknown {
    const obj: any = {};
    if (message.deprecated !== undefined && message.deprecated !== false) {
      obj.deprecated = message.deprecated;
    }
    if (
      message.idempotencyLevel !== undefined &&
      message.idempotencyLevel !== 0
    ) {
      obj.idempotencyLevel = methodOptions_IdempotencyLevelToJSON(
        message.idempotencyLevel,
      );
    }
    if (message.features !== undefined) {
      obj.features = FeatureSet.toJSON(message.features);
    }
    if (message.uninterpretedOption?.length) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        UninterpretedOption.toJSON(e),
      );
    }
    return obj;
  },
};

export const UninterpretedOption = {
  fromJSON(object: any): UninterpretedOption {
    return {
      name: globalThis.Array.isArray(object?.name)
        ? object.name.map((e: any) => UninterpretedOption_NamePart.fromJSON(e))
        : [],
      identifierValue: isSet(object.identifierValue)
        ? globalThis.String(object.identifierValue)
        : "",
      positiveIntValue: isSet(object.positiveIntValue)
        ? globalThis.String(object.positiveIntValue)
        : "0",
      negativeIntValue: isSet(object.negativeIntValue)
        ? globalThis.String(object.negativeIntValue)
        : "0",
      doubleValue: isSet(object.doubleValue)
        ? globalThis.Number(object.doubleValue)
        : 0,
      stringValue: isSet(object.stringValue)
        ? bytesFromBase64(object.stringValue)
        : new Uint8Array(0),
      aggregateValue: isSet(object.aggregateValue)
        ? globalThis.String(object.aggregateValue)
        : "",
    };
  },

  toJSON(message: UninterpretedOption): unknown {
    const obj: any = {};
    if (message.name?.length) {
      obj.name = message.name.map((e) =>
        UninterpretedOption_NamePart.toJSON(e),
      );
    }
    if (
      message.identifierValue !== undefined &&
      message.identifierValue !== ""
    ) {
      obj.identifierValue = message.identifierValue;
    }
    if (
      message.positiveIntValue !== undefined &&
      message.positiveIntValue !== "0"
    ) {
      obj.positiveIntValue = message.positiveIntValue;
    }
    if (
      message.negativeIntValue !== undefined &&
      message.negativeIntValue !== "0"
    ) {
      obj.negativeIntValue = message.negativeIntValue;
    }
    if (message.doubleValue !== undefined && message.doubleValue !== 0) {
      obj.doubleValue = message.doubleValue;
    }
    if (message.stringValue !== undefined && message.stringValue.length !== 0) {
      obj.stringValue = base64FromBytes(message.stringValue);
    }
    if (message.aggregateValue !== undefined && message.aggregateValue !== "") {
      obj.aggregateValue = message.aggregateValue;
    }
    return obj;
  },
};

export const UninterpretedOption_NamePart = {
  fromJSON(object: any): UninterpretedOption_NamePart {
    return {
      namePart: isSet(object.namePart)
        ? globalThis.String(object.namePart)
        : "",
      isExtension: isSet(object.isExtension)
        ? globalThis.Boolean(object.isExtension)
        : false,
    };
  },

  toJSON(message: UninterpretedOption_NamePart): unknown {
    const obj: any = {};
    if (message.namePart !== "") {
      obj.namePart = message.namePart;
    }
    if (message.isExtension !== false) {
      obj.isExtension = message.isExtension;
    }
    return obj;
  },
};

export const FeatureSet = {
  fromJSON(object: any): FeatureSet {
    return {
      fieldPresence: isSet(object.fieldPresence)
        ? featureSet_FieldPresenceFromJSON(object.fieldPresence)
        : 0,
      enumType: isSet(object.enumType)
        ? featureSet_EnumTypeFromJSON(object.enumType)
        : 0,
      repeatedFieldEncoding: isSet(object.repeatedFieldEncoding)
        ? featureSet_RepeatedFieldEncodingFromJSON(object.repeatedFieldEncoding)
        : 0,
      utf8Validation: isSet(object.utf8Validation)
        ? featureSet_Utf8ValidationFromJSON(object.utf8Validation)
        : 0,
      messageEncoding: isSet(object.messageEncoding)
        ? featureSet_MessageEncodingFromJSON(object.messageEncoding)
        : 0,
      jsonFormat: isSet(object.jsonFormat)
        ? featureSet_JsonFormatFromJSON(object.jsonFormat)
        : 0,
    };
  },

  toJSON(message: FeatureSet): unknown {
    const obj: any = {};
    if (message.fieldPresence !== undefined && message.fieldPresence !== 0) {
      obj.fieldPresence = featureSet_FieldPresenceToJSON(message.fieldPresence);
    }
    if (message.enumType !== undefined && message.enumType !== 0) {
      obj.enumType = featureSet_EnumTypeToJSON(message.enumType);
    }
    if (
      message.repeatedFieldEncoding !== undefined &&
      message.repeatedFieldEncoding !== 0
    ) {
      obj.repeatedFieldEncoding = featureSet_RepeatedFieldEncodingToJSON(
        message.repeatedFieldEncoding,
      );
    }
    if (message.utf8Validation !== undefined && message.utf8Validation !== 0) {
      obj.utf8Validation = featureSet_Utf8ValidationToJSON(
        message.utf8Validation,
      );
    }
    if (
      message.messageEncoding !== undefined &&
      message.messageEncoding !== 0
    ) {
      obj.messageEncoding = featureSet_MessageEncodingToJSON(
        message.messageEncoding,
      );
    }
    if (message.jsonFormat !== undefined && message.jsonFormat !== 0) {
      obj.jsonFormat = featureSet_JsonFormatToJSON(message.jsonFormat);
    }
    return obj;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
