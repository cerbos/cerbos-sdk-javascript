import type { ClientWithPrincipal } from "@cerbos/core";
import { useContext } from "react";

import { CerbosContext } from "./cerbos-provider";

export function useCerbos(): ClientWithPrincipal {
  const value = useContext(CerbosContext);

  if (!value) {
    throw new Error("CerbosProvider not found");
  }

  return value;
}
