export type OmitFromEach<T, K extends string> = T extends unknown
  ? Omit<T, K>
  : never;

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
