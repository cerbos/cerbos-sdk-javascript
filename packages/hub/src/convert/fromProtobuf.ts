import type {
  FileValid,
  GetFilesResponseValid,
  ListFilesResponseValid,
  ModifyFilesResponseValid,
  ReplaceFilesResponseValid,
} from "../protobuf/cerbos/cloud/store/v1/store_pb";
import type {
  File,
  GetFilesResponse,
  ListFilesResponse,
  ModifyFilesResponse,
  ReplaceFilesResponse,
} from "../types";

function fileFromProto({ path, contents }: FileValid): File {
  return {
    path,
    contents,
  };
}

export function getFilesResponseFromProto({
  storeVersion,
  files,
}: GetFilesResponseValid): GetFilesResponse {
  return {
    storeVersion,
    files: files.map(fileFromProto),
  };
}

export function listFilesResponseFromProto({
  storeVersion,
  files,
}: ListFilesResponseValid): ListFilesResponse {
  return {
    storeVersion,
    files,
  };
}

export function modifyFilesResponseFromProto({
  newStoreVersion,
}: ModifyFilesResponseValid): ModifyFilesResponse {
  return {
    newStoreVersion,
  };
}

export function replaceFilesResponseFromProto({
  newStoreVersion,
  ignoredFiles,
}: ReplaceFilesResponseValid): ReplaceFilesResponse {
  return {
    newStoreVersion,
    ignoredFiles,
  };
}
