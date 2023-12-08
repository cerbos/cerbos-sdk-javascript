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

export const HttpRule = {
  fromJSON(object: any): HttpRule {
    return {
      selector: isSet(object.selector)
        ? globalThis.String(object.selector)
        : "",
      pattern: isSet(object.get)
        ? { $case: "get", get: globalThis.String(object.get) }
        : isSet(object.put)
          ? { $case: "put", put: globalThis.String(object.put) }
          : isSet(object.post)
            ? { $case: "post", post: globalThis.String(object.post) }
            : isSet(object.delete)
              ? { $case: "delete", delete: globalThis.String(object.delete) }
              : isSet(object.patch)
                ? { $case: "patch", patch: globalThis.String(object.patch) }
                : isSet(object.custom)
                  ? {
                      $case: "custom",
                      custom: CustomHttpPattern.fromJSON(object.custom),
                    }
                  : undefined,
      body: isSet(object.body) ? globalThis.String(object.body) : "",
      responseBody: isSet(object.responseBody)
        ? globalThis.String(object.responseBody)
        : "",
      additionalBindings: globalThis.Array.isArray(object?.additionalBindings)
        ? object.additionalBindings.map((e: any) => HttpRule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: HttpRule): unknown {
    const obj: any = {};
    if (message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.pattern?.$case === "get") {
      obj.get = message.pattern.get;
    }
    if (message.pattern?.$case === "put") {
      obj.put = message.pattern.put;
    }
    if (message.pattern?.$case === "post") {
      obj.post = message.pattern.post;
    }
    if (message.pattern?.$case === "delete") {
      obj.delete = message.pattern.delete;
    }
    if (message.pattern?.$case === "patch") {
      obj.patch = message.pattern.patch;
    }
    if (message.pattern?.$case === "custom") {
      obj.custom = CustomHttpPattern.toJSON(message.pattern.custom);
    }
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.responseBody !== "") {
      obj.responseBody = message.responseBody;
    }
    if (message.additionalBindings?.length) {
      obj.additionalBindings = message.additionalBindings.map((e) =>
        HttpRule.toJSON(e),
      );
    }
    return obj;
  },
};

export const CustomHttpPattern = {
  fromJSON(object: any): CustomHttpPattern {
    return {
      kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
    };
  },

  toJSON(message: CustomHttpPattern): unknown {
    const obj: any = {};
    if (message.kind !== "") {
      obj.kind = message.kind;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
