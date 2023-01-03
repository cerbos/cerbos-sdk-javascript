/* eslint-disable */
import type { CheckInput, CheckOutput, PlanResourcesInput, PlanResourcesOutput } from "../../engine/v1/engine";

export const protobufPackage = "cerbos.audit.v1";

export interface AccessLogEntry {
  callId: string;
  timestamp: Date | undefined;
  peer: Peer | undefined;
  metadata: { [key: string]: MetaValues };
  method: string;
  statusCode: number;
}

export interface AccessLogEntry_MetadataEntry {
  key: string;
  value: MetaValues | undefined;
}

export interface DecisionLogEntry {
  callId: string;
  timestamp: Date | undefined;
  peer:
    | Peer
    | undefined;
  /** Deprecated. Use method.check_resources.inputs instead. */
  inputs: CheckInput[];
  /** Deprecated. Use method.check_resources.outputs instead. */
  outputs: CheckOutput[];
  /** Deprecated. Use method.check_resources.error instead. */
  error: string;
  method?: { $case: "checkResources"; checkResources: DecisionLogEntry_CheckResources } | {
    $case: "planResources";
    planResources: DecisionLogEntry_PlanResources;
  };
  metadata: { [key: string]: MetaValues };
}

export interface DecisionLogEntry_CheckResources {
  inputs: CheckInput[];
  outputs: CheckOutput[];
  error: string;
}

export interface DecisionLogEntry_PlanResources {
  input: PlanResourcesInput | undefined;
  output: PlanResourcesOutput | undefined;
  error: string;
}

export interface DecisionLogEntry_MetadataEntry {
  key: string;
  value: MetaValues | undefined;
}

export interface MetaValues {
  values: string[];
}

export interface Peer {
  address: string;
  authInfo: string;
  userAgent: string;
  forwardedFor: string;
}
