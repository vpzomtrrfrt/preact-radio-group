module.exports = {
  output: {
    library: 'RadioGroup',
    libraryTarget: 'umd'
  },
  externals: [
    {
      react: {
        root: 'preact',
        commonjs2: 'preact',
        commonjs: 'preact',
        amd: 'preact'
      }
    }
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /build|node_modules/, loader: 'babel-loader'},
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
