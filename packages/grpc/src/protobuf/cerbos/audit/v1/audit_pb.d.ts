// package: cerbos.audit.v1
// file: cerbos/audit/v1/audit.proto

import * as jspb from "google-protobuf";
import * as cerbos_engine_v1_engine_pb from "../../../cerbos/engine/v1/engine_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AccessLogEntry extends jspb.Message {
  getCallId(): string;
  setCallId(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPeer(): boolean;
  clearPeer(): void;
  getPeer(): Peer | undefined;
  setPeer(value?: Peer): void;

  getMetadataMap(): jspb.Map<string, MetaValues>;
  clearMetadataMap(): void;
  getMethod(): string;
  setMethod(value: string): void;

  getStatusCode(): number;
  setStatusCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessLogEntry.AsObject;
  static toObject(includeInstance: boolean, msg: AccessLogEntry): AccessLogEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccessLogEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessLogEntry;
  static deserializeBinaryFromReader(message: AccessLogEntry, reader: jspb.BinaryReader): AccessLogEntry;
}

export namespace AccessLogEntry {
  export type AsObject = {
    callId: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    peer?: Peer.AsObject,
    metadataMap: Array<[string, MetaValues.AsObject]>,
    method: string,
    statusCode: number,
  }
}

export class DecisionLogEntry extends jspb.Message {
  getCallId(): string;
  setCallId(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPeer(): boolean;
  clearPeer(): void;
  getPeer(): Peer | undefined;
  setPeer(value?: Peer): void;

  clearInputsList(): void;
  getInputsList(): Array<cerbos_engine_v1_engine_pb.CheckInput>;
  setInputsList(value: Array<cerbos_engine_v1_engine_pb.CheckInput>): void;
  addInputs(value?: cerbos_engine_v1_engine_pb.CheckInput, index?: number): cerbos_engine_v1_engine_pb.CheckInput;

  clearOutputsList(): void;
  getOutputsList(): Array<cerbos_engine_v1_engine_pb.CheckOutput>;
  setOutputsList(value: Array<cerbos_engine_v1_engine_pb.CheckOutput>): void;
  addOutputs(value?: cerbos_engine_v1_engine_pb.CheckOutput, index?: number): cerbos_engine_v1_engine_pb.CheckOutput;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecisionLogEntry.AsObject;
  static toObject(includeInstance: boolean, msg: DecisionLogEntry): DecisionLogEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecisionLogEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecisionLogEntry;
  static deserializeBinaryFromReader(message: DecisionLogEntry, reader: jspb.BinaryReader): DecisionLogEntry;
}

export namespace DecisionLogEntry {
  export type AsObject = {
    callId: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    peer?: Peer.AsObject,
    inputsList: Array<cerbos_engine_v1_engine_pb.CheckInput.AsObject>,
    outputsList: Array<cerbos_engine_v1_engine_pb.CheckOutput.AsObject>,
    error: string,
  }
}

export class MetaValues extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  addValues(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetaValues.AsObject;
  static toObject(includeInstance: boolean, msg: MetaValues): MetaValues.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetaValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetaValues;
  static deserializeBinaryFromReader(message: MetaValues, reader: jspb.BinaryReader): MetaValues;
}

export namespace MetaValues {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export class Peer extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getAuthInfo(): string;
  setAuthInfo(value: string): void;

  getUserAgent(): string;
  setUserAgent(value: string): void;

  getForwardedFor(): string;
  setForwardedFor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Peer.AsObject;
  static toObject(includeInstance: boolean, msg: Peer): Peer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Peer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Peer;
  static deserializeBinaryFromReader(message: Peer, reader: jspb.BinaryReader): Peer;
}

export namespace Peer {
  export type AsObject = {
    address: string,
    authInfo: string,
    userAgent: string,
    forwardedFor: string,
  }
}

