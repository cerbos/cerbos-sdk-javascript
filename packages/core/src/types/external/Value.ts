/**
 * Any JSON-serializable value.
 *
 * @public
 */
export type Value =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Value }
  | Value[];
