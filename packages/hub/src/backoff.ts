const minInterval = 500;
const maxInterval = 60 * 1e3;
const multiplier = 1.5;
const randomizationFactor = 0.5;

const useMaxIntervalAfterAttempt = Math.ceil(
  Math.log(maxInterval / minInterval) / Math.log(multiplier),
);

export function backoff(attempt: number): number {
  const interval =
    attempt > useMaxIntervalAfterAttempt
      ? maxInterval
      : Math.pow(multiplier, attempt - 1) * minInterval;

  return interval * (1 + (2 * Math.random() - 1) * randomizationFactor);
}
