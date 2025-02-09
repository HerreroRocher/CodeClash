import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      'quotes': ['error', 'double'], // Enforce double quotes
      'semi': ['error', 'always'], // Enforce semicolons
      'indent': ['error', 2], // Enforce 2-space indentation
      'no-trailing-spaces': 'error', // Disallow trailing whitespace
      'eol-last': ['error', 'always'], // Enforce newline at the end of files
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }], // Disallow unused variables, but allow unused function arguments starting with _
      'eqeqeq': ['error', 'always'], // Enforce the use of === and !==
      'curly': ['error', 'all'], // Enforce consistent brace style for all control statements
    },
  },
];
export default eslintConfig;
