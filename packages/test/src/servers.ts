import { execFile as execFileCallback } from "child_process";
import { resolve } from "path";
import { promisify } from "util";

import { gte as semverGte } from "semver";

const execFile = promisify(execFileCallback);

export const cerbosVersion = process.env["CERBOS_VERSION"] ?? "0.16.0";

export const cerbosVersionIsAtLeast = (version: string): boolean =>
  semverGte(cerbosVersion, version);

export interface Ports {
  grpc: {
    plaintext: number;
    tls: number;
    mtls: number;
  };
  http: number;
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

export const ports = async (): Promise<Ports> => {
  const { stdout } = await execFile("docker", [
    "compose",
    "--file",
    resolve(__dirname, "../servers/docker-compose.yml"),
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
    },
    http: port(output, "plaintext", 3592),
  };
};

const port = (
  containers: DockerComposeContainer[],
  service: string,
  targetPort: number
): number => {
  const container = containers.find(
    (container) => container.Service === service
  );

  if (!container) {
    throw new Error(`Couldn't find container for ${service} service`);
  }

  const publisher = (container.Publishers ?? []).find(
    (publisher) => publisher.TargetPort === targetPort
  );

  if (!publisher || publisher.PublishedPort === 0) {
    throw new Error(
      `Couldn't find published port ${targetPort} for ${service} service`
    );
  }

  return publisher.PublishedPort;
};
