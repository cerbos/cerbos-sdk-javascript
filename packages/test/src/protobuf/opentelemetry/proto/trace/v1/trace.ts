/* eslint-disable */
import { KeyValue } from "../../common/v1/common";

export const protobufPackage = "opentelemetry.proto.trace.v1";

export interface Span {
  traceId: Uint8Array;
  spanId: Uint8Array;
  traceState: string;
  parentSpanId: Uint8Array;
  name: string;
  kind: Span_SpanKind;
  startTimeUnixNano: string;
  endTimeUnixNano: string;
  attributes: KeyValue[];
  droppedAttributesCount: number;
  events: Span_Event[];
  droppedEventsCount: number;
  links: Span_Link[];
  droppedLinksCount: number;
  status: Status | undefined;
}

export enum Span_SpanKind {
  SPAN_KIND_UNSPECIFIED = 0,
  SPAN_KIND_INTERNAL = 1,
  SPAN_KIND_SERVER = 2,
  SPAN_KIND_CLIENT = 3,
  SPAN_KIND_PRODUCER = 4,
  SPAN_KIND_CONSUMER = 5,
}

export function span_SpanKindFromJSON(object: any): Span_SpanKind {
  switch (object) {
    case 0:
    case "SPAN_KIND_UNSPECIFIED":
      return Span_SpanKind.SPAN_KIND_UNSPECIFIED;
    case 1:
    case "SPAN_KIND_INTERNAL":
      return Span_SpanKind.SPAN_KIND_INTERNAL;
    case 2:
    case "SPAN_KIND_SERVER":
      return Span_SpanKind.SPAN_KIND_SERVER;
    case 3:
    case "SPAN_KIND_CLIENT":
      return Span_SpanKind.SPAN_KIND_CLIENT;
    case 4:
    case "SPAN_KIND_PRODUCER":
      return Span_SpanKind.SPAN_KIND_PRODUCER;
    case 5:
    case "SPAN_KIND_CONSUMER":
      return Span_SpanKind.SPAN_KIND_CONSUMER;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum Span_SpanKind",
      );
  }
}

export function span_SpanKindToJSON(object: Span_SpanKind): string {
  switch (object) {
    case Span_SpanKind.SPAN_KIND_UNSPECIFIED:
      return "SPAN_KIND_UNSPECIFIED";
    case Span_SpanKind.SPAN_KIND_INTERNAL:
      return "SPAN_KIND_INTERNAL";
    case Span_SpanKind.SPAN_KIND_SERVER:
      return "SPAN_KIND_SERVER";
    case Span_SpanKind.SPAN_KIND_CLIENT:
      return "SPAN_KIND_CLIENT";
    case Span_SpanKind.SPAN_KIND_PRODUCER:
      return "SPAN_KIND_PRODUCER";
    case Span_SpanKind.SPAN_KIND_CONSUMER:
      return "SPAN_KIND_CONSUMER";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum Span_SpanKind",
      );
  }
}

export interface Span_Event {
  timeUnixNano: string;
  name: string;
  attributes: KeyValue[];
  droppedAttributesCount: number;
}

export interface Span_Link {
  traceId: Uint8Array;
  spanId: Uint8Array;
  traceState: string;
  attributes: KeyValue[];
  droppedAttributesCount: number;
}

export interface Status {
  message: string;
  code: Status_StatusCode;
}

export enum Status_StatusCode {
  STATUS_CODE_UNSET = 0,
  STATUS_CODE_OK = 1,
  STATUS_CODE_ERROR = 2,
}

export function status_StatusCodeFromJSON(object: any): Status_StatusCode {
  switch (object) {
    case 0:
    case "STATUS_CODE_UNSET":
      return Status_StatusCode.STATUS_CODE_UNSET;
    case 1:
    case "STATUS_CODE_OK":
      return Status_StatusCode.STATUS_CODE_OK;
    case 2:
    case "STATUS_CODE_ERROR":
      return Status_StatusCode.STATUS_CODE_ERROR;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum Status_StatusCode",
      );
  }
}

export function status_StatusCodeToJSON(object: Status_StatusCode): string {
  switch (object) {
    case Status_StatusCode.STATUS_CODE_UNSET:
      return "STATUS_CODE_UNSET";
    case Status_StatusCode.STATUS_CODE_OK:
      return "STATUS_CODE_OK";
    case Status_StatusCode.STATUS_CODE_ERROR:
      return "STATUS_CODE_ERROR";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum Status_StatusCode",
      );
  }
}

export const Span = {
  fromJSON(object: any): Span {
    return {
      traceId: isSet(object.traceId)
        ? bytesFromBase64(object.traceId)
        : new Uint8Array(0),
      spanId: isSet(object.spanId)
        ? bytesFromBase64(object.spanId)
        : new Uint8Array(0),
      traceState: isSet(object.traceState) ? String(object.traceState) : "",
      parentSpanId: isSet(object.parentSpanId)
        ? bytesFromBase64(object.parentSpanId)
        : new Uint8Array(0),
      name: isSet(object.name) ? String(object.name) : "",
      kind: isSet(object.kind) ? span_SpanKindFromJSON(object.kind) : 0,
      startTimeUnixNano: isSet(object.startTimeUnixNano)
        ? String(object.startTimeUnixNano)
        : "0",
      endTimeUnixNano: isSet(object.endTimeUnixNano)
        ? String(object.endTimeUnixNano)
        : "0",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => KeyValue.fromJSON(e))
        : [],
      droppedAttributesCount: isSet(object.droppedAttributesCount)
        ? Number(object.droppedAttributesCount)
        : 0,
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => Span_Event.fromJSON(e))
        : [],
      droppedEventsCount: isSet(object.droppedEventsCount)
        ? Number(object.droppedEventsCount)
        : 0,
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => Span_Link.fromJSON(e))
        : [],
      droppedLinksCount: isSet(object.droppedLinksCount)
        ? Number(object.droppedLinksCount)
        : 0,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },
};

export const Span_Event = {
  fromJSON(object: any): Span_Event {
    return {
      timeUnixNano: isSet(object.timeUnixNano)
        ? String(object.timeUnixNano)
        : "0",
      name: isSet(object.name) ? String(object.name) : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => KeyValue.fromJSON(e))
        : [],
      droppedAttributesCount: isSet(object.droppedAttributesCount)
        ? Number(object.droppedAttributesCount)
        : 0,
    };
  },
};

export const Span_Link = {
  fromJSON(object: any): Span_Link {
    return {
      traceId: isSet(object.traceId)
        ? bytesFromBase64(object.traceId)
        : new Uint8Array(0),
      spanId: isSet(object.spanId)
        ? bytesFromBase64(object.spanId)
        : new Uint8Array(0),
      traceState: isSet(object.traceState) ? String(object.traceState) : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => KeyValue.fromJSON(e))
        : [],
      droppedAttributesCount: isSet(object.droppedAttributesCount)
        ? Number(object.droppedAttributesCount)
        : 0,
    };
  },
};

export const Status = {
  fromJSON(object: any): Status {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      code: isSet(object.code) ? status_StatusCodeFromJSON(object.code) : 0,
    };
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
