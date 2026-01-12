import type { ReactElement, ReactNode } from "react";
import { useMemo } from "react";
import { useDeepCompareMemoize } from "use-deep-compare-effect";

import type { AuxData, Client, Principal } from "@cerbos/core";

import { CerbosContext } from "./context.js";

/**
 * Props for the {@link CerbosProvider} component.
 *
 * @category Props
 * @inline
 */
export interface CerbosProviderProps {
  /**
   * Your application's component tree.
   */
  children: ReactNode;
  /**
   * The Cerbos client to provide.
   */
  client: Client;
  /**
   * The principal to check.
   *
   * @remarks
   * This is required, but can describe an anonymous user so that you can perform permission checks for unauthenticated users.
   */
  principal: Principal;
  /**
   * Auxiliary data related to the principal.
   *
   * @remarks
   * You can read claims directly from a JWT in your authorization policies by configuring
   * {@link https://docs.cerbos.dev/cerbos/latest/configuration/auxdata.html | the Cerbos policy decision point (PDP) service} or
   * {@link https://github.com/cerbos/cerbos-sdk-javascript/blob/main/docs/embedded.options.md | an embedded PDP client }
   * to decode the token.
   */
  auxData?: Pick<AuxData, "jwt"> | undefined;
}

/**
 * A component to provide a Cerbos client to your application's components.
 *
 * @param props
 *
 * @remarks
 * The provider should be placed close to the root of your application.
 *
 * You need to provide a principal, but it can describe an anonymous user so that you can perform permission checks for unauthenticated users.
 * You could use a single hardcoded ID for all anonymous users, or store a unique identifier in the session.
 *
 * You can use whichever of the {@link https://github.com/cerbos/cerbos-sdk-javascript/blob/main/packages/http/README.md | HTTP} or
 * {@link https://github.com/cerbos/cerbos-sdk-javascript/blob/main/packages/embedded/README.md | embedded} client libraries best fit your needs.
 *
 * @example
 * ```typescript
 * import { Embedded as Cerbos } from "@cerbos/embedded";
 * * // or, import { HTTP as Cerbos } from "@cerbos/http";
 * import { CerbosProvider } from "@cerbos/react";
 *
 * // Initialize the Cerbos client using any of the client libraries
 * // that fit the needs of your application. In this example we are
 * // using the client from `@cerbos/embedded`.
 * const client = new Cerbos();
 *
 * function MyApp({ children }) {
 *   const user = useYourAuthenticationLogic(...);
 *
 *   return (
 *     <CerbosProvider
 *       client={client}
 *       principal={
 *         user
 *           ? {
 *               id: user.id,
 *               roles: user.roles,
 *             }
 *           : {
 *               // Define an arbitrary ID for unauthenticated users.
 *               id: "###ANONYMOUS_USER###",
 *               // Define a role that represents unauthenticated users (at least one is required).
 *               roles: ["anonymous"],
 *             }
 *       }
 *     >
 *       {children}
 *     </CerbosProvider>
 *   );
 * }
 * ```
 *
 * @category Components
 */
export function CerbosProvider({
  children,
  client,
  principal,
  auxData,
}: CerbosProviderProps): ReactElement {
  const principalMemo = useDeepCompareMemoize(principal);
  const auxDataMemo = useDeepCompareMemoize(auxData);

  const value = useMemo(
    () => client.withPrincipal(principalMemo, auxDataMemo),
    [client, principalMemo, auxDataMemo],
  );

  return (
    <CerbosContext.Provider value={value}>{children}</CerbosContext.Provider>
  );
}
