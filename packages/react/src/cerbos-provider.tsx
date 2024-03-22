import type {
  AuxData,
  Client,
  ClientWithPrincipal,
  Principal,
} from "@cerbos/core";
import type { ReactElement, ReactNode } from "react";
import { createContext, useMemo } from "react";
import { useDeepCompareMemoize } from "use-deep-compare-effect";

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
 * import { CerbosProvider } from "@cerbos/react";
 *
 * // Initialize the Cerbos client using any of the client libraries
 * // that fit the needs of your application. In this example we are
 * // using the client from `@cerbos/embedded`.
 * const client = new Cerbos();
 *
 * function MyApp({ children }) {
 *   const user = useUser();
 *
 *   return (
 *     <CerbosProvider
 *       client={client}
 *       principal={
 *         user
 *           ? {  // the user is authenticated
 *               id: user.id,
 *               roles: user.roles,
 *             }
 *           : {  // the user is not authenticated
 *               id: "###ANONYMOUS_USER###", // Define an arbitrary ID for anonymous users.
 *               roles: ["anonymous"], // Pass a role that represents an anonymous user, at least one is required.
 *             }
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
