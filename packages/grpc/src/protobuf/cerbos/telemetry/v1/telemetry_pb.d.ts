// package: cerbos.telemetry.v1
// file: cerbos/telemetry/v1/telemetry.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class ServerLaunch extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): ServerLaunch.Source | undefined;
  setSource(value?: ServerLaunch.Source): void;

  hasFeatures(): boolean;
  clearFeatures(): void;
  getFeatures(): ServerLaunch.Features | undefined;
  setFeatures(value?: ServerLaunch.Features): void;

  hasStats(): boolean;
  clearStats(): void;
  getStats(): ServerLaunch.Stats | undefined;
  setStats(value?: ServerLaunch.Stats): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerLaunch.AsObject;
  static toObject(includeInstance: boolean, msg: ServerLaunch): ServerLaunch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerLaunch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerLaunch;
  static deserializeBinaryFromReader(message: ServerLaunch, reader: jspb.BinaryReader): ServerLaunch;
}

export namespace ServerLaunch {
  export type AsObject = {
    version: string,
    source?: ServerLaunch.Source.AsObject,
    features?: ServerLaunch.Features.AsObject,
    stats?: ServerLaunch.Stats.AsObject,
  }

  export class Cerbos extends jspb.Message {
    getVersion(): string;
    setVersion(value: string): void;

    getCommit(): string;
    setCommit(value: string): void;

    getBuildDate(): string;
    setBuildDate(value: string): void;

    getModuleVersion(): string;
    setModuleVersion(value: string): void;

    getModuleChecksum(): string;
    setModuleChecksum(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cerbos.AsObject;
    static toObject(includeInstance: boolean, msg: Cerbos): Cerbos.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cerbos, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cerbos;
    static deserializeBinaryFromReader(message: Cerbos, reader: jspb.BinaryReader): Cerbos;
  }

  export namespace Cerbos {
    export type AsObject = {
      version: string,
      commit: string,
      buildDate: string,
      moduleVersion: string,
      moduleChecksum: string,
    }
  }

  export class Source extends jspb.Message {
    hasCerbos(): boolean;
    clearCerbos(): void;
    getCerbos(): ServerLaunch.Cerbos | undefined;
    setCerbos(value?: ServerLaunch.Cerbos): void;

    getOs(): string;
    setOs(value: string): void;

    getArch(): string;
    setArch(value: string): void;

    getNumCpus(): number;
    setNumCpus(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Source.AsObject;
    static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Source;
    static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
  }

  export namespace Source {
    export type AsObject = {
      cerbos?: ServerLaunch.Cerbos.AsObject,
      os: string,
      arch: string,
      numCpus: number,
    }
  }

  export class Features extends jspb.Message {
    hasAudit(): boolean;
    clearAudit(): void;
    getAudit(): ServerLaunch.Features.Audit | undefined;
    setAudit(value?: ServerLaunch.Features.Audit): void;

    hasSchema(): boolean;
    clearSchema(): void;
    getSchema(): ServerLaunch.Features.Schema | undefined;
    setSchema(value?: ServerLaunch.Features.Schema): void;

    hasAdminApi(): boolean;
    clearAdminApi(): void;
    getAdminApi(): ServerLaunch.Features.AdminApi | undefined;
    setAdminApi(value?: ServerLaunch.Features.AdminApi): void;

    hasStorage(): boolean;
    clearStorage(): void;
    getStorage(): ServerLaunch.Features.Storage | undefined;
    setStorage(value?: ServerLaunch.Features.Storage): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Features.AsObject;
    static toObject(includeInstance: boolean, msg: Features): Features.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Features, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Features;
    static deserializeBinaryFromReader(message: Features, reader: jspb.BinaryReader): Features;
  }

  export namespace Features {
    export type AsObject = {
      audit?: ServerLaunch.Features.Audit.AsObject,
      schema?: ServerLaunch.Features.Schema.AsObject,
      adminApi?: ServerLaunch.Features.AdminApi.AsObject,
      storage?: ServerLaunch.Features.Storage.AsObject,
    }

    export class Audit extends jspb.Message {
      getEnabled(): boolean;
      setEnabled(value: boolean): void;

      getBackend(): string;
      setBackend(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Audit.AsObject;
      static toObject(includeInstance: boolean, msg: Audit): Audit.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Audit, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Audit;
      static deserializeBinaryFromReader(message: Audit, reader: jspb.BinaryReader): Audit;
    }

    export namespace Audit {
      export type AsObject = {
        enabled: boolean,
        backend: string,
      }
    }

    export class Schema extends jspb.Message {
      getEnforcement(): string;
      setEnforcement(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Schema.AsObject;
      static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Schema;
      static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
    }

    export namespace Schema {
      export type AsObject = {
        enforcement: string,
      }
    }

    export class AdminApi extends jspb.Message {
      getEnabled(): boolean;
      setEnabled(value: boolean): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AdminApi.AsObject;
      static toObject(includeInstance: boolean, msg: AdminApi): AdminApi.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AdminApi, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AdminApi;
      static deserializeBinaryFromReader(message: AdminApi, reader: jspb.BinaryReader): AdminApi;
    }

    export namespace AdminApi {
      export type AsObject = {
        enabled: boolean,
      }
    }

    export class Storage extends jspb.Message {
      getDriver(): string;
      setDriver(value: string): void;

      hasDisk(): boolean;
      clearDisk(): void;
      getDisk(): ServerLaunch.Features.Storage.Disk | undefined;
      setDisk(value?: ServerLaunch.Features.Storage.Disk): void;

      hasGit(): boolean;
      clearGit(): void;
      getGit(): ServerLaunch.Features.Storage.Git | undefined;
      setGit(value?: ServerLaunch.Features.Storage.Git): void;

      hasBlob(): boolean;
      clearBlob(): void;
      getBlob(): ServerLaunch.Features.Storage.Blob | undefined;
      setBlob(value?: ServerLaunch.Features.Storage.Blob): void;

      getStoreCase(): Storage.StoreCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Storage.AsObject;
      static toObject(includeInstance: boolean, msg: Storage): Storage.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Storage, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Storage;
      static deserializeBinaryFromReader(message: Storage, reader: jspb.BinaryReader): Storage;
    }

    export namespace Storage {
      export type AsObject = {
        driver: string,
        disk?: ServerLaunch.Features.Storage.Disk.AsObject,
        git?: ServerLaunch.Features.Storage.Git.AsObject,
        blob?: ServerLaunch.Features.Storage.Blob.AsObject,
      }

      export class Disk extends jspb.Message {
        getWatch(): boolean;
        setWatch(value: boolean): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Disk.AsObject;
        static toObject(includeInstance: boolean, msg: Disk): Disk.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Disk, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Disk;
        static deserializeBinaryFromReader(message: Disk, reader: jspb.BinaryReader): Disk;
      }

      export namespace Disk {
        export type AsObject = {
          watch: boolean,
        }
      }

      export class Git extends jspb.Message {
        getProtocol(): string;
        setProtocol(value: string): void;

        getAuth(): boolean;
        setAuth(value: boolean): void;

        hasPollInterval(): boolean;
        clearPollInterval(): void;
        getPollInterval(): google_protobuf_duration_pb.Duration | undefined;
        setPollInterval(value?: google_protobuf_duration_pb.Duration): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Git.AsObject;
        static toObject(includeInstance: boolean, msg: Git): Git.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Git, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Git;
        static deserializeBinaryFromReader(message: Git, reader: jspb.BinaryReader): Git;
      }

      export namespace Git {
        export type AsObject = {
          protocol: string,
          auth: boolean,
          pollInterval?: google_protobuf_duration_pb.Duration.AsObject,
        }
      }

      export class Blob extends jspb.Message {
        getProvider(): string;
        setProvider(value: string): void;

        hasPollInterval(): boolean;
        clearPollInterval(): void;
        getPollInterval(): google_protobuf_duration_pb.Duration | undefined;
        setPollInterval(value?: google_protobuf_duration_pb.Duration): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Blob.AsObject;
        static toObject(includeInstance: boolean, msg: Blob): Blob.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Blob, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Blob;
        static deserializeBinaryFromReader(message: Blob, reader: jspb.BinaryReader): Blob;
      }

      export namespace Blob {
        export type AsObject = {
          provider: string,
          pollInterval?: google_protobuf_duration_pb.Duration.AsObject,
        }
      }

      export enum StoreCase {
        STORE_NOT_SET = 0,
        DISK = 2,
        GIT = 3,
        BLOB = 4,
      }
    }
  }

  export class Stats extends jspb.Message {
    hasPolicy(): boolean;
    clearPolicy(): void;
    getPolicy(): ServerLaunch.Stats.Policy | undefined;
    setPolicy(value?: ServerLaunch.Stats.Policy): void;

    hasSchema(): boolean;
    clearSchema(): void;
    getSchema(): ServerLaunch.Stats.Schema | undefined;
    setSchema(value?: ServerLaunch.Stats.Schema): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stats.AsObject;
    static toObject(includeInstance: boolean, msg: Stats): Stats.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stats, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stats;
    static deserializeBinaryFromReader(message: Stats, reader: jspb.BinaryReader): Stats;
  }

  export namespace Stats {
    export type AsObject = {
      policy?: ServerLaunch.Stats.Policy.AsObject,
      schema?: ServerLaunch.Stats.Schema.AsObject,
    }

    export class Policy extends jspb.Message {
      getCountMap(): jspb.Map<string, number>;
      clearCountMap(): void;
      getAvgRuleCountMap(): jspb.Map<string, number>;
      clearAvgRuleCountMap(): void;
      getAvgConditionCountMap(): jspb.Map<string, number>;
      clearAvgConditionCountMap(): void;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Policy.AsObject;
      static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Policy;
      static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
    }

    export namespace Policy {
      export type AsObject = {
        countMap: Array<[string, number]>,
        avgRuleCountMap: Array<[string, number]>,
        avgConditionCountMap: Array<[string, number]>,
      }
    }

    export class Schema extends jspb.Message {
      getCount(): number;
      setCount(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Schema.AsObject;
      static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Schema;
      static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
    }

    export namespace Schema {
      export type AsObject = {
        count: number,
      }
    }
  }
}

export class ServerStop extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  hasUptime(): boolean;
  clearUptime(): void;
  getUptime(): google_protobuf_duration_pb.Duration | undefined;
  setUptime(value?: google_protobuf_duration_pb.Duration): void;

  getRequestsTotal(): number;
  setRequestsTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerStop.AsObject;
  static toObject(includeInstance: boolean, msg: ServerStop): ServerStop.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerStop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerStop;
  static deserializeBinaryFromReader(message: ServerStop, reader: jspb.BinaryReader): ServerStop;
}

export namespace ServerStop {
  export type AsObject = {
    version: string,
    uptime?: google_protobuf_duration_pb.Duration.AsObject,
    requestsTotal: number,
  }
}

export class Event extends jspb.Message {
  hasApiActivity(): boolean;
  clearApiActivity(): void;
  getApiActivity(): Event.ApiActivity | undefined;
  setApiActivity(value?: Event.ApiActivity): void;

  getDataCase(): Event.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    apiActivity?: Event.ApiActivity.AsObject,
  }

  export class ApiActivity extends jspb.Message {
    getVersion(): string;
    setVersion(value: string): void;

    hasUptime(): boolean;
    clearUptime(): void;
    getUptime(): google_protobuf_duration_pb.Duration | undefined;
    setUptime(value?: google_protobuf_duration_pb.Duration): void;

    getMethodCallsMap(): jspb.Map<string, number>;
    clearMethodCallsMap(): void;
    getUserAgentsMap(): jspb.Map<string, number>;
    clearUserAgentsMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiActivity.AsObject;
    static toObject(includeInstance: boolean, msg: ApiActivity): ApiActivity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiActivity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiActivity;
    static deserializeBinaryFromReader(message: ApiActivity, reader: jspb.BinaryReader): ApiActivity;
  }

  export namespace ApiActivity {
    export type AsObject = {
      version: string,
      uptime?: google_protobuf_duration_pb.Duration.AsObject,
      methodCallsMap: Array<[string, number]>,
      userAgentsMap: Array<[string, number]>,
    }
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    API_ACTIVITY = 1,
  }
}

