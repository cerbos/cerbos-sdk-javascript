import { checkResourcesResponseFromProtobuf } from "./convert/fromProtobuf";
import { checkResourcesRequestToProtobuf } from "./convert/toProtobuf";
import type { RPCs, Request, Response } from "./rpcs";
import {
  CheckResourceRequest,
  CheckResourcesRequest,
  CheckResourcesResponse,
  CheckResourcesResult,
  ServerInfo,
} from "./types";

export type Transport = <RPC extends keyof RPCs>(
  rpc: RPC,
  request: Request<RPC>
) => Promise<Response<RPC>>;

export class Client {
  protected constructor(private readonly transport: Transport) {}

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
    return checkResourcesResponseFromProtobuf(
      await this.transport(
        "checkResources",
        checkResourcesRequestToProtobuf(request)
      )
    );
  }

  public serverInfo(): Promise<ServerInfo> {
    return this.transport("serverInfo", {});
  }
}
