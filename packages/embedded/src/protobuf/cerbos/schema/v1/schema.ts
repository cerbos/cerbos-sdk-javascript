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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
