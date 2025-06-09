import { MissingCredentials } from "./errors/external";

/**
 * Client credentials to authenticate with Cerbos Hub.
 *
 * @public
 */
export interface Credentials {
  /**
   * ID of the client credential.
   */
  clientId: string;

  /**
   * Secret of the client credential.
   */
  clientSecret: string;
}

/**
 * Load client credentials from the `CERBOS_HUB_CLIENT_ID` and `CERBOS_HUB_CLIENT_SECRET` environment variables.
 *
 * @param env - the environment variables from which to load (default: `process.env`).
 *
 * @throws {@link MissingCredentials} if the environment variables are not set or are set to empty strings.
 *
 * @public
 */
export function credentialsFromEnv(
  env: Record<string, string | undefined> = process.env,
): Credentials {
  const clientId = env["CERBOS_HUB_CLIENT_ID"];
  const clientSecret = env["CERBOS_HUB_CLIENT_SECRET"];

  if (!clientId || !clientSecret) {
    throw new MissingCredentials();
  }

  return { clientId, clientSecret };
}
