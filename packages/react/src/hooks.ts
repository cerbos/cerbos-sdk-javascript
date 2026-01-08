import { useCallback, useContext, useEffect, useState } from "react";
import { useDeepCompareMemoize } from "use-deep-compare-effect";

import type {
  CheckResourceRequest,
  CheckResourcesRequest,
  CheckResourcesResponse,
  CheckResourcesResult,
  ClientWithPrincipal,
  IsAllowedRequest,
  RequestOptions,
} from "@cerbos/core";

import { CerbosContext } from "./context.js";

/**
 * A hook to access the Cerbos client passed down by the {@link CerbosProvider}.
 *
 * @remarks
 * The client's methods are asynchronous, so depending on your use case it may be easier to
 * use one of the higher-level hooks ({@link useCheckResource}, {@link useCheckResources}, or
 * {@link useIsAllowed}), which convert the resulting promises into {@link AsyncResult}s.
 *
 *
 * @example
 * ```typescript
 * import { useCerbos } from "@cerbos/react";
 *
 * function SomeComponent() {
 *   const cerbos = useCerbos();
 *
 *   const handleClick = async () => {
 *     const decision = await cerbos.checkResource({
 *       resource: {
 *         kind: "document",
 *         id: "1",
 *         attr: { owner: "user@example.com" },
 *       },
 *       actions: ["view", "edit"],
 *     });
 *
 *     if (decision.allAllowed()) {
 *       // do something
 *     } else if (decision.allowedActions().includes("view")) {
 *       // do something else
 *     }
 *     ...
 *   };
 *
 *   return <button onClick={handleClick}>...</button>;
 * }
 * ```
 *
 * @category Hooks
 */
export function useCerbos(): ClientWithPrincipal {
  const value = useContext(CerbosContext);

  if (!value) {
    throw new Error("CerbosProvider not found");
  }

  return value;
}

/**
 * The result of calling an async method on a client.
 *
 * @typeParam T - Return type of the method.
 *
 * @category Type aliases
 */
export type AsyncResult<T> =
  | AsyncResultLoading
  | AsyncResultSuccess<T>
  | AsyncResultFailure;

/**
 * Result of a pending async method call.
 *
 * @category Interfaces
 */
export interface AsyncResultLoading {
  /**
   * The async method call is in progress.
   */
  isLoading: true;

  /**
   * Data has not yet been returned by the async method call.
   */
  data: undefined;

  /**
   * An error has not yet been thrown by the async method call.
   */
  error: undefined;
}

/**
 * Result of a successful async method call.
 *
 * @typeParam T - Return type of the method.
 *
 * @category Interfaces
 */
export interface AsyncResultSuccess<T> {
  /**
   * The async method call has completed.
   */
  isLoading: false;

  /**
   * Data returned by the async method call.
   */
  data: T;

  /**
   * No error was thrown by the async method call.
   */
  error: undefined;
}

/**
 * Result of a failed async method call.
 *
 * @category Interfaces
 */
export interface AsyncResultFailure {
  /**
   * The async method call has completed.
   */
  isLoading: false;

  /**
   * No data was returned by the async method call.
   */
  data: undefined;

  /**
   * Error thrown by the async method call.
   */
  error: Error;
}

type Methods = "checkResource" | "checkResources" | "isAllowed";

type Result<Method extends Methods> = Awaited<
  ReturnType<ClientWithPrincipal[Method]>
>;

function useCerbosRequest<Method extends Methods>(
  method: Method,
  request: Parameters<ClientWithPrincipal[Method]>[0],
  options?: Omit<RequestOptions, "signal">,
): AsyncResult<Result<Method>> {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Result<Method>>();
  const [error, setError] = useState<Error>();

  const client = useCerbos();
  const requestMemo = useDeepCompareMemoize(request);
  const optionsMemo = useDeepCompareMemoize(options);

  const load = useCallback<(signal: AbortSignal) => Promise<Result<Method>>>(
    async (signal: AbortSignal): Promise<Result<Method>> =>
      // @ts-expect-error -- https://github.com/microsoft/TypeScript/issues/30581
      await client[method](requestMemo, {
        ...optionsMemo,
        signal,
      }),
    [client, method, optionsMemo, requestMemo],
  );

  const updateSignal = client.client["~updateSignal"];

  useEffect(() => {
    setIsLoading(true); // eslint-disable-line react-hooks/set-state-in-effect
    setData(undefined);
    setError(undefined);

    const abortController = new AbortController();

    load(abortController.signal)
      .then((data) => {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
          setData(data);
          setError(undefined);
        }
      })
      .catch((error: unknown) => {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
          setData(undefined);
          setError(
            error instanceof Error
              ? error
              : new Error("An unexpected error occurred", { cause: error }),
          );
        }
      });

    return (): void => {
      abortController.abort();
    };
  }, [load, updateSignal]);

  return { isLoading, data, error } as AsyncResult<Result<Method>>;
}

/**
 * Check the principal's permissions on a resource.
 *
 * @example
 * ```typescript
 * import { useCheckResource } from "@cerbos/react";
 *
 * function SomeComponent() {
 *   const check = useCheckResource({
 *     resource: {
 *       kind: "document",
 *       id: "1",
 *       attr: { owner: "user@example.com" },
 *     },
 *     actions: ["view", "edit"],
 *   });
 *
 *   if (check.isLoading) {
 *     // show spinner
 *     return "Loading...";
 *   }
 *
 *   if (check.error) {
 *     // handle error
 *     return "Error...";
 *   }
 *
 *   return (
 *     <div>
 *       {check.data.allAllowed() && <button>a button</button>}
 *       {check.data.isAllowed("view") && <button>another button</button>}
 *     </div>
 *   );
 * }
 * ```
 *
 * @category Hooks
 */
export function useCheckResource(
  request: Omit<CheckResourceRequest, "principal">,
  options?: Omit<RequestOptions, "signal">,
): AsyncResult<CheckResourcesResult> {
  return useCerbosRequest("checkResource", request, options);
}

/**
 * Check the principal's permissions on a set of resources.
 *
 * @example
 * ```typescript
 * import { useCheckResources } from "@cerbos/react";
 *
 * function SomeComponent() {
 *   const check = useCheckResources({
 *     resources: [
 *       {
 *         resource: {
 *           kind: "document",
 *           id: "1",
 *           attr: { owner: "user@example.com" },
 *         },
 *         actions: ["view", "edit"],
 *       },
 *       {
 *         resource: {
 *           kind: "document",
 *           id: "2",
 *           attr: { owner: "another-user@example.com" },
 *         },
 *         actions: ["view", "edit"],
 *       },
 *     ],
 *   });
 *
 *   if (check.isLoading) {
 *     // show spinner
 *     return "Loading...";
 *   }
 *
 *   if (check.error) {
 *     // handle error
 *     return "Error...";
 *   }
 *
 *   return (
 *     <div>
 *       {check.data.allAllowed({
 *         kind: "document",
 *         id: "1",
 *       }) && <button>a button document 1</button>}
 *       {check.data.allAllowed({
 *         kind: "document",
 *         id: "2",
 *       }) && <button>a button document 2</button>}
 *       {check.data.isAllowed({
 *         resource: { kind: "document", id: "1" },
 *         action: "edit",
 *       }) && <button>another button for document 1</button>}
 *       {check.data.isAllowed({
 *         resource: { kind: "document", id: "2" },
 *         action: "edit",
 *       }) && <button>another button for document 2</button>}
 *     </div>
 *   );
 * }
 * ```
 *
 * @category Hooks
 */
export function useCheckResources(
  request: Omit<CheckResourcesRequest, "principal">,
  options?: Omit<RequestOptions, "signal">,
): AsyncResult<CheckResourcesResponse> {
  return useCerbosRequest("checkResources", request, options);
}

/**
 * Check if the principal is allowed to perform an action on a resource.
 *
 * @example
 * ```typescript
 * import { useIsAllowed } from "@cerbos/react";
 *
 * function SomeComponent() {
 *   const check = useIsAllowed({
 *     resource: {
 *       kind: "document",
 *       id: "1",
 *       attr: { owner: "user@example.com" },
 *     },
 *     action: "view",
 *   });
 *
 *   if (check.isLoading) {
 *     // show spinner
 *     return "Loading...";
 *   }
 *
 *   if (check.error) {
 *     // handle error
 *     return "Error...";
 *   }
 *
 *   return <div>{check.data && <button>a button document 1</button>}</div>;
 * }
 * ```
 *
 * @category Hooks
 */
export function useIsAllowed(
  request: Omit<IsAllowedRequest, "principal">,
  options?: Omit<RequestOptions, "signal">,
): AsyncResult<boolean> {
  return useCerbosRequest("isAllowed", request, options);
}
