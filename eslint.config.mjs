import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  {
    ignores: [
      "**/node_modules/**",
      "built/**",
      "dist/**",
      "tests/**",
      "lib/**",
      "src/lib/*.generated.d.ts",
      "scripts/**/*.js",
      "scripts/**/*.d.*",
      "internal/**",
      "coverage/**",
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
