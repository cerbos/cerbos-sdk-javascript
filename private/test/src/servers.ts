import { execFile as execFileCallback } from "child_process";
import { readFileSync } from "fs";
import { resolve } from "path";
import { promisify } from "util";

import type { AdminCredentials } from "@cerbos/core";
import { gte as semverGte } from "semver";

const execFile = promisify(execFileCallback);

export const cerbosVersion = process.env["CERBOS_VERSION"] ?? "0.16.0";

export function cerbosVersionIsAtLeast(version: string): boolean {
  return semverGte(cerbosVersion, `${version}-prerelease`);
}

export interface CerbosPorts {
  grpc: number;
  http: number;
}

export interface Ports {
  jaeger: number;
  mtls: number;
  mutable: CerbosPorts;
  plaintext: CerbosPorts;
  tls: CerbosPorts;
  tracing: CerbosPorts;
}

export type CerbosService = keyof {
  [Service in keyof Ports as Ports[Service] extends CerbosPorts
    ? Service
    : never]: true;
};

interface DockerComposeContainer {
  Service: string;
  Publishers:
    | {
        PublishedPort: number;
        TargetPort: number;
      }[]
    | null;
}

export async function ports(): Promise<Ports> {
  const { stdout } = await execFile("docker", [
    "compose",
    "--file",
    resolve(__dirname, "../servers/docker-compose.yaml"),
    "ps",
    "--format",
    "json",
  ]);

  const containers = stdout
    .split("\n")
    .filter((line) => line !== "")
    .flatMap(
      (line) =>
        JSON.parse(line) as DockerComposeContainer | DockerComposeContainer[],
    );

  return {
    jaeger: port(containers, "jaeger", 16685),
    mtls: port(containers, "mtls", 3593),
    mutable: cerbosPorts(containers, "mutable"),
    plaintext: cerbosPorts(containers, "plaintext"),
    tls: cerbosPorts(containers, "tls"),
    get tracing(): CerbosPorts {
      return cerbosPorts(containers, "tracing");
    },
  };
}

function port(
  containers: DockerComposeContainer[],
  service: string,
  targetPort: number,
): number {
  const container = containers.find(
    (container) => container.Service === service,
  );

  if (!container) {
    throw new Error(`Couldn't find container for ${service} service`);
  }

  const publisher = (container.Publishers ?? []).find(
    (publisher) => publisher.TargetPort === targetPort,
  );

  if (!publisher || publisher.PublishedPort === 0) {
    throw new Error(
      `Couldn't find published port ${targetPort} for ${service} service`,
    );
  }

  return publisher.PublishedPort;
}

function cerbosPorts(
  containers: DockerComposeContainer[],
  service: string,
): CerbosPorts {
  return {
    grpc: port(containers, service, 3593),
    http: port(containers, service, 3592),
  };
}

export function readPEM(filename: string): string {
  return readFileSync(
    resolve(__dirname, "../servers/tmp/certificates", filename),
    { encoding: "utf-8" },
  );
}

export const ca = readPEM("server.root.crt");

export const adminCredentials: AdminCredentials = {
  username: "cerbos",
  password: "cerbosAdmin",
};
