module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'double'],
    'max-len': ['error', { code: 120 }],
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    'require-jsdoc': [
      2,
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
        },
      },
    ],
  },
};
