import { execFile as execFileCallback } from "child_process";
import { resolve } from "path";
import { promisify } from "util";

import { gte as semverGte } from "semver";

const execFile = promisify(execFileCallback);

export const cerbosVersion = process.env["CERBOS_VERSION"] ?? "0.16.0";

export function cerbosVersionIsAtLeast(version: string): boolean {
  return semverGte(cerbosVersion, `${version}-prerelease`);
}

export interface Ports {
  grpc: {
    plaintext: number;
    tls: number;
    mtls: number;
    mutable: number;
    tracing: number;
  };
  http: {
    plaintext: number;
    tls: number;
    mutable: number;
    tracing: number;
  };
  jaeger: number;
}

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
    grpc: {
      plaintext: port(containers, "plaintext", 3593),
      tls: port(containers, "tls", 3593),
      mtls: port(containers, "mtls", 3593),
      mutable: port(containers, "mutable", 3593),
      get tracing(): number {
        return port(containers, "tracing", 3593);
      },
    },
    http: {
      plaintext: port(containers, "plaintext", 3592),
      tls: port(containers, "tls", 3592),
      mutable: port(containers, "mutable", 3592),
      get tracing(): number {
        return port(containers, "tracing", 3592);
      },
    },
    get jaeger(): number {
      return port(containers, "jaeger", 16685);
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
