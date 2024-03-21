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

export interface CerbosProviderProps {
  children: ReactNode;
  client: Client;
  principal: Principal;
  auxData?: Pick<AuxData, "jwt"> | undefined;
}

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
