// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: cerbos/cloud/epdp/v1/epdp.proto

/* eslint-disable */
import { SourceAttributes } from "../../../policy/v1/policy";

export const protobufPackage = "cerbos.cloud.epdp.v1";

export interface Metadata {
  version: string;
  policies: string[];
  buildTimestamp: number;
  commitHash: string;
  sourceAttributes: { [key: string]: SourceAttributes };
}

export interface Metadata_SourceAttributesEntry {
  key: string;
  value: SourceAttributes | undefined;
}

export const Metadata: MessageFns<Metadata> = {
  fromJSON(object: any): Metadata {
    return {
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      policies: globalThis.Array.isArray(object?.policies)
        ? object.policies.map((e: any) => globalThis.String(e))
        : [],
      buildTimestamp: isSet(object.buildTimestamp)
        ? globalThis.Number(object.buildTimestamp)
        : 0,
      commitHash: isSet(object.commitHash)
        ? globalThis.String(object.commitHash)
        : "",
      sourceAttributes: isObject(object.sourceAttributes)
        ? Object.entries(object.sourceAttributes).reduce<{
            [key: string]: SourceAttributes;
          }>((acc, [key, value]) => {
            acc[key] = SourceAttributes.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.policies?.length) {
      obj.policies = message.policies;
    }
    if (message.buildTimestamp !== 0) {
      obj.buildTimestamp = Math.round(message.buildTimestamp);
    }
    if (message.commitHash !== "") {
      obj.commitHash = message.commitHash;
    }
    if (message.sourceAttributes) {
      const entries = Object.entries(message.sourceAttributes);
      if (entries.length > 0) {
        obj.sourceAttributes = {};
        entries.forEach(([k, v]) => {
          obj.sourceAttributes[k] = SourceAttributes.toJSON(v);
        });
      }
    }
    return obj;
  },
};

export const Metadata_SourceAttributesEntry: MessageFns<Metadata_SourceAttributesEntry> =
  {
    fromJSON(object: any): Metadata_SourceAttributesEntry {
      return {
        key: isSet(object.key) ? globalThis.String(object.key) : "",
        value: isSet(object.value)
          ? SourceAttributes.fromJSON(object.value)
          : undefined,
      };
    },

    toJSON(message: Metadata_SourceAttributesEntry): unknown {
      const obj: any = {};
      if (message.key !== "") {
        obj.key = message.key;
      }
      if (message.value !== undefined) {
        obj.value = SourceAttributes.toJSON(message.value);
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

export interface MessageFns<T> {
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
}