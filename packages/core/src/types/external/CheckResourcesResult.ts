import type { CheckResourcesResultMetadata } from "./CheckResourcesResultMetadata.js";
import type { CheckResourcesResultResource } from "./CheckResourcesResultResource.js";
import { Effect } from "./Effect.js";
import type { OutputResult } from "./OutputResult.js";
import type { ValidationError } from "./ValidationError.js";
import type { Value } from "./Value.js";

/**
 * The outcome of checking a principal's permissions on single resource.
 */
export class CheckResourcesResult {
  /**
   * The resource that was checked.
   */
  public resource: CheckResourcesResultResource;

  /**
   * The policy decisions for each action.
   */
  public actions: Record<string, Effect>;

  /**
   * Any schema validation errors for the principal or resource attributes.
   */
  public validationErrors: ValidationError[];

  /**
   * Additional information about how the policy decisions were reached.
   *
   * @remarks
   * `undefined` if {@link CheckResourcesRequest.includeMetadata | includeMetadata} was `false`.
   */
  public metadata: CheckResourcesResultMetadata | undefined;

  /**
   * User-defined outputs from policy rule evaluations.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.27.
   */
  public outputs: OutputResult[];

  /** @internal */
  public constructor({
    resource,
    actions,
    validationErrors,
    metadata,
    outputs,
  }: Pick<
    CheckResourcesResult,
    "resource" | "actions" | "validationErrors" | "metadata" | "outputs"
  >) {
    this.resource = resource;
    this.actions = actions;
    this.validationErrors = validationErrors;
    this.metadata = metadata;
    this.outputs = outputs;
  }

  /**
   * Check if the policy decision was that all input actions should be allowed for the resource.
   */
  public allAllowed(): boolean {
    return Object.values(this.actions).every(
      (effect) => effect === Effect.ALLOW,
    );
  }

  /**
   * List the actions that should be allowed for the resource.
   */
  public allowedActions(): string[] {
    return Object.keys(this.actions).filter(
      (action) => this.actions[action] === Effect.ALLOW,
    );
  }

  /**
   * Check if the policy decision was that a given action should be allowed for the resource.
   *
   * @param action - The action to check.
   * @returns `undefined` if the action is not present in the results.
   */
  public isAllowed(action: string): boolean | undefined {
    switch (this.actions[action]) {
      case Effect.ALLOW:
        return true;

      case Effect.DENY:
        return false;

      default:
        return undefined;
    }
  }

  /**
   * Find the value of the user-defined output for a particular policy rule.
   *
   * @param source - The identifier of the policy rule that produced the output.
   * @returns `undefined` if the result does not include an output for the source.
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.27.
   */
  public output(source: string): Value | undefined {
    return this.outputs.find((output) => output.source === source)?.value;
  }
}
