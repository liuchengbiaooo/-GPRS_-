module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'], // "@vue/prettier"
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [2, { props: false }],
    'prefer-destructuring': ['error', { object: false, array: false }],
    'max-len': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
