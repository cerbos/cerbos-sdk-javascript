import {
  CheckResourcesResult,
  CheckResourcesResultResource,
} from "@cerbos/core";

export const buildResults = ({
  id,
  policyVersions,
  scopes,
}: {
  id: string;
  policyVersions: string[];
  scopes: string[];
}): CheckResourcesResult[] =>
  ["document", "image"].flatMap((kind) =>
    policyVersions.flatMap((policyVersion) =>
      scopes.map((scope) => buildResult({ kind, id, policyVersion, scope }))
    )
  );

export const buildResult = (
  resource: CheckResourcesResultResource
): CheckResourcesResult => ({
  resource,
  actions: {},
  validationErrors: [],
  metadata: undefined,
});

export const shuffle = <T>(values: T[]): T[] =>
  values
    .map((value) => ({ value, order: Math.random() }))
    .sort((a, b) => a.order - b.order)
    .map(({ value }) => value);
