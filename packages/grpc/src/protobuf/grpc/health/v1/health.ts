// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: grpc/health/v1/health.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientReadableStream,
  type ClientUnaryCall,
  type handleServerStreamingCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";

export const protobufPackage = "grpc.health.v1";

export interface HealthCheckRequest {
  service: string;
}

export interface HealthCheckResponse {
  status: HealthCheckResponse_ServingStatus;
}

export enum HealthCheckResponse_ServingStatus {
  UNKNOWN = 0,
  SERVING = 1,
  NOT_SERVING = 2,
  SERVICE_UNKNOWN = 3,
}

function createBaseHealthCheckRequest(): HealthCheckRequest {
  return { service: "" };
}

export const HealthCheckRequest: MessageFns<HealthCheckRequest> = {
  encode(
    message: HealthCheckRequest,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): HealthCheckRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.service = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseHealthCheckResponse(): HealthCheckResponse {
  return { status: 0 };
}

export const HealthCheckResponse: MessageFns<HealthCheckResponse> = {
  encode(
    message: HealthCheckResponse,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): HealthCheckResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

export type HealthService = typeof HealthService;
export const HealthService = {
  check: {
    path: "/grpc.health.v1.Health/Check",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: HealthCheckRequest) =>
      Buffer.from(HealthCheckRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => HealthCheckRequest.decode(value),
    responseSerialize: (value: HealthCheckResponse) =>
      Buffer.from(HealthCheckResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HealthCheckResponse.decode(value),
  },
  watch: {
    path: "/grpc.health.v1.Health/Watch",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: HealthCheckRequest) =>
      Buffer.from(HealthCheckRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => HealthCheckRequest.decode(value),
    responseSerialize: (value: HealthCheckResponse) =>
      Buffer.from(HealthCheckResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HealthCheckResponse.decode(value),
  },
} as const;

export interface HealthServer extends UntypedServiceImplementation {
  check: handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
  watch: handleServerStreamingCall<HealthCheckRequest, HealthCheckResponse>;
}

export interface HealthClient extends Client {
  check(
    request: HealthCheckRequest,
    callback: (
      error: ServiceError | null,
      response: HealthCheckResponse,
    ) => void,
  ): ClientUnaryCall;
  check(
    request: HealthCheckRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: HealthCheckResponse,
    ) => void,
  ): ClientUnaryCall;
  check(
    request: HealthCheckRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: HealthCheckResponse,
    ) => void,
  ): ClientUnaryCall;
  watch(
    request: HealthCheckRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<HealthCheckResponse>;
  watch(
    request: HealthCheckRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<HealthCheckResponse>;
}

export const HealthClient = makeGenericClientConstructor(
  HealthService,
  "grpc.health.v1.Health",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): HealthClient;
  service: typeof HealthService;
  serviceName: string;
};

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
