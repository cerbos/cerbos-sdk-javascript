import type {
  CheckResourcesRequest,
  CheckResourcesResponse,
} from "@cerbos/core";
// eslint-disable-next-line import/no-extraneous-dependencies  -- TODO: not sure about this rule, maybe importing from peer deps should be allowed?
import isEqual from "lodash/isEqual";
// eslint-disable-next-line import/no-extraneous-dependencies  -- TODO: not sure about this rule, maybe importing from peer deps should be allowed?
import { useCallback, useEffect, useRef, useState } from "react";

import { useCerbos } from "./use-cerbos";

export interface UseCheckResourcesReturn {
  isLoading: boolean;
  data: CheckResourcesResponse | undefined;
  error: Error | undefined;
}

export type UseCheckResourcesParams = Omit<CheckResourcesRequest, "principal">;

export function useCheckResources(
  request: UseCheckResourcesParams,
): UseCheckResourcesReturn {
  const cerbos = useCerbos();

  const [data, setData] = useState<CheckResourcesResponse>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);

  const previousRequest = useRef<UseCheckResourcesParams>();

  const checkResources = useCallback(
    async (request: UseCheckResourcesParams) => {
      setIsLoading(true);
      setError(undefined);
      setData(undefined);

      try {
        const result = await cerbos.checkResources(request);
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
    if (!isEqual(request, previousRequest.current)) {
      previousRequest.current = request;
      void checkResources(request);
    }
  }, [checkResources, request]);

  return {
    data,
    isLoading,
    error,
  };
}
