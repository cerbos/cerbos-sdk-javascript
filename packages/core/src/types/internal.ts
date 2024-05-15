export type OmitFromEach<T, K extends string> = T extends unknown
  ? Omit<T, K>
  : never;
