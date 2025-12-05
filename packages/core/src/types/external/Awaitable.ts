/**
 * A value available now or in the future.
 *
 * @public
 */
export type Awaitable<T> = T | PromiseLike<T>;
