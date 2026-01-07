import { fromJson } from "@bufbuild/protobuf";
import type { Value as ValueProto } from "@bufbuild/protobuf/wkt";
import { StructSchema, timestampFromDate } from "@bufbuild/protobuf/wkt";

import type { Value } from "@cerbos/core";

import type {
  ChangeDetails as ChangeDetailsProto,
  ChangeDetails_Git,
  ChangeDetails_Internal,
  ChangeDetails_Uploader,
  FileFilter as FileFilterProto,
  FileOp as FileOpProto,
  File as FileProto,
  GetFilesRequest as GetFilesRequestProto,
  ListFilesRequest as ListFilesRequestProto,
  ModifyFilesRequest as ModifyFilesRequestProto,
  ModifyFilesRequest_Condition,
  ReplaceFilesRequest as ReplaceFilesRequestProto,
  ReplaceFilesRequest_Condition,
  StringMatch as StringMatchProto,
} from "../protobuf/cerbos/cloud/store/v1/store_pb.js";
import type { MessageInit } from "../protobuf.js";
import type {
  ChangeDetails,
  ChangeOrigin,
  ChangeOriginGit,
  ChangeOriginInternal,
  File,
  FileFilter,
  FileModificationCondition,
  FileOperation,
  GetFilesRequest,
  ListFilesRequest,
  ModifyFilesRequest,
  ReplaceFilesContents,
  ReplaceFilesRequest,
  StringMatch,
  Uploader,
} from "../types.js";
import {
  changeOriginIsChangeOriginGit,
  changeOriginIsChangeOriginInternal,
  fileOperationIsFileOperationAddOrUpdate,
  fileOperationIsFileOperationDelete,
  replaceFilesContentsIsReplaceFilesContentsUnzipped,
  replaceFilesContentsIsReplaceFilesContentsZipped,
  stringMatchIsStringMatchContains,
  stringMatchIsStringMatchEquals,
  stringMatchIsStringMatchIn,
} from "../types.js";

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

function changeOriginInternalToProto({
  source,
  metadata,
}: ChangeOriginInternal): MessageInit<ChangeDetails_Internal> {
  return {
    source: source ?? "",
    metadata: mapToProto(metadata ?? {}),
  };
}

function fileFilterToProto({ path }: FileFilter): MessageInit<FileFilterProto> {
  return {
    path: path && stringMatchToProto(path),
  };
}

function fileOperationToProto(
  operation: FileOperation,
): MessageInit<FileOpProto> {
  if (fileOperationIsFileOperationAddOrUpdate(operation)) {
    return { op: { case: "addOrUpdate", value: operation.addOrUpdate } };
  }

  if (fileOperationIsFileOperationDelete(operation)) {
    return { op: { case: "delete", value: operation.delete } };
  }

  throw new Error("Unknown FileOperation type");
}

function fileToProto({ path, contents }: File): MessageInit<FileProto> {
  return { path, contents };
}

export function getFilesRequestToProto({
  storeId,
  files,
}: GetFilesRequest): MessageInit<GetFilesRequestProto> {
  return {
    storeId,
    files,
  };
}

export function listFilesRequestToProto({
  storeId,
  filter,
}: ListFilesRequest): MessageInit<ListFilesRequestProto> {
  return {
    storeId,
    filter: filter && fileFilterToProto(filter),
  };
}

function mapToProto(
  map: Record<string, Value>,
): Record<string, MessageInit<ValueProto>> {
  return fromJson(StructSchema, map).fields;
}

function modifyFilesConditionToProto({
  storeVersionMustEqual,
}: FileModificationCondition): MessageInit<ModifyFilesRequest_Condition> {
  return {
    storeVersionMustEqual,
  };
}

export function modifyFilesRequestToProto({
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

function replaceFilesConditionToProto({
  storeVersionMustEqual,
}: FileModificationCondition): MessageInit<ReplaceFilesRequest_Condition> {
  return {
    storeVersionMustEqual,
  };
}

function replaceFilesContentsToProto(
  contents: ReplaceFilesContents,
): MessageInit<ReplaceFilesRequestProto>["contents"] {
  if (replaceFilesContentsIsReplaceFilesContentsUnzipped(contents)) {
    return { case: "files", value: { files: contents.files.map(fileToProto) } };
  }

  if (replaceFilesContentsIsReplaceFilesContentsZipped(contents)) {
    return { case: "zippedContents", value: contents.zipped };
  }

  throw new Error("Unknown ReplaceFilesContents type");
}

export function replaceFilesRequestToProto({
  storeId,
  contents,
  condition,
  changeDetails,
}: ReplaceFilesRequest): MessageInit<ReplaceFilesRequestProto> {
  return {
    storeId,
    contents: replaceFilesContentsToProto(contents),
    condition: condition && replaceFilesConditionToProto(condition),
    changeDetails: changeDetails && changeDetailsToProto(changeDetails),
  };
}

function stringMatchToProto(match: StringMatch): MessageInit<StringMatchProto> {
  if (stringMatchIsStringMatchEquals(match)) {
    return { match: { case: "equals", value: match.equals } };
  }

  if (stringMatchIsStringMatchContains(match)) {
    return { match: { case: "contains", value: match.contains } };
  }

  if (stringMatchIsStringMatchIn(match)) {
    return { match: { case: "in", value: { values: match.in } } };
  }

  throw new Error("Unknown StringMatch type");
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
