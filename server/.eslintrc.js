const fs = require('fs');
const path = require('path');

const graphQlSchema = fs.readFileSync(
  path.resolve(__dirname, './src/graphql/types.gql'),
  {
    encoding: 'utf8',
  },
);

module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  plugins: ['graphql'],
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        schemaString: graphQlSchema,
      },
      {
        env: 'apollo',
        schemaString: graphQlSchema,
      },
    ],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: ['/*.js'],
      },
    ],
    'import/extensions': [2, 'ignorePackages', { js: 'never' }],
    'import/prefer-default-export': 0,
    'prettier/prettier': 1,
  },
  plugins: ['graphql'],
  settings: {
    'import/resolver': 'webpack',
  },
};
