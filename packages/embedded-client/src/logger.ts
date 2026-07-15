import type { ULIDFactory } from "ulid";
import { monotonicFactory } from "ulid";

import type { AuditTrail } from "@cerbos/api/cerbos/audit/v1/audit_pb";
import type {
  CheckResourcesRequestValid as ServerCheckResourcesRequest,
  CheckResourcesResponse as ServerCheckResourcesResponse,
  PlanResourcesRequestValid as ServerPlanResourcesRequest,
  PlanResourcesResponse as ServerPlanResourcesResponse,
} from "@cerbos/api/cerbos/cloud/epdp/v2/epdp_pb";
import type {
  CheckResourcesRequestValid as ClientCheckResourcesRequest,
  PlanResourcesRequestValid as ClientPlanResourcesRequest,
} from "@cerbos/api/cerbos/request/v1/request_pb";
import type {
  CheckResourcesResponseValid as ClientCheckResourcesResponse,
  PlanResourcesResponseValid as ClientPlanResourcesResponse,
} from "@cerbos/api/cerbos/response/v1/response_pb";
import type {
  DecisionLogEntryMethod,
  PolicySource,
  RequestContext,
} from "@cerbos/core";
import {
  auditTrailFromProtobuf,
  checkInputFromProtobuf,
  checkOutputFromProtobuf,
  planResourcesInputFromProtobuf,
  planResourcesOutputFromProtobuf,
  requestContextFromProtobuf,
} from "@cerbos/core/~internal";

import type { Options } from "./options.js";

export class DecisionLogger {
  private readonly ulid: ULIDFactory;

  public constructor(
    private readonly log: Exclude<Options["onDecision"], undefined>,
    private readonly policySource: (bundleId: string) => PolicySource,
    private readonly userAgent: string,
  ) {
    this.ulid = monotonicFactory();
  }

  public async logCheckResources(
    headers: Headers,
    bundleId: string,
    clientRequest: ClientCheckResourcesRequest,
    serverRequest: ServerCheckResourcesRequest,
    serverResponse: ServerCheckResourcesResponse | undefined,
    clientResponse: ClientCheckResourcesResponse | undefined,
    error: unknown,
  ): Promise<void> {
    const callId = await this.logDecision(
      {
        name: "CheckResources",
        inputs: serverRequest.inputs.map(checkInputFromProtobuf),
        outputs: serverResponse?.outputs.map(checkOutputFromProtobuf) ?? [],
        error: errorMessage(error),
      },
      requestContext(clientRequest),
      serverResponse?.auditTrail,
      headers,
      bundleId,
    );

    if (clientResponse) {
      clientResponse.cerbosCallId = callId;
    }
  }

  public async logPlanResources(
    headers: Headers,
    bundleId: string,
    clientRequest: ClientPlanResourcesRequest,
    serverRequest: ServerPlanResourcesRequest,
    serverResponse: ServerPlanResourcesResponse | undefined,
    clientResponse: ClientPlanResourcesResponse | undefined,
    error: unknown,
  ): Promise<void> {
    const callId = await this.logDecision(
      {
        name: "PlanResources",
        input: planResourcesInputFromProtobuf(serverRequest.input),
        output:
          serverResponse?.output &&
          planResourcesOutputFromProtobuf(serverResponse.output),
        error: errorMessage(error),
      },
      requestContext(clientRequest),
      serverResponse?.auditTrail,
      headers,
      bundleId,
    );

    if (clientResponse) {
      clientResponse.cerbosCallId = callId;
    }
  }

  private async logDecision(
    method: DecisionLogEntryMethod,
    requestContext: RequestContext | undefined,
    auditTrail: AuditTrail | undefined,
    headers: Headers,
    bundleId: string,
  ): Promise<string> {
    const callId = this.ulid();

    await this.log({
      callId,
      method,
      timestamp: new Date(),
      metadata: metadata(headers),
      oversized: false,
      auditTrail: auditTrailFromProtobuf(auditTrail),
      peer: {
        address: "",
        authInfo: "",
        forwardedFor: "",
        userAgent: this.userAgent,
      },
      policySource: this.policySource(bundleId),
      requestContext,
    });

    return callId;
  }
}

function errorMessage(error: unknown): string | undefined {
  if (error === undefined) {
    return undefined;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Unknown error";
}

function metadata(headers: Headers): Record<string, string[]> {
  const metadata: Record<string, string[]> = {};

  for (const [name, value] of headers) {
    if (name !== "user-agent") {
      (metadata[name] ??= []).push(value);
    }
  }

  return metadata;
}

function requestContext({
  requestContext,
}: ClientCheckResourcesRequest | ClientPlanResourcesRequest):
  RequestContext | undefined {
  return requestContext && requestContextFromProtobuf(requestContext);
}
