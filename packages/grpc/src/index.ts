import { SecureContext } from "tls";

import {
  Client,
  Options as ClientOptions,
  NotOK,
  Response,
  Status,
  Transport,
} from "@cerbos/core";
import {
  ChannelCredentials,
  Client as GenericClient,
  MethodDefinition,
} from "@grpc/grpc-js";

import { CerbosServiceService as cerbosService } from "./protobuf/cerbos/svc/v1/svc";

// eslint-disable-next-line @typescript-eslint/no-var-requires -- Can't import package.json because it is outside of the project's rootDir
const { version } = require("../package.json") as { version: string };

export interface Options extends ClientOptions {
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
  private readonly client: GenericClient;

  public constructor(target: string, options: Options) {
    const client = new GenericClient(target, credentials(options), {
      "grpc.primary_user_agent": `cerbos-sdk-javascript-grpc/${version}`,
    });

    const transport: Transport = (rpc, request) => {
      const { path, requestSerialize, responseDeserialize } = cerbosService[
        rpc
      ] as MethodDefinition<typeof request, Response<typeof rpc>>; // https://github.com/microsoft/TypeScript/issues/30581

      return new Promise((resolve, reject) => {
        client.makeUnaryRequest(
          path,
          requestSerialize,
          responseDeserialize,
          request,
          (error, response) => {
            if (error) {
              reject(new NotOK(error.code || Status.UNKNOWN, error.details));
            } else if (!response) {
              reject(new NotOK(Status.UNKNOWN, "No response received"));
            } else {
              resolve(response);
            }
          }
        );
      });
    };

    super(transport, options);

    this.client = client;
  }

  public close(): void {
    this.client.close();
  }
}
