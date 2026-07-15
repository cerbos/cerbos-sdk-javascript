/**
 * An error encountered when evaluating a policy decision.
 */
export type EvaluationError = CommonExpressionLanguageEvaluationError;

/**
 * An error encountered when evaluating a {@link https://docs.cerbos.dev/cerbos/latest/policies/conditions.html | Common Expression Language (CEL)} expression.
 */
export interface CommonExpressionLanguageEvaluationError {
  /**
   * Discriminator to mark the error as a CEL evaluation error.
   */
  kind: "cel";

  /**
   * The expression that was evaluated.
   */
  expression: string;

  /**
   * The error message.
   */
  message: string;
}

/**
 * Type guard to check if an {@link EvaluationError} is a {@link CommonExpressionLanguageEvaluationError}.
 */
export function evaluationErrorIsCommonExpressionLanguageEvaluationError(
  source: EvaluationError,
): source is CommonExpressionLanguageEvaluationError {
  return source.kind === "cel"; // eslint-disable-line @typescript-eslint/no-unnecessary-condition
}
