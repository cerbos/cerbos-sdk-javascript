import type { Duration } from "@bufbuild/protobuf/wkt";

import { NotOK, Status, _setErrorNameAndStack } from "@cerbos/core";

import { backoff } from "./backoff";
import type { Client, ClientOptions } from "./client";
import { createClient } from "./client";
import { createNotOK } from "./errors/internal";
import { ApiKeyService } from "./protobuf/cerbos/cloud/apikey/v1/apikey_pb";

type AccessToken =
  | {
      token: string;
      refreshAt: number;
      error?: undefined;
    }
  | {
      error: NotOK;
      attempt: number;
      retryAt: number;
    };

const earlyRefresh = 5 * 60 * 1e3;

/**
 * Client credentials to authenticate with Cerbos Hub.
 *
 * @public
 */
export class Credentials {
  private client: Client<typeof ApiKeyService>;
  private accessToken?: Promise<AccessToken>;

  /**
   * Load client credentials from the `CERBOS_HUB_CLIENT_ID` and `CERBOS_HUB_CLIENT_SECRET` environment variables.
   *
   * @throws {@link MissingCredentials} if the environment variables are not set or are set to empty strings.
   *
   * @public
   */
  public static fromEnv(
    env: Record<string, string | undefined> = process.env,
    options?: Omit<ClientOptions, "credentials">,
  ): Credentials {
    const clientId = env["CERBOS_HUB_CLIENT_ID"];
    const clientSecret = env["CERBOS_HUB_CLIENT_SECRET"];

    if (!clientId || !clientSecret) {
      throw new MissingCredentials();
    }

    return new Credentials(clientId, clientSecret, options);
  }

  /**
   * Create a set of client credentials to authenticate with Cerbos Hub.
   */
  public constructor(
    public readonly clientId: string,
    public readonly clientSecret: string,
    options?: Omit<ClientOptions, "credentials">,
  ) {
    this.client = createClient(ApiKeyService, options);
  }

  /** @internal */
  public async _issueAccessToken(signal: AbortSignal): Promise<string> {
    let attempt = 1;

    if (this.accessToken) {
      const accessToken = await this.accessToken;

      if (accessToken.error) {
        const remaining = Math.round(accessToken.retryAt - Date.now());
        if (remaining <= 0) {
          attempt = accessToken.attempt + 1;
        } else if (Number.isFinite(remaining)) {
          throw new NotOK(
            Status.CANCELLED,
            `Previous authentication attempt failed, backing off for ${remaining}ms`,
            { cause: accessToken.error },
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
      .issueAccessToken(
        { clientId: this.clientId, clientSecret: this.clientSecret },
        { signal },
      )
      .then<AccessToken>(({ accessToken, expiresIn }) => {
        return {
          token: accessToken,
          refreshAt: refreshAt(issuedAt, expiresIn),
        };
      })
      .catch<AccessToken>((error: unknown) => {
        const notOK = createNotOK(error);
        return {
          error: notOK,
          attempt,
          retryAt: retryAt(notOK, attempt),
        };
      });

    const accessToken = await this.accessToken;

    if (accessToken.error) {
      throw accessToken.error;
    }

    return accessToken.token;
  }
}

/**
 * Error thrown on failure to load credentials from environment variables.
 *
 * @public
 */
export class MissingCredentials extends Error {
  public constructor() {
    super(
      "Expected credentials to be provided in CERBOS_HUB_CLIENT_ID and CERBOS_HUB_CLIENT_SECRET environment variables",
    );

    _setErrorNameAndStack(this);
  }
}

function refreshAt(issuedAt: number, expiresIn: Duration): number {
  return issuedAt + durationToMilliseconds(expiresIn) - earlyRefresh;
}

const retryImmediately = -Infinity;
const neverRetry = Infinity;

function retryAt(error: NotOK, attempt: number): number {
  switch (error.code) {
    case Status.ABORTED:

    case Status.CANCELLED:
      return retryImmediately;

    case Status.UNAUTHENTICATED:
      return neverRetry;

    default:
      return Date.now() + backoff(attempt);
  }
}

function durationToMilliseconds(duration: Duration): number {
  return Number(duration.seconds) * 1e3 + Math.ceil(duration.nanos / 1e6);
}
