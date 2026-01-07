import type { ULIDFactory } from "ulid";
import { monotonicFactory } from "ulid";

import type { AuditTrail } from "@cerbos/api/cerbos/audit/v1/audit_pb";
import type {
  CheckResourcesResponse as CheckResourcesResponseWithAuditTrail,
  PlanResourcesResponse as PlanResourcesResponseWithAuditTrail,
} from "@cerbos/api/cerbos/cloud/epdp/v2/epdp_pb";
import type { CheckOutput_ActionEffect } from "@cerbos/api/cerbos/engine/v1/engine_pb";
import type {
  CheckResourcesRequestValid,
  PlanResourcesRequestValid,
} from "@cerbos/api/cerbos/request/v1/request_pb";
import type {
  CheckResourcesResponse,
  PlanResourcesResponse,
} from "@cerbos/api/cerbos/response/v1/response_pb";
import type {
  CheckInput,
  CheckOutput,
  DecisionLogEntryMethod,
  DecodedAuxData,
  PlanResourcesInput,
  PlanResourcesOutput,
  PolicySource,
} from "@cerbos/core";
import {
  auditTrailFromProtobuf,
  checkInputFromProtobuf,
  checkOutputFromProtobuf,
  planResourcesInputFromProtobuf,
  planResourcesOutputFromProtobuf,
  requireField,
} from "@cerbos/core/~internal";

import type { Options } from "./options.js";

export class DecisionLogger {
  private readonly ulid: ULIDFactory;

  public constructor(
    private readonly log: Exclude<Options["onDecision"], undefined>,
    private readonly policySource: PolicySource,
    private readonly userAgent: string,
  ) {
    this.ulid = monotonicFactory();
  }

  public async logCheckResources(
    request: CheckResourcesRequestValid,
    auxData: DecodedAuxData | undefined,
    headers: Headers,
    response: CheckResourcesResponseWithAuditTrail | undefined,
    error: unknown,
  ): Promise<void> {
    const callId = await this.logDecision(
      {
        name: "CheckResources",
        inputs: checkInputs(request, auxData),
        outputs: checkOutputs(response?.response),
        error: errorMessage(error),
      },
      response?.auditTrail,
      headers,
    );

    if (response?.response) {
      response.response.cerbosCallId = callId;
    }
  }

  public async logPlanResources(
    request: PlanResourcesRequestValid,
    auxData: DecodedAuxData | undefined,
    headers: Headers,
    response: PlanResourcesResponseWithAuditTrail | undefined,
    error: unknown,
  ): Promise<void> {
    const callId = await this.logDecision(
      {
        name: "PlanResources",
        input: planResourcesInput(request, auxData),
        output: planResourcesOutput(request, response?.response),
        error: errorMessage(error),
      },
      response?.auditTrail,
      headers,
    );

    if (response?.response) {
      response.response.cerbosCallId = callId;
    }
  }

  private async logDecision(
    method: DecisionLogEntryMethod,
    auditTrail: AuditTrail | undefined,
    headers: Headers,
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
      policySource: this.policySource,
    });

    return callId;
  }
}

function checkInputs(
  request: CheckResourcesRequestValid,
  auxData: DecodedAuxData | undefined,
): CheckInput[] {
  return request.resources.map<CheckInput>(({ resource, actions }) => ({
    ...checkInputFromProtobuf({
      $typeName: "cerbos.engine.v1.CheckInput",
      requestId: request.requestId,
      principal: request.principal,
      resource,
      actions,
    }),
    auxData,
  }));
}

function checkOutputs(
  response: CheckResourcesResponse | undefined,
): CheckOutput[] {
  if (!response) {
    return [];
  }

  return response.results.map<CheckOutput>((result) => {
    requireField(
      "CheckResourcesResponse.ResultEntry.resource",
      result.resource,
    );

    requireField("CheckResourcesResponse.ResultEntry.meta", result.meta);

    const actions: Record<string, CheckOutput_ActionEffect> = {};

    for (const [action, effect] of Object.entries(result.actions)) {
      const meta = result.meta.actions[action];

      actions[action] = {
        $typeName: "cerbos.engine.v1.CheckOutput.ActionEffect",
        effect,
        policy: meta?.matchedPolicy ?? "",
        scope: meta?.matchedScope ?? "",
      };
    }

    return checkOutputFromProtobuf({
      $typeName: "cerbos.engine.v1.CheckOutput",
      requestId: response.requestId,
      resourceId: result.resource.id,
      actions,
      outputs: result.outputs,
      effectiveDerivedRoles: result.meta.effectiveDerivedRoles,
      validationErrors: result.validationErrors,
    });
  });
}

function planResourcesInput(
  request: PlanResourcesRequestValid,
  auxData: DecodedAuxData | undefined,
): PlanResourcesInput {
  return {
    ...planResourcesInputFromProtobuf({
      $typeName: "cerbos.engine.v1.PlanResourcesInput",
      requestId: request.requestId,
      principal: request.principal,
      resource: request.resource,
      action: request.action, // eslint-disable-line @typescript-eslint/no-deprecated
      actions: request.actions,
      includeMeta: request.includeMeta,
    }),
    auxData,
  };
}

function planResourcesOutput(
  request: PlanResourcesRequestValid,
  response: PlanResourcesResponse | undefined,
): PlanResourcesOutput | undefined {
  if (!response) {
    return undefined;
  }

  return planResourcesOutputFromProtobuf({
    $typeName: "cerbos.engine.v1.PlanResourcesOutput",
    requestId: response.requestId,
    filter: response.filter,
    filterDebug: response.meta?.filterDebug ?? "",
    action: response.action, // eslint-disable-line @typescript-eslint/no-deprecated
    actions: response.actions,
    policyVersion: response.policyVersion,
    scope: request.resource.scope,
    validationErrors: response.validationErrors,
    kind: response.resourceKind,
    matchedScopes: response.meta?.matchedScopes ?? {},
  });
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
