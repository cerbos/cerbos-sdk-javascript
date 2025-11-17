export type Deferred<T> = () => Promise<T>;

export function defer<T>(promise: PromiseLike<T>): Deferred<T> {
  const deferred = new Promise<{ resolved: T } | { rejected: unknown }>(
    (resolve) => {
      promise.then(
        (resolved) => {
          resolve({ resolved });
        },
        (rejected: unknown) => {
          resolve({ rejected });
        },
      );
    },
  );

  return async () => {
    const result = await deferred;

    if ("rejected" in result) {
      throw result.rejected;
    }

    return result.resolved;
  };
}
