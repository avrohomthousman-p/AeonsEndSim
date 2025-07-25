import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";



export default [
	{ ignores: ["dist"] },
	{
		files: ["**/*.{js,jsx}"],
		languageOptions: {
  			parser: babelParser,
  			parserOptions: {
    			requireConfigFile: false,
    			babelOptions: {
      				presets: ["@babel/preset-react"],
    			},
    			ecmaVersion: "latest",
    			ecmaFeatures: { jsx: true },
    			sourceType: "module",
  			},
  			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			...js.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			"no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			"quotes": ["error", "double", { avoidEscape: true }],
			"simple-import-sort/imports": "error",
		},
	},
]
