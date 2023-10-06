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
        : false,
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
      uninterpretedOption: globalThis.Array.isArray(object?.uninterpretedOption)
        ? object.uninterpretedOption.map((e: any) =>
            UninterpretedOption.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: FileOptions): unknown {
    const obj: any = {};
    if (message.javaPackage !== "") {
      obj.javaPackage = message.javaPackage;
    }
    if (message.javaOuterClassname !== "") {
      obj.javaOuterClassname = message.javaOuterClassname;
    }
    if (message.javaMultipleFiles === true) {
      obj.javaMultipleFiles = message.javaMultipleFiles;
    }
    if (message.javaGenerateEqualsAndHash === true) {
      obj.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
    }
    if (message.javaStringCheckUtf8 === true) {
      obj.javaStringCheckUtf8 = message.javaStringCheckUtf8;
    }
    if (message.optimizeFor !== 1) {
      obj.optimizeFor = fileOptions_OptimizeModeToJSON(message.optimizeFor);
    }
    if (message.goPackage !== "") {
      obj.goPackage = message.goPackage;
    }
    if (message.ccGenericServices === true) {
      obj.ccGenericServices = message.ccGenericServices;
    }
    if (message.javaGenericServices === true) {
      obj.javaGenericServices = message.javaGenericServices;
    }
    if (message.pyGenericServices === true) {
      obj.pyGenericServices = message.pyGenericServices;
    }
    if (message.phpGenericServices === true) {
      obj.phpGenericServices = message.phpGenericServices;
    }
    if (message.deprecated === true) {
      obj.deprecated = message.deprecated;
    }
    if (message.ccEnableArenas === true) {
      obj.ccEnableArenas = message.ccEnableArenas;
    }
    if (message.objcClassPrefix !== "") {
      obj.objcClassPrefix = message.objcClassPrefix;
    }
    if (message.csharpNamespace !== "") {
      obj.csharpNamespace = message.csharpNamespace;
    }
    if (message.swiftPrefix !== "") {
      obj.swiftPrefix = message.swiftPrefix;
    }
    if (message.phpClassPrefix !== "") {
      obj.phpClassPrefix = message.phpClassPrefix;
    }
    if (message.phpNamespace !== "") {
      obj.phpNamespace = message.phpNamespace;
    }
    if (message.phpMetadataNamespace !== "") {
      obj.phpMetadataNamespace = message.phpMetadataNamespace;
    }
    if (message.rubyPackage !== "") {
      obj.rubyPackage = message.rubyPackage;
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
      uninterpretedOption: globalThis.Array.isArray(object?.uninterpretedOption)
        ? object.uninterpretedOption.map((e: any) =>
            UninterpretedOption.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: MessageOptions): unknown {
    const obj: any = {};
    if (message.messageSetWireFormat === true) {
      obj.messageSetWireFormat = message.messageSetWireFormat;
    }
    if (message.noStandardDescriptorAccessor === true) {
      obj.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
    }
    if (message.deprecated === true) {
      obj.deprecated = message.deprecated;
    }
    if (message.mapEntry === true) {
      obj.mapEntry = message.mapEntry;
    }
    if (message.deprecatedLegacyJsonFieldConflicts === true) {
      obj.deprecatedLegacyJsonFieldConflicts =
        message.deprecatedLegacyJsonFieldConflicts;
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
      target: isSet(object.target)
        ? fieldOptions_OptionTargetTypeFromJSON(object.target)
        : 0,
      uninterpretedOption: globalThis.Array.isArray(object?.uninterpretedOption)
        ? object.uninterpretedOption.map((e: any) =>
            UninterpretedOption.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: FieldOptions): unknown {
    const obj: any = {};
    if (message.ctype !== 0) {
      obj.ctype = fieldOptions_CTypeToJSON(message.ctype);
    }
    if (message.packed === true) {
      obj.packed = message.packed;
    }
    if (message.jstype !== 0) {
      obj.jstype = fieldOptions_JSTypeToJSON(message.jstype);
    }
    if (message.lazy === true) {
      obj.lazy = message.lazy;
    }
    if (message.unverifiedLazy === true) {
      obj.unverifiedLazy = message.unverifiedLazy;
    }
    if (message.deprecated === true) {
      obj.deprecated = message.deprecated;
    }
    if (message.weak === true) {
      obj.weak = message.weak;
    }
    if (message.debugRedact === true) {
      obj.debugRedact = message.debugRedact;
    }
    if (message.retention !== 0) {
      obj.retention = fieldOptions_OptionRetentionToJSON(message.retention);
    }
    if (message.target !== 0) {
      obj.target = fieldOptions_OptionTargetTypeToJSON(message.target);
    }
    if (message.uninterpretedOption?.length) {
      obj.uninterpretedOption = message.uninterpretedOption.map((e) =>
        UninterpretedOption.toJSON(e),
      );
    }
    return obj;
  },
};

export const OneofOptions = {
  fromJSON(object: any): OneofOptions {
    return {
      uninterpretedOption: globalThis.Array.isArray(object?.uninterpretedOption)
        ? object.uninterpretedOption.map((e: any) =>
            UninterpretedOption.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: OneofOptions): unknown {
    const obj: any = {};
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
    if (message.deprecated === true) {
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
      uninterpretedOption: globalThis.Array.isArray(object?.uninterpretedOption)
        ? object.uninterpretedOption.map((e: any) =>
            UninterpretedOption.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: MethodOptions): unknown {
    const obj: any = {};
    if (message.deprecated === true) {
      obj.deprecated = message.deprecated;
    }
    if (message.idempotencyLevel !== 0) {
      obj.idempotencyLevel = methodOptions_IdempotencyLevelToJSON(
        message.idempotencyLevel,
      );
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
    if (message.identifierValue !== "") {
      obj.identifierValue = message.identifierValue;
    }
    if (message.positiveIntValue !== "0") {
      obj.positiveIntValue = message.positiveIntValue;
    }
    if (message.negativeIntValue !== "0") {
      obj.negativeIntValue = message.negativeIntValue;
    }
    if (message.doubleValue !== 0) {
      obj.doubleValue = message.doubleValue;
    }
    if (message.stringValue.length !== 0) {
      obj.stringValue = base64FromBytes(message.stringValue);
    }
    if (message.aggregateValue !== "") {
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
    if (message.isExtension === true) {
      obj.isExtension = message.isExtension;
    }
    return obj;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
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
  if (globalThis.Buffer) {
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
