/* eslint-disable */
import { Effect, effectFromJSON, effectToJSON } from "../../effect/v1/effect";

export const protobufPackage = "cerbos.policy.v1";

export interface Policy {
  apiVersion: string;
  disabled: boolean;
  description: string;
  metadata: Metadata | undefined;
  policyType?:
    | { $case: "resourcePolicy"; resourcePolicy: ResourcePolicy }
    | { $case: "principalPolicy"; principalPolicy: PrincipalPolicy }
    | { $case: "derivedRoles"; derivedRoles: DerivedRoles }
    | undefined;
  variables: { [key: string]: string };
}

export interface Policy_VariablesEntry {
  key: string;
  value: string;
}

export interface Metadata {
  sourceFile: string;
  annotations: { [key: string]: string };
  hash: string | undefined;
  storeIdentifer: string;
  storeIdentifier: string;
}

export interface Metadata_AnnotationsEntry {
  key: string;
  value: string;
}

export interface ResourcePolicy {
  resource: string;
  version: string;
  importDerivedRoles: string[];
  rules: ResourceRule[];
  scope: string;
  schemas: Schemas | undefined;
}

export interface ResourceRule {
  actions: string[];
  derivedRoles: string[];
  roles: string[];
  condition: Condition | undefined;
  effect: Effect;
  name: string;
  output: Output | undefined;
}

export interface PrincipalPolicy {
  principal: string;
  version: string;
  rules: PrincipalRule[];
  scope: string;
}

export interface PrincipalRule {
  resource: string;
  actions: PrincipalRule_Action[];
}

export interface PrincipalRule_Action {
  action: string;
  condition: Condition | undefined;
  effect: Effect;
  name: string;
  output: Output | undefined;
}

export interface DerivedRoles {
  name: string;
  definitions: RoleDef[];
}

export interface RoleDef {
  name: string;
  parentRoles: string[];
  condition: Condition | undefined;
}

export interface Condition {
  condition?:
    | { $case: "match"; match: Match }
    | { $case: "script"; script: string }
    | undefined;
}

export interface Match {
  op?:
    | { $case: "all"; all: Match_ExprList }
    | { $case: "any"; any: Match_ExprList }
    | { $case: "none"; none: Match_ExprList }
    | { $case: "expr"; expr: string }
    | undefined;
}

export interface Match_ExprList {
  of: Match[];
}

export interface Output {
  expr: string;
}

export interface Schemas {
  principalSchema: Schemas_Schema | undefined;
  resourceSchema: Schemas_Schema | undefined;
}

export interface Schemas_IgnoreWhen {
  actions: string[];
}

export interface Schemas_Schema {
  ref: string;
  ignoreWhen: Schemas_IgnoreWhen | undefined;
}

export const Policy = {
  fromJSON(object: any): Policy {
    return {
      apiVersion: isSet(object.apiVersion) ? String(object.apiVersion) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
      description: isSet(object.description) ? String(object.description) : "",
      metadata: isSet(object.metadata)
        ? Metadata.fromJSON(object.metadata)
        : undefined,
      policyType: isSet(object.resourcePolicy)
        ? {
            $case: "resourcePolicy",
            resourcePolicy: ResourcePolicy.fromJSON(object.resourcePolicy),
          }
        : isSet(object.principalPolicy)
        ? {
            $case: "principalPolicy",
            principalPolicy: PrincipalPolicy.fromJSON(object.principalPolicy),
          }
        : isSet(object.derivedRoles)
        ? {
            $case: "derivedRoles",
            derivedRoles: DerivedRoles.fromJSON(object.derivedRoles),
          }
        : undefined,
      variables: isObject(object.variables)
        ? Object.entries(object.variables).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
    };
  },

  toJSON(message: Policy): unknown {
    const obj: any = {};
    message.apiVersion !== undefined && (obj.apiVersion = message.apiVersion);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    message.description !== undefined &&
      (obj.description = message.description);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    message.policyType?.$case === "resourcePolicy" &&
      (obj.resourcePolicy = message.policyType?.resourcePolicy
        ? ResourcePolicy.toJSON(message.policyType?.resourcePolicy)
        : undefined);
    message.policyType?.$case === "principalPolicy" &&
      (obj.principalPolicy = message.policyType?.principalPolicy
        ? PrincipalPolicy.toJSON(message.policyType?.principalPolicy)
        : undefined);
    message.policyType?.$case === "derivedRoles" &&
      (obj.derivedRoles = message.policyType?.derivedRoles
        ? DerivedRoles.toJSON(message.policyType?.derivedRoles)
        : undefined);
    obj.variables = {};
    if (message.variables) {
      Object.entries(message.variables).forEach(([k, v]) => {
        obj.variables[k] = v;
      });
    }
    return obj;
  },
};

export const Policy_VariablesEntry = {
  fromJSON(object: any): Policy_VariablesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Policy_VariablesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

export const Metadata = {
  fromJSON(object: any): Metadata {
    return {
      sourceFile: isSet(object.sourceFile) ? String(object.sourceFile) : "",
      annotations: isObject(object.annotations)
        ? Object.entries(object.annotations).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
      hash: isSet(object.hash) ? String(object.hash) : undefined,
      storeIdentifer: isSet(object.storeIdentifer)
        ? String(object.storeIdentifer)
        : "",
      storeIdentifier: isSet(object.storeIdentifier)
        ? String(object.storeIdentifier)
        : "",
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.sourceFile !== undefined && (obj.sourceFile = message.sourceFile);
    obj.annotations = {};
    if (message.annotations) {
      Object.entries(message.annotations).forEach(([k, v]) => {
        obj.annotations[k] = v;
      });
    }
    message.hash !== undefined && (obj.hash = message.hash);
    message.storeIdentifer !== undefined &&
      (obj.storeIdentifer = message.storeIdentifer);
    message.storeIdentifier !== undefined &&
      (obj.storeIdentifier = message.storeIdentifier);
    return obj;
  },
};

export const Metadata_AnnotationsEntry = {
  fromJSON(object: any): Metadata_AnnotationsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Metadata_AnnotationsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
};

export const ResourcePolicy = {
  fromJSON(object: any): ResourcePolicy {
    return {
      resource: isSet(object.resource) ? String(object.resource) : "",
      version: isSet(object.version) ? String(object.version) : "",
      importDerivedRoles: Array.isArray(object?.importDerivedRoles)
        ? object.importDerivedRoles.map((e: any) => String(e))
        : [],
      rules: Array.isArray(object?.rules)
        ? object.rules.map((e: any) => ResourceRule.fromJSON(e))
        : [],
      scope: isSet(object.scope) ? String(object.scope) : "",
      schemas: isSet(object.schemas)
        ? Schemas.fromJSON(object.schemas)
        : undefined,
    };
  },

  toJSON(message: ResourcePolicy): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource);
    message.version !== undefined && (obj.version = message.version);
    if (message.importDerivedRoles) {
      obj.importDerivedRoles = message.importDerivedRoles.map((e) => e);
    } else {
      obj.importDerivedRoles = [];
    }
    if (message.rules) {
      obj.rules = message.rules.map((e) =>
        e ? ResourceRule.toJSON(e) : undefined,
      );
    } else {
      obj.rules = [];
    }
    message.scope !== undefined && (obj.scope = message.scope);
    message.schemas !== undefined &&
      (obj.schemas = message.schemas
        ? Schemas.toJSON(message.schemas)
        : undefined);
    return obj;
  },
};

export const ResourceRule = {
  fromJSON(object: any): ResourceRule {
    return {
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => String(e))
        : [],
      derivedRoles: Array.isArray(object?.derivedRoles)
        ? object.derivedRoles.map((e: any) => String(e))
        : [],
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => String(e))
        : [],
      condition: isSet(object.condition)
        ? Condition.fromJSON(object.condition)
        : undefined,
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      output: isSet(object.output) ? Output.fromJSON(object.output) : undefined,
    };
  },

  toJSON(message: ResourceRule): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    if (message.derivedRoles) {
      obj.derivedRoles = message.derivedRoles.map((e) => e);
    } else {
      obj.derivedRoles = [];
    }
    if (message.roles) {
      obj.roles = message.roles.map((e) => e);
    } else {
      obj.roles = [];
    }
    message.condition !== undefined &&
      (obj.condition = message.condition
        ? Condition.toJSON(message.condition)
        : undefined);
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.name !== undefined && (obj.name = message.name);
    message.output !== undefined &&
      (obj.output = message.output ? Output.toJSON(message.output) : undefined);
    return obj;
  },
};

export const PrincipalPolicy = {
  fromJSON(object: any): PrincipalPolicy {
    return {
      principal: isSet(object.principal) ? String(object.principal) : "",
      version: isSet(object.version) ? String(object.version) : "",
      rules: Array.isArray(object?.rules)
        ? object.rules.map((e: any) => PrincipalRule.fromJSON(e))
        : [],
      scope: isSet(object.scope) ? String(object.scope) : "",
    };
  },

  toJSON(message: PrincipalPolicy): unknown {
    const obj: any = {};
    message.principal !== undefined && (obj.principal = message.principal);
    message.version !== undefined && (obj.version = message.version);
    if (message.rules) {
      obj.rules = message.rules.map((e) =>
        e ? PrincipalRule.toJSON(e) : undefined,
      );
    } else {
      obj.rules = [];
    }
    message.scope !== undefined && (obj.scope = message.scope);
    return obj;
  },
};

export const PrincipalRule = {
  fromJSON(object: any): PrincipalRule {
    return {
      resource: isSet(object.resource) ? String(object.resource) : "",
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => PrincipalRule_Action.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PrincipalRule): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource);
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? PrincipalRule_Action.toJSON(e) : undefined,
      );
    } else {
      obj.actions = [];
    }
    return obj;
  },
};

export const PrincipalRule_Action = {
  fromJSON(object: any): PrincipalRule_Action {
    return {
      action: isSet(object.action) ? String(object.action) : "",
      condition: isSet(object.condition)
        ? Condition.fromJSON(object.condition)
        : undefined,
      effect: isSet(object.effect) ? effectFromJSON(object.effect) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      output: isSet(object.output) ? Output.fromJSON(object.output) : undefined,
    };
  },

  toJSON(message: PrincipalRule_Action): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    message.condition !== undefined &&
      (obj.condition = message.condition
        ? Condition.toJSON(message.condition)
        : undefined);
    message.effect !== undefined && (obj.effect = effectToJSON(message.effect));
    message.name !== undefined && (obj.name = message.name);
    message.output !== undefined &&
      (obj.output = message.output ? Output.toJSON(message.output) : undefined);
    return obj;
  },
};

export const DerivedRoles = {
  fromJSON(object: any): DerivedRoles {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      definitions: Array.isArray(object?.definitions)
        ? object.definitions.map((e: any) => RoleDef.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DerivedRoles): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.definitions) {
      obj.definitions = message.definitions.map((e) =>
        e ? RoleDef.toJSON(e) : undefined,
      );
    } else {
      obj.definitions = [];
    }
    return obj;
  },
};

export const RoleDef = {
  fromJSON(object: any): RoleDef {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parentRoles: Array.isArray(object?.parentRoles)
        ? object.parentRoles.map((e: any) => String(e))
        : [],
      condition: isSet(object.condition)
        ? Condition.fromJSON(object.condition)
        : undefined,
    };
  },

  toJSON(message: RoleDef): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.parentRoles) {
      obj.parentRoles = message.parentRoles.map((e) => e);
    } else {
      obj.parentRoles = [];
    }
    message.condition !== undefined &&
      (obj.condition = message.condition
        ? Condition.toJSON(message.condition)
        : undefined);
    return obj;
  },
};

export const Condition = {
  fromJSON(object: any): Condition {
    return {
      condition: isSet(object.match)
        ? { $case: "match", match: Match.fromJSON(object.match) }
        : isSet(object.script)
        ? { $case: "script", script: String(object.script) }
        : undefined,
    };
  },

  toJSON(message: Condition): unknown {
    const obj: any = {};
    message.condition?.$case === "match" &&
      (obj.match = message.condition?.match
        ? Match.toJSON(message.condition?.match)
        : undefined);
    message.condition?.$case === "script" &&
      (obj.script = message.condition?.script);
    return obj;
  },
};

export const Match = {
  fromJSON(object: any): Match {
    return {
      op: isSet(object.all)
        ? { $case: "all", all: Match_ExprList.fromJSON(object.all) }
        : isSet(object.any)
        ? { $case: "any", any: Match_ExprList.fromJSON(object.any) }
        : isSet(object.none)
        ? { $case: "none", none: Match_ExprList.fromJSON(object.none) }
        : isSet(object.expr)
        ? { $case: "expr", expr: String(object.expr) }
        : undefined,
    };
  },

  toJSON(message: Match): unknown {
    const obj: any = {};
    message.op?.$case === "all" &&
      (obj.all = message.op?.all
        ? Match_ExprList.toJSON(message.op?.all)
        : undefined);
    message.op?.$case === "any" &&
      (obj.any = message.op?.any
        ? Match_ExprList.toJSON(message.op?.any)
        : undefined);
    message.op?.$case === "none" &&
      (obj.none = message.op?.none
        ? Match_ExprList.toJSON(message.op?.none)
        : undefined);
    message.op?.$case === "expr" && (obj.expr = message.op?.expr);
    return obj;
  },
};

export const Match_ExprList = {
  fromJSON(object: any): Match_ExprList {
    return {
      of: Array.isArray(object?.of)
        ? object.of.map((e: any) => Match.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Match_ExprList): unknown {
    const obj: any = {};
    if (message.of) {
      obj.of = message.of.map((e) => (e ? Match.toJSON(e) : undefined));
    } else {
      obj.of = [];
    }
    return obj;
  },
};

export const Output = {
  fromJSON(object: any): Output {
    return { expr: isSet(object.expr) ? String(object.expr) : "" };
  },

  toJSON(message: Output): unknown {
    const obj: any = {};
    message.expr !== undefined && (obj.expr = message.expr);
    return obj;
  },
};

export const Schemas = {
  fromJSON(object: any): Schemas {
    return {
      principalSchema: isSet(object.principalSchema)
        ? Schemas_Schema.fromJSON(object.principalSchema)
        : undefined,
      resourceSchema: isSet(object.resourceSchema)
        ? Schemas_Schema.fromJSON(object.resourceSchema)
        : undefined,
    };
  },

  toJSON(message: Schemas): unknown {
    const obj: any = {};
    message.principalSchema !== undefined &&
      (obj.principalSchema = message.principalSchema
        ? Schemas_Schema.toJSON(message.principalSchema)
        : undefined);
    message.resourceSchema !== undefined &&
      (obj.resourceSchema = message.resourceSchema
        ? Schemas_Schema.toJSON(message.resourceSchema)
        : undefined);
    return obj;
  },
};

export const Schemas_IgnoreWhen = {
  fromJSON(object: any): Schemas_IgnoreWhen {
    return {
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Schemas_IgnoreWhen): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    return obj;
  },
};

export const Schemas_Schema = {
  fromJSON(object: any): Schemas_Schema {
    return {
      ref: isSet(object.ref) ? String(object.ref) : "",
      ignoreWhen: isSet(object.ignoreWhen)
        ? Schemas_IgnoreWhen.fromJSON(object.ignoreWhen)
        : undefined,
    };
  },

  toJSON(message: Schemas_Schema): unknown {
    const obj: any = {};
    message.ref !== undefined && (obj.ref = message.ref);
    message.ignoreWhen !== undefined &&
      (obj.ignoreWhen = message.ignoreWhen
        ? Schemas_IgnoreWhen.toJSON(message.ignoreWhen)
        : undefined);
    return obj;
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
