export type OmitFromEach<T, K extends string> = T extends unknown
  ? Omit<T, K>
  : never;

export const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
