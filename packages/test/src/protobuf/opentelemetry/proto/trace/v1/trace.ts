/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { InstrumentationScope, KeyValue } from "../../common/v1/common";
import { Resource } from "../../resource/v1/resource";

export const protobufPackage = "opentelemetry.proto.trace.v1";

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
};

function createBaseSpan(): Span {
  return {
    traceId: new Uint8Array(0),
    spanId: new Uint8Array(0),
    traceState: "",
    parentSpanId: new Uint8Array(0),
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
};

function createBaseSpan_Link(): Span_Link {
  return {
    traceId: new Uint8Array(0),
    spanId: new Uint8Array(0),
    traceState: "",
    attributes: [],
    droppedAttributesCount: 0,
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
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
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
