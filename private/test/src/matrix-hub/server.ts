import type { Http2Server } from "http2";
import { createServer } from "http2";
import type { AddressInfo } from "net";

import type {
  DescMessage,
  DescMethodUnary,
  MessageInitShape,
  MessageShape,
} from "@bufbuild/protobuf";
import { create, equals, toJsonString } from "@bufbuild/protobuf";
import type { ConnectRouter } from "@connectrpc/connect";
import { Code, ConnectError } from "@connectrpc/connect";
import { connectNodeAdapter } from "@connectrpc/connect-node";
import { expect } from "vitest";

import type { ClientOptions } from "@cerbos/hub";
import { StoresClient } from "@cerbos/hub";

import type { IssueAccessTokenResponseSchema } from "../protobuf/cerbos/cloud/apikey/v1/apikey_pb";
import { ApiKeyService } from "../protobuf/cerbos/cloud/apikey/v1/apikey_pb";
import type {
  ListFilesRequestSchema,
  ListFilesResponseSchema,
} from "../protobuf/cerbos/cloud/store/v1/store_pb";
import { CerbosStoreService } from "../protobuf/cerbos/cloud/store/v1/store_pb";

interface Expectation<I extends DescMessage, O extends DescMessage> {
  headers: Record<string, string | null>;
  request: MessageShape<I>;
  response: () => MessageInitShape<O>;
}

class Expectations<I extends DescMessage, O extends DescMessage> {
  private expectations: Expectation<I, O>[] = [];
  private unexpectedRequests: MessageShape<I>[] = [];

  public constructor(private readonly method: DescMethodUnary<I, O>) {}

  public add(
    accessToken: string | null,
    headers: Record<string, string | null>,
    request: MessageInitShape<I>,
    response: () => MessageInitShape<O>,
  ): void {
    this.expectations.push({
      headers: { ...headers, "x-cerbos-auth": accessToken },
      request: create(this.method.input, request),
      response,
    });
  }

  public reset(): void {
    let passed = true;
    let message = "";

    if (this.expectations.length > 0) {
      message += `\n\n${this.expectations.length} expected requests were not received:\n\n${this.formatRequests(
        this.expectations.map(({ request }) => request),
      )}`;

      passed = false;
    }

    if (this.unexpectedRequests.length > 0) {
      message += `\n\n${this.unexpectedRequests.length} unexpected requests were received:\n\n${this.formatRequests(
        this.unexpectedRequests,
      )}`;
    }

    expect(
      passed,
      `${this.method.toString()} expectations not met.${message}`,
    ).toBe(true);

    this.expectations = [];
    this.unexpectedRequests = [];
  }

  public route(router: ConnectRouter): void {
    router.rpc(this.method, (request, context) => {
      for (const [index, expectation] of this.expectations.entries()) {
        if (equals(this.method.input, request, expectation.request)) {
          this.expectations.splice(index, 1);

          for (const [name, want] of Object.entries(expectation.headers)) {
            const have = context.requestHeader.get(name);
            if (have !== want) {
              throw new ConnectError(
                `Unexpected ${name} header (have ${have}, want ${want}) for ${this.method.toString()} request: ${this.formatRequest(request)}`,
                Code.Unavailable,
              );
            }
          }

          return expectation.response();
        }
      }

      this.unexpectedRequests.push(request);
      throw new ConnectError(
        `Unexpected ${this.method.toString()} request: ${this.formatRequest(request)}`,
        Code.Unavailable,
      );
    });
  }

  private formatRequests(requests: MessageShape<I>[]): string {
    return requests.map((request) => this.formatRequest(request)).join("\n\n");
  }

  private formatRequest(request: MessageShape<I>): string {
    return toJsonString(this.method.input, request, { prettySpaces: 2 });
  }
}

export class Server {
  private readonly server: Http2Server;
  private readonly expectations = {
    issueAccessToken: new Expectations(ApiKeyService.method.issueAccessToken),
    listFiles: new Expectations(CerbosStoreService.method.listFiles),
  } as const;

  public constructor() {
    this.server = createServer(
      connectNodeAdapter({
        routes: (router) => {
          for (const expectations of Object.values(this.expectations)) {
            expectations.route(router);
          }
        },
      }),
    );
  }

  public async start(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.server.once("listening", () => {
        resolve();
      });

      this.server.once("error", (error) => {
        reject(error); // eslint-disable-line @typescript-eslint/prefer-promise-reject-errors
      });

      this.server.listen(0, "127.0.0.1");
    });
  }

  public client(
    options?: Omit<ClientOptions, "baseUrl" | "credentials">,
  ): StoresClient {
    const address = this.server.address() as AddressInfo | null;
    if (!address) {
      throw new Error("Server is not listening");
    }

    return new StoresClient({
      ...options,
      baseUrl: `http://${address.address}:${address.port}`,
      credentials: {
        clientId: "KT8DGHXEZIK2",
        clientSecret: "correct-horse-battery-staple",
      },
    });
  }

  public expectIssueAccessToken(
    response: () => MessageInitShape<typeof IssueAccessTokenResponseSchema>,
    headers: Record<string, string | null> = {},
  ): void {
    this.expectations.issueAccessToken.add(
      null,
      headers,
      {
        clientId: "KT8DGHXEZIK2",
        clientSecret: "correct-horse-battery-staple",
      },
      response,
    );
  }

  public expectListFiles(
    accessToken: string,
    request: MessageInitShape<typeof ListFilesRequestSchema>,
    response: () => MessageInitShape<typeof ListFilesResponseSchema>,
    headers: Record<string, string | null> = {},
  ): void {
    this.expectations.listFiles.add(accessToken, headers, request, response);
  }

  public reset(): void {
    for (const expectations of Object.values(this.expectations)) {
      expectations.reset();
    }
  }
}
