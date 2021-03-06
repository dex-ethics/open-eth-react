const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    // respond to 404s with index.html
    hot: true,
    // enable HMR on the server
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([{ from: './public/index.html', to: 'index.html' }]),
  ],
  node: {
    __filename: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        include: /flexboxgrid/,
      },
      { test: /\.json$/, use: 'json-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.(ttf|svg|eot|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]',
        },
      },
    ],
  },
};
