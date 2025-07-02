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

  /**
   * Create a client for interacting with policy stores in Cerbos Hub.
   *
   * @param options - settings for the client.
   *
   * @example
   * ```typescript
   * const stores = new StoresClient({ credentials: credentialsFromEnv() });
   * ```
   */
  public constructor(options: ClientOptions) {
    this.client = createClient(CerbosStoreService, options);
  }

  /**
   * List file paths in a policy store.
   *
   * @example
   * ```typescript
   * const { storeVersion, files } = await stores.listFiles({ storeId: "MWPKEMFX3CK1" });
   * ```
   */
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

  /**
   * Get file contents from a policy store.
   *
   * @example
   * ```typescript
   * const { storeVersion, files } = await stores.getFiles({
   *   storeId: "MWPKEMFX3CK1",
   *   files: ["policy.yaml"],
   * });
   * ```
   */
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

  /**
   * Modify files in a policy store.
   *
   * @remarks
   * This is a "patch" operation; files that aren't included in the request won't be modified.
   *
   * @example
   * ```typescript
   * const { newStoreVersion } = await stores.modifyFiles({
   *   storeId: "MWPKEMFX3CK1",
   *   operations: [
   *     {
   *       addOrUpdate: {
   *         path: "policy.yaml",
   *         contents: await readFile("path/to/policy.yaml"),
   *       },
   *     },
   *   ],
   * });
   * ```
   */
  public async modifyFiles(
    request: ModifyFilesRequest,
    options?: RequestOptions,
  ): Promise<ModifyFilesResponse> {
    try {
      return modifyFilesResponseFromProto(
        await this.client.modifyFiles(
          modifyFilesRequestToProto(request),
          callOptions(options),
        ),
      );
    } catch (error) {
      if (error instanceof OperationDiscarded && request.allowUnchanged) {
        return {
          newStoreVersion: error.currentStoreVersion,
          changed: false,
        };
      }

      throw error;
    }
  }

  /**
   * Replace files in a policy store.
   *
   * @remarks
   * This is a "put" operation; files that aren't included in the request will be removed from the store.
   *
   * @example
   * Upload individual files:
   *
   * ```typescript
   * const { newStoreVersion } = await stores.replaceFiles({
   *   storeId: "MWPKEMFX3CK1",
   *   contents: {
   *     files: [
   *       {
   *         path: "policy.yaml",
   *         contents: await readFile("path/to/policy.yaml"),
   *       },
   *     ],
   *   },
   * });
   * ```
   *
   * @example
   * Upload zipped files:
   *
   * ```typescript
   * const { newStoreVersion } = await stores.replaceFiles({
   *   storeId: "MWPKEMFX3CK1",
   *   contents: {
   *     zipped: await readFile("path/to/policies.zip"),
   *   },
   * });
   * ```
   */
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
