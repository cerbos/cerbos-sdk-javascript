import { Client, ServerInfo } from "@cerbos/core";
import {
  ChannelCredentials,
  Client as GenericClient,
  MethodDefinition,
} from "@grpc/grpc-js";

import { ServerInfoRequest } from "./protobuf/cerbos/request/v1/request_pb";
import { CerbosServiceService as cerbosService } from "./protobuf/cerbos/svc/v1/svc_grpc_pb";

export class GRPC implements Client {
  private readonly client: GenericClient;

  public constructor(target: string) {
    this.client = new GenericClient(
      target,
      ChannelCredentials.createInsecure()
    );
  }

  public async serverInfo(): Promise<ServerInfo> {
    const response = await this.performRequest(
      cerbosService.serverInfo,
      new ServerInfoRequest()
    );

    return response.toObject();
  }

  private performRequest<Request, Response>(
    {
      path,
      requestSerialize,
      responseDeserialize,
    }: MethodDefinition<Request, Response>,
    request: Request
  ): Promise<Response> {
    return new Promise<Response>((resolve, reject) => {
      this.client.makeUnaryRequest(
        path,
        requestSerialize,
        responseDeserialize,
        request,
        (error, response) => {
          if (error || !response) {
            reject(error ?? new Error("Didn't receive a response"));
          } else {
            resolve(response);
          }
        }
      );
    });
  }
}
