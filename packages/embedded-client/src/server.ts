/* eslint-disable @typescript-eslint/no-deprecated */

import { timestampDate } from "@bufbuild/protobuf/wkt";

import type {
  CheckResourcesResponse as CheckResourcesResponseWithAuditTrail,
  ConfigValid,
  PlanResourcesResponse as PlanResourcesResponseWithAuditTrail,
} from "@cerbos/api/cerbos/cloud/epdp/v2/epdp_pb";
import type {
  CheckResourcesRequestValid,
  PlanResourcesRequestValid,
  AuxDataValid as RequestAuxData,
} from "@cerbos/api/cerbos/request/v1/request_pb";
import type {
  CheckResourcesResponse,
  PlanResourcesResponse,
  ServerInfoResponse,
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
import type { DecodedAuxData } from "@cerbos/core";
import { NotOK, Status, _requireField } from "@cerbos/core";
import { Server as EmbeddedServer, metadata } from "@cerbos/embedded-server";

import {
  configToProtobuf,
  decodedAuxDataToProtobuf,
} from "./convert/toProtobuf";
import type { Deferred } from "./defer";
import { defer } from "./defer";
import { DecisionLogger } from "./logger";
import type {
  DecodeJWTPayload,
  Options,
  PolicySource,
  WasmSource,
} from "./options";
import { load } from "./wasm";

const { version } = require("../package.json") as { version: string };

const defaultUserAgent = `cerbos-sdk-javascript-embedded-client/${version}`;

const servingServices: ReadonlySet<string> = new Set([
  cerbos.typeName,
  health.typeName,
]);

export class Server {
  private readonly server: Deferred<EmbeddedServer>;
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
    userAgent = `${userAgent ? `${userAgent} ` : ""}${defaultUserAgent}`;

    this.server = defer<EmbeddedServer>(
      start(policies, wasm, configToProtobuf(config), userAgent),
    );

    this.decodeJWTPayload = decodeJWTPayload;

    if (onDecision) {
      this.logger = new DecisionLogger(onDecision, userAgent);
    }
  }

  public async checkResources(
    request: CheckResourcesRequestValid,
    headers: Headers,
  ): Promise<CheckResourcesResponse> {
    let auxData: DecodedAuxData | undefined = undefined;
    let responseWithAuditTrail:
      | CheckResourcesResponseWithAuditTrail
      | undefined = undefined;

    let error: unknown = undefined;

    try {
      auxData = await this.decodeAuxData(request.auxData);

      responseWithAuditTrail = (await this.server()).checkResources(
        {
          ...request,
          auxData: undefined,
          includeMeta: true,
        },
        decodedAuxDataToProtobuf(auxData),
      );

      const { response } = responseWithAuditTrail;
      _requireField("CheckResourcesResponse.response", response);
      return response;
    } catch (caught) {
      error = caught;
      throw caught;
    } finally {
      if (this.logger) {
        await this.logger.logCheckResources(
          request,
          auxData,
          headers,
          responseWithAuditTrail,
          error,
        );
      }

      if (responseWithAuditTrail?.response && !request.includeMeta) {
        for (const result of responseWithAuditTrail.response.results) {
          result.meta = undefined;
        }
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
    request: PlanResourcesRequestValid,
    headers: Headers,
  ): Promise<PlanResourcesResponse> {
    let auxData: DecodedAuxData | undefined = undefined;
    let responseWithAuditTrail:
      | PlanResourcesResponseWithAuditTrail
      | undefined = undefined;

    let error: unknown = undefined;

    try {
      auxData = await this.decodeAuxData(request.auxData);

      responseWithAuditTrail = (await this.server()).planResources(
        {
          ...request,
          actions: request.action ? [request.action] : request.actions,
          auxData: undefined,
          includeMeta: true,
        },
        decodedAuxDataToProtobuf(auxData),
      );

      const { response } = responseWithAuditTrail;
      _requireField("PlanResourcesResponse.response", response);

      if (request.action && response.meta) {
        response.meta.matchedScope =
          response.meta.matchedScopes[request.action] ?? "";

        response.meta.matchedScopes = {};
      }

      return response;
    } catch (caught) {
      error = caught;
      throw caught;
    } finally {
      if (this.logger) {
        await this.logger.logPlanResources(
          request,
          auxData,
          headers,
          responseWithAuditTrail,
          error,
        );
      }

      if (responseWithAuditTrail?.response && !request.includeMeta) {
        responseWithAuditTrail.response.meta = undefined;
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

  private async decodeAuxData(
    auxData: RequestAuxData | undefined,
  ): Promise<DecodedAuxData | undefined> {
    if (!auxData?.jwt) {
      return undefined;
    }

    const { token, keySetId } = auxData.jwt;
    return { jwt: await this.decodeJWTPayload({ token, keySetId }) };
  }
}

async function start(
  policies: PolicySource,
  wasm: WasmSource,
  config: ConfigValid,
  userAgent: string,
): Promise<EmbeddedServer> {
  const [server, ruleTable] = await Promise.all([
    EmbeddedServer.from(
      async (imports) => await load(wasm, imports, userAgent),
      config,
    ),
    policies,
  ]);

  server.loadRuleTable(new Uint8Array(ruleTable.buffer));

  return server;
}

function cannotDecodeJWTPayload(): never {
  throw new Error(
    "To decode JWTs from auxiliary data, you must provide a `decodeJWTPayload` function",
  );
}
