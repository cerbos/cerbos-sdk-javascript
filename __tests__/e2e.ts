import * as fs from "fs";
import { Cerbos } from "../src/index";
import * as jose from "node-jose";

let jwtToken = "";

beforeAll(async () => {
  let signingKey;

  try {
    signingKey = fs.readFileSync("./__tests__/cerbos/keys/signing_key.jwk");
  } catch (error) {
    console.log("Problem occurred during reading JWT signing key.");
    process.exit(1);
  }

  const key = await jose.JWK.asKey(signingKey);
  const options = { compact: true, jwk: key, fields: { typ: "jwt" } };

  const jwtClaims = JSON.stringify({
    exp: Math.floor((Date.now() + 86400000) / 1000),
    iat: Math.floor(Date.now() / 1000),
    sub: "test",
  });

  await jose.JWS.createSign(options, key)
    .update(jwtClaims)
    .final()
    .then(function (result) {
      jwtToken = result as unknown as string;
    });
});

describe("Cerbos", () => {
  let cerbos: Cerbos;
  beforeEach(() => {
    cerbos = new Cerbos({
      hostname: "http://localhost:8080",
    });
  });

  test("Allowed action", async () => {
    console.log("tokentoken", jwtToken);
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
      auxData: {
        jwt: {
          token: jwtToken,
          keySetId: "ks1",
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
