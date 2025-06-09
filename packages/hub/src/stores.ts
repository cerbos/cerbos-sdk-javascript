import { fromJson } from "@bufbuild/protobuf";
import type { Value as ValueProto } from "@bufbuild/protobuf/wkt";
import { StructSchema, timestampFromDate } from "@bufbuild/protobuf/wkt";

import type { Value } from "@cerbos/core";

import type { Client, ClientOptions } from "./client";
import { createClient } from "./client";
import type { MessageInit } from "./protobuf";
import type {
  ChangeDetails as ChangeDetailsProto,
  ChangeDetails_Git,
  ChangeDetails_Internal,
  ChangeDetails_Uploader,
  FileFilter as FileFilterProto,
  FileOp as FileOpProto,
  FileValid,
  GetFilesRequest as GetFilesRequestProto,
  GetFilesResponseValid,
  ListFilesRequest as ListFilesRequestProto,
  ListFilesResponseValid,
  ModifyFilesRequest as ModifyFilesRequestProto,
  ModifyFilesRequest_Condition,
  ModifyFilesResponseValid,
  ReplaceFilesRequest_Condition,
  StringMatch as StringMatchProto,
} from "./protobuf/cerbos/cloud/store/v1/store_pb";
import { CerbosStoreService } from "./protobuf/cerbos/cloud/store/v1/store_pb";

/**
 * A client for interacting with policy stores in Cerbos Hub.
 *
 * @public
 */
export class StoresClient {
  private readonly client: Client<typeof CerbosStoreService>;

  public constructor(options: ClientOptions) {
    this.client = createClient(CerbosStoreService, options);
  }

  public async listFiles(
    request: ListFilesRequest,
  ): Promise<ListFilesResponse> {
    return listFilesResponseFromProto(
      await this.client.listFiles(listFilesRequestToProto(request)),
    );
  }

  public async getFiles(request: GetFilesRequest): Promise<GetFilesResponse> {
    return getFilesResponseFromProto(
      await this.client.getFiles(getFilesRequestToProto(request)),
    );
  }

  public async modifyFiles(
    request: ModifyFilesRequest,
  ): Promise<ModifyFilesResponse> {
    return modifyFilesResponseFromProto(
      await this.client.modifyFiles(modifyFilesRequestToProto(request)),
    );
  }
}

export interface ListFilesRequest {
  storeId: string;
  filter?: FileFilter | undefined;
}

function listFilesRequestToProto({
  storeId,
  filter,
}: ListFilesRequest): MessageInit<ListFilesRequestProto> {
  return {
    storeId,
    filter: filter && fileFilterToProto(filter),
  };
}

export interface ListFilesResponse {
  storeVersion: bigint;
  files: string[];
}

function listFilesResponseFromProto({
  storeVersion,
  files,
}: ListFilesResponseValid): ListFilesResponse {
  return {
    storeVersion,
    files,
  };
}

export interface GetFilesRequest {
  storeId: string;
  files: string[];
}

function getFilesRequestToProto({
  storeId,
  files,
}: GetFilesRequest): MessageInit<GetFilesRequestProto> {
  return {
    storeId,
    files,
  };
}

export interface GetFilesResponse {
  storeVersion: bigint;
  files: File[];
}

function getFilesResponseFromProto({
  storeVersion,
  files,
}: GetFilesResponseValid): GetFilesResponse {
  return {
    storeVersion,
    files: files.map(fileFromProto),
  };
}

export interface ModifyFilesRequest {
  storeId: string;
  operations: FileOperation[];
  condition?: FileModificationCondition | undefined;
  changeDetails?: ChangeDetails | undefined;
}

function modifyFilesRequestToProto({
  storeId,
  operations,
  condition,
  changeDetails,
}: ModifyFilesRequest): MessageInit<ModifyFilesRequestProto> {
  return {
    storeId,
    operations: operations.map(fileOperationToProto),
    condition: condition && modifyFilesConditionToProto(condition),
    changeDetails: changeDetails && changeDetailsToProto(changeDetails),
  };
}

export interface ModifyFilesResponse {
  newStoreVersion: bigint;
}

function modifyFilesResponseFromProto({
  newStoreVersion,
}: ModifyFilesResponseValid): ModifyFilesResponse {
  return {
    newStoreVersion,
  };
}

export interface FileFilter {
  path?: StringMatch | undefined;
}

function fileFilterToProto({ path }: FileFilter): MessageInit<FileFilterProto> {
  return {
    path: path && stringMatchToProto(path),
  };
}

export type StringMatch = StringMatchEquals | StringMatchLike | StringMatchIn;

function stringMatchToProto(match: StringMatch): MessageInit<StringMatchProto> {
  if (stringMatchIsStringMatchEquals(match)) {
    return { match: { case: "equals", value: match.equals } };
  }

  if (stringMatchIsStringMatchLike(match)) {
    return { match: { case: "like", value: match.like } };
  }

  if (stringMatchIsStringMatchIn(match)) {
    return { match: { case: "in", value: { values: match.in } } };
  }

  throw new Error("Unknown StringMatch type");
}

export interface StringMatchEquals {
  equals: string;
}

export function stringMatchIsStringMatchEquals(
  match: StringMatch,
): match is StringMatchEquals {
  return "equals" in match;
}

export interface StringMatchLike {
  like: string;
}

export function stringMatchIsStringMatchLike(
  match: StringMatch,
): match is StringMatchLike {
  return "like" in match;
}

export interface StringMatchIn {
  in: string[];
}

export function stringMatchIsStringMatchIn(
  match: StringMatch,
): match is StringMatchIn {
  return "in" in match;
}

export interface File {
  path: string;
  contents: Uint8Array;
}

function fileFromProto({ path, contents }: FileValid): File {
  return {
    path,
    contents,
  };
}

export type FileOperation = FileOperationAddOrUpdate | FileOperationDelete;

function fileOperationToProto(
  operation: FileOperation,
): MessageInit<FileOpProto> {
  if (fileOperationIsFileOperationAddOrUpdate(operation)) {
    return { op: { case: "addOrUpdate", value: operation.addOrUpdate } };
  }

  if (fileOperationIsFileOperationDelete(operation)) {
    return { op: { case: "delete", value: operation.delete } };
  }

  return operation;
}

export interface FileOperationAddOrUpdate {
  addOrUpdate: File;
}

export function fileOperationIsFileOperationAddOrUpdate(
  operation: FileOperation,
): operation is FileOperationAddOrUpdate {
  return "addOrUpdate" in operation;
}

export interface FileOperationDelete {
  delete: string;
}

export function fileOperationIsFileOperationDelete(
  operation: FileOperation,
): operation is FileOperationDelete {
  return "delete" in operation;
}

export interface FileModificationCondition {
  storeVersionMustEqual: bigint;
}

function modifyFilesConditionToProto({
  storeVersionMustEqual,
}: FileModificationCondition): MessageInit<ModifyFilesRequest_Condition> {
  return {
    storeVersionMustEqual,
  };
}

function replaceFilesConditionToProto({
  storeVersionMustEqual,
}: FileModificationCondition): MessageInit<ReplaceFilesRequest_Condition> {
  return {
    storeVersionMustEqual,
  };
}

export interface ChangeDetails {
  description?: string | undefined;
  origin?: ChangeOrigin | undefined;
  uploader?: Uploader | undefined;
}

function changeDetailsToProto({
  description,
  origin,
  uploader,
}: ChangeDetails): MessageInit<ChangeDetailsProto> {
  return {
    description: description ?? "",
    origin: changeOriginToProto(origin),
    uploader: uploader && uploaderToProto(uploader),
  };
}

export type ChangeOrigin = ChangeOriginGit | ChangeOriginInternal;

function changeOriginToProto(
  origin: ChangeOrigin | undefined,
): MessageInit<ChangeDetailsProto>["origin"] {
  if (!origin) {
    return { case: undefined, value: undefined };
  }

  if (changeOriginIsChangeOriginGit(origin)) {
    return { case: "git", value: changeOriginGitToProto(origin) };
  }

  if (changeOriginIsChangeOriginInternal(origin)) {
    return { case: "internal", value: changeOriginInternalToProto(origin) };
  }

  throw new Error("Unknown ChangeOrigin type");
}

export interface ChangeOriginGit {
  from: "git";
  repo?: string | undefined;
  ref?: string | undefined;
  hash?: string | undefined;
  message?: string | undefined;
  committer?: string | undefined;
  commitDate?: Date | undefined;
  author?: string | undefined;
  authorDate?: Date | undefined;
}

export function changeOriginIsChangeOriginGit(
  origin: ChangeOrigin,
): origin is ChangeOriginGit {
  return origin.from === "git";
}

function changeOriginGitToProto({
  repo,
  ref,
  hash,
  message,
  committer,
  commitDate,
  author,
  authorDate,
}: ChangeOriginGit): MessageInit<ChangeDetails_Git> {
  return {
    repo: repo ?? "",
    ref: ref ?? "",
    hash: hash ?? "",
    message: message ?? "",
    committer: committer ?? "",
    commitDate: commitDate && timestampFromDate(commitDate),
    author: author ?? "",
    authorDate: authorDate && timestampFromDate(authorDate),
  };
}

export interface ChangeOriginInternal {
  from: "internal";
  source?: string | undefined;
  metadata?: Record<string, Value> | undefined;
}

export function changeOriginIsChangeOriginInternal(
  origin: ChangeOrigin,
): origin is ChangeOriginInternal {
  return origin.from === "internal";
}

function changeOriginInternalToProto({
  source,
  metadata,
}: ChangeOriginInternal): MessageInit<ChangeDetails_Internal> {
  return {
    source: source ?? "",
    metadata: mapToProto(metadata ?? {}),
  };
}

export interface Uploader {
  name?: string | undefined;
  metadata?: Record<string, Value> | undefined;
}

function uploaderToProto({
  name,
  metadata,
}: Uploader): MessageInit<ChangeDetails_Uploader> {
  return {
    name: name ?? "",
    metadata: mapToProto(metadata ?? {}),
  };
}

function mapToProto(
  map: Record<string, Value>,
): Record<string, MessageInit<ValueProto>> {
  return fromJson(StructSchema, map).fields;
}
