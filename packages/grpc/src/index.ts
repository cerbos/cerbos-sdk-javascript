import { SecureContext } from "tls";

import { Client, ServerInfo } from "@cerbos/core";
import {
  ChannelCredentials,
  Client as GenericClient,
  MethodDefinition,
} from "@grpc/grpc-js";

import { CerbosServiceService as cerbosService } from "./protobuf/cerbos/svc/v1/svc";

export interface Options {
  tls: boolean | SecureContext;
}

const credentials = ({ tls }: Options): ChannelCredentials => {
  if (!tls) {
    return ChannelCredentials.createInsecure();
  }

  if (tls === true) {
    return ChannelCredentials.createSsl();
  }

  return ChannelCredentials.createFromSecureContext(tls);
};

export class GRPC implements Client {
  private readonly client: GenericClient;

  public constructor(target: string, options: Options) {
    this.client = new GenericClient(target, credentials(options));
  }

  public serverInfo(): Promise<ServerInfo> {
    return this.performRequest(cerbosService.serverInfo, {});
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
