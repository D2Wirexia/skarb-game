const path = require('path')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 3303,
  },
  cache: false,
  plugins: [
    new webpack.DefinePlugin({}),
    new Dotenv({
      path: path.resolve(__dirname, '..', '.env.dev'),
      safe: true,
      systemvars: true,
      silent: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'public', 'robots-staging.txt'),
          to: path.resolve(__dirname, '..', 'build', 'robots.txt'),
        },
      ],
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
