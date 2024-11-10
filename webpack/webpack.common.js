const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..', 'assets'),
      '~': path.resolve(__dirname, '..', 'src'),
    },
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ['ts-loader', 'babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpeg|jpg|mp3|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]',
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: '[name]',
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'bundle.js',
    assetModuleFilename: '[path][name][ext]',
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      favicon: path.resolve(__dirname, '..', 'public', 'favicon.ico'),
      filename: 'index.html',
      template: path.resolve(__dirname, '..', 'public', 'index.html'),
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'public', 'sprite.svg'),
          to: 'sprite.svg',
        },
        {
          from: path.resolve(__dirname, '..', 'assets', 'fonts'),
          to: 'assets/fonts',
        },
        {
          from: path.resolve(__dirname, '..', 'assets', 'lottie'),
          to: 'assets/lottie',
        },
      ],
    }),
  ],
}
