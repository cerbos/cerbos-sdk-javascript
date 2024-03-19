import type { Client, ClientWithPrincipal } from "@cerbos/core";
// eslint-disable-next-line import/no-extraneous-dependencies -- TODO: not sure about this rule, maybe importing from peer deps should be allowed?
import type { ReactElement, ReactNode } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies -- TODO: not sure about this rule, maybe importing from peer deps should be allowed?
import { createContext } from "react";

export const CerbosContext = createContext<
  ClientWithPrincipal<Client> | undefined
>(undefined);

export interface CerbosProviderProps {
  children: ReactNode;
  cerbos: ClientWithPrincipal<Client>;
}

export function CerbosProvider({
  children,
  cerbos,
}: CerbosProviderProps): ReactElement {
  return (
    <CerbosContext.Provider value={cerbos}>{children}</CerbosContext.Provider>
  );
}
