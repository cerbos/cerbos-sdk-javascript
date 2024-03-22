import type {
  CheckResourceRequest,
  CheckResourcesRequest,
  CheckResourcesResponse,
  CheckResourcesResult,
  ClientWithPrincipal,
  IsAllowedRequest,
  RequestOptions,
} from "@cerbos/core";
import { useCallback, useEffect, useState } from "react";
import { useDeepCompareMemoize } from "use-deep-compare-effect";

import { useCerbos } from "./use-cerbos";

/**
 * @public
 */
export type AsyncResult<T> =
  | { isLoading: true; data: undefined; error: undefined }
  | { isLoading: false; data: T; error: undefined }
  | { isLoading: false; data: undefined; error: Error };

type Methods = "checkResource" | "checkResources" | "isAllowed";

type Result<Method extends Methods> = Awaited<
  ReturnType<ClientWithPrincipal[Method]>
>;

function useCerbosRequest<Method extends Methods>(
  method: Method,
  ...params: Parameters<ClientWithPrincipal[Method]>
): AsyncResult<Result<Method>> {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Result<Method>>();
  const [error, setError] = useState<Error>();

  const client = useCerbos();
  const paramsMemo = useDeepCompareMemoize(params);

  const load = useCallback<() => Promise<Result<Method>>>(
    // @ts-expect-error -- https://github.com/microsoft/TypeScript/issues/30581
    async () => await client[method](...paramsMemo),
    [client, method, paramsMemo],
  );

  useEffect(() => {
    let aborted = false;
    setIsLoading(true);
    setData(undefined);
    setError(undefined);

    load()
      .then((data) => {
        if (!aborted) {
          setIsLoading(false);
          setData(data);
          setError(undefined);
        }
      })
      .catch((error: unknown) => {
        if (!aborted) {
          setIsLoading(false);
          setData(undefined);
          setError(
            error instanceof Error
              ? error
              : new Error("An unexpected error occurred", { cause: error }),
          );
        }
      });

    return () => {
      aborted = true;
    };
  }, [load]);

  return { isLoading, data, error } as AsyncResult<Result<Method>>;
}

/**
 * Check a principal's permissions on a resource.
 *
 * @example
 * ```typescript
 * const {isLoading, data:decision, error} = useCheckResource({
 *   resource: {
 *     kind: "document",
 *     id: "1",
 *     attr: { owner: "user@example.com" },
 *   },
 *   actions: ["view", "edit"],
 * });
 *
 * decision?.isAllowed("view"); // => true
 * ```
 * @public
 */
export function useCheckResource(
  request: Omit<CheckResourceRequest, "principal">,
  options?: RequestOptions,
): AsyncResult<CheckResourcesResult> {
  return useCerbosRequest("checkResource", request, options);
}

/**
 * Check a principal's permissions on a set of resources.
 *
 * @example
 * ```typescript
 * const {isLoading, data:decision, error} = useCheckResources({
 *   resources: [
 *     {
 *       resource: {
 *         kind: "document",
 *         id: "1",
 *         attr: { owner: "user@example.com" },
 *       },
 *       actions: ["view", "edit"],
 *     },
 *     {
 *       resource: {
 *         kind: "image",
 *         id: "1",
 *         attr: { owner: "user@example.com" },
 *       },
 *       actions: ["delete"],
 *     },
 *   ],
 * });
 *
 * decision?.isAllowed({
 *   resource: { kind: "document", id: "1" },
 *   action: "view",
 * }); // => true
 * ```
 * @public
 */
export function useCheckResources(
  request: Omit<CheckResourcesRequest, "principal">,
  options?: RequestOptions,
): AsyncResult<CheckResourcesResponse> {
  return useCerbosRequest("checkResources", request, options);
}

/**
 * Check if a principal is allowed to perform an action on a resource.
 *
 * @example
 * ```typescript
 * const {
 *     isLoading,
 *     data:decision, // => true
 *     error
 * } = useIsAllowed({
 *   resource: {
 *     kind: "document",
 *     id: "1",
 *     attr: { owner: "user@example.com" },
 *   },
 *   action: "view",
 * });
 * ```
 * @public
 */
export function useIsAllowed(
  request: Omit<IsAllowedRequest, "principal">,
  options?: RequestOptions,
): AsyncResult<boolean> {
  return useCerbosRequest("isAllowed", request, options);
}
