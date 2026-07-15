import { timestampDate } from "@bufbuild/protobuf/wkt";

import type {
  ConfigValid,
  CheckResourcesRequestValid as ServerCheckResourcesRequest,
  CheckResourcesResponse as ServerCheckResourcesResponse,
  PlanResourcesRequestValid as ServerPlanResourcesRequest,
  PlanResourcesResponse as ServerPlanResourcesResponse,
} from "@cerbos/api/cerbos/cloud/epdp/v2/epdp_pb";
import type {
  CheckInputValid as CheckInput,
  AuxDataValid as ServerAuxData,
} from "@cerbos/api/cerbos/engine/v1/engine_pb";
import type {
  AuxDataValid as ClientAuxData,
  CheckResourcesRequestValid as ClientCheckResourcesRequest,
  PlanResourcesRequestValid as ClientPlanResourcesRequest,
} from "@cerbos/api/cerbos/request/v1/request_pb";
import type {
  CheckResourcesResponse_ResultEntryValid as CheckResourcesResult,
  CheckResourcesResponseValid as ClientCheckResourcesResponse,
  PlanResourcesResponseValid as ClientPlanResourcesResponse,
  CheckResourcesResponse_ResultEntry_Meta_EffectMetaValid as EffectMeta,
  ServerInfoResponseValid as ServerInfoResponse,
} from "@cerbos/api/cerbos/response/v1/response_pb";
import { CerbosService as cerbos } from "@cerbos/api/cerbos/svc/v1/svc_pb";
import type {
  HealthCheckRequestValid,
  HealthCheckResponse,
} from "@cerbos/api/grpc/health/v1/health_pb";
import {
  HealthCheckResponse_ServingStatus,
  Health as health,
} from "@cerbos/api/grpc/health/v1/health_pb";
import type { PolicySource as AuditPolicySource } from "@cerbos/core";
import { NotOK, Status } from "@cerbos/core";
import { requireField } from "@cerbos/core/~internal";
import { Server as EmbeddedServer, metadata } from "@cerbos/embedded-server";

import {
  configToProtobuf,
  decodedAuxDataToProtobuf,
} from "./convert/toProtobuf.js";
import type { Deferred } from "./defer.js";
import { defer } from "./defer.js";
import { createUserAgent } from "./fetch.js";
import { PolicyLoader } from "./loader.js";
import { DecisionLogger } from "./logger.js";
import type {
  DecodeJWTPayload,
  Options,
  PolicyLoaderOptions,
  PolicySource,
  WasmSource,
} from "./options.js";
import { load } from "./wasm.js";

const servingServices: ReadonlySet<string> = new Set([
  cerbos.typeName,
  health.typeName,
]);

export class Server {
  public readonly loader?: PolicyLoader;
  private readonly server: Deferred<Wrapper>;
  private readonly decodeJWTPayload: DecodeJWTPayload;
  private readonly logger?: DecisionLogger;

  public constructor({
    policies,
    wasm,
    decodeJWTPayload = cannotDecodeJWTPayload,
    onDecision,
    userAgent,
    ...config
  }: Options) {
    userAgent = createUserAgent(userAgent);

    if (policySourceIsPolicyLoaderOptions(policies)) {
      policies = new PolicyLoader(policies);
    }

    if (policySourceIsPolicyLoader(policies)) {
      this.loader = policies;
    }

    this.server = defer(
      start(policies, wasm, configToProtobuf(config), userAgent),
    );

    this.decodeJWTPayload = decodeJWTPayload;

    if (onDecision) {
      this.logger = new DecisionLogger(
        onDecision,
        auditPolicySource(policies),
        userAgent,
      );
    }
  }

  public async checkResources(
    clientRequest: ClientCheckResourcesRequest,
    headers: Headers,
  ): Promise<ClientCheckResourcesResponse> {
    const serverRequest = await this.serverCheckResourcesRequest(clientRequest);

    let bundleId = "";
    let serverResponse: ServerCheckResourcesResponse | undefined = undefined;
    let clientResponse: ClientCheckResourcesResponse | undefined = undefined;
    let error: unknown = undefined;

    try {
      const server = await this.server();
      ({ bundleId } = server);

      serverResponse = server.checkResources(serverRequest);

      clientResponse = clientCheckResourcesResponse(
        clientRequest,
        serverResponse,
      );

      return clientResponse;
    } catch (caught) {
      error = caught;
      throw caught;
    } finally {
      if (this.logger) {
        await this.logger.logCheckResources(
          headers,
          bundleId,
          clientRequest,
          serverRequest,
          serverResponse,
          clientResponse,
          error,
        );
      }
    }
  }

  public async healthCheck(
    request: HealthCheckRequestValid,
  ): Promise<HealthCheckResponse> {
    await this.server();

    if (servingServices.has(request.service)) {
      return {
        $typeName: "grpc.health.v1.HealthCheckResponse",
        status: HealthCheckResponse_ServingStatus.SERVING,
      };
    }

    throw new NotOK(Status.NOT_FOUND, "unknown service");
  }

  public async planResources(
    clientRequest: ClientPlanResourcesRequest,
    headers: Headers,
  ): Promise<ClientPlanResourcesResponse> {
    const serverRequest = await this.serverPlanResourcesRequest(clientRequest);

    let bundleId = "";
    let serverResponse: ServerPlanResourcesResponse | undefined = undefined;
    let clientResponse: ClientPlanResourcesResponse | undefined = undefined;
    let error: unknown = undefined;

    try {
      const server = await this.server();
      ({ bundleId } = server);

      serverResponse = server.planResources(serverRequest);

      clientResponse = clientPlanResourcesResponse(
        clientRequest,
        serverResponse,
      );

      return clientResponse;
    } catch (caught) {
      error = caught;
      throw caught;
    } finally {
      if (this.logger) {
        await this.logger.logPlanResources(
          headers,
          bundleId,
          clientRequest,
          serverRequest,
          serverResponse,
          clientResponse,
          error,
        );
      }
    }
  }

  public async serverInfo(): Promise<ServerInfoResponse> {
    await this.server();

    return {
      $typeName: "cerbos.response.v1.ServerInfoResponse",
      buildDate: timestampDate(metadata.builtAt).toISOString(),
      commit: metadata.cerbosCommitHash,
      version: metadata.cerbosVersion,
    };
  }

  private async serverCheckResourcesRequest({
    requestId,
    principal,
    resources,
    auxData: clientAuxData,
  }: ClientCheckResourcesRequest): Promise<ServerCheckResourcesRequest> {
    const serverAuxData = await this.serverAuxData(clientAuxData);

    return {
      $typeName: "cerbos.cloud.epdp.v2.CheckResourcesRequest",
      inputs: resources.map(({ resource, actions }): CheckInput => ({
        $typeName: "cerbos.engine.v1.CheckInput",
        requestId,
        principal,
        resource,
        actions,
        auxData: serverAuxData,
      })),
    };
  }

  private async serverPlanResourcesRequest({
    requestId,
    principal,
    resource,
    action, // eslint-disable-line @typescript-eslint/no-deprecated
    actions,
    auxData: clientAuxData,
    includeMeta,
  }: ClientPlanResourcesRequest): Promise<ServerPlanResourcesRequest> {
    const serverAuxData = await this.serverAuxData(clientAuxData);

    return {
      $typeName: "cerbos.cloud.epdp.v2.PlanResourcesRequest",
      input: {
        $typeName: "cerbos.engine.v1.PlanResourcesInput",
        requestId,
        principal,
        resource,
        action: "",
        actions: actions.length ? actions : [action],
        auxData: serverAuxData,
        includeMeta,
      },
    };
  }

  private async serverAuxData(
    auxData: ClientAuxData | undefined,
  ): Promise<ServerAuxData | undefined> {
    if (!auxData?.jwt) {
      return undefined;
    }

    const { token, keySetId } = auxData.jwt;

    return decodedAuxDataToProtobuf({
      jwt: await this.decodeJWTPayload({ token, keySetId }),
    });
  }
}

function policySourceIsPolicyLoader(
  policies: PolicySource,
): policies is PolicyLoader {
  return policies instanceof PolicyLoader;
}

function policySourceIsPolicyLoaderOptions(
  policies: PolicySource,
): policies is PolicyLoaderOptions {
  return "ruleId" in policies && !policySourceIsPolicyLoader(policies);
}

async function start(
  policies: Exclude<PolicySource, PolicyLoaderOptions>,
  wasm: WasmSource,
  config: ConfigValid,
  userAgent: string,
): Promise<Wrapper> {
  const server = new Wrapper(
    await EmbeddedServer.from(
      async (imports) => await load(wasm, imports, userAgent),
      config,
    ),
  );

  if (policySourceIsPolicyLoader(policies)) {
    await policies["~start"](server);
  } else {
    server.loadRuleTable(new Uint8Array((await policies).buffer));
  }

  return server;
}

function cannotDecodeJWTPayload(): never {
  throw new Error(
    "To decode JWTs from auxiliary data, you must provide a `decodeJWTPayload` function",
  );
}

function auditPolicySource(
  policies: PolicySource,
): (bundleId: string) => AuditPolicySource {
  if ("ruleId" in policies) {
    return (bundleId) => ({
      kind: "hub",
      embeddedBundle: {
        ruleId: policies.ruleId,
        scopes: policies.scopes ?? [],
        bundleId,
      },
    });
  }

  return (bundleId) => ({
    kind: "hub",
    localBundle: {
      path: "",
      bundleId,
    },
  });
}

class Wrapper {
  public readonly checkResources: EmbeddedServer["checkResources"];
  public readonly planResources: EmbeddedServer["planResources"];
  public bundleId = "";

  public constructor(private readonly server: EmbeddedServer) {
    this.checkResources = server.checkResources.bind(server);
    this.planResources = server.planResources.bind(server);
  }

  public loadRuleTable(ruleTable: Uint8Array): void {
    const { bundleId } = this.server.loadRuleTable(ruleTable);
    this.bundleId = bundleId;
  }
}

function clientCheckResourcesResponse(
  { requestId, resources, includeMeta }: ClientCheckResourcesRequest,
  { outputs }: ServerCheckResourcesResponse,
): ClientCheckResourcesResponse {
  return {
    $typeName: "cerbos.response.v1.CheckResourcesResponse",
    cerbosCallId: "",
    requestId: requestId,
    results: outputs.map((output, i): CheckResourcesResult => {
      const input = resources[i];

      if (input?.resource.id !== output.resourceId) {
        throw new NotOK(Status.INTERNAL, "invariant violated");
      }

      const { resource } = input;

      return {
        $typeName: "cerbos.response.v1.CheckResourcesResponse.ResultEntry",
        resource: {
          $typeName:
            "cerbos.response.v1.CheckResourcesResponse.ResultEntry.Resource",
          kind: resource.kind,
          id: resource.id,
          policyVersion: resource.policyVersion,
          scope: resource.scope,
        },
        actions: Object.fromEntries(
          Object.entries(output.actions).map(([action, { effect }]) => [
            action,
            effect,
          ]),
        ),
        outputs: output.outputs,
        validationErrors: output.validationErrors,
        meta: includeMeta
          ? {
              $typeName:
                "cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta",
              actions: Object.fromEntries(
                Object.entries(output.actions).map(
                  ([action, { policy, scope }]) => [
                    action,
                    {
                      $typeName:
                        "cerbos.response.v1.CheckResourcesResponse.ResultEntry.Meta.EffectMeta",
                      matchedPolicy: policy,
                      matchedScope: scope,
                    } satisfies EffectMeta,
                  ],
                ),
              ),
              effectiveDerivedRoles: output.effectiveDerivedRoles,
            }
          : undefined,
      };
    }),
  };
}

function clientPlanResourcesResponse(
  { requestId, action, actions, includeMeta }: ClientPlanResourcesRequest, // eslint-disable-line @typescript-eslint/no-deprecated
  { output }: ServerPlanResourcesResponse,
): ClientPlanResourcesResponse {
  requireField("PlanResourcesResponse.output", output);

  return {
    $typeName: "cerbos.response.v1.PlanResourcesResponse",
    cerbosCallId: "",
    requestId: requestId,
    resourceKind: output.kind,
    policyVersion: output.policyVersion,
    action: output.action, // eslint-disable-line @typescript-eslint/no-deprecated
    actions: output.actions,
    validationErrors: output.validationErrors,
    filter: output.filter,
    meta: includeMeta
      ? {
          $typeName: "cerbos.response.v1.PlanResourcesResponse.Meta",
          filterDebug: output.filterDebug,
          matchedScope: actions.length
            ? ""
            : (output.matchedScopes[action] ?? ""),
          matchedScopes: actions.length ? output.matchedScopes : {},
        }
      : undefined,
  };
}
