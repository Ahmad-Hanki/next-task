import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ),

  {
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error', // Prevents using 'any'
      'prettier/prettier': [
        'error',
        { singleQuote: true, trailingComma: 'es5', arrowParens: 'avoid' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'warn', // Require return types on functions
      '@typescript-eslint/explicit-function-return-type': 'warn', // Require function return types
      '@typescript-eslint/no-unused-vars': 'error', // error about unused variables
      'react-hooks/rules-of-hooks': 'error', // Enforces the rules of hooks
      'react-hooks/exhaustive-deps': 'warn', // Enforces exhaustive dependency arrays
    },
  },
];

export default eslintConfig;
