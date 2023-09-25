module.exports = {
  env: {
    node: true
  },
  extends: ['./index.js'],
  plugins: ['cdk'],
  rules: {
    'cdk/ban-lambda-runtimes': [
      'error',
      {
        bannedRuntimes: [
          'NODEJS',
          'NODEJS_4_3',
          'NODEJS_6_10',
          'NODEJS_8_10',
          'NODEJS_10_X',
          'NODEJS_12_X',
          'DOTNET_CORE_1',
          'DOTNET_CORE_2'
        ]
      }
    ],
    'cdk/construct-ctor': 'error',
    'cdk/construct-props-struct-name': 'error',
    'cdk/filename-match-regex': 'error',
    'cdk/public-static-property-all-caps': 'error',
    'cdk/no-static-import': 'error',
    'cdk/stack-props-struct-name': 'error',
    'cdk/prefer-type-only-imports': [
      'error',
      {
        moduleNames: ['aws-lambda']
      }
    ]
  }
};
