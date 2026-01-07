import { randomInt } from "crypto";
import { Readable } from "stream";

import { describe, expect, it } from "vitest";

import { eachLine } from "../../../../packages/http/src/transport.js";

describe("eachLine", () => {
  const lines = [
    "This is a test",
    "Unicode works even if the chunks split UTF-8 code points: ┻━┻ ︵╰(°□°╰) 🇳🇿 🥝 👨🏼‍💻 (╯°□°)╯︵ ┻━┻",
    "Empty lines are fine:",
    "",
    "Long lines, too:",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "The last line doesn't end with a newline!",
  ];

  const contents = new TextEncoder().encode(lines.join("\n"));

  function* randomChunks(): Generator<Uint8Array, void, undefined> {
    let start = 0;
    while (start < contents.length) {
      const end = start + randomInt(1, 5);
      yield contents.subarray(start, end);
      start = end;
    }
  }

  it("reads a stream line-by-line", async () => {
    const stream = Readable.toWeb(Readable.from(randomChunks()));

    const result: string[] = [];
    for await (const line of eachLine(stream)) {
      result.push(line);
    }

    expect(result).toEqual(lines);
  });
});
