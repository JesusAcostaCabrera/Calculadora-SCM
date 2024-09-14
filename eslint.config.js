import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import react from "eslint-plugin-react";
import tailwindcss from "eslint-plugin-tailwindcss";
import babelParser from "@babel/eslint-parser";

export default [
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
    },
    plugins: {
      astro,
    },
    rules: {
      "astro/no-set-html-directive": "warn",
    },
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
    plugins: {
      react,
      tailwindcss,
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "tailwindcss/no-custom-classname": "off",
    },
  },
];
