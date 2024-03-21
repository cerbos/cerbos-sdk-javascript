import type { ClientWithPrincipal } from "@cerbos/core";
import { useContext } from "react";

import { CerbosContext } from "./cerbos-provider";
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- used for docs link
  useCheckResource,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- used for docs link
  useCheckResources,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- used for docs link
  useIsAllowed,
} from "./use-cerbos-request";

/**
 * Hook to access the provided Cerbos client. It is perfectly fine to access the client
 * directly, however, consider using one of {@link useCheckResource},{@link useCheckResources}
 * or {@link useIsAllowed} instead. The API they provide might be simpler for your use
 * case as the handle the Async logic for you.
 *
 *
 * @example
 * ```typescript
 * function SomeFunction() {
 *   const cerbos = useCerbos();
 *
 *   const handleClick = async ()=>{
 *     const decision = await cerbos.checkResource({
 *         resource: {
 *            kind: "document",
 *            id: "1",
 *            attr: { owner: "user@example.com" },
 *          },
 *          actions: ["view", "edit"],
 *     });
 *
 *     if(decision.allAllowed()){
 *       // do something
 *     }else if(decision.allowedActions().includes('view')){
 *       // do something else
 *     }
 *   }
 *
 *   return <button onClick={handleClick}>...</div>
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
