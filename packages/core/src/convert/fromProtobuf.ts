import { Effect as EffectProtobuf } from "../protobuf/cerbos/effect/v1/effect";
import {
  CheckResourcesResponse as CheckResourcesResponseProtobuf,
  CheckResourcesResponse_ResultEntry,
  PlanResourcesResponse as PlanResourcesResponseProtobuf,
  PlanResourcesResponse_Expression_Operand,
  PlanResourcesResponse_Filter_Kind,
  PlanResourcesResponse_Meta,
} from "../protobuf/cerbos/response/v1/response";
import {
  ValidationError as ValidationErrorProtobuf,
  ValidationError_Source,
} from "../protobuf/cerbos/schema/v1/schema";
import {
  CheckResourcesResponse,
  CheckResourcesResult,
  Effect,
  PlanExpression,
  PlanExpressionValue,
  PlanExpressionVariable,
  PlanKind,
  ValidationErrorSource,
} from "../types";
import type {
  PlanExpressionOperand,
  PlanResourcesMetadata,
  PlanResourcesResponse,
  ValidationError,
  Value,
} from "../types";

export const checkResourcesResponseFromProtobuf = ({
  requestId,
  results,
}: CheckResourcesResponseProtobuf): CheckResourcesResponse =>
  new CheckResourcesResponse({
    requestId,
    results: results.map(checkResourcesResultFromProtobuf),
  });

const checkResourcesResultFromProtobuf = ({
  resource,
  actions,
  validationErrors,
  meta,
}: CheckResourcesResponse_ResultEntry): CheckResourcesResult => {
  if (!resource) {
    throw new Error("Missing resource on CheckResources result");
  }

  return new CheckResourcesResult({
    resource,
    actions: actionsFromProtobuf(actions),
    validationErrors: validationErrors.map(validationErrorFromProtobuf),
    metadata: meta,
  });
};

const actionsFromProtobuf = (
  actions: Record<string, EffectProtobuf>
): Record<string, Effect | undefined> =>
  Object.fromEntries(
    Object.entries(actions).map(([action, effect]) => [
      action,
      effectFromProtobuf(effect),
    ])
  );

const effectFromProtobuf = (effect: EffectProtobuf): Effect =>
  effect === EffectProtobuf.EFFECT_ALLOW ? Effect.ALLOW : Effect.DENY;

const validationErrorFromProtobuf = ({
  path,
  message,
  source,
}: ValidationErrorProtobuf): ValidationError => ({
  path,
  message,
  source: validationErrorSourceFromProtobuf(source),
});

const validationErrorSourceFromProtobuf = (
  source: ValidationError_Source
): ValidationErrorSource => {
  switch (source) {
    case ValidationError_Source.SOURCE_PRINCIPAL:
      return ValidationErrorSource.PRINCIPAL;

    case ValidationError_Source.SOURCE_RESOURCE:
      return ValidationErrorSource.RESOURCE;

    default:
      throw new Error(
        `Unexpected validation error source ${source} (${
          ValidationError_Source[source] ?? "unrecognized"
        })`
      );
  }
};

export const planResourcesResponseFromProtobuf = ({
  requestId,
  filter,
  meta,
}: PlanResourcesResponseProtobuf): PlanResourcesResponse => {
  if (!filter) {
    throw new Error("Missing filter on PlanResources response");
  }

  const kind = planKindFromProtobuf(filter.kind);
  const metadata = meta && planResourcesMetadataFromProtobuf(meta);

  if (kind === PlanKind.CONDITIONAL) {
    if (!filter.condition) {
      throw new Error("Missing filter condition on PlanResources response");
    }

    return {
      requestId,
      kind,
      condition: planOperandFromProtobuf(filter.condition),
      metadata,
    };
  }

  return {
    requestId,
    kind,
    metadata,
  };
};

const planKindFromProtobuf = (
  kind: PlanResourcesResponse_Filter_Kind
): PlanKind => {
  switch (kind) {
    case PlanResourcesResponse_Filter_Kind.KIND_ALWAYS_ALLOWED:
      return PlanKind.ALWAYS_ALLOWED;

    case PlanResourcesResponse_Filter_Kind.KIND_ALWAYS_DENIED:
      return PlanKind.ALWAYS_DENIED;

    case PlanResourcesResponse_Filter_Kind.KIND_CONDITIONAL:
      return PlanKind.CONDITIONAL;

    default:
      throw new Error(
        `Unexpected PlanResources filter kind ${kind} (${
          PlanResourcesResponse_Filter_Kind[kind] ?? "unrecognized"
        })`
      );
  }
};

const planOperandFromProtobuf = ({
  node,
}: PlanResourcesResponse_Expression_Operand): PlanExpressionOperand => {
  if (!node) {
    throw new Error("Missing node on PlanResources expression operand");
  }

  switch (node.$case) {
    case "expression":
      return new PlanExpression(
        node.expression.operator,
        node.expression.operands.map(planOperandFromProtobuf)
      );

    case "value":
      return new PlanExpressionValue((node.value ?? null) as Value);

    case "variable":
      return new PlanExpressionVariable(node.variable);
  }
};

const planResourcesMetadataFromProtobuf = ({
  filterDebug,
  matchedScope,
}: PlanResourcesResponse_Meta): PlanResourcesMetadata => ({
  conditionString: filterDebug,
  matchedScope,
});
