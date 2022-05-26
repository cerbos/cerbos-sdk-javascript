import { ServerInfoRequest } from "./protobuf/cerbos/request/v1/request";
import { ServerInfoResponse } from "./protobuf/cerbos/response/v1/response";
import { ServerInfo } from "./types";

export interface RPCs {
  serverInfo: [ServerInfoRequest, ServerInfoResponse];
}

export type Request<RPC extends keyof RPCs> = RPCs[RPC][0];
export type Response<RPC extends keyof RPCs> = RPCs[RPC][1];

export type Transport = <RPC extends keyof RPCs>(
  rpc: RPC,
  request: Request<RPC>
) => Promise<Response<RPC>>;

export class Client {
  protected constructor(private readonly transport: Transport) {}

  public serverInfo(): Promise<ServerInfo> {
    return this.transport("serverInfo", {});
  }
}
