module.exports = {
  env: {
    es2020: true
  },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ]
  },

  ignorePatterns: ['**/.eslintrc.js', '**/node_modules/', '**/dist/', '**/.prettierrc.cjs', '**/.eslintrc.cjs']
};
