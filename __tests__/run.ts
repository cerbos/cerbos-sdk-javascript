import Cerbos, { AuthorizationError } from "../src/index";

describe("Cerbos", () => {
  let cerbos: Cerbos;
  beforeEach(() => {
    cerbos = new Cerbos({
      hostname: "http://localhost:8080",
    });
  });

  test("Allow call", async () => {
    const result = await cerbos.check({
      actions: ["view", "edit"],
      resource: {
        policyVersion: "default", // optional
        kind: "blogPost", // the name of the resource kind in the policies
        instances: {
          // Map of instances of resource where the key is the ID
          article123: {
            attr: {
              // optional user-defined attributes used in policies
              authorId: "212324",
              status: "DRAFT",
            },
          },
          article456: {
            attr: {
              // optional user-defined attributes used in policies
              authorId: "56756",
              status: "PUBLISHED",
            },
          },
        },
      },
      principal: {
        id: "userId1", // the ID of the principal accessing the resource
        policyVersion: "default", // optional
        roles: ["USER"], // from your authentication provider
        attr: {
          // optional user-defined attributes used in policies
          department: "marketing",
        },
      },
    });

    // Check whether the principal can view article123
    const canView = result.isAuthorized("article123", "view");

    expect(canView).toBe(true);
  });

  test("Deny call", async () => {
    const result = await cerbos.check({
      actions: ["view", "edit"],
      resource: {
        policyVersion: "default", // optional
        kind: "blogPost", // the name of the resource kind in the policies
        instances: {
          // Map of instances of resource where the key is the ID
          article123: {
            attr: {
              // optional user-defined attributes used in policies
              authorId: "212324",
              status: "DRAFT",
            },
          },
          article456: {
            attr: {
              // optional user-defined attributes used in policies
              authorId: "56756",
              status: "PUBLISHED",
            },
          },
        },
      },
      principal: {
        id: "userId1", // the ID of the principal accessing the resource
        policyVersion: "default", // optional
        roles: ["USER"], // from your authentication provider
        attr: {
          // optional user-defined attributes used in policies
          department: "marketing",
        },
      },
    });

    // Check whether the principal can view article123
    const canView = result.isAuthorized("article123", "edit");

    expect(canView).toBe(false);
  });
});

describe("Cerbos - No PDP", () => {
  let cerbos: Cerbos;
  beforeEach(() => {
    cerbos = new Cerbos({
      hostname: "http://blah.blah:8080",
    });
  });

  test("Throw when can't talk to Cerbos PDP", async () => {
    expect.assertions(1);
    try {
      await cerbos.check({
        actions: ["view", "edit"],
        resource: {
          policyVersion: "default", // optional
          kind: "blogPost", // the name of the resource kind in the policies
          instances: {
            // Map of instances of resource where the key is the ID
            article123: {
              attr: {
                // optional user-defined attributes used in policies
                authorId: "212324",
                status: "DRAFT",
              },
            },
            article456: {
              attr: {
                // optional user-defined attributes used in policies
                authorId: "56756",
                status: "PUBLISHED",
              },
            },
          },
        },
        principal: {
          id: "userId1", // the ID of the principal accessing the resource
          policyVersion: "default", // optional
          roles: ["USER"], // from your authentication provider
          attr: {
            // optional user-defined attributes used in policies
            department: "marketing",
          },
        },
      });
    } catch (e) {
      expect(e.message).toBe("Error authorizing");
    }
  });
});
