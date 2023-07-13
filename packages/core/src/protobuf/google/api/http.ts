/* eslint-disable */

export const protobufPackage = "google.api";

export interface HttpRule {
  selector: string;
  pattern?:
    | { $case: "get"; get: string }
    | { $case: "put"; put: string }
    | { $case: "post"; post: string }
    | { $case: "delete"; delete: string }
    | { $case: "patch"; patch: string }
    | { $case: "custom"; custom: CustomHttpPattern }
    | undefined;
  body: string;
  responseBody: string;
  additionalBindings: HttpRule[];
}

export interface CustomHttpPattern {
  kind: string;
  path: string;
}
