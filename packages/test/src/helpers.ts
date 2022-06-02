import { CheckResourcesResult } from "@cerbos/core";

export const buildResultsForResources = ({
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
      scopes.map((scope) =>
        buildResult({ resource: { kind, id, policyVersion, scope } })
      )
    )
  );

export const buildResult = (
  result: Partial<ConstructorParameters<typeof CheckResourcesResult>[0]>
): CheckResourcesResult =>
  new CheckResourcesResult({
    resource: {
      kind: "document",
      id: "1",
      policyVersion: "default",
      scope: "",
    },
    actions: {},
    validationErrors: [],
    metadata: undefined,
    ...result,
  });

export const shuffle = <T>(values: T[]): T[] =>
  values
    .map((value) => ({ value, order: Math.random() }))
    .sort((a, b) => a.order - b.order)
    .map(({ value }) => value);
