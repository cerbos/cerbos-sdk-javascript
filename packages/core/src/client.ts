import {
  checkResourcesResponseFromProtobuf,
  planResourcesResponseFromProtobuf,
} from "./convert/fromProtobuf";
import {
  checkResourcesRequestToProtobuf,
  planResourcesRequestToProtobuf,
} from "./convert/toProtobuf";
import { ValidationFailed } from "./errors";
import type { _RPCs, _Request, _Response } from "./rpcs";
import type {
  CheckResourceRequest,
  CheckResourcesRequest,
  CheckResourcesResponse,
  CheckResourcesResult,
  IsAllowedRequest,
  PlanResourcesRequest,
  PlanResourcesResponse,
  ServerInfo,
  ValidationFailedCallback,
} from "./types";

/** @internal */
export type _Transport = <RPC extends keyof _RPCs>(
  rpc: RPC,
  request: _Request<RPC>
) => Promise<_Response<RPC>>;

/**
 * Options for creating a new {@link Client}.
 *
 * @public
 */
export interface Options {
  /**
   * Action to take when input fails schema validation.
   *
   * @remarks
   * Possible values are
   *
   * - `"throw"`, to throw a {@link ValidationFailed} error;
   *
   * - a {@link ValidationFailedCallback} function; or
   *
   * - `undefined`, to return the validation errors in the response.
   *
   * @defaultValue `undefined`
   */
  onValidationError?: "throw" | ValidationFailedCallback | undefined;

  /**
   * Identifier of the playground instance to use when prototyping against the hosted demo policy decision point.
   *
   * @defaultValue `undefined`
   */
  playgroundInstance?: string | undefined;
}

/**
 * Base implementation of a client for interacting with the Cerbos policy decision point server.
 *
 * @public
 */
export abstract class Client {
  /** @internal */
  protected constructor(
    private readonly transport: _Transport,
    private readonly options: Options
  ) {}

  /**
   * Check a principal's permissions on a resource.
   *
   * @example
   * ```typescript
   * const decision = await cerbos.checkResource({
   *   principal: { id: "user@example.com", roles: ["USER"] },
   *   resource: { kind: "document", id: "1" },
   *   actions: ["view", "edit"],
   * });
   *
   * decision.isAllowed("view"); // => true
   * ```
   */
  public async checkResource(
    request: CheckResourceRequest
  ): Promise<CheckResourcesResult> {
    const { resource, actions, ...rest } = request;

    const response = await this.checkResources({
      resources: [{ resource, actions }],
      ...rest,
    });

    const result = response.findResult(resource);
    if (!result) {
      throw new Error("No decision returned for resource");
    }

    return result;
  }

  /**
   * Check a principal's permissions on a set of resources.
   *
   * @example
   * ```typescript
   * const decision = await cerbos.checkResources({
   *   principal: { id: "user@example.com", roles: ["USER"] },
   *   resources: [
   *     {
   *       resource: { kind: "document", id: "1" },
   *       actions: ["view", "edit"],
   *     },
   *     {
   *       resource: { kind: "image", id: "1" },
   *       actions: ["delete"],
   *     },
   *   ],
   * });
   *
   * decision.isAllowed({
   *   resource: { kind: "document", id: "1" },
   *   action: "view",
   * }); // => true
   * ```
   */
  public async checkResources(
    request: CheckResourcesRequest
  ): Promise<CheckResourcesResponse> {
    const { onValidationError } = this.options;

    const response = checkResourcesResponseFromProtobuf(
      await this.transport(
        "checkResources",
        checkResourcesRequestToProtobuf(request)
      )
    );

    if (onValidationError) {
      const validationErrors = response.results.flatMap(
        ({ validationErrors }) => validationErrors
      );

      if (validationErrors.length > 0) {
        if (onValidationError === "throw") {
          throw new ValidationFailed(validationErrors);
        }

        onValidationError(validationErrors);
      }
    }

    return response;
  }

  /**
   * Check if a principal is allowed to perform an action on a resource.
   *
   * @example
   * ```typescript
   * await cerbos.isAllowed({
   *   principal: { id: "user@example.com", roles: ["USER"] },
   *   resource: { kind: "document", id: "1" },
   *   action: "view",
   * }); // => true
   * ```
   */
  public async isAllowed(request: IsAllowedRequest): Promise<boolean> {
    const { action, ...rest } = request;
    const result = await this.checkResource({ actions: [action], ...rest });

    const allowed = result.isAllowed(action);
    if (allowed === undefined) {
      throw new Error("No decision returned for action");
    }

    return allowed;
  }

  /**
   * Produce a query plan that can be used to obtain a list of resources on which a principal is allowed to perform a particular action.
   *
   * @example
   * ```typescript
   * const plan = await cerbos.planResources({
   *   principal: { id: "user@example.com", roles: ["USER"] },
   *   resource: { kind: "document" },
   * });
   * ```
   */
  public async planResources(
    request: PlanResourcesRequest
  ): Promise<PlanResourcesResponse> {
    return planResourcesResponseFromProtobuf(
      await this.transport(
        "planResources",
        planResourcesRequestToProtobuf(request)
      )
    );
  }

  /**
   * Retrieve information about the Cerbos policy decision point server.
   */
  public serverInfo(): Promise<ServerInfo> {
    return this.transport("serverInfo", {});
  }
}
