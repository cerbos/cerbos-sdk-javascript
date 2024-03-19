import type { IsAllowedRequest } from "@cerbos/core";
// eslint-disable-next-line import/no-extraneous-dependencies  -- TODO: not sure about this rule, maybe importing from peer deps should be allowed?
import { isEqual } from "lodash";
// eslint-disable-next-line import/no-extraneous-dependencies  -- TODO: not sure about this rule, maybe importing from peer deps should be allowed?
import { useCallback, useEffect, useRef, useState } from "react";

import { useCerbos } from "./use-cerbos";

interface UseIsAllowedReturn {
  isLoading: boolean;
  data: boolean;
  error: Error | undefined;
}

export type UseIsAllowedParams = Omit<IsAllowedRequest, "principal">;

export function useIsAllowed(
  request: Omit<IsAllowedRequest, "principal">,
): UseIsAllowedReturn {
  const cerbos = useCerbos();

  const [data, setData] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);

  const previousRequest = useRef<UseIsAllowedParams>();

  const isAllowed = useCallback(
    async (request: UseIsAllowedParams) => {
      setIsLoading(true);
      setError(undefined);
      setData(false);

      try {
        const result = await cerbos.isAllowed(request);
        setData(result);
      } catch (e) {
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
      void isAllowed(request);
    }
  }, [isAllowed, request]);

  return {
    data,
    isLoading,
    error,
  };
}
