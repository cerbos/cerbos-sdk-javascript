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
      selector: isSet(object.selector) ? String(object.selector) : "",
      pattern: isSet(object.get)
        ? { $case: "get", get: String(object.get) }
        : isSet(object.put)
        ? { $case: "put", put: String(object.put) }
        : isSet(object.post)
        ? { $case: "post", post: String(object.post) }
        : isSet(object.delete)
        ? { $case: "delete", delete: String(object.delete) }
        : isSet(object.patch)
        ? { $case: "patch", patch: String(object.patch) }
        : isSet(object.custom)
        ? { $case: "custom", custom: CustomHttpPattern.fromJSON(object.custom) }
        : undefined,
      body: isSet(object.body) ? String(object.body) : "",
      responseBody: isSet(object.responseBody)
        ? String(object.responseBody)
        : "",
      additionalBindings: Array.isArray(object?.additionalBindings)
        ? object.additionalBindings.map((e: any) => HttpRule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: HttpRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.pattern?.$case === "get" && (obj.get = message.pattern?.get);
    message.pattern?.$case === "put" && (obj.put = message.pattern?.put);
    message.pattern?.$case === "post" && (obj.post = message.pattern?.post);
    message.pattern?.$case === "delete" &&
      (obj.delete = message.pattern?.delete);
    message.pattern?.$case === "patch" && (obj.patch = message.pattern?.patch);
    message.pattern?.$case === "custom" &&
      (obj.custom = message.pattern?.custom
        ? CustomHttpPattern.toJSON(message.pattern?.custom)
        : undefined);
    message.body !== undefined && (obj.body = message.body);
    message.responseBody !== undefined &&
      (obj.responseBody = message.responseBody);
    if (message.additionalBindings) {
      obj.additionalBindings = message.additionalBindings.map((e) =>
        e ? HttpRule.toJSON(e) : undefined,
      );
    } else {
      obj.additionalBindings = [];
    }
    return obj;
  },
};

export const CustomHttpPattern = {
  fromJSON(object: any): CustomHttpPattern {
    return {
      kind: isSet(object.kind) ? String(object.kind) : "",
      path: isSet(object.path) ? String(object.path) : "",
    };
  },

  toJSON(message: CustomHttpPattern): unknown {
    const obj: any = {};
    message.kind !== undefined && (obj.kind = message.kind);
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
