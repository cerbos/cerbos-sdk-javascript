/* eslint-disable */

export const protobufPackage = "google.api";

export enum FieldBehavior {
  FIELD_BEHAVIOR_UNSPECIFIED = 0,
  OPTIONAL = 1,
  REQUIRED = 2,
  OUTPUT_ONLY = 3,
  INPUT_ONLY = 4,
  IMMUTABLE = 5,
  UNORDERED_LIST = 6,
  NON_EMPTY_DEFAULT = 7,
  IDENTIFIER = 8,
}

export function fieldBehaviorFromJSON(object: any): FieldBehavior {
  switch (object) {
    case 0:
    case "FIELD_BEHAVIOR_UNSPECIFIED":
      return FieldBehavior.FIELD_BEHAVIOR_UNSPECIFIED;
    case 1:
    case "OPTIONAL":
      return FieldBehavior.OPTIONAL;
    case 2:
    case "REQUIRED":
      return FieldBehavior.REQUIRED;
    case 3:
    case "OUTPUT_ONLY":
      return FieldBehavior.OUTPUT_ONLY;
    case 4:
    case "INPUT_ONLY":
      return FieldBehavior.INPUT_ONLY;
    case 5:
    case "IMMUTABLE":
      return FieldBehavior.IMMUTABLE;
    case 6:
    case "UNORDERED_LIST":
      return FieldBehavior.UNORDERED_LIST;
    case 7:
    case "NON_EMPTY_DEFAULT":
      return FieldBehavior.NON_EMPTY_DEFAULT;
    case 8:
    case "IDENTIFIER":
      return FieldBehavior.IDENTIFIER;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FieldBehavior",
      );
  }
}

export function fieldBehaviorToJSON(object: FieldBehavior): string {
  switch (object) {
    case FieldBehavior.FIELD_BEHAVIOR_UNSPECIFIED:
      return "FIELD_BEHAVIOR_UNSPECIFIED";
    case FieldBehavior.OPTIONAL:
      return "OPTIONAL";
    case FieldBehavior.REQUIRED:
      return "REQUIRED";
    case FieldBehavior.OUTPUT_ONLY:
      return "OUTPUT_ONLY";
    case FieldBehavior.INPUT_ONLY:
      return "INPUT_ONLY";
    case FieldBehavior.IMMUTABLE:
      return "IMMUTABLE";
    case FieldBehavior.UNORDERED_LIST:
      return "UNORDERED_LIST";
    case FieldBehavior.NON_EMPTY_DEFAULT:
      return "NON_EMPTY_DEFAULT";
    case FieldBehavior.IDENTIFIER:
      return "IDENTIFIER";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum FieldBehavior",
      );
  }
}
