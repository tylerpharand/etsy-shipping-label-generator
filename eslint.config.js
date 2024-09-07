module.exports = [
  {
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
    },
    ignores: ['node_modules', 'eslint.config.js'],
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      ...require('eslint-plugin-prettier').configs.recommended.rules,
      ...require('@typescript-eslint/eslint-plugin').configs.recommended.rules,
    },
  },
]
