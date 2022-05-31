import { checkResourcesResponseFromProtobuf } from "./convert/fromProtobuf";
import { checkResourcesRequestToProtobuf } from "./convert/toProtobuf";
import type { RPCs, Request, Response } from "./rpcs";
import {
  CheckResourceRequest,
  CheckResourcesRequest,
  CheckResourcesResponse,
  CheckResourcesResult,
  IsAllowedRequest,
  ServerInfo,
  ValidationFailed,
  ValidationFailedCallback,
} from "./types";

export type Transport = <RPC extends keyof RPCs>(
  rpc: RPC,
  request: Request<RPC>
) => Promise<Response<RPC>>;

export interface Options {
  onValidationError?: "throw" | ValidationFailedCallback | undefined;
}

export class Client {
  protected constructor(
    private readonly transport: Transport,
    private readonly options: Options
  ) {}

  public async checkResource({
    resource,
    actions,
    ...rest
  }: CheckResourceRequest): Promise<CheckResourcesResult> {
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

  public async isAllowed({
    action,
    ...rest
  }: IsAllowedRequest): Promise<boolean> {
    const result = await this.checkResource({ actions: [action], ...rest });

    const allowed = result.isAllowed(action);
    if (allowed === undefined) {
      throw new Error("No decision returned for action");
    }

    return allowed;
  }

  public serverInfo(): Promise<ServerInfo> {
    return this.transport("serverInfo", {});
  }
}
