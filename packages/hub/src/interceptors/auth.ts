import type { Duration } from "@bufbuild/protobuf/wkt";
import type { Interceptor } from "@connectrpc/connect";
import { Code, ConnectError } from "@connectrpc/connect";

import { backoff } from "../backoff";
import type { Client, ClientOptions } from "../client";
import { createClient } from "../client";
import type { Credentials } from "../credentials";
import { createNotOK } from "../errors/internal";
import { ApiKeyService } from "../protobuf/cerbos/cloud/apikey/v1/apikey_pb";

import { createInterceptor } from "./interceptor";

export function createAuthInterceptor(options: ClientOptions): Interceptor {
  return new Auth(options).interceptor;
}

type AccessToken =
  | {
      token: string;
      refreshAt: number;
      error?: undefined;
    }
  | {
      error: ConnectError;
      attempt: number;
      retryAt: number;
    };

const earlyRefresh = 5 * 60 * 1e3;

class Auth {
  private readonly credentials: Credentials;
  private readonly client: Client<typeof ApiKeyService>;
  private accessToken?: Promise<AccessToken>;

  public constructor({ credentials, ...options }: ClientOptions) {
    this.credentials = credentials;
    this.client = createClient(ApiKeyService, {
      ...options,
      createError: (error) => ConnectError.from(error),
    });
  }

  public readonly interceptor: Interceptor = createInterceptor(
    async (request, next) => {
      request.header.set(
        "x-cerbos-auth",
        await this.issueAccessToken(request.signal),
      );

      return await next(request);
    },
  );

  private async issueAccessToken(signal: AbortSignal): Promise<string> {
    let attempt = 1;

    if (this.accessToken) {
      const accessToken = await this.accessToken;

      if (accessToken.error) {
        const remaining = Math.round(accessToken.retryAt - Date.now());
        if (remaining <= 0) {
          attempt = accessToken.attempt + 1;
        } else if (Number.isFinite(remaining)) {
          throw new ConnectError(
            `Previous authentication attempt failed, backing off for ${remaining}ms`,
            Code.Canceled,
            undefined,
            undefined,
            createNotOK(accessToken.error),
          );
        } else {
          throw accessToken.error;
        }
      } else if (Date.now() < accessToken.refreshAt) {
        return accessToken.token;
      }
    }

    const issuedAt = Date.now();

    this.accessToken = this.client
      .issueAccessToken(this.credentials, { signal })
      .then<AccessToken>(({ accessToken, expiresIn }) => {
        return {
          token: accessToken,
          refreshAt: refreshAt(issuedAt, expiresIn),
        };
      })
      .catch<AccessToken>((error: unknown) => {
        const connectError = ConnectError.from(error);
        return {
          error: connectError,
          attempt,
          retryAt: retryAt(connectError, attempt),
        };
      });

    const accessToken = await this.accessToken;

    if (accessToken.error) {
      throw accessToken.error;
    }

    return accessToken.token;
  }
}

function refreshAt(issuedAt: number, expiresIn: Duration): number {
  return issuedAt + durationToMilliseconds(expiresIn) - earlyRefresh;
}

const retryImmediately = -Infinity;
const neverRetry = Infinity;

function retryAt(error: ConnectError, attempt: number): number {
  switch (error.code) {
    case Code.Aborted:

    case Code.Canceled:
      return retryImmediately;

    case Code.Unauthenticated:
      return neverRetry;

    default:
      return Date.now() + backoff(attempt);
  }
}

function durationToMilliseconds(duration: Duration): number {
  return Number(duration.seconds) * 1e3 + Math.ceil(duration.nanos / 1e6);
}
