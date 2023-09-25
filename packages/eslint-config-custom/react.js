module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'vitest', 'react-refresh'],
  extends: ['./index.js'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx']
      }
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'error',
    'no-console': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  },
  env: {
    browser: true
  },
  ignorePatterns: ['**/vite-env.d.ts', '**/vite.config.ts']
};
