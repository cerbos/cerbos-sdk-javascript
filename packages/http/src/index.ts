import { Client, ServerInfo } from "@cerbos/core";

import type { paths } from "./openapi";

type Path = keyof paths;
type Method<P extends Path> = keyof paths[P];
type Response<P extends Path, M extends Method<P>> = paths[P][M] extends {
  responses: { 200: { schema: infer Schema } };
}
  ? Schema
  : never;

export class HTTP implements Client {
  public constructor(private readonly url: string) {}

  public async serverInfo(): Promise<ServerInfo> {
    const { buildDate, commit, version } = await this.performRequest(
      "/api/server_info",
      "get"
    );

    return {
      buildDate: buildDate ?? "",
      commit: commit ?? "",
      version: version ?? "",
    };
  }

  private async performRequest<
    Path extends keyof paths,
    Method extends string & keyof paths[Path]
  >(path: Path, method: Method): Promise<Response<Path, Method>> {
    const response = await fetch(`${this.url}${path}`, { method });
    return (await response.json()) as Response<Path, Method>;
  }
}
