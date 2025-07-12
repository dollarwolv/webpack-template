import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  // Node.js config for webpack files
  {
    files: ["webpack*.js", "webpack.*.js"],
    languageOptions: {
      globals: globals.node,
    },
    plugins: { js, prettier: prettierPlugin },
    extends: [js.configs.recommended],
    rules: {
      "prettier/prettier": "error",
    },
  },
  // Default config for other JS files (if you have browser code)
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    plugins: { js, prettier: prettierPlugin },
    extends: [js.configs.recommended],
    rules: {
      "prettier/prettier": "error",
    },
  },
  eslintConfigPrettier,
]);
