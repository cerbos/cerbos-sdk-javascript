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
  object: any,
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
        "Unrecognized enum value " +
          object +
          " for enum ValidationError_Source",
      );
  }
}

export function validationError_SourceToJSON(
  object: ValidationError_Source,
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
        "Unrecognized enum value " +
          object +
          " for enum ValidationError_Source",
      );
  }
}

export interface Schema {
  id: string;
  definition: Uint8Array;
}

export const ValidationError = {
  fromJSON(object: any): ValidationError {
    return {
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      source: isSet(object.source)
        ? validationError_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: ValidationError): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.source !== 0) {
      obj.source = validationError_SourceToJSON(message.source);
    }
    return obj;
  },
};

export const Schema = {
  fromJSON(object: any): Schema {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      definition: isSet(object.definition)
        ? bytesFromBase64(object.definition)
        : new Uint8Array(0),
    };
  },

  toJSON(message: Schema): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.definition.length !== 0) {
      obj.definition = base64FromBytes(message.definition);
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
