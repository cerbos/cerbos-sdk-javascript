import type {
  AuxData,
  Client,
  ClientWithPrincipal,
  Principal,
} from "@cerbos/core";
import type { ReactElement, ReactNode } from "react";
import { createContext, useMemo } from "react";

export const CerbosContext = createContext<ClientWithPrincipal | undefined>(
  undefined,
);
/**
 * @public
 */
export interface CerbosProviderProps {
  children: ReactNode;
  client: Client;
  principal: Principal;
  auxData?: Pick<AuxData, "jwt"> | undefined;
}

/**
 * Component to provide the Cerbos client to down the component tree, should
 * be placed closer to the root of the application. The principal is required
 * but can be an anonymous user in case your application requires authorization
 * checks for unauthenticated users.
 *
 * @example
 * ```typescript
 * import { Embedded as Cerbos } from "@cerbos/embedded";
 *
 * // Initialize the Cerbos client using any of the client libraries
 * // that fit the needs of your application. In this example we are
 * // using `@cerbos/embedded`.
 * const client = new Cerbos(...);
 *
 * function MyApp({ children }) {
 *   const user = useUser();
 *
 *   return (
 *     <CerbosProvider
 *       client={client}
 *       principal={
 *       // Build and pass the principal object to the provider.
 *         {
 *           id: user ? user.id : "###ANONYMOUS_USER###", // We defined an arbitrary ID for anonymous users here, it will help us identify the checks for anonymous users in the Cerbos logs
 *           roles: user ? user.roles : [], // Pass the roles of the user, it the user is not authenticated, pass an empty array
 *           auxData: ... //optional
 *         }
 *       }
 *     >
 *       {children}
 *     </CerbosProvider>
 *   );
 * }
 * ```
 * @public
 */
export function CerbosProvider({
  children,
  client,
  principal,
  auxData,
}: CerbosProviderProps): ReactElement {
  const value = useMemo(
    () => client.withPrincipal(principal, auxData),
    [auxData, client, principal],
  );

  return (
    <CerbosContext.Provider value={value}>{children}</CerbosContext.Provider>
  );
}
