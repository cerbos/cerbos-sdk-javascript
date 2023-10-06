/* eslint-disable */

export const protobufPackage = "cerbos.engine.v1";

export interface PlanResourcesInput {}

export interface PlanResourcesInput_Resource {
  kind: string;
  attr: { [key: string]: any | undefined };
  policyVersion: string;
  scope: string;
}

export interface PlanResourcesInput_Resource_AttrEntry {
  key: string;
  value: any | undefined;
}

export interface PlanResourcesFilter {
  kind: PlanResourcesFilter_Kind;
  condition: PlanResourcesFilter_Expression_Operand | undefined;
}

export enum PlanResourcesFilter_Kind {
  KIND_UNSPECIFIED = 0,
  KIND_ALWAYS_ALLOWED = 1,
  KIND_ALWAYS_DENIED = 2,
  KIND_CONDITIONAL = 3,
}

export function planResourcesFilter_KindFromJSON(
  object: any,
): PlanResourcesFilter_Kind {
  switch (object) {
    case 0:
    case "KIND_UNSPECIFIED":
      return PlanResourcesFilter_Kind.KIND_UNSPECIFIED;
    case 1:
    case "KIND_ALWAYS_ALLOWED":
      return PlanResourcesFilter_Kind.KIND_ALWAYS_ALLOWED;
    case 2:
    case "KIND_ALWAYS_DENIED":
      return PlanResourcesFilter_Kind.KIND_ALWAYS_DENIED;
    case 3:
    case "KIND_CONDITIONAL":
      return PlanResourcesFilter_Kind.KIND_CONDITIONAL;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum PlanResourcesFilter_Kind",
      );
  }
}

export function planResourcesFilter_KindToJSON(
  object: PlanResourcesFilter_Kind,
): string {
  switch (object) {
    case PlanResourcesFilter_Kind.KIND_UNSPECIFIED:
      return "KIND_UNSPECIFIED";
    case PlanResourcesFilter_Kind.KIND_ALWAYS_ALLOWED:
      return "KIND_ALWAYS_ALLOWED";
    case PlanResourcesFilter_Kind.KIND_ALWAYS_DENIED:
      return "KIND_ALWAYS_DENIED";
    case PlanResourcesFilter_Kind.KIND_CONDITIONAL:
      return "KIND_CONDITIONAL";
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum PlanResourcesFilter_Kind",
      );
  }
}

export interface PlanResourcesFilter_Expression {
  operator: string;
  operands: PlanResourcesFilter_Expression_Operand[];
}

export interface PlanResourcesFilter_Expression_Operand {
  node?:
    | { $case: "value"; value: any | undefined }
    | { $case: "expression"; expression: PlanResourcesFilter_Expression }
    | { $case: "variable"; variable: string }
    | undefined;
}

export interface OutputEntry {
  src: string;
  val: any | undefined;
}

export interface Resource {
  kind: string;
  policyVersion: string;
  id: string;
  attr: { [key: string]: any | undefined };
  scope: string;
}

export interface Resource_AttrEntry {
  key: string;
  value: any | undefined;
}

export interface Principal {
  id: string;
  policyVersion: string;
  roles: string[];
  attr: { [key: string]: any | undefined };
  scope: string;
}

export interface Principal_AttrEntry {
  key: string;
  value: any | undefined;
}

export const PlanResourcesInput = {
  fromJSON(_: any): PlanResourcesInput {
    return {};
  },

  toJSON(_: PlanResourcesInput): unknown {
    const obj: any = {};
    return obj;
  },
};

export const PlanResourcesInput_Resource = {
  fromJSON(object: any): PlanResourcesInput_Resource {
    return {
      kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
      policyVersion: isSet(object.policyVersion)
        ? globalThis.String(object.policyVersion)
        : "",
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
    };
  },

  toJSON(message: PlanResourcesInput_Resource): unknown {
    const obj: any = {};
    if (message.kind !== "") {
      obj.kind = message.kind;
    }
    if (message.attr) {
      const entries = Object.entries(message.attr);
      if (entries.length > 0) {
        obj.attr = {};
        entries.forEach(([k, v]) => {
          obj.attr[k] = v;
        });
      }
    }
    if (message.policyVersion !== "") {
      obj.policyVersion = message.policyVersion;
    }
    if (message.scope !== "") {
      obj.scope = message.scope;
    }
    return obj;
  },
};

export const PlanResourcesInput_Resource_AttrEntry = {
  fromJSON(object: any): PlanResourcesInput_Resource_AttrEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: PlanResourcesInput_Resource_AttrEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },
};

export const PlanResourcesFilter = {
  fromJSON(object: any): PlanResourcesFilter {
    return {
      kind: isSet(object.kind)
        ? planResourcesFilter_KindFromJSON(object.kind)
        : 0,
      condition: isSet(object.condition)
        ? PlanResourcesFilter_Expression_Operand.fromJSON(object.condition)
        : undefined,
    };
  },

  toJSON(message: PlanResourcesFilter): unknown {
    const obj: any = {};
    if (message.kind !== 0) {
      obj.kind = planResourcesFilter_KindToJSON(message.kind);
    }
    if (message.condition !== undefined) {
      obj.condition = PlanResourcesFilter_Expression_Operand.toJSON(
        message.condition,
      );
    }
    return obj;
  },
};

export const PlanResourcesFilter_Expression = {
  fromJSON(object: any): PlanResourcesFilter_Expression {
    return {
      operator: isSet(object.operator)
        ? globalThis.String(object.operator)
        : "",
      operands: globalThis.Array.isArray(object?.operands)
        ? object.operands.map((e: any) =>
            PlanResourcesFilter_Expression_Operand.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: PlanResourcesFilter_Expression): unknown {
    const obj: any = {};
    if (message.operator !== "") {
      obj.operator = message.operator;
    }
    if (message.operands?.length) {
      obj.operands = message.operands.map((e) =>
        PlanResourcesFilter_Expression_Operand.toJSON(e),
      );
    }
    return obj;
  },
};

export const PlanResourcesFilter_Expression_Operand = {
  fromJSON(object: any): PlanResourcesFilter_Expression_Operand {
    return {
      node: isSet(object.value)
        ? { $case: "value", value: object.value }
        : isSet(object.expression)
        ? {
            $case: "expression",
            expression: PlanResourcesFilter_Expression.fromJSON(
              object.expression,
            ),
          }
        : isSet(object.variable)
        ? { $case: "variable", variable: globalThis.String(object.variable) }
        : undefined,
    };
  },

  toJSON(message: PlanResourcesFilter_Expression_Operand): unknown {
    const obj: any = {};
    if (message.node?.$case === "value") {
      obj.value = message.node.value;
    }
    if (message.node?.$case === "expression") {
      obj.expression = PlanResourcesFilter_Expression.toJSON(
        message.node.expression,
      );
    }
    if (message.node?.$case === "variable") {
      obj.variable = message.node.variable;
    }
    return obj;
  },
};

export const OutputEntry = {
  fromJSON(object: any): OutputEntry {
    return {
      src: isSet(object.src) ? globalThis.String(object.src) : "",
      val: isSet(object?.val) ? object.val : undefined,
    };
  },

  toJSON(message: OutputEntry): unknown {
    const obj: any = {};
    if (message.src !== "") {
      obj.src = message.src;
    }
    if (message.val !== undefined) {
      obj.val = message.val;
    }
    return obj;
  },
};

export const Resource = {
  fromJSON(object: any): Resource {
    return {
      kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
      policyVersion: isSet(object.policyVersion)
        ? globalThis.String(object.policyVersion)
        : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    if (message.kind !== "") {
      obj.kind = message.kind;
    }
    if (message.policyVersion !== "") {
      obj.policyVersion = message.policyVersion;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.attr) {
      const entries = Object.entries(message.attr);
      if (entries.length > 0) {
        obj.attr = {};
        entries.forEach(([k, v]) => {
          obj.attr[k] = v;
        });
      }
    }
    if (message.scope !== "") {
      obj.scope = message.scope;
    }
    return obj;
  },
};

export const Resource_AttrEntry = {
  fromJSON(object: any): Resource_AttrEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: Resource_AttrEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },
};

export const Principal = {
  fromJSON(object: any): Principal {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      policyVersion: isSet(object.policyVersion)
        ? globalThis.String(object.policyVersion)
        : "",
      roles: globalThis.Array.isArray(object?.roles)
        ? object.roles.map((e: any) => globalThis.String(e))
        : [],
      attr: isObject(object.attr)
        ? Object.entries(object.attr).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
    };
  },

  toJSON(message: Principal): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.policyVersion !== "") {
      obj.policyVersion = message.policyVersion;
    }
    if (message.roles?.length) {
      obj.roles = message.roles;
    }
    if (message.attr) {
      const entries = Object.entries(message.attr);
      if (entries.length > 0) {
        obj.attr = {};
        entries.forEach(([k, v]) => {
          obj.attr[k] = v;
        });
      }
    }
    if (message.scope !== "") {
      obj.scope = message.scope;
    }
    return obj;
  },
};

export const Principal_AttrEntry = {
  fromJSON(object: any): Principal_AttrEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },

  toJSON(message: Principal_AttrEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
