import type { AuxData, Client, Principal } from "@cerbos/core";
import { CerbosProvider, useCerbos } from "@cerbos/react";
import { getByText, renderHook } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import type { PropsWithChildren, ReactElement } from "react";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";

const client: Partial<Client> = {
  withPrincipal: vi.fn().mockReturnValue({
    checkResource: vi.fn(),
    checkResources: vi.fn(),
    isAllowed: vi.fn(),
  }),
};

function getPrincipal(alternate: boolean): Principal {
  if (alternate) {
    return {
      id: "test-user-2",
      roles: ["role-1"],
    };
  } else {
    return {
      id: "test-user-1",
      roles: ["role-1", "role-2"],
    };
  }
}

function getAuxData(alternate: boolean): Pick<AuxData, "jwt"> {
  if (alternate) {
    return {
      jwt: {
        token: "test-token-2",
      },
    };
  } else {
    return {
      jwt: {
        token: "test-token-1",
      },
    };
  }
}

function App({ children }: PropsWithChildren<object>): ReactElement {
  const [alternateUser, setAlternateUser] = useState(false);
  const [alternateAuxData, setAlternateAuxData] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setAlternateUser((state) => !state);
        }}
      >
        switch user
      </button>
      <button
        onClick={() => {
          setAlternateAuxData((state) => !state);
        }}
      >
        switch aux data
      </button>
      <CerbosProvider
        client={client as Client}
        principal={getPrincipal(alternateUser)}
        auxData={getAuxData(alternateAuxData)}
      >
        {children}
      </CerbosProvider>
    </>
  );
}

describe("<CerbosProvider>", () => {
  const container = document.createElement("div");

  const { rerender } = renderHook(useCerbos, { wrapper: App, container });
  it("correctly initializes ClientWithPrincipal", () => {
    expect(client.withPrincipal).toHaveBeenLastCalledWith(
      getPrincipal(false),
      getAuxData(false),
    );
    expect(client.withPrincipal).toHaveBeenCalledTimes(1);
  });

  it("re-initializes ClientWithPrincipal when principal changes", async () => {
    await userEvent.click(getByText(container, "switch user"));
    expect(client.withPrincipal).toHaveBeenLastCalledWith(
      getPrincipal(true),
      getAuxData(false),
    );
    expect(client.withPrincipal).toHaveBeenCalledTimes(2);
  });

  it("re-initializes ClientWithPrincipal when auxData changes", async () => {
    await userEvent.click(getByText(container, "switch aux data"));
    expect(client.withPrincipal).toHaveBeenLastCalledWith(
      getPrincipal(true),
      getAuxData(true),
    );
    expect(client.withPrincipal).toHaveBeenCalledTimes(3);
  });

  it("re-renders without parameter values does not cause re-initialization of ClientWithPrincipal", () => {
    rerender();
    expect(client.withPrincipal).toHaveBeenCalledTimes(3);
  });
});
