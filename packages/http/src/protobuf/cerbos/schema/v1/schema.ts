/* eslint-disable */
export const protobufPackage = "cerbos.schema.v1";

export interface ValidationError {
  path: string;
  message: string;
  source: ValidationError_Source;
}

export enum ValidationError_Source {
  SOURCE_UNSPECIFIED = 0,
  SOURCE_PRINCIPAL = 1,
  SOURCE_RESOURCE = 2,
}

export function validationError_SourceFromJSON(
  object: any
): ValidationError_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNSPECIFIED":
      return ValidationError_Source.SOURCE_UNSPECIFIED;
    case 1:
    case "SOURCE_PRINCIPAL":
      return ValidationError_Source.SOURCE_PRINCIPAL;
    case 2:
    case "SOURCE_RESOURCE":
      return ValidationError_Source.SOURCE_RESOURCE;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum ValidationError_Source"
      );
  }
}

export function validationError_SourceToJSON(
  object: ValidationError_Source
): string {
  switch (object) {
    case ValidationError_Source.SOURCE_UNSPECIFIED:
      return "SOURCE_UNSPECIFIED";
    case ValidationError_Source.SOURCE_PRINCIPAL:
      return "SOURCE_PRINCIPAL";
    case ValidationError_Source.SOURCE_RESOURCE:
      return "SOURCE_RESOURCE";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum ValidationError_Source"
      );
  }
}

export interface Schema {
  id: string;
  definition: Uint8Array;
}

function createBaseValidationError(): ValidationError {
  return { path: "", message: "", source: 0 };
}

export const ValidationError = {
  fromJSON(object: any): ValidationError {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      message: isSet(object.message) ? String(object.message) : "",
      source: isSet(object.source)
        ? validationError_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: ValidationError): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.message !== undefined && (obj.message = message.message);
    message.source !== undefined &&
      (obj.source = validationError_SourceToJSON(message.source));
    return obj;
  },
};

function createBaseSchema(): Schema {
  return { id: "", definition: new Uint8Array() };
}

export const Schema = {
  fromJSON(object: any): Schema {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      definition: isSet(object.definition)
        ? bytesFromBase64(object.definition)
        : new Uint8Array(),
    };
  },

  toJSON(message: Schema): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.definition !== undefined &&
      (obj.definition = base64FromBytes(
        message.definition !== undefined ? message.definition : new Uint8Array()
      ));
    return obj;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
