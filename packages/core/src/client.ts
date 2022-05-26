import { checkResourcesResponseFromProtobuf } from "./convert/fromProtobuf";
import { checkResourcesRequestToProtobuf } from "./convert/toProtobuf";
import type { RPCs, Request, Response } from "./rpcs";
import {
  CheckResourcesRequest,
  CheckResourcesResponse,
  ServerInfo,
} from "./types";

export type Transport = <RPC extends keyof RPCs>(
  rpc: RPC,
  request: Request<RPC>
) => Promise<Response<RPC>>;

export class Client {
  protected constructor(private readonly transport: Transport) {}

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
