import { Effect as EffectProtobuf } from "../protobuf/cerbos/effect/v1/effect";
import {
  CheckResourcesResponse as CheckResourcesResponseProtobuf,
  CheckResourcesResponse_ResultEntry,
} from "../protobuf/cerbos/response/v1/response";
import {
  ValidationError as ValidationErrorProtobuf,
  ValidationError_Source,
} from "../protobuf/cerbos/schema/v1/schema";
import {
  CheckResourcesResponse,
  CheckResourcesResult,
  Effect,
  ValidationError,
  ValidationErrorSource,
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

  return {
    resource,
    actions: actionsFromProtobuf(actions),
    validationErrors: validationErrors.map(validationErrorFromProtobuf),
    metadata: meta,
  };
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
        `Unexpected validation error source ${source} (${ValidationError_Source[source]})`
      );
  }
};
