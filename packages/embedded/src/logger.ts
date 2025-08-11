import type { ULIDFactory } from "ulid";
import { monotonicFactory } from "ulid";

import type {
  CheckInput,
  CheckOutput,
  DecodedAuxData,
  SourceAttributes,
} from "@cerbos/core";
import {
  _checkInputFromProtobuf,
  _checkOutputFromProtobuf,
  _requireField,
} from "@cerbos/core";

import type { BundleMetadata, Options } from "./loader";
import type { CheckOutput_ActionEffect } from "./protobuf/cerbos/engine/v1/engine";
import type { CheckResourcesRequest } from "./protobuf/cerbos/request/v1/request";
import type { CheckResourcesResponse } from "./protobuf/cerbos/response/v1/response";

export class DecisionLogger {
  private readonly ulid: ULIDFactory;

  public constructor(
    private readonly log: Exclude<Options["onDecision"], undefined>,
    private readonly userAgent: string,
  ) {
    this.ulid = monotonicFactory();
  }

  public async logCheckResources(
    request: CheckResourcesRequest,
    auxData: DecodedAuxData | undefined,
    headers: Headers,
    response: CheckResourcesResponse | undefined,
    bundleMetadata: BundleMetadata,
    error: unknown,
  ): Promise<void> {
    const callId = this.ulid();

    const inputs = request.resources.map<CheckInput>(({ resource, actions }) =>
      _checkInputFromProtobuf({
        requestId: request.requestId,
        principal: request.principal,
        resource,
        actions,
        auxData,
      }),
    );

    const outputs: CheckOutput[] = [];
    const effectivePolicies: Record<string, SourceAttributes> = {};

    if (response) {
      response.cerbosCallId = callId;

      for (const result of response.results) {
        _requireField(
          "CheckResourcesResponse.ResultEntry.resource",
          result.resource,
        );

        _requireField("CheckResourcesResponse.ResultEntry.meta", result.meta);

        const actions: Record<string, CheckOutput_ActionEffect> = {};

        for (const [action, effect] of Object.entries(result.actions)) {
          const meta = result.meta.actions[action];

          actions[action] = {
            effect,
            policy: meta?.matchedPolicy ?? "",
            scope: meta?.matchedScope ?? "",
          };

          if (meta?.matchedPolicy && !effectivePolicies[meta.matchedPolicy]) {
            for (const ancestor of ancestors(meta.matchedPolicy)) {
              effectivePolicies[ancestor] ??= {
                commit_hash: bundleMetadata.commit,
                ...bundleMetadata.sourceAttributes[`cerbos.${ancestor}`],
              };
            }
          }
        }

        outputs.push(
          _checkOutputFromProtobuf({
            requestId: response.requestId,
            resourceId: result.resource.id,
            actions,
            outputs: result.outputs,
            effectiveDerivedRoles: result.meta.effectiveDerivedRoles,
            validationErrors: result.validationErrors,
          }),
        );
      }
    }

    await this.log({
      callId,
      method: {
        name: "CheckResources",
        inputs,
        outputs,
        error: errorMessage(error),
      },
      timestamp: new Date(),
      metadata: metadata(headers),
      oversized: false,
      auditTrail: {
        effectivePolicies,
      },
      peer: {
        address: "",
        authInfo: "",
        forwardedFor: "",
        userAgent: this.userAgent,
      },
      policySource: {
        kind: "embeddedPDP",
        url: bundleMetadata.url ?? "",
        commit: bundleMetadata.commit,
        builtAt: bundleMetadata.builtAt,
      },
    });
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
    (metadata[name] ??= []).push(value);
  }

  return metadata;
}

const scopedPolicyIdPattern = /\.v[^/]+(?<separator>\/)[^/]+$/d;

function* ancestors(policyId: string): Generator<string, void, undefined> {
  const match = scopedPolicyIdPattern.exec(policyId) as {
    indices: { groups: { separator: [number, number] } };
  } | null;

  if (match) {
    for (
      let end = match.indices.groups.separator[0];
      end > 0;
      end = policyId.indexOf(".", end + 1)
    ) {
      yield policyId.substring(0, end);
    }
  }

  yield policyId;
}
