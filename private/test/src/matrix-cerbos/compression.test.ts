import type { OutgoingHttpHeaders } from "http2";
import { connect, createServer } from "http2";
import type { AddressInfo } from "net";

import { beforeAll, beforeEach, expect, it } from "vitest";

import { Compression, GRPC } from "@cerbos/grpc";

import { describeIfCerbosVersionIsAtLeast } from "../helpers";
import { ports as serverPorts } from "../servers";

describeIfCerbosVersionIsAtLeast("0.19.0")("gRPC message compression", () => {
  let port: number;

  const encoding = {
    request: [] as (string | string[] | undefined)[],
    response: [] as (string | string[] | undefined)[],
  };

  beforeAll(async () => {
    const ports = await serverPorts();
    const proxyClient = connect(`http://localhost:${ports.plaintext.grpc}`);
    const proxyServer = createServer();

    proxyServer.on("stream", (incoming, requestHeaders) => {
      encoding.request.push(requestHeaders["grpc-encoding"]);

      const responseTrailers = Promise.withResolvers<OutgoingHttpHeaders>();

      incoming.on("wantTrailers", () => {
        void responseTrailers.promise.then((trailers) => {
          incoming.sendTrailers(trailers);
        });
      });

      const outgoing = proxyClient.request(requestHeaders, {
        waitForTrailers: true,
      });

      outgoing.on("response", (responseHeaders) => {
        encoding.response.push(responseHeaders["grpc-encoding"]);

        const wait = !responseHeaders["grpc-status"];
        incoming.respond(responseHeaders, {
          waitForTrailers: wait,
          endStream: !wait,
        });
      });

      outgoing.on("trailers", (trailers: OutgoingHttpHeaders) => {
        responseTrailers.resolve(trailers);
      });

      incoming.pipe(outgoing);
      outgoing.pipe(incoming);
    });

    await new Promise<void>((resolve) => {
      proxyServer.listen(0, "localhost", () => {
        resolve();
      });
    });

    port = (proxyServer.address() as AddressInfo).port;
  });

  beforeEach(() => {
    encoding.request = [];
    encoding.response = [];
  });

  it.each([
    { compression: Compression.NONE, encoding: undefined },
    { compression: Compression.GZIP, encoding: "gzip" },
  ])(
    "compresses messages exchanged between client and server with $compression",
    async ({ compression, encoding: wantEncoding }) => {
      const client = new GRPC(`localhost:${port}`, {
        tls: false,
        compression,
      });

      await client.serverInfo();

      expect(encoding).toEqual({
        request: [wantEncoding],
        response: [wantEncoding],
      });
    },
  );
});
