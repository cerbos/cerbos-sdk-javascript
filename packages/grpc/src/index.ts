import { SecureContext } from "tls";

import { Client, Transport } from "@cerbos/core";
import { ChannelCredentials, Client as GenericClient } from "@grpc/grpc-js";

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

export class GRPC extends Client {
  public constructor(target: string, options: Options) {
    const client = new GenericClient(target, credentials(options));

    const transport: Transport = (rpc, request) => {
      const { path, requestSerialize, responseDeserialize } =
        cerbosService[rpc];

      return new Promise((resolve, reject) => {
        client.makeUnaryRequest(
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
    };

    super(transport);
  }
}
