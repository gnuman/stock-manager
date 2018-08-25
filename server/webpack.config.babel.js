export default (mode) => ({
  target: 'node',
  mode,
  name: 'server',
  externals: {
    // Critical dependency: the request of a dependency is an expression
    express: 'commonjs express',
    sequelize: 'commonjs sequelize',
    bindings: 'commonjs bindings',
  },
  output: {
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.gql'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', { modules: false }]],
            babelrc: false,
          },
        },
      },
      {
        test: /\.gql$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.js$/,
        use: 'eslint-loader',
        enforce: 'pre',
      },
    ],
  },
});
