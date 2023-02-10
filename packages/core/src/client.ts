import {
  checkResourcesResponseFromProtobuf,
  deleteSchemasResponseFromProtobuf,
  disablePoliciesResponseFromProtobuf,
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
  getPoliciesRequestToProtobuf,
  getSchemasRequestToProtobuf,
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
  GetPoliciesRequest,
  GetPoliciesResponse,
  GetSchemasRequest,
  GetSchemasResponse,
  IsAllowedRequest,
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
  adminCredentials?: AdminCredentials
) => Promise<_Response<Service, RPC>>;

/**
 * Options for creating a new {@link Client}.
 *
 * @public
 */
export interface Options {
  /**
   * Credentials for the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API}.
   *
   * @defaultValue `undefined`
   */
  adminCredentials?: AdminCredentials | undefined;

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
}

/**
 * Credentials for the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API}.
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
 * Base implementation of a client for interacting with the Cerbos policy decision point server.
 *
 * @public
 */
export abstract class Client {
  /** @internal */
  protected constructor(
    private readonly transport: _Transport,
    private readonly options: Options
  ) {}

  /**
   * Add policies, or update existing policies.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials},
   *
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html | storage backend}.
   *
   * @example
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
   */
  public async addOrUpdatePolicies(
    request: AddOrUpdatePoliciesRequest
  ): Promise<void> {
    await this.admin(
      "addOrUpdatePolicy",
      addOrUpdatePoliciesRequestToProtobuf(request)
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
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html | storage backend}.
   *
   * @example
   * ```typescript
   * await cerbos.addOrUpdateSchemas([{
   *   id: "document.json",
   *   definition: `{
   *     "type": "object",
   *     "properties": {
   *       "owner": { "type": "string" }
   *     }
   *   }`,
   * }]);
   * ```
   */
  public async addOrUpdateSchemas(
    request: AddOrUpdateSchemasRequest
  ): Promise<void> {
    await this.admin(
      "addOrUpdateSchema",
      addOrUpdateSchemasRequestToProtobuf(request)
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
   *     attributes: { tier: "PREMIUM" },
   *   },
   *   resource: {
   *     kind: "document",
   *     id: "1",
   *     attributes: { owner: "user@example.com" },
   *   },
   *   actions: ["view", "edit"],
   * });
   *
   * decision.isAllowed("view"); // => true
   * ```
   */
  public async checkResource(
    request: CheckResourceRequest
  ): Promise<CheckResourcesResult> {
    const { resource, actions, ...rest } = request;

    const response = await this.checkResources({
      resources: [{ resource, actions }],
      ...rest,
    });

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
   *     attributes: { tier: "PREMIUM" },
   *   },
   *   resources: [
   *     {
   *       resource: {
   *         kind: "document",
   *         id: "1",
   *         attributes: { owner: "user@example.com" },
   *       },
   *       actions: ["view", "edit"],
   *     },
   *     {
   *       resource: {
   *         kind: "image",
   *         id: "1",
   *         attributes: { owner: "user@example.com" },
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
    request: CheckResourcesRequest
  ): Promise<CheckResourcesResponse> {
    const response = checkResourcesResponseFromProtobuf(
      await this.cerbos(
        "checkResources",
        checkResourcesRequestToProtobuf(request)
      )
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
   * - the Cerbos policy decision point (PDP) server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html | storage backend}.
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
  public async deleteSchema(id: string): Promise<boolean> {
    const { deletedSchemas } = await this.deleteSchemas({ ids: [id] });
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
   * - the Cerbos policy decision point (PDP) server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html | storage backend}.
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
    request: DeleteSchemasRequest
  ): Promise<DeleteSchemasResponse> {
    return deleteSchemasResponseFromProtobuf(
      await this.admin("deleteSchema", deleteSchemasRequestToProtobuf(request))
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
   * - the Cerbos policy decision point server to be at least v0.25 and configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html | storage backend}.
   *
   * @example
   * ```typescript
   * const result = await cerbos.disablePolicies({
   *   ids: ["resource.document.v1", "resource.image.v1"],
   * });
   * ```
   */
  public async disablePolicies(
    request: DisablePoliciesRequest
  ): Promise<DisablePoliciesResponse> {
    return disablePoliciesResponseFromProtobuf(
      await this.admin(
        "disablePolicy",
        disablePoliciesRequestToProtobuf(request)
      )
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
   * - the Cerbos policy decision point server to be at least v0.25 and configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API} enabled, and
   *
   * - a dynamic {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html | storage backend}.
   *
   * @example
   * ```typescript
   * const disabled = await cerbos.disablePolicy("resource.document.v1");
   * ```
   */
  public async disablePolicy(id: string): Promise<boolean> {
    const { disabledPolicies } = await this.disablePolicies({ ids: [id] });
    return disabledPolicies === 1;
  }

  /**
   * Fetch multiple policies by ID.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials}, and
   *
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API} enabled.
   *
   * @example
   * ```typescript
   * const policies = await cerbos.getPolicies({
   *   ids: ["resource.document.v1", "resource.image.v1"],
   * });
   * ```
   */
  public async getPolicies(
    request: GetPoliciesRequest
  ): Promise<GetPoliciesResponse> {
    return getPoliciesResponseFromProtobuf(
      await this.admin("getPolicy", getPoliciesRequestToProtobuf(request))
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
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API} enabled.
   *
   * @example
   * ```typescript
   * const policy = await cerbos.getPolicy("resource.document.v1");
   * ```
   */
  public async getPolicy(id: string): Promise<Policy | undefined> {
    const {
      policies: [policy],
    } = await this.getPolicies({ ids: [id] });

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
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API} enabled.
   *
   * @example
   * ```typescript
   * const schema = await cerbos.getSchema("document.json");
   * ```
   */
  public async getSchema(id: string): Promise<Schema | undefined> {
    const {
      schemas: [schema],
    } = await this.getSchemas({ ids: [id] });

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
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API} enabled.
   *
   * @example
   * ```typescript
   * const schemas = await cerbos.getSchemas({
   *   ids: ["document.json", "image.json"],
   * });
   * ```
   */
  public async getSchemas(
    request: GetSchemasRequest
  ): Promise<GetSchemasResponse> {
    return getSchemasResponseFromProtobuf(
      await this.admin("getSchema", getSchemasRequestToProtobuf(request))
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
   *     attributes: { tier: "PREMIUM" },
   *   },
   *   resource: {
   *     kind: "document",
   *     id: "1",
   *     attributes: { owner: "user@example.com" },
   *   },
   *   action: "view",
   * }); // => true
   * ```
   */
  public async isAllowed(request: IsAllowedRequest): Promise<boolean> {
    const { action, ...rest } = request;
    const result = await this.checkResource({ actions: [action], ...rest });

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
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API} enabled.
   *
   * @example
   * ```typescript
   * const { ids } = await cerbos.listPolicies();
   * ```
   */
  public async listPolicies(): Promise<ListPoliciesResponse> {
    return listPoliciesResponseFromProtobuf(
      await this.admin("listPolicies", {})
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
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API} enabled.
   *
   * @example
   * ```typescript
   * const { ids } = await cerbos.listSchemas();
   * ```
   */
  public async listSchemas(): Promise<ListSchemasResponse> {
    return listSchemasResponseFromProtobuf(await this.admin("listSchemas", {}));
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
   *     attributes: { tier: "PREMIUM" },
   *   },
   *   resource: { kind: "document" },
   *   action: "view",
   * });
   * ```
   */
  public async planResources(
    request: PlanResourcesRequest
  ): Promise<PlanResourcesResponse> {
    const response = planResourcesResponseFromProtobuf(
      await this.cerbos(
        "planResources",
        planResourcesRequestToProtobuf(request)
      )
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
   * - the Cerbos policy decision point server to be configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api.html | admin API}, and
   *
   * - a reloadable {@link https://docs.cerbos.dev/cerbos/latest/configuration/storage.html | storage backend}.
   *
   * @example
   * ```typescript
   * await cerbos.reloadStore({ wait: true });
   * ```
   */
  public async reloadStore(request: ReloadStoreRequest): Promise<void> {
    await this.admin("reloadStore", request);
  }

  /**
   * Retrieve information about the Cerbos policy decision point server.
   */
  public serverInfo(): Promise<ServerInfo> {
    return this.cerbos("serverInfo", {});
  }

  private admin<RPC extends _RPC<"admin">>(
    rpc: RPC,
    request: _Request<"admin", RPC>
  ): Promise<_Response<"admin", RPC>> {
    return this.transport("admin", rpc, request, this.options.adminCredentials);
  }

  private cerbos<RPC extends _RPC<"cerbos">>(
    rpc: RPC,
    request: _Request<"cerbos", RPC>
  ): Promise<_Response<"cerbos", RPC>> {
    return this.transport("cerbos", rpc, request);
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
