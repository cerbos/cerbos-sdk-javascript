import { _translateEnum, _unexpected } from "@cerbos/core";

import type {
  FileErrorValid,
  FileValid,
  GetFilesResponseValid,
  ListFilesResponseValid,
  ModifyFilesResponseValid,
  ReplaceFilesResponseValid,
} from "../protobuf/cerbos/cloud/store/v1/store_pb";
import { FileError_Cause } from "../protobuf/cerbos/cloud/store/v1/store_pb";
import type {
  File,
  FileError,
  GetFilesResponse,
  ListFilesResponse,
  ModifyFilesResponse,
  ReplaceFilesResponse,
} from "../types";
import { FileErrorCause } from "../types";

function fileFromProto({ path, contents }: FileValid): File {
  return {
    path,
    contents,
  };
}

export function fileErrorFromProto({
  file,
  cause,
  details,
}: FileErrorValid): FileError {
  return {
    file,
    cause: fileErrorCauseFromProto(cause),
    details,
  };
}

function fileErrorCauseFromProto(cause: FileError_Cause): FileErrorCause {
  return _translateEnum("FileError.Cause", FileError_Cause, cause, {
    [FileError_Cause.UNSPECIFIED]: _unexpected,
    [FileError_Cause.INVALID_FILE_PATH]: FileErrorCause.INVALID_FILE_PATH,
    [FileError_Cause.UNSUPPORTED_FILE_EXTENSION]:
      FileErrorCause.UNSUPPORTED_FILE_EXTENSION,
    [FileError_Cause.INVALID_FILE_CONTENTS]:
      FileErrorCause.INVALID_FILE_CONTENTS,
    [FileError_Cause.DUPLICATE_FILE_PATH]: FileErrorCause.DUPLICATE_FILE_PATH,
    [FileError_Cause.FILE_TOO_LARGE]: FileErrorCause.FILE_TOO_LARGE,
  });
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
    changed: true,
  };
}

export function replaceFilesResponseFromProto({
  newStoreVersion,
  ignoredFiles,
}: ReplaceFilesResponseValid): ReplaceFilesResponse {
  return {
    newStoreVersion,
    ignoredFiles,
    changed: true,
  };
}
