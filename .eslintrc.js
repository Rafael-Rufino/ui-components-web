module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  Plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
}
