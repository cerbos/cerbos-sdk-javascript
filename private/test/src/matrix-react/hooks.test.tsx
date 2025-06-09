// @vitest-environment jsdom

import { act, cleanup, renderHook } from "@testing-library/react";
import type { PropsWithChildren, ReactElement } from "react";
import type { Mock } from "vitest";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import type { Client, ClientWithPrincipal, RequestOptions } from "@cerbos/core";
import type { Embedded, Loader } from "@cerbos/embedded";
import type { AsyncResult } from "@cerbos/react";
import {
  CerbosProvider,
  useCheckResource,
  useCheckResources,
  useIsAllowed,
} from "@cerbos/react";

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

const client: Pick<Client, "withPrincipal"> = {
  withPrincipal() {
    return {
      client: this,
      ...clientWithPrincipal,
    } as ClientWithPrincipal;
  },
};

const expectedRequestOptions: RequestOptions = expect.objectContaining({
  signal: expect.any(AbortSignal) as unknown as AbortSignal,
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

    function render(
      client: Pick<Client, "withPrincipal">,
    ): ReturnType<typeof renderHook<AsyncResult<unknown>, TParams>> {
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

      return renderHook(hook, {
        wrapper: App,

        initialProps: initialParams,
      });
    }

    it("initially returns loading AsyncState", () => {
      const { result, unmount } = render(client);

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
      const { result } = render(client);

      await act(async () => await vi.advanceTimersByTimeAsync(300));
      expect(clientFn).toHaveBeenCalledTimes(1);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.data).toBe(value);
      expect(result.current.error).toBeUndefined();
    });

    it("avoids unnecessary calls on Cerbos Client when rerendered with the values that match", async () => {
      const { rerender, result } = render(client);
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
      const { rerender, result } = render(client);

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

    it("calls Cerbos Client again when a new embedded bundle is activated", async () => {
      const loader = { _active: Symbol("old LoadResult") };

      const embedded: Pick<Embedded, "loader" | "withPrincipal"> = {
        loader: loader as unknown as Loader,
        withPrincipal() {
          return {
            client: this,
            ...clientWithPrincipal,
          } as ClientWithPrincipal<Embedded>;
        },
      };

      const { rerender, result } = render(embedded);

      await act(async () => await vi.advanceTimersByTimeAsync(300));

      loader._active = Symbol("new LoadResult");
      rerender(initialParams);

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

      const { unmount } = render(client);

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
