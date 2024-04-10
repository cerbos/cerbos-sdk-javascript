// @vitest-environment jsdom

import type { Client, ClientWithPrincipal, RequestOptions } from "@cerbos/core";
import type { AsyncResult } from "@cerbos/react";
import {
  CerbosProvider,
  useCheckResource,
  useCheckResources,
  useIsAllowed,
} from "@cerbos/react";
import { act, cleanup, renderHook } from "@testing-library/react";
import type { PropsWithChildren, ReactElement } from "react";
import type { Mock } from "vitest";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

const clientWithPrincipal: Pick<
  ClientWithPrincipal,
  "checkResource" | "checkResources" | "isAllowed"
> = {
  checkResource: vi.fn(),
  checkResources: vi.fn(),
  isAllowed: vi.fn(),
};

beforeAll(() => {
  vi.useFakeTimers();
});

afterAll(() => {
  vi.useRealTimers();
});

describe("react hooks", () => {
  testCerbosHook(
    "useCheckResource",
    useCheckResource,
    clientWithPrincipal.checkResource as Mock,
    {
      resource: {
        kind: "testResource",
        id: "1",
      },
      actions: ["read"],
    },
    {
      resource: {
        kind: "testResource",
        id: "2",
      },
      actions: ["write"],
    },
  );

  testCerbosHook(
    "useCheckResources",
    useCheckResources,
    clientWithPrincipal.checkResources as Mock,
    {
      resources: [
        {
          resource: {
            kind: "testResource",
            id: "1",
          },
          actions: ["read"],
        },
      ],
    },
    {
      resources: [
        {
          resource: {
            kind: "testResource",
            id: "2",
          },
          actions: ["write"],
        },
      ],
    },
  );

  testCerbosHook(
    "useIsAllowed",
    useIsAllowed,
    clientWithPrincipal.isAllowed as Mock,
    {
      resource: {
        kind: "testResource",
        id: "1",
      },
      action: "read",
    },
    {
      resource: {
        kind: "testResource",
        id: "2",
      },
      action: "read",
    },
  );
});

const client: Partial<Client> = {
  withPrincipal: vi.fn().mockReturnValue(clientWithPrincipal),
};

function App({ children }: PropsWithChildren<object>): ReactElement {
  return (
    <CerbosProvider
      client={client as Client}
      principal={{
        id: "test-user-1",
        roles: ["role-1", "role-2"],
      }}
    >
      {children}
    </CerbosProvider>
  );
}

const expectedRequestOptions: RequestOptions = expect.objectContaining({
  signal: expect.any(AbortSignal) as AbortSignal,
}) as RequestOptions;

function testCerbosHook<TParams>(
  describeText: string,
  hook: (params: TParams) => AsyncResult<unknown>,
  clientFn: Mock,
  initialParams: TParams,
  nextParams: TParams,
): void {
  describe(describeText, () => {
    const value = Symbol(describeText);

    resolveAfterWithValue(clientFn, 300, value);

    afterEach(() => {
      cleanup();
    });

    beforeEach(() => {
      vi.clearAllMocks();
    });

    function render(): ReturnType<
      typeof renderHook<AsyncResult<unknown>, TParams>
    > {
      return renderHook(hook, {
        wrapper: App,
        initialProps: initialParams,
      });
    }

    it("initially returns loading AsyncState", () => {
      const { result, unmount } = render();

      expect(clientFn).toHaveBeenLastCalledWith(
        initialParams,
        expectedRequestOptions,
      );
      expect(clientFn).toHaveBeenCalledTimes(1);

      expect(result.current.isLoading).toBe(true);
      expect(result.current.data).toBeUndefined();
      expect(result.current.error).toBeUndefined();

      unmount();
    });

    it("returns data after loading", async () => {
      const { result } = render();

      await act(async () => await vi.advanceTimersByTimeAsync(300));
      expect(clientFn).toHaveBeenCalledTimes(1);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.data).toBe(value);
      expect(result.current.error).toBeUndefined();
    });

    it("avoids unnecessary calls on Cerbos Client when rerendered with the values that match", async () => {
      const { rerender, result } = render();
      await act(async () => await vi.advanceTimersByTimeAsync(300));

      rerender(
        JSON.parse(JSON.stringify(initialParams)) as typeof initialParams,
      );
      expect(result.current.isLoading).toBe(false);
      await act(async () => await vi.advanceTimersByTimeAsync(300));
      expect(result.current.isLoading).toBe(false);
      expect(clientFn).toHaveBeenCalledTimes(1);
    });

    it("calls Cerbos Client with new values when rerendered with different values", async () => {
      const { rerender, result } = render();

      await act(async () => await vi.advanceTimersByTimeAsync(300));

      rerender(nextParams);
      expect(clientFn).toHaveBeenLastCalledWith(
        nextParams,
        expectedRequestOptions,
      );
      expect(clientFn).toHaveBeenCalledTimes(2);
      expect(result.current.isLoading).toBe(true);
      await act(async () => await vi.advanceTimersByTimeAsync(300));
      expect(result.current.isLoading).toBe(false);
      expect(result.current.data).toBe(value);
      expect(result.current.error).toBeUndefined();
    });

    it("aborts request when unmounted", () => {
      let abortSignal: AbortSignal | undefined = undefined;

      clientFn.mockImplementation((_, opt: RequestOptions) => {
        abortSignal = opt.signal;
      });

      const { unmount } = render();

      expect(abortSignal).toBeInstanceOf(AbortSignal);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect(abortSignal!.aborted).toBe(false);

      unmount();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect(abortSignal!.aborted).toBe(true);
    });
  });
}

async function wait(duration: number): Promise<void> {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
}

function resolveAfterWithValue(fn: Mock, time: number, value: unknown): void {
  fn.mockImplementation(async () => {
    await wait(time);
    return value;
  });
}
