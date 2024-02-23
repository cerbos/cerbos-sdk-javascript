/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { InstrumentationScope, KeyValue } from "../../common/v1/common";
import { Resource } from "../../resource/v1/resource";

export const protobufPackage = "opentelemetry.proto.trace.v1";

export interface TracesData {
  resourceSpans: ResourceSpans[];
}

export interface ResourceSpans {
  resource: Resource | undefined;
  scopeSpans: ScopeSpans[];
  schemaUrl: string;
}

export interface ScopeSpans {
  scope: InstrumentationScope | undefined;
  spans: Span[];
  schemaUrl: string;
}

export interface Span {
  traceId: Uint8Array;
  spanId: Uint8Array;
  traceState: string;
  parentSpanId: Uint8Array;
  flags: number;
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
      throw new globalThis.Error(
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
  flags: number;
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
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Status_StatusCode",
      );
  }
}

function createBaseTracesData(): TracesData {
  return { resourceSpans: [] };
}

export const TracesData = {
  encode(
    message: TracesData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.resourceSpans) {
      ResourceSpans.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TracesData {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTracesData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceSpans.push(
            ResourceSpans.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TracesData {
    return {
      resourceSpans: globalThis.Array.isArray(object?.resourceSpans)
        ? object.resourceSpans.map((e: any) => ResourceSpans.fromJSON(e))
        : [],
    };
  },
};

function createBaseResourceSpans(): ResourceSpans {
  return { resource: undefined, scopeSpans: [], schemaUrl: "" };
}

export const ResourceSpans = {
  encode(
    message: ResourceSpans,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.scopeSpans) {
      ScopeSpans.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.schemaUrl !== "") {
      writer.uint32(26).string(message.schemaUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceSpans {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceSpans();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resource = Resource.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scopeSpans.push(ScopeSpans.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.schemaUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceSpans {
    return {
      resource: isSet(object.resource)
        ? Resource.fromJSON(object.resource)
        : undefined,
      scopeSpans: globalThis.Array.isArray(object?.scopeSpans)
        ? object.scopeSpans.map((e: any) => ScopeSpans.fromJSON(e))
        : [],
      schemaUrl: isSet(object.schemaUrl)
        ? globalThis.String(object.schemaUrl)
        : "",
    };
  },
};

function createBaseScopeSpans(): ScopeSpans {
  return { scope: undefined, spans: [], schemaUrl: "" };
}

export const ScopeSpans = {
  encode(
    message: ScopeSpans,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.scope !== undefined) {
      InstrumentationScope.encode(
        message.scope,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.spans) {
      Span.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.schemaUrl !== "") {
      writer.uint32(26).string(message.schemaUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScopeSpans {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScopeSpans();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scope = InstrumentationScope.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.spans.push(Span.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.schemaUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScopeSpans {
    return {
      scope: isSet(object.scope)
        ? InstrumentationScope.fromJSON(object.scope)
        : undefined,
      spans: globalThis.Array.isArray(object?.spans)
        ? object.spans.map((e: any) => Span.fromJSON(e))
        : [],
      schemaUrl: isSet(object.schemaUrl)
        ? globalThis.String(object.schemaUrl)
        : "",
    };
  },
};

function createBaseSpan(): Span {
  return {
    traceId: new Uint8Array(0),
    spanId: new Uint8Array(0),
    traceState: "",
    parentSpanId: new Uint8Array(0),
    flags: 0,
    name: "",
    kind: 0,
    startTimeUnixNano: "0",
    endTimeUnixNano: "0",
    attributes: [],
    droppedAttributesCount: 0,
    events: [],
    droppedEventsCount: 0,
    links: [],
    droppedLinksCount: 0,
    status: undefined,
  };
}

export const Span = {
  encode(message: Span, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.traceId.length !== 0) {
      writer.uint32(10).bytes(message.traceId);
    }
    if (message.spanId.length !== 0) {
      writer.uint32(18).bytes(message.spanId);
    }
    if (message.traceState !== "") {
      writer.uint32(26).string(message.traceState);
    }
    if (message.parentSpanId.length !== 0) {
      writer.uint32(34).bytes(message.parentSpanId);
    }
    if (message.flags !== 0) {
      writer.uint32(133).fixed32(message.flags);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.kind !== 0) {
      writer.uint32(48).int32(message.kind);
    }
    if (message.startTimeUnixNano !== "0") {
      writer.uint32(57).fixed64(message.startTimeUnixNano);
    }
    if (message.endTimeUnixNano !== "0") {
      writer.uint32(65).fixed64(message.endTimeUnixNano);
    }
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.droppedAttributesCount !== 0) {
      writer.uint32(80).uint32(message.droppedAttributesCount);
    }
    for (const v of message.events) {
      Span_Event.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.droppedEventsCount !== 0) {
      writer.uint32(96).uint32(message.droppedEventsCount);
    }
    for (const v of message.links) {
      Span_Link.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.droppedLinksCount !== 0) {
      writer.uint32(112).uint32(message.droppedLinksCount);
    }
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Span {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.traceId = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.spanId = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.traceState = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.parentSpanId = reader.bytes();
          continue;
        case 16:
          if (tag !== 133) {
            break;
          }

          message.flags = reader.fixed32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.startTimeUnixNano = longToString(reader.fixed64() as Long);
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.endTimeUnixNano = longToString(reader.fixed64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.attributes.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.droppedAttributesCount = reader.uint32();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.events.push(Span_Event.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.droppedEventsCount = reader.uint32();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.links.push(Span_Link.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.droppedLinksCount = reader.uint32();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.status = Status.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Span {
    return {
      traceId: isSet(object.traceId)
        ? bytesFromBase64(object.traceId)
        : new Uint8Array(0),
      spanId: isSet(object.spanId)
        ? bytesFromBase64(object.spanId)
        : new Uint8Array(0),
      traceState: isSet(object.traceState)
        ? globalThis.String(object.traceState)
        : "",
      parentSpanId: isSet(object.parentSpanId)
        ? bytesFromBase64(object.parentSpanId)
        : new Uint8Array(0),
      flags: isSet(object.flags) ? globalThis.Number(object.flags) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      kind: isSet(object.kind) ? span_SpanKindFromJSON(object.kind) : 0,
      startTimeUnixNano: isSet(object.startTimeUnixNano)
        ? globalThis.String(object.startTimeUnixNano)
        : "0",
      endTimeUnixNano: isSet(object.endTimeUnixNano)
        ? globalThis.String(object.endTimeUnixNano)
        : "0",
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => KeyValue.fromJSON(e))
        : [],
      droppedAttributesCount: isSet(object.droppedAttributesCount)
        ? globalThis.Number(object.droppedAttributesCount)
        : 0,
      events: globalThis.Array.isArray(object?.events)
        ? object.events.map((e: any) => Span_Event.fromJSON(e))
        : [],
      droppedEventsCount: isSet(object.droppedEventsCount)
        ? globalThis.Number(object.droppedEventsCount)
        : 0,
      links: globalThis.Array.isArray(object?.links)
        ? object.links.map((e: any) => Span_Link.fromJSON(e))
        : [],
      droppedLinksCount: isSet(object.droppedLinksCount)
        ? globalThis.Number(object.droppedLinksCount)
        : 0,
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },
};

function createBaseSpan_Event(): Span_Event {
  return {
    timeUnixNano: "0",
    name: "",
    attributes: [],
    droppedAttributesCount: 0,
  };
}

export const Span_Event = {
  encode(
    message: Span_Event,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timeUnixNano !== "0") {
      writer.uint32(9).fixed64(message.timeUnixNano);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.droppedAttributesCount !== 0) {
      writer.uint32(32).uint32(message.droppedAttributesCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Span_Event {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpan_Event();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.timeUnixNano = longToString(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.attributes.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.droppedAttributesCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Span_Event {
    return {
      timeUnixNano: isSet(object.timeUnixNano)
        ? globalThis.String(object.timeUnixNano)
        : "0",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => KeyValue.fromJSON(e))
        : [],
      droppedAttributesCount: isSet(object.droppedAttributesCount)
        ? globalThis.Number(object.droppedAttributesCount)
        : 0,
    };
  },
};

function createBaseSpan_Link(): Span_Link {
  return {
    traceId: new Uint8Array(0),
    spanId: new Uint8Array(0),
    traceState: "",
    attributes: [],
    droppedAttributesCount: 0,
    flags: 0,
  };
}

export const Span_Link = {
  encode(
    message: Span_Link,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.traceId.length !== 0) {
      writer.uint32(10).bytes(message.traceId);
    }
    if (message.spanId.length !== 0) {
      writer.uint32(18).bytes(message.spanId);
    }
    if (message.traceState !== "") {
      writer.uint32(26).string(message.traceState);
    }
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.droppedAttributesCount !== 0) {
      writer.uint32(40).uint32(message.droppedAttributesCount);
    }
    if (message.flags !== 0) {
      writer.uint32(53).fixed32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Span_Link {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpan_Link();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.traceId = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.spanId = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.traceState = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.attributes.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.droppedAttributesCount = reader.uint32();
          continue;
        case 6:
          if (tag !== 53) {
            break;
          }

          message.flags = reader.fixed32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Span_Link {
    return {
      traceId: isSet(object.traceId)
        ? bytesFromBase64(object.traceId)
        : new Uint8Array(0),
      spanId: isSet(object.spanId)
        ? bytesFromBase64(object.spanId)
        : new Uint8Array(0),
      traceState: isSet(object.traceState)
        ? globalThis.String(object.traceState)
        : "",
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => KeyValue.fromJSON(e))
        : [],
      droppedAttributesCount: isSet(object.droppedAttributesCount)
        ? globalThis.Number(object.droppedAttributesCount)
        : 0,
      flags: isSet(object.flags) ? globalThis.Number(object.flags) : 0,
    };
  },
};

function createBaseStatus(): Status {
  return { message: "", code: 0 };
}

export const Status = {
  encode(
    message: Status,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.code !== 0) {
      writer.uint32(24).int32(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Status {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.code = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Status {
    return {
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      code: isSet(object.code) ? status_StatusCodeFromJSON(object.code) : 0,
    };
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
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

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
