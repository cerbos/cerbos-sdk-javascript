export interface AsyncResult<T> {
  isLoading: boolean;
  data: T | undefined;
  error: Error | undefined;
}
