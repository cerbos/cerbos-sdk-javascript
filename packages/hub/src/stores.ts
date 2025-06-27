import type { RequestOptions } from "@cerbos/core";

import type { Client, ClientOptions } from "./client";
import { callOptions, createClient } from "./client";
import {
  getFilesResponseFromProto,
  listFilesResponseFromProto,
  modifyFilesResponseFromProto,
  replaceFilesResponseFromProto,
} from "./convert/fromProtobuf";
import {
  getFilesRequestToProto,
  listFilesRequestToProto,
  modifyFilesRequestToProto,
  replaceFilesRequestToProto,
} from "./convert/toProtobuf";
import { OperationDiscarded } from "./errors/external";
import { CerbosStoreService } from "./protobuf/cerbos/cloud/store/v1/store_pb";
import type {
  GetFilesRequest,
  GetFilesResponse,
  ListFilesRequest,
  ListFilesResponse,
  ModifyFilesRequest,
  ModifyFilesResponse,
  ReplaceFilesRequest,
  ReplaceFilesResponse,
} from "./types";

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
    options?: RequestOptions,
  ): Promise<ListFilesResponse> {
    return listFilesResponseFromProto(
      await this.client.listFiles(
        listFilesRequestToProto(request),
        callOptions(options),
      ),
    );
  }

  public async getFiles(
    request: GetFilesRequest,
    options?: RequestOptions,
  ): Promise<GetFilesResponse> {
    return getFilesResponseFromProto(
      await this.client.getFiles(
        getFilesRequestToProto(request),
        callOptions(options),
      ),
    );
  }

  public async modifyFiles(
    request: ModifyFilesRequest,
    options?: RequestOptions,
  ): Promise<ModifyFilesResponse> {
    return modifyFilesResponseFromProto(
      await this.client.modifyFiles(
        modifyFilesRequestToProto(request),
        callOptions(options),
      ),
    );
  }

  public async replaceFiles(
    request: ReplaceFilesRequest,
    options?: RequestOptions,
  ): Promise<ReplaceFilesResponse> {
    try {
      return replaceFilesResponseFromProto(
        await this.client.replaceFiles(
          replaceFilesRequestToProto(request),
          callOptions(options),
        ),
      );
    } catch (error) {
      if (error instanceof OperationDiscarded && request.allowUnchanged) {
        return {
          newStoreVersion: error.currentStoreVersion,
          ignoredFiles: error.ignoredFiles,
          changed: false,
        };
      }

      throw error;
    }
  }
}
