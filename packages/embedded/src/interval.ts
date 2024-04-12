export function constrainAutoUpdateInterval(
  interval: number | undefined,
): number {
  return Math.max(interval ?? 60000, 10000);
}
