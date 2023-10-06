/* eslint-disable */

export const protobufPackage = "google.protobuf";

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

export interface OneofOptions {
  uninterpretedOption: UninterpretedOption[];
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
