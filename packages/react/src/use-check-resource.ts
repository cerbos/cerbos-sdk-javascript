import type {
  CheckResourceRequest,
  CheckResourcesResult,
  RequestOptions,
} from "@cerbos/core";
// eslint-disable-next-line import/no-extraneous-dependencies -- TODO: not sure about this rule, maybe importing from peer deps should be allowed?
import isEqual from "lodash/isEqual";
// eslint-disable-next-line import/no-extraneous-dependencies -- TODO: not sure about this rule, maybe importing from peer deps should be allowed?
import { useCallback, useEffect, useRef, useState } from "react";

import { useCerbos } from "./use-cerbos";

export interface UseCheckResourceReturn {
  isLoading: boolean;
  data: CheckResourcesResult | undefined;
  error: Error | undefined;
}

export type UseCheckResourceParams = Omit<CheckResourceRequest, "principal">;

export function useCheckResource(
  request: UseCheckResourceParams,
  options?: RequestOptions,
): UseCheckResourceReturn {
  const cerbos = useCerbos();

  const [data, setData] = useState<CheckResourcesResult>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);

  const previousRequest = useRef<UseCheckResourceParams>();
  const previousOptions = useRef<RequestOptions>();

  const checkResource = useCallback(
    async (request: UseCheckResourceParams, options?: RequestOptions) => {
      setIsLoading(true);
      setError(undefined);
      setData(undefined);

      try {
        const result = await cerbos.checkResource(request, options);
        setData(result);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [cerbos],
  );

  useEffect(() => {
    if (
      !isEqual(request, previousRequest.current) ||
      !isEqual(options, previousOptions.current)
    ) {
      previousRequest.current = request;
      previousOptions.current = options;
      void checkResource(request, options);
    }
  }, [checkResource, options, request]);

  return {
    data,
    isLoading,
    error,
  };
}
