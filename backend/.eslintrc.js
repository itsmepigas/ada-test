module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    camelcase: ['error', { ignoreGlobals: true, "props": false  }],
    'no-param-reassign': ['error', { ignoreGlobals: true, "props": false  }],
  },
};
