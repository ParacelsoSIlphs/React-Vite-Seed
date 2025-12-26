import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import refresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      react,
      "react-hooks": hooks,
      "react-refresh": refresh,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-refresh/only-export-components": "warn",

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
);
