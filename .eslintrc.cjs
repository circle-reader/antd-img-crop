module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'prettier', // eslint-config-prettier的标准用法，必须放在最后一个，用于关闭和eslint冲突规则
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
