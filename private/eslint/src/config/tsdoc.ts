import tsdocPlugin from "eslint-plugin-tsdoc";

import { defineConfig } from "../config.js";

export const tsdocConfig = defineConfig({
  plugins: { tsdoc: tsdocPlugin },
  rules: {
    "tsdoc/syntax": "warn",
  },
});
