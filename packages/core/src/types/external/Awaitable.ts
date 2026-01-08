/**
 * A value available now or in the future.
 *
 * @typeParam T - Type of the eventual value.
 */
export type Awaitable<T> = T | PromiseLike<T>;
