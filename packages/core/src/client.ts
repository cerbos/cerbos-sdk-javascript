import {
  checkResourcesResponseFromProtobuf,
  deleteSchemasResponseFromProtobuf,
  disablePoliciesResponseFromProtobuf,
  enablePoliciesResponseFromProtobuf,
  getPoliciesResponseFromProtobuf,
  getSchemasResponseFromProtobuf,
  listPoliciesResponseFromProtobuf,
  listSchemasResponseFromProtobuf,
  planResourcesResponseFromProtobuf,
} from "./convert/fromProtobuf";
import {
  addOrUpdatePoliciesRequestToProtobuf,
  addOrUpdateSchemasRequestToProtobuf,
  checkResourcesRequestToProtobuf,
  deleteSchemasRequestToProtobuf,
  disablePoliciesRequestToProtobuf,
  enablePoliciesRequestToProtobuf,
  getPoliciesRequestToProtobuf,
  getSchemasRequestToProtobuf,
  listPoliciesRequestToProtobuf,
  planResourcesRequestToProtobuf,
} from "./convert/toProtobuf";
import { ValidationFailed } from "./errors";
import type { _RPC, _Request, _Response, _Service } from "./rpcs";
import type {
  AddOrUpdatePoliciesRequest,
  AddOrUpdateSchemasRequest,
  CheckResourceRequest,
  CheckResourcesRequest,
  CheckResourcesResponse,
  CheckResourcesResult,
  DeleteSchemasRequest,
  DeleteSchemasResponse,
  DisablePoliciesRequest,
  DisablePoliciesResponse,
  EnablePoliciesRequest,
  EnablePoliciesResponse,
  GetPoliciesRequest,
  GetPoliciesResponse,
  GetSchemasRequest,
  GetSchemasResponse,
  IsAllowedRequest,
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListSchemasResponse,
  PlanResourcesRequest,
  PlanResourcesResponse,
  Policy,
  ReloadStoreRequest,
  Schema,
  ServerInfo,
  ValidationError,
  ValidationFailedCallback,
} from "./types/external";

/** @internal */
export type _Transport = <Service extends _Service, RPC extends _RPC<Service>>(
  service: Service,
  rpc: RPC,
  request: _Request<Service, RPC>,
  headers: Headers,
) => Promise<_Response<Service, RPC>>;

/** @internal */
export type _Instrumenter = (transport: _Transport) => _Transport;

const instrumenters = new Set<_Instrumenter>();

/** @internal */
export function _addInstrumenter(instrumenter: _Instrumenter): void {
  instrumenters.add(instrumenter);
}

/** @internal */
export function _removeInstrumenter(instrumenter: _Instrumenter): void {
  instrumenters.delete(instrumenter);
}

/**
 * HTTP headers from which to construct a {@link https://developer.mozilla.org/en-US/docs/Web/API/Headers | Headers} object.
 *
 * @public
 */
export type HeadersInit = [string, string][] | Record<string, string> | Headers;

/**
 * Options for creating a new {@link Client}.
 *
 * @public
 */
export interface Options {
  /**
   * Credentials for the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API}.
   *
   * @defaultValue `undefined`
   */
  adminCredentials?: AdminCredentials | undefined;

  /**
   * Headers to add to every request to the policy decision point.
   *
   * @remarks
   * Headers can be included in the policy decision point's audit logs by setting the `includeMetadataKeys` or `excludeMetadataKeys` fields in the
   * `audit` {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit | configuration block}.
   *
   * The `User-Agent` header is set using {@link Options.userAgent}.
   *
   * @defaultValue `undefined`
   */
  headers?:
    | HeadersInit
    | (() => HeadersInit | Promise<HeadersInit>)
    | undefined;

  /**
   * Action to take when input fails schema validation.
   *
   * @remarks
   * Possible values are
   *
   * - `"throw"`, to throw a {@link ValidationFailed} error;
   *
   * - a {@link ValidationFailedCallback} function; or
   *
   * - `undefined`, to return the validation errors in the response.
   *
   * @defaultValue `undefined`
   */
  onValidationError?: "throw" | ValidationFailedCallback | undefined;

  /**
   * Identifier of the playground instance to use when prototyping against the hosted demo policy decision point.
   *
   * @defaultValue `undefined`
   */
  playgroundInstance?: string | undefined;

  /**
   * Custom user agent to prepend to the built-in value.
   *
   * @defaultValue `undefined`
   */
  userAgent?: string | undefined;
}

/**
 * Credentials for the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API}.
 *
 * @public
 */
export interface AdminCredentials {
  /**
   * Username for authenticating to the admin API.
   */
  username: string;

  /**
   * Password for authenticating to the admin API.
   */
  password: string;
}

/**
 * Options for sending a request to the policy decision point.
 *
 * @public
 */
export interface RequestOptions {
  /**
   * Headers to add to the request.
   *
   * @remarks
   * Headers can be included in the policy decision point's audit logs by setting the `includeMetadataKeys` or `excludeMetadataKeys` fields
   * in the `audit` {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit | configuration block}.
   *
   * The `User-Agent` header is set using {@link Options.userAgent}.
   *
   * @defaultValue `undefined`
   */
  headers?: HeadersInit | undefined;
}

/**
 * Base implementation of a client for interacting with the Cerbos policy decision point server.
 *
 * @public
 */
export abstract class Client {
  /** @internal */
  protected constructor(
    private readonly transport: _Transport,
    private readonly options: Options,
  ) {
    for (const instrumenter of instrumenters) {
      this.transport = instrumenter(this.transport);
    }
  }

  /**
   * Add policies, or update existing policies.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials},
   *
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
   *
   * @example
   * Create a policy in code:
   *
   * ```typescript
   * await cerbos.addOrUpdatePolicies({
   *   policies: [{
   *     resourcePolicy: {
   *       resource: "document",
   *       version: "1",
   *       rules: [{
   *         actions: ["*"],
   *         effect: Effect.ALLOW,
   *         roles: ["ADMIN"],
   *       }],
   *     },
   *   }],
   * });
   * ```
   *
   * @example
   * Load a policy from a YAML or JSON file with {@link @cerbos/files#readPolicy}:
   *
   * ```typescript
   * import { readPolicy } from "@cerbos/files";
   *
   * await cerbos.addOrUpdatePolicies({
   *   policies: [await readPolicy("path/to/policy.yaml")],
   * });
   * ```
   *
   * @example
   * Load policies and schemas from a directory with {@link @cerbos/files#readDirectory}:
   *
   * ```typescript
   * import { readDirectory } from "@cerbos/files";
   *
   * const { policies, schemas } = await readDirectory("path/to/directory");
   *
   * await cerbos.addOrUpdateSchemas({ schemas });
   * await cerbos.addOrUpdatePolicies({ policies });
   * ```
   */
  public async addOrUpdatePolicies(
    request: AddOrUpdatePoliciesRequest,
    options?: RequestOptions,
  ): Promise<void> {
    await this.admin(
      "addOrUpdatePolicy",
      addOrUpdatePoliciesRequestToProtobuf(request),
      options,
    );
  }

  /**
   * Add schemas to be used for validating principal or resource attributes, or update existing schemas.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials},
   *
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
   *
   * @example
   * Create a schema in code:
   *
   * ```typescript
   *
   * await cerbos.addOrUpdateSchemas({
   *   schemas: [{
   *     id: "document.json",
   *     definition: {
   *       type: "object",
   *       properties: {
   *         owner: { type: "string" }
   *       }
   *     },
   *   }],
   * });
   * ```
   *
   * @example
   * Load a schema from a JSON file with {@link @cerbos/files#readSchema}:
   *
   * ```typescript
   * import { readSchema } from "@cerbos/files";
   *
   * await cerbos.addOrUpdateSchemas({
   *   schemas: [await readSchema("_schemas/path/to/schema.json")],
   * });
   * ```
   *
   * @example
   * Load policies and schemas from a directory with {@link @cerbos/files#readDirectory}:
   *
   * ```typescript
   * import { readDirectory } from "@cerbos/files";
   *
   * const { policies, schemas } = await readDirectory("path/to/directory");
   *
   * await cerbos.addOrUpdateSchemas({ schemas });
   * await cerbos.addOrUpdatePolicies({ policies });
   * ```
   */
  public async addOrUpdateSchemas(
    request: AddOrUpdateSchemasRequest,
    options?: RequestOptions,
  ): Promise<void> {
    await this.admin(
      "addOrUpdateSchema",
      addOrUpdateSchemasRequestToProtobuf(request),
      options,
    );
  }

  /**
   * Check a principal's permissions on a resource.
   *
   * @example
   * ```typescript
   * const decision = await cerbos.checkResource({
   *   principal: {
   *     id: "user@example.com",
   *     roles: ["USER"],
   *     attr: { tier: "PREMIUM" },
   *   },
   *   resource: {
   *     kind: "document",
   *     id: "1",
   *     attr: { owner: "user@example.com" },
   *   },
   *   actions: ["view", "edit"],
   * });
   *
   * decision.isAllowed("view"); // => true
   * ```
   */
  public async checkResource(
    request: CheckResourceRequest,
    options?: RequestOptions,
  ): Promise<CheckResourcesResult> {
    const { resource, actions, ...rest } = request;

    const response = await this.checkResources(
      { resources: [{ resource, actions }], ...rest },
      options,
    );

    const result = response.findResult(resource);
    if (!result) {
      throw new Error("No decision returned for resource");
    }

    return result;
  }

  /**
   * Check a principal's permissions on a set of resources.
   *
   * @example
   * ```typescript
   * const decision = await cerbos.checkResources({
   *   principal: {
   *     id: "user@example.com",
   *     roles: ["USER"],
   *     attr: { tier: "PREMIUM" },
   *   },
   *   resources: [
   *     {
   *       resource: {
   *         kind: "document",
   *         id: "1",
   *         attr: { owner: "user@example.com" },
   *       },
   *       actions: ["view", "edit"],
   *     },
   *     {
   *       resource: {
   *         kind: "image",
   *         id: "1",
   *         attr: { owner: "user@example.com" },
   *       },
   *       actions: ["delete"],
   *     },
   *   ],
   * });
   *
   * decision.isAllowed({
   *   resource: { kind: "document", id: "1" },
   *   action: "view",
   * }); // => true
   * ```
   */
  public async checkResources(
    request: CheckResourcesRequest,
    options?: RequestOptions,
  ): Promise<CheckResourcesResponse> {
    const response = checkResourcesResponseFromProtobuf(
      await this.cerbos(
        "checkResources",
        checkResourcesRequestToProtobuf(request),
        options,
      ),
    );

    this.handleValidationErrors(response);

    return response;
  }

  /**
   * Delete a schema.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials},
   *
   * - the Cerbos policy decision point (PDP) server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
   *
   * The way this method handles failure depends on the version of the connected PDP server.
   * When the server is running Cerbos v0.25 or later, it returns `true` if the schema was deleted and `false` if the schema was not found.
   * With earlier versions of Cerbos, it throws an error if the schema was not found, and returns successfully if the schema was deleted; the returned value should be ignored.
   *
   * @example
   * ```typescript
   * const deleted = await cerbos.deleteSchema("document.json");
   * ```
   */
  public async deleteSchema(
    id: string,
    options?: RequestOptions,
  ): Promise<boolean> {
    const { deletedSchemas } = await this.deleteSchemas({ ids: [id] }, options);
    return deletedSchemas === 1;
  }

  /**
   * Delete multiple schemas.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials},
   *
   * - the Cerbos policy decision point (PDP) server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
   *
   * The way this method handles failure depends on the version of the connected PDP server.
   * When the server is running Cerbos v0.25 or later, it returns a {@link DeleteSchemasResponse} that includes the number of schemas that were deleted.
   * With earlier versions of Cerbos, it throws an error if no schemas were found, and returns successfully if at least one schema was deleted; the returned value should be ignored.
   *
   * @example
   * ```typescript
   * const result = await cerbos.deleteSchemas({
   *   ids: ["document.json", "image.json"],
   * });
   * ```
   */
  public async deleteSchemas(
    request: DeleteSchemasRequest,
    options?: RequestOptions,
  ): Promise<DeleteSchemasResponse> {
    return deleteSchemasResponseFromProtobuf(
      await this.admin(
        "deleteSchema",
        deleteSchemasRequestToProtobuf(request),
        options,
      ),
    );
  }

  /**
   * Disable multiple policies.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials},
   *
   * - the Cerbos policy decision point server to be at least v0.25 and configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
   *
   * @example
   * ```typescript
   * const result = await cerbos.disablePolicies({
   *   ids: ["resource.document.v1", "resource.image.v1"],
   * });
   * ```
   */
  public async disablePolicies(
    request: DisablePoliciesRequest,
    options?: RequestOptions,
  ): Promise<DisablePoliciesResponse> {
    return disablePoliciesResponseFromProtobuf(
      await this.admin(
        "disablePolicy",
        disablePoliciesRequestToProtobuf(request),
        options,
      ),
    );
  }

  /**
   * Disable a policy.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials},
   *
   * - the Cerbos policy decision point server to be at least v0.25 and configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
   *
   * @example
   * ```typescript
   * const disabled = await cerbos.disablePolicy("resource.document.v1");
   * ```
   */
  public async disablePolicy(
    id: string,
    options?: RequestOptions,
  ): Promise<boolean> {
    const { disabledPolicies } = await this.disablePolicies(
      { ids: [id] },
      options,
    );

    return disabledPolicies === 1;
  }

  /**
   * Enable multiple policies.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials},
   *
   * - the Cerbos policy decision point server to be at least v0.26 and configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
   *
   * @example
   * ```typescript
   * const result = await cerbos.enablePolicies({
   *   ids: ["resource.document.v1", "resource.image.v1"],
   * });
   * ```
   */
  public async enablePolicies(
    request: EnablePoliciesRequest,
    options?: RequestOptions,
  ): Promise<EnablePoliciesResponse> {
    return enablePoliciesResponseFromProtobuf(
      await this.admin(
        "enablePolicy",
        enablePoliciesRequestToProtobuf(request),
        options,
      ),
    );
  }

  /**
   * Enable a policy.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials},
   *
   * - the Cerbos policy decision point server to be at least v0.26 and configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
   *
   * @example
   * ```typescript
   * const enabled = await cerbos.enablePolicy("resource.document.v1");
   * ```
   */
  public async enablePolicy(
    id: string,
    options?: RequestOptions,
  ): Promise<boolean> {
    const { enabledPolicies } = await this.enablePolicies(
      { ids: [id] },
      options,
    );

    return enabledPolicies === 1;
  }

  /**
   * Fetch multiple policies by ID.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials}, and
   *
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled.
   *
   * @example
   * ```typescript
   * const policies = await cerbos.getPolicies({
   *   ids: ["resource.document.v1", "resource.image.v1"],
   * });
   * ```
   */
  public async getPolicies(
    request: GetPoliciesRequest,
    options?: RequestOptions,
  ): Promise<GetPoliciesResponse> {
    return getPoliciesResponseFromProtobuf(
      await this.admin(
        "getPolicy",
        getPoliciesRequestToProtobuf(request),
        options,
      ),
    );
  }

  /**
   * Fetch a policy by ID.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials}, and
   *
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled.
   *
   * @example
   * ```typescript
   * const policy = await cerbos.getPolicy("resource.document.v1");
   * ```
   */
  public async getPolicy(
    id: string,
    options?: RequestOptions,
  ): Promise<Policy | undefined> {
    const {
      policies: [policy],
    } = await this.getPolicies({ ids: [id] }, options);

    return policy;
  }

  /**
   * Fetch a schema by ID.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials}, and
   *
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled.
   *
   * @example
   * ```typescript
   * const schema = await cerbos.getSchema("document.json");
   * ```
   */
  public async getSchema(
    id: string,
    options?: RequestOptions,
  ): Promise<Schema | undefined> {
    const {
      schemas: [schema],
    } = await this.getSchemas({ ids: [id] }, options);

    return schema;
  }

  /**
   * Fetch multiple schemas by ID.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials}, and
   *
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled.
   *
   * @example
   * ```typescript
   * const schemas = await cerbos.getSchemas({
   *   ids: ["document.json", "image.json"],
   * });
   * ```
   */
  public async getSchemas(
    request: GetSchemasRequest,
    options?: RequestOptions,
  ): Promise<GetSchemasResponse> {
    return getSchemasResponseFromProtobuf(
      await this.admin(
        "getSchema",
        getSchemasRequestToProtobuf(request),
        options,
      ),
    );
  }

  /**
   * Check if a principal is allowed to perform an action on a resource.
   *
   * @example
   * ```typescript
   * await cerbos.isAllowed({
   *   principal: {
   *     id: "user@example.com",
   *     roles: ["USER"],
   *     attr: { tier: "PREMIUM" },
   *   },
   *   resource: {
   *     kind: "document",
   *     id: "1",
   *     attr: { owner: "user@example.com" },
   *   },
   *   action: "view",
   * }); // => true
   * ```
   */
  public async isAllowed(
    request: IsAllowedRequest,
    options?: RequestOptions,
  ): Promise<boolean> {
    const { action, ...rest } = request;
    const result = await this.checkResource(
      { actions: [action], ...rest },
      options,
    );

    const allowed = result.isAllowed(action);
    if (allowed === undefined) {
      throw new Error("No decision returned for action");
    }

    return allowed;
  }

  /**
   * List policies.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials}, and
   *
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled.
   *
   * @example
   * ```typescript
   * const { ids } = await cerbos.listPolicies();
   * ```
   */
  public async listPolicies(
    request: ListPoliciesRequest = {},
    options?: RequestOptions,
  ): Promise<ListPoliciesResponse> {
    return listPoliciesResponseFromProtobuf(
      await this.admin(
        "listPolicies",
        listPoliciesRequestToProtobuf(request),
        options,
      ),
    );
  }

  /**
   * List schemas.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials}, and
   *
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled.
   *
   * @example
   * ```typescript
   * const { ids } = await cerbos.listSchemas();
   * ```
   */
  public async listSchemas(
    options?: RequestOptions,
  ): Promise<ListSchemasResponse> {
    return listSchemasResponseFromProtobuf(
      await this.admin("listSchemas", {}, options),
    );
  }

  /**
   * Produce a query plan that can be used to obtain a list of resources on which a principal is allowed to perform a particular action.
   *
   * @example
   * ```typescript
   * const plan = await cerbos.planResources({
   *   principal: {
   *     id: "user@example.com",
   *     roles: ["USER"],
   *     attr: { tier: "PREMIUM" },
   *   },
   *   resource: { kind: "document" },
   *   action: "view",
   * });
   * ```
   */
  public async planResources(
    request: PlanResourcesRequest,
    options?: RequestOptions,
  ): Promise<PlanResourcesResponse> {
    const response = planResourcesResponseFromProtobuf(
      await this.cerbos(
        "planResources",
        planResourcesRequestToProtobuf(request),
        options,
      ),
    );

    this.handleValidationErrors(response);

    return response;
  }

  /**
   * Reload the store.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials},
   *
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API}, and
   *
   * - a reloadable {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage | storage backend}.
   *
   * @example
   * ```typescript
   * await cerbos.reloadStore({ wait: true });
   * ```
   */
  public async reloadStore(
    request: ReloadStoreRequest,
    options?: RequestOptions,
  ): Promise<void> {
    await this.admin("reloadStore", request, options);
  }

  /**
   * Retrieve information about the Cerbos policy decision point server.
   */
  public async serverInfo(options?: RequestOptions): Promise<ServerInfo> {
    return await this.cerbos("serverInfo", {}, options);
  }

  private async admin<RPC extends _RPC<"admin">>(
    rpc: RPC,
    request: _Request<"admin", RPC>,
    options: RequestOptions | undefined,
  ): Promise<_Response<"admin", RPC>> {
    return await this.send(
      "admin",
      rpc,
      request,
      this.options.adminCredentials,
      options,
    );
  }

  private async cerbos<RPC extends _RPC<"cerbos">>(
    rpc: RPC,
    request: _Request<"cerbos", RPC>,
    options: RequestOptions | undefined,
  ): Promise<_Response<"cerbos", RPC>> {
    return await this.send("cerbos", rpc, request, undefined, options);
  }

  private async send<Service extends _Service, RPC extends _RPC<Service>>(
    service: Service,
    rpc: RPC,
    request: _Request<Service, RPC>,
    adminCredentials: AdminCredentials | undefined,
    { headers }: RequestOptions = {},
  ): Promise<_Response<Service, RPC>> {
    return await this.transport(
      service,
      rpc,
      request,
      await this.mergeHeaders(headers, adminCredentials),
    );
  }

  private async mergeHeaders(
    override: HeadersInit | undefined,
    adminCredentials: AdminCredentials | undefined,
  ): Promise<Headers> {
    const init = this.options.headers;

    const headers = new Headers(
      typeof init === "function" ? await init() : init,
    );

    if (adminCredentials) {
      headers.set(
        "Authorization",
        `Basic ${btoa(
          `${adminCredentials.username}:${adminCredentials.password}`,
        )}`,
      );
    }

    if (this.options.playgroundInstance) {
      headers.set("Playground-Instance", this.options.playgroundInstance);
    }

    if (override) {
      for (const [name, value] of new Headers(override)) {
        headers.set(name, value);
      }
    }

    return headers;
  }

  private handleValidationErrors({
    validationErrors,
  }: {
    validationErrors: ValidationError[];
  }): void {
    const { onValidationError } = this.options;

    if (onValidationError) {
      if (validationErrors.length > 0) {
        if (onValidationError === "throw") {
          throw new ValidationFailed(validationErrors);
        }

        onValidationError(validationErrors);
      }
    }
  }
}
