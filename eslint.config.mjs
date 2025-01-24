import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import reactPlugin from 'eslint-plugin-react';
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Target files
    ...js.configs.recommended,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tsPlugin
    },
    extends: [
      ...compat.extends('next/core-web-vitals', 'next/typescript'),
      'plugin:@typescript-eslint/recommended'
    ],
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/no-unescaped-entities': 'error',
      '@typescript-eslint/no-unused-vars': 'warn'
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];