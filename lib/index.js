'use strict';

module.exports = {
  globals: {
    angular: false,
    jQuery: false,
    $: false,
    $q: false,
    after: false,
    afterEach: false,
    before: false,
    beforeEach: false,
    browser: false,
    describe: false,
    inject: false,
    it: false
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 6
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    'import/newline-after-import': 'off',
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
    'no-else-return': 'warn',
    'wrap-iife': ['error', 'inside'],
    'no-use-before-define': ['error', { functions: false }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'max-nested-callbacks': 'warn',
    'newline-after-var': 'warn',
    'newline-before-return': 'warn',
    'no-mixed-requires': 'warn',
    'no-process-env': 'warn',
    'no-process-exit': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-warning-comments': 'warn',
    'no-alert': 'error',
    'no-div-regex': 'error',
    'no-eq-null': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: false,
        number: false,
        string: false
      }
    ],
    'no-implicit-globals': 'error',
    'no-native-reassign': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-syntax': 'error',
    'no-useless-call': 'error',
    'operator-linebreak': [
      'error',
      'after'
    ],
    quotes: [
      'error',
      'single'
    ],
    'sort-imports': 'error',
    'consistent-this': ['error', 'self'],
    'consistent-return': 'off',
    strict: 'off',
    'new-cap': 'off', // off because we didn't decided convention on this
    'func-names': 'off', // off because we didn't decided convention on this
    'no-var': 'off', // off because let & const are not available on browser
    'prefer-arrow-callback': 'off', // off because it's not available on browser
    'one-var': 'off', // off because it's a matter of taste
    'one-var-declaration-per-line': 'off', // off because it's a matter of taste
    'max-len': 'off', // off because we didn't decided convention on this
    'object-curly-spacing': 'off', // off because it's a matter of taste
    'object-shorthand': 'off', // off because it's not available on browser
    'vars-on-top': 'off', // off because it's not needed
    camelcase: 'off', // off because we didn't decided convention on this
    'no-unused-expressions': 'off', // off because we use it in test
    'no-plusplus': 'off', // off because it's a matter of taste
    'spaced-comment': 'off', // off because it's a matter of taste
    'no-param-reassign': 'off', // off because we want to use this feature
    'padded-blocks': 'off', // off because it's a matter of taste
    'prefer-template': 'off', // off because it's not available on browser
    'no-underscore-dangle': 'off', // off because we want to use dangling underscores
    indent: ['off', 2], // off because it does not always right
    'array-callback-return': 'off', // off because it's not mandatory
    'global-require': 'off', // of because we use require everywhere
    'no-shadow': 'off', // off because it's safe even it would make confusion
    'no-path-concat': 'off', // off because we do not run ESN on Windows
    'prefer-rest-params': 'off', // of because it's not available on browser
    'block-spacing': 'off', // off because it's a matter of taste
    'no-new': 'off', // off because this rule should not be used in browser
    'object-property-newline': 'off', // off because of newliner
    'no-mixed-operators': 'off', // off because we want to mix operators
    'operator-assignment': 'off', // off because we do not always use +=
    'newline-per-chained-call': 'off', // off because of newliner
    'no-prototype-builtins': 'off', // off because we might never overrite 'hasOwnProperty'
    'prefer-spread': 'off', // off because spread is not available on browser
    'default-case': 'off' // off because sometimes default case can be skipped
  },
  extends: 'eslint-config-airbnb-base'
};