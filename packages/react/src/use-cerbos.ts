import type { Client, ClientWithPrincipal } from "@cerbos/core";
// eslint-disable-next-line import/no-extraneous-dependencies -- TODO: not sure about this rule, maybe importing from peer deps should be allowed?
import { useContext } from "react";

import { CerbosContext } from "./cerbos-provider";

export function useCerbos(): ClientWithPrincipal<Client> {
  const value = useContext(CerbosContext);

  if (!value) {
    throw new Error("CerbosProvider not found");
  }

  return value;
}
