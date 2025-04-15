import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginQuery from '@tanstack/eslint-plugin-query'


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...pluginQuery.configs['flat/recommended'],
  {
    rules: {
      "react/prop-types": "off",
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off"
    }
  }
];