import { Cerbos } from "../src/index";

describe("Cerbos", () => {
  let cerbos: Cerbos;
  beforeEach(() => {
    cerbos = new Cerbos({
      hostname: "http://localhost:8080",
    });
  });

  test("Allowed action", async () => {
    const result = await cerbos.check({
      actions: ["view", "edit"],
      resource: {
        policyVersion: "default",
        kind: "blogPost",
        instances: {
          article123: {
            attr: {
              authorId: "212324",
              status: "DRAFT",
            },
          },
          article456: {
            attr: {
              authorId: "56756",
              status: "PUBLISHED",
            },
          },
        },
      },
      principal: {
        id: "userId1",
        policyVersion: "default",
        roles: ["USER"],
        attr: {
          department: "marketing",
        },
      },
    });

    const canView = result.isAuthorized("article123", "view");

    expect(canView).toBe(true);
  });

  test("Denied action", async () => {
    const result = await cerbos.check({
      actions: ["view", "edit"],
      resource: {
        policyVersion: "default",
        kind: "blogPost",
        instances: {
          article123: {
            attr: {
              authorId: "212324",
              status: "DRAFT",
            },
          },
          article456: {
            attr: {
              authorId: "56756",
              status: "PUBLISHED",
            },
          },
        },
      },
      principal: {
        id: "userId1",
        policyVersion: "default",
        roles: ["USER"],
        attr: {
          department: "marketing",
        },
      },
    });

    const canView = result.isAuthorized("article123", "edit");

    expect(canView).toBe(false);
  });

  test("Undefined action", async () => {
    const result = await cerbos.check({
      actions: ["view", "edit"],
      resource: {
        policyVersion: "default",
        kind: "blogPost",
        instances: {
          article123: {
            attr: {
              authorId: "212324",
              status: "DRAFT",
            },
          },
          article456: {
            attr: {
              authorId: "56756",
              status: "PUBLISHED",
            },
          },
        },
      },
      principal: {
        id: "userId1",
        policyVersion: "default",
        roles: ["USER"],
        attr: {
          department: "marketing",
        },
      },
    });

    const canView = result.isAuthorized("article123", "some-other-action");

    expect(canView).toBe(false);
  });
});

describe("Cerbos - Failed to connect", () => {
  let cerbos: Cerbos;
  beforeEach(() => {
    cerbos = new Cerbos({
      hostname: "http://blah.blah:8080",
    });
  });

  test("Throw when can't talk to Cerbos PDP", async () => {
    await expect(
      cerbos.check({
        actions: ["view"],
        resource: {
          kind: "blogPost",
          instances: {
            article123: {},
          },
        },
        principal: {
          id: "userId1",
          roles: ["USER"],
        },
      })
    ).rejects.toThrow();
  });
});
