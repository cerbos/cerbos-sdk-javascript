import { useContext } from "react";

import type { ClientWithPrincipal } from "@cerbos/core";

import {
  CerbosContext,
  CerbosProvider, // eslint-disable-line @typescript-eslint/no-unused-vars -- used for docs link
} from "./cerbos-provider.js";
import type {
  AsyncResult, // eslint-disable-line @typescript-eslint/no-unused-vars -- used for docs link
} from "./use-cerbos-request.js";
import {
  useCheckResource, // eslint-disable-line @typescript-eslint/no-unused-vars -- used for docs link
  useCheckResources, // eslint-disable-line @typescript-eslint/no-unused-vars -- used for docs link
  useIsAllowed, // eslint-disable-line @typescript-eslint/no-unused-vars -- used for docs links
} from "./use-cerbos-request.js";

/**
 * A hook to access the Cerbos client passed down by the {@link CerbosProvider}.
 *
 * @remarks
 * The client's methods are asynchronous, so depending on your use case it may be easier to
 * use one of the higher-level hooks ({@link useCheckResource}, {@link useCheckResources}, or
 * {@link useIsAllowed}), which convert the resulting promises into {@link AsyncResult}s.
 *
 *
 * @example
 * ```typescript
 * import { useCerbos } from "@cerbos/react";
 *
 * function SomeComponent() {
 *   const cerbos = useCerbos();
 *
 *   const handleClick = async () => {
 *     const decision = await cerbos.checkResource({
 *       resource: {
 *         kind: "document",
 *         id: "1",
 *         attr: { owner: "user@example.com" },
 *       },
 *       actions: ["view", "edit"],
 *     });
 *
 *     if (decision.allAllowed()) {
 *       // do something
 *     } else if (decision.allowedActions().includes("view")) {
 *       // do something else
 *     }
 *     ...
 *   };
 *
 *   return <button onClick={handleClick}>...</button>;
 * }
 * ```
 * @public
 */
export function useCerbos(): ClientWithPrincipal {
  const value = useContext(CerbosContext);

  if (!value) {
    throw new Error("CerbosProvider not found");
  }

  return value;
}
