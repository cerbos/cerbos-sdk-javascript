import type {
  CheckResourceRequest,
  CheckResourcesRequest,
  CheckResourcesResponse,
  CheckResourcesResult,
  ClientWithPrincipal,
  IsAllowedRequest,
  RequestOptions,
} from "@cerbos/core";
import { useCallback, useEffect, useRef, useState } from "react";

import { isEqual } from "./is-equal";
import { useCerbos } from "./use-cerbos";

/**
 * @public
 */
export interface AsyncResult<T> {
  isLoading: boolean;
  data: T | undefined;
  error: Error | undefined;
}

function useCerbosRequest<
  TRequest extends keyof Pick<
    ClientWithPrincipal,
    "checkResource" | "checkResources" | "isAllowed"
  >,
  TRequestParams extends Parameters<ClientWithPrincipal[TRequest]>[0],
>(
  request: TRequest,
  requestParams: TRequestParams,
  options?: RequestOptions,
): AsyncResult<Awaited<ReturnType<ClientWithPrincipal[TRequest]>>> {
  const client = useCerbos();
  const [data, setData] =
    useState<Awaited<ReturnType<ClientWithPrincipal[TRequest]>>>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);

  const previousRequest = useRef<TRequestParams>();
  const previousOptions = useRef<RequestOptions>();

  const checkResource = useCallback(
    async (
      request: TRequest,
      requestParams: TRequestParams,
      options?: RequestOptions,
    ) => {
      setIsLoading(true);
      setError(undefined);
      setData(undefined);

      try {
        const result = await (client[request](
          //@ts-expect-error --- this is strange because the generic types narrow nicely when this hook is called but not here :(
          requestParams,
          options,
        ) as ReturnType<ClientWithPrincipal[TRequest]>);
        setData(result);
      } catch (error) {
        setError(
          error instanceof Error
            ? error
            : new Error("An unexpected error occurred", { cause: error }),
        );
      } finally {
        setIsLoading(false);
      }
    },
    [client],
  );

  useEffect(() => {
    if (
      !isEqual(requestParams, previousRequest.current) ||
      !isEqual(options, previousOptions.current)
    ) {
      previousRequest.current = requestParams;
      previousOptions.current = options;
      void checkResource(request, requestParams, options);
    }
  }, [checkResource, options, request, requestParams]);

  return {
    data,
    isLoading,
    error,
  };
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
