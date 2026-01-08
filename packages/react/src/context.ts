import { createContext } from "react";

import type { ClientWithPrincipal } from "@cerbos/core";

export const CerbosContext = createContext<ClientWithPrincipal | undefined>(
  undefined,
);
