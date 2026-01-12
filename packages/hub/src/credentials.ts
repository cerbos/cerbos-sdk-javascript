import { MissingCredentials } from "./errors/external.js";

/**
 * Client credentials to authenticate with Cerbos Hub.
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
 * @param env - The environment variables from which to load.
 *
 * @throws {@link MissingCredentials} if the environment variables are not set or are set to empty strings.
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
