/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  ClientReadableStream,
  handleServerStreamingCall,
  makeGenericClientConstructor,
  Metadata,
} from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { ResourceSpans } from "../../../opentelemetry/proto/trace/v1/trace";

export const protobufPackage = "jaeger.api_v3";

export interface GetTraceRequest {
  traceId: string;
  startTime: Date | undefined;
  endTime: Date | undefined;
}

export interface SpansResponseChunk {
  resourceSpans: ResourceSpans[];
}

export interface TraceQueryParameters {
  serviceName: string;
  operationName: string;
  attributes: { [key: string]: string };
  startTimeMin: Date | undefined;
  startTimeMax: Date | undefined;
  durationMin: Duration | undefined;
  durationMax: Duration | undefined;
  numTraces: number;
}

export interface TraceQueryParameters_AttributesEntry {
  key: string;
  value: string;
}

export interface FindTracesRequest {
  query: TraceQueryParameters | undefined;
}

export interface GetServicesRequest {}

export interface GetServicesResponse {
  services: string[];
}

export interface GetOperationsRequest {
  service: string;
  spanKind: string;
}

export interface Operation {
  name: string;
  spanKind: string;
}

export interface GetOperationsResponse {
  operations: Operation[];
}

function createBaseGetTraceRequest(): GetTraceRequest {
  return { traceId: "", startTime: undefined, endTime: undefined };
}

export const GetTraceRequest = {
  encode(
    message: GetTraceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.traceId !== "") {
      writer.uint32(10).string(message.traceId);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTraceRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTraceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.traceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
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
};

function createBaseSpansResponseChunk(): SpansResponseChunk {
  return { resourceSpans: [] };
}

export const SpansResponseChunk = {
  encode(
    message: SpansResponseChunk,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.resourceSpans) {
      ResourceSpans.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpansResponseChunk {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpansResponseChunk();
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
};

function createBaseTraceQueryParameters(): TraceQueryParameters {
  return {
    serviceName: "",
    operationName: "",
    attributes: {},
    startTimeMin: undefined,
    startTimeMax: undefined,
    durationMin: undefined,
    durationMax: undefined,
    numTraces: 0,
  };
}

export const TraceQueryParameters = {
  encode(
    message: TraceQueryParameters,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.operationName !== "") {
      writer.uint32(18).string(message.operationName);
    }
    Object.entries(message.attributes).forEach(([key, value]) => {
      TraceQueryParameters_AttributesEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork(),
      ).ldelim();
    });
    if (message.startTimeMin !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTimeMin),
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.startTimeMax !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTimeMax),
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.durationMin !== undefined) {
      Duration.encode(message.durationMin, writer.uint32(50).fork()).ldelim();
    }
    if (message.durationMax !== undefined) {
      Duration.encode(message.durationMax, writer.uint32(58).fork()).ldelim();
    }
    if (message.numTraces !== 0) {
      writer.uint32(64).int32(message.numTraces);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TraceQueryParameters {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraceQueryParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operationName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = TraceQueryParameters_AttributesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry3.value !== undefined) {
            message.attributes[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.startTimeMin = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.startTimeMax = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.durationMin = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.durationMax = Duration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.numTraces = reader.int32();
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

function createBaseTraceQueryParameters_AttributesEntry(): TraceQueryParameters_AttributesEntry {
  return { key: "", value: "" };
}

export const TraceQueryParameters_AttributesEntry = {
  encode(
    message: TraceQueryParameters_AttributesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TraceQueryParameters_AttributesEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraceQueryParameters_AttributesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
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

function createBaseFindTracesRequest(): FindTracesRequest {
  return { query: undefined };
}

export const FindTracesRequest = {
  encode(
    message: FindTracesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.query !== undefined) {
      TraceQueryParameters.encode(
        message.query,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindTracesRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindTracesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.query = TraceQueryParameters.decode(reader, reader.uint32());
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

function createBaseGetServicesRequest(): GetServicesRequest {
  return {};
}

export const GetServicesRequest = {
  encode(
    _: GetServicesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetServicesRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseGetServicesResponse(): GetServicesResponse {
  return { services: [] };
}

export const GetServicesResponse = {
  encode(
    message: GetServicesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.services) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetServicesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.services.push(reader.string());
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

function createBaseGetOperationsRequest(): GetOperationsRequest {
  return { service: "", spanKind: "" };
}

export const GetOperationsRequest = {
  encode(
    message: GetOperationsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    if (message.spanKind !== "") {
      writer.uint32(18).string(message.spanKind);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetOperationsRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.service = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.spanKind = reader.string();
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

function createBaseOperation(): Operation {
  return { name: "", spanKind: "" };
}

export const Operation = {
  encode(
    message: Operation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.spanKind !== "") {
      writer.uint32(18).string(message.spanKind);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.spanKind = reader.string();
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

function createBaseGetOperationsResponse(): GetOperationsResponse {
  return { operations: [] };
}

export const GetOperationsResponse = {
  encode(
    message: GetOperationsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetOperationsResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOperationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operations.push(Operation.decode(reader, reader.uint32()));
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

export type QueryServiceService = typeof QueryServiceService;
export const QueryServiceService = {
  getTrace: {
    path: "/jaeger.api_v3.QueryService/GetTrace",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetTraceRequest) =>
      Buffer.from(GetTraceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTraceRequest.decode(value),
    responseSerialize: (value: SpansResponseChunk) =>
      Buffer.from(SpansResponseChunk.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SpansResponseChunk.decode(value),
  },
  findTraces: {
    path: "/jaeger.api_v3.QueryService/FindTraces",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: FindTracesRequest) =>
      Buffer.from(FindTracesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FindTracesRequest.decode(value),
    responseSerialize: (value: SpansResponseChunk) =>
      Buffer.from(SpansResponseChunk.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SpansResponseChunk.decode(value),
  },
  getServices: {
    path: "/jaeger.api_v3.QueryService/GetServices",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetServicesRequest) =>
      Buffer.from(GetServicesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetServicesRequest.decode(value),
    responseSerialize: (value: GetServicesResponse) =>
      Buffer.from(GetServicesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetServicesResponse.decode(value),
  },
  getOperations: {
    path: "/jaeger.api_v3.QueryService/GetOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetOperationsRequest) =>
      Buffer.from(GetOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetOperationsRequest.decode(value),
    responseSerialize: (value: GetOperationsResponse) =>
      Buffer.from(GetOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetOperationsResponse.decode(value),
  },
} as const;

export interface QueryServiceServer extends UntypedServiceImplementation {
  getTrace: handleServerStreamingCall<GetTraceRequest, SpansResponseChunk>;
  findTraces: handleServerStreamingCall<FindTracesRequest, SpansResponseChunk>;
  getServices: handleUnaryCall<GetServicesRequest, GetServicesResponse>;
  getOperations: handleUnaryCall<GetOperationsRequest, GetOperationsResponse>;
}

export interface QueryServiceClient extends Client {
  getTrace(
    request: GetTraceRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<SpansResponseChunk>;
  getTrace(
    request: GetTraceRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<SpansResponseChunk>;
  findTraces(
    request: FindTracesRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<SpansResponseChunk>;
  findTraces(
    request: FindTracesRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<SpansResponseChunk>;
  getServices(
    request: GetServicesRequest,
    callback: (
      error: ServiceError | null,
      response: GetServicesResponse,
    ) => void,
  ): ClientUnaryCall;
  getServices(
    request: GetServicesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetServicesResponse,
    ) => void,
  ): ClientUnaryCall;
  getServices(
    request: GetServicesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetServicesResponse,
    ) => void,
  ): ClientUnaryCall;
  getOperations(
    request: GetOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: GetOperationsResponse,
    ) => void,
  ): ClientUnaryCall;
  getOperations(
    request: GetOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetOperationsResponse,
    ) => void,
  ): ClientUnaryCall;
  getOperations(
    request: GetOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetOperationsResponse,
    ) => void,
  ): ClientUnaryCall;
}

export const QueryServiceClient = makeGenericClientConstructor(
  QueryServiceService,
  "jaeger.api_v3.QueryService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): QueryServiceClient;
  service: typeof QueryServiceService;
  serviceName: string;
};

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (globalThis.Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}
