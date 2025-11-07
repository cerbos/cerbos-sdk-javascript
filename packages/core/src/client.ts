import type {
  DescMessage,
  DescMethod,
  DescMethodServerStreaming,
  DescMethodUnary,
  MessageShape,
  MessageValidType,
} from "@bufbuild/protobuf";

import { ListAuditLogEntriesRequest_Kind } from "@cerbos/api/cerbos/request/v1/request_pb";
import {
  CerbosAdminService as admin,
  CerbosService as cerbos,
} from "@cerbos/api/cerbos/svc/v1/svc_pb";
import { Health as health } from "@cerbos/api/grpc/health/v1/health_pb";

import {
  accessLogEntryFromProtobuf,
  checkResourcesResponseFromProtobuf,
  decisionLogEntryFromProtobuf,
  deleteSchemasResponseFromProtobuf,
  disablePoliciesResponseFromProtobuf,
  enablePoliciesResponseFromProtobuf,
  getPoliciesResponseFromProtobuf,
  getSchemasResponseFromProtobuf,
  healthCheckResponseFromProtobuf,
  inspectPoliciesResponseFromProtobuf,
  listPoliciesResponseFromProtobuf,
  listSchemasResponseFromProtobuf,
  planResourcesResponseFromProtobuf,
  serverInfoFromProtobuf,
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
  healthCheckRequestToProtobuf,
  inspectPoliciesRequestToProtobuf,
  listAccessLogEntriesRequestToProtobuf,
  listDecisionLogEntriesRequestToProtobuf,
  listPoliciesRequestToProtobuf,
  planResourcesRequestToProtobuf,
  reloadStoreRequestToProtobuf,
} from "./convert/toProtobuf";
import { NotOK, ValidationFailed } from "./errors";
import type {
  AccessLogEntry,
  AddOrUpdatePoliciesRequest,
  AddOrUpdateSchemasRequest,
  AuxData,
  CheckResourceRequest,
  CheckResourcesRequest,
  CheckResourcesResponse,
  CheckResourcesResult,
  DecisionLogEntry,
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
  HealthCheckRequest,
  HealthCheckResponse,
  InspectPoliciesRequest,
  InspectPoliciesResponse,
  IsAllowedRequest,
  ListAccessLogEntriesRequest,
  ListDecisionLogEntriesRequest,
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListSchemasResponse,
  PlanResourcesRequest,
  PlanResourcesResponse,
  Policy,
  Principal,
  ReloadStoreRequest,
  Schema,
  ServerInfo,
  ValidationError,
  ValidationFailedCallback,
} from "./types/external";
import { Service, ServiceStatus, Status } from "./types/external";

/** @internal */
export class _AbortHandler {
  public constructor(public readonly signal: AbortSignal | undefined) {}

  public throwIfAborted(): void {
    if (this.signal?.aborted) {
      throw this.error();
    }
  }

  public onAbort(listener: (error: NotOK) => void): void {
    this.signal?.addEventListener(
      "abort",
      () => {
        listener(this.error());
      },
      { once: true },
    );
  }

  public error(): NotOK {
    const reason = this.signal?.reason as unknown;

    return new NotOK(
      Status.CANCELLED,
      reason instanceof Error ? `Aborted: ${reason.message}` : "Aborted",
      { cause: reason },
    );
  }
}

/** @internal */
export interface _Transport {
  unary<I extends DescMessage, O extends DescMessage>(
    method: DescMethodUnary<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
    abortHandler: _AbortHandler,
  ): Promise<MessageShape<O>>;

  serverStream<I extends DescMessage, O extends DescMessage>(
    method: DescMethodServerStreaming<I, O>,
    request: MessageValidType<I>,
    headers: Headers,
    abortHandler: _AbortHandler,
  ): AsyncGenerator<MessageShape<O>, void, undefined>;
}

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

  /**
   * A {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | signal} to abort the request.
   *
   * @defaultValue `undefined`
   */
  signal?: AbortSignal | undefined;
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
    await this.unary(
      admin.method.addOrUpdatePolicy,
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
    await this.unary(
      admin.method.addOrUpdateSchema,
      addOrUpdateSchemasRequestToProtobuf(request),
      options,
    );
  }

  /**
   * Checks the health of services provided by the policy decision point server.
   *
   * @example
   * ```typescript
   * const { status } = await cerbos.checkHealth();
   * ```
   *
   * @example
   * ```typescript
   * const { status } = await cerbos.checkHealth({ service: Service.ADMIN });
   * ```
   */
  public async checkHealth(
    request: HealthCheckRequest = {},
    options?: RequestOptions,
  ): Promise<HealthCheckResponse> {
    try {
      return healthCheckResponseFromProtobuf(
        await this.unary(
          health.method.check,
          healthCheckRequestToProtobuf(request),
          options,
        ),
      );
    } catch (error) {
      if (
        request.service === Service.ADMIN &&
        error instanceof NotOK &&
        error.code === Status.NOT_FOUND
      ) {
        return { status: ServiceStatus.DISABLED };
      }

      throw error;
    }
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
      await this.unary(
        cerbos.method.checkResources,
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
      await this.unary(
        admin.method.deleteSchema,
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
      await this.unary(
        admin.method.disablePolicy,
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
      await this.unary(
        admin.method.enablePolicy,
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
   * Fetch an access log entry by call ID from the policy decision point server's audit log.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials}; and
   *
   * - the Cerbos policy decision point server to be configured with
   *
   *   - the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled
   *
   *   - the {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit#local | local audit logging backend}, and
   *
   *   - {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit | access logs} enabled.
   *
   * @example
   * ```typescript
   * const entry = await cerbos.getAccessLogEntry("01F9VS1N77S83MTSBBX44GYSJ6");
   * ```
   */
  public async getAccessLogEntry(
    callId: string,
    options?: RequestOptions,
  ): Promise<AccessLogEntry | undefined> {
    for await (const entry of this.serverStream(
      admin.method.listAuditLogEntries,
      {
        $typeName: "cerbos.request.v1.ListAuditLogEntriesRequest",
        kind: ListAuditLogEntriesRequest_Kind.ACCESS,
        filter: { case: "lookup", value: callId },
      },
      options,
    )) {
      return accessLogEntryFromProtobuf(entry);
    }

    return undefined;
  }

  /**
   * Fetch a decision log entry by call ID from the policy decision point server's audit log.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials}; and
   *
   * - the Cerbos policy decision point server to be at least v0.18 and configured with
   *
   *   - the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled
   *
   *   - the {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit#local | local audit logging backend}, and
   *
   *   - {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit | decision logs} enabled.
   *
   * @example
   * ```typescript
   * const entry = await cerbos.getDecisionLogEntry("01F9VS1N77S83MTSBBX44GYSJ6");
   * ```
   */
  public async getDecisionLogEntry(
    callId: string,
    options?: RequestOptions,
  ): Promise<DecisionLogEntry | undefined> {
    for await (const entry of this.serverStream(
      admin.method.listAuditLogEntries,
      {
        $typeName: "cerbos.request.v1.ListAuditLogEntriesRequest",
        kind: ListAuditLogEntriesRequest_Kind.DECISION,
        filter: { case: "lookup", value: callId },
      },
      options,
    )) {
      return decisionLogEntryFromProtobuf(entry);
    }

    return undefined;
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
      await this.unary(
        admin.method.getPolicy,
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
      await this.unary(
        admin.method.getSchema,
        getSchemasRequestToProtobuf(request),
        options,
      ),
    );
  }

  /**
   * Inspect policies in the store.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials}; and
   *
   * - the Cerbos policy decision point server to be at least v0.35 and configured with the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled.
   *
   * @example
   * ```typescript
   * const { policies } = await cerbos.inspectPolicies();
   * ```
   */
  public async inspectPolicies(
    request: InspectPoliciesRequest = {},
    options?: RequestOptions,
  ): Promise<InspectPoliciesResponse> {
    return inspectPoliciesResponseFromProtobuf(
      await this.unary(
        admin.method.inspectPolicies,
        inspectPoliciesRequestToProtobuf(request),
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
   * List access log entries from the policy decision point server's audit log.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials}; and
   *
   * - the Cerbos policy decision point server to be configured with
   *
   *   - the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled
   *
   *   - the {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit#local | local audit logging backend}, and
   *
   *   - {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit | access logs} enabled.
   *
   * @example
   * ```typescript
   * for await (const entry of cerbos.listAccessLogEntries({ filter: { tail: 5 } })) {
   *   console.log(entry);
   * }
   * ```
   */
  public async *listAccessLogEntries(
    request: ListAccessLogEntriesRequest,
    options?: RequestOptions,
  ): AsyncGenerator<AccessLogEntry, void, undefined> {
    for await (const entry of this.serverStream(
      admin.method.listAuditLogEntries,
      listAccessLogEntriesRequestToProtobuf(request),
      options,
    )) {
      yield accessLogEntryFromProtobuf(entry);
    }
  }

  /**
   * List decision log entries from the policy decision point server's audit log.
   *
   * @remarks
   * Requires
   *
   * - the client to be configured with {@link Options.adminCredentials}; and
   *
   * - the Cerbos policy decision point server to be configured with
   *
   *   - the {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API} enabled
   *
   *   - the {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit#local | local audit logging backend}, and
   *
   *   - {@link https://docs.cerbos.dev/cerbos/latest/configuration/audit | decision logs} enabled.
   *
   * @example
   * ```typescript
   * for await (const entry of cerbos.listDecisionLogEntries({ filter: { tail: 5 } })) {
   *   console.log(entry);
   * }
   * ```
   */
  public async *listDecisionLogEntries(
    request: ListDecisionLogEntriesRequest,
    options?: RequestOptions,
  ): AsyncGenerator<DecisionLogEntry, void, undefined> {
    for await (const entry of this.serverStream(
      admin.method.listAuditLogEntries,
      listDecisionLogEntriesRequestToProtobuf(request),
      options,
    )) {
      yield decisionLogEntryFromProtobuf(entry);
    }
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
      await this.unary(
        admin.method.listPolicies,
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
      await this.unary(
        admin.method.listSchemas,
        { $typeName: "cerbos.request.v1.ListSchemasRequest" },
        options,
      ),
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
      await this.unary(
        cerbos.method.planResources,
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
    await this.unary(
      admin.method.reloadStore,
      reloadStoreRequestToProtobuf(request),
      options,
    );
  }

  /**
   * Retrieve information about the Cerbos policy decision point server.
   */
  public async serverInfo(options?: RequestOptions): Promise<ServerInfo> {
    return serverInfoFromProtobuf(
      await this.unary(
        cerbos.method.serverInfo,
        { $typeName: "cerbos.request.v1.ServerInfoRequest" },
        options,
      ),
    );
  }

  /**
   * Create a client instance with a pre-specified principal.
   */
  public withPrincipal(
    principal: Principal,
    auxData: Pick<AuxData, "jwt"> = {},
  ): ClientWithPrincipal<this> {
    return new ClientWithPrincipal(this, principal, auxData);
  }

  private async unary<I extends DescMessage, O extends DescMessage>(
    method: DescMethodUnary<I, O>,
    request: MessageValidType<I>,
    { headers, signal }: RequestOptions = {},
  ): Promise<MessageShape<O>> {
    return await this.transport.unary(
      method,
      request,
      await this.mergeHeaders(headers, method),
      new _AbortHandler(signal),
    );
  }

  private async *serverStream<I extends DescMessage, O extends DescMessage>(
    method: DescMethodServerStreaming<I, O>,
    request: MessageValidType<I>,
    { headers, signal }: RequestOptions = {},
  ): AsyncGenerator<MessageShape<O>, void, undefined> {
    const abortController = new AbortController();

    signal?.addEventListener(
      "abort",
      () => {
        abortController.abort(signal.reason);
      },
      { once: true },
    );

    if (signal?.aborted) {
      abortController.abort(signal.reason);
    }

    try {
      yield* this.transport.serverStream(
        method,
        request,
        await this.mergeHeaders(headers, method),
        new _AbortHandler(abortController.signal),
      );
    } finally {
      abortController.abort();
    }
  }

  private async mergeHeaders(
    override: HeadersInit | undefined,
    method: DescMethod,
  ): Promise<Headers> {
    const init = this.options.headers;

    const headers = new Headers(
      typeof init === "function" ? await init() : init,
    );

    if (
      method.parent.typeName === admin.typeName &&
      this.options.adminCredentials
    ) {
      const { username, password } = this.options.adminCredentials;
      headers.set("Authorization", `Basic ${btoa(`${username}:${password}`)}`);
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

/**
 * A client instance with a pre-specified principal.
 *
 * @public
 */
export class ClientWithPrincipal<ClientType extends Client = Client> {
  /** @internal */
  public constructor(
    /**
     * The client from which this instance was created.
     */
    public readonly client: ClientType,

    /**
     * The principal for whom this instance was created.
     */
    public readonly principal: Principal,

    /**
     * Auxiliary data related to the principal for whom this instance was created.
     *
     * @defaultValue `{}`
     */
    public readonly auxData: Pick<AuxData, "jwt"> = {},
  ) {}

  /**
   * Check the principal's permissions on a resource.
   * See {@link Client.checkResource} for details.
   */
  public async checkResource(
    request: Omit<CheckResourceRequest, "principal">,
    options?: RequestOptions,
  ): Promise<CheckResourcesResult> {
    return await this.client.checkResource(this.merge(request), options);
  }

  /**
   * Check the principal's permissions on a set of resources.
   * See {@link Client.checkResources} for details.
   */
  public async checkResources(
    request: Omit<CheckResourcesRequest, "principal">,
    options?: RequestOptions,
  ): Promise<CheckResourcesResponse> {
    return await this.client.checkResources(this.merge(request), options);
  }

  /**
   * Check if the principal is allowed to perform an action on a resource.
   * See {@link Client.isAllowed} for details.
   */
  public async isAllowed(
    request: Omit<IsAllowedRequest, "principal">,
    options?: RequestOptions,
  ): Promise<boolean> {
    return await this.client.isAllowed(this.merge(request), options);
  }

  /**
   * Produce a query plan that can be used to obtain a list of resources on which the principal is allowed to perform a particular action.
   * See {@link Client.planResources} for details.
   */
  public async planResources(
    request: Omit<PlanResourcesRequest, "principal">,
    options?: RequestOptions,
  ): Promise<PlanResourcesResponse> {
    return await this.client.planResources(this.merge(request), options);
  }

  private merge<
    Request extends { principal: Principal; auxData?: AuxData | undefined },
  >({ auxData = {}, ...rest }: Omit<Request, "principal">): Request {
    return {
      principal: this.principal,
      auxData: {
        ...this.auxData,
        ...auxData,
      },
      ...rest,
    } as Request;
  }
}
