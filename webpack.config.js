module.exports = {
  // This will make a massive bundle, just for debugging
  // devtool: 'inline-source-map',
  entry: ['./src/hackerspace.js'],
  devServer: {
    inline: true,
    contentBase: '.',
    historyApiFallback: true
  },
  output: {
    path: `${__dirname}/static/js`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [' ', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
              [
                'env',
                {
                  targets: {
                    browsers: ['last 2 versions']
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
