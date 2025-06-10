import { resolve } from "path";

import { describe, expect, it } from "vitest";

import type { Policy } from "@cerbos/core";
import { Effect } from "@cerbos/core";
import type { DirectoryContents } from "@cerbos/files";
import { readDirectory, serializePolicy } from "@cerbos/files";

describe("readDirectory", () => {
  it("reads policy and schema files from a directory", async () => {
    const expected: DirectoryContents = {
      policies: [
        {
          apiVersion: "api.cerbos.dev/v1",
          description: "",
          disabled: false,
          variables: {},
          exportVariables: {
            name: "d",
            definitions: {
              qux: "42",
            },
          },
        },
        {
          apiVersion: "api.cerbos.dev/v1",
          description: "",
          disabled: false,
          variables: {},
          derivedRoles: {
            name: "c",
            definitions: [
              {
                name: "baz",
                parentRoles: ["bar"],
              },
            ],
          },
        },
        {
          apiVersion: "api.cerbos.dev/v1",
          description: "",
          disabled: false,
          variables: {},
          resourcePolicy: {
            resource: "a",
            version: "default",
            scope: "",
            importDerivedRoles: [],
            rules: [
              {
                name: "",
                actions: ["foo"],
                effect: Effect.ALLOW,
                roles: ["bar"],
                derivedRoles: [],
              },
            ],
          },
        },
        {
          apiVersion: "api.cerbos.dev/v1",
          description: "",
          disabled: false,
          variables: {},
          principalPolicy: {
            principal: "b",
            version: "default",
            scope: "",
            rules: [
              {
                resource: "a",
                actions: [
                  {
                    name: "",
                    action: "foo",
                    effect: Effect.DENY,
                  },
                ],
              },
            ],
          },
        },
      ],
      schemas: [
        {
          id: "1/b.json",
          definition: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "b": {
      "type": "number"
    }
  }
}
`,
        },
        {
          id: "a.json",
          definition: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "a": {
      "type": "string"
    }
  }
}
`,
        },
        {
          id: "testdata/c.json",
          definition: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "c": {
      "type": "boolean"
    }
  }
}
`,
        },
      ],
    };

    const path = resolve(__dirname, "../../files");

    expect(await readDirectory(path)).toEqual(expected);
  });
});

describe("serializePolicy", () => {
  it("serializes a policy to a JSON-encoded string", () => {
    const policy: Policy = {
      resourcePolicy: {
        resource: "example",
        version: "default",
        rules: [
          {
            actions: ["view"],
            roles: ["user"],
            effect: Effect.ALLOW,
          },
        ],
      },
    };

    expect(serializePolicy(policy)).toEqual(`{
  "apiVersion": "api.cerbos.dev/v1",
  "resourcePolicy": {
    "resource": "example",
    "version": "default",
    "rules": [
      {
        "actions": [
          "view"
        ],
        "roles": [
          "user"
        ],
        "effect": "EFFECT_ALLOW"
      }
    ]
  }
}
`);
  });
});
