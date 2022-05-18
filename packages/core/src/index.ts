export interface Client {
  serverInfo(): Promise<ServerInfo>;
}

export interface ServerInfo {
  buildDate: string;
  commit: string;
  version: string;
}
