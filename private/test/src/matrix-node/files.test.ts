import { resolve } from "path";

import { Effect } from "@cerbos/core";
import type { DirectoryContents } from "@cerbos/files";
import { readDirectory } from "@cerbos/files";
import { describe, expect, it } from "vitest";

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
