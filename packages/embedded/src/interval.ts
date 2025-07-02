export function constrainAutoUpdateInterval(
  interval: number | undefined,
): number {
  return Math.max(interval ?? 60_000, 10_000);
}
