import { defineConfig } from "eslint/config";
import tsdocPlugin from "eslint-plugin-tsdoc";

export const tsdocConfig = defineConfig({
  plugins: { tsdoc: tsdocPlugin },
  rules: {
    "tsdoc/syntax": "warn",
  },
});
