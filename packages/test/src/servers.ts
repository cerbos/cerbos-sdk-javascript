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
  otelcol: number;
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

  const output = JSON.parse(stdout) as DockerComposeContainer[];

  return {
    grpc: {
      plaintext: port(output, "plaintext", 3593),
      tls: port(output, "tls", 3593),
      mtls: port(output, "mtls", 3593),
      mutable: port(output, "mutable", 3593),
      get tracing(): number {
        return port(output, "tracing", 3593);
      },
    },
    http: {
      plaintext: port(output, "plaintext", 3592),
      tls: port(output, "tls", 3592),
      mutable: port(output, "mutable", 3592),
      get tracing(): number {
        return port(output, "tracing", 3592);
      },
    },
    get otelcol(): number {
      return port(output, "otelcol-test", 8080);
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
