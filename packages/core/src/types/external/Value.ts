/**
 * Any JSON-serializable value.
 */
export type Value =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Value }
  | Value[];
