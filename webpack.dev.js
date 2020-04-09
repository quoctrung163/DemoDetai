const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const publicUrl = 'http://localhost:8080';

module.exports = merge(common, {
  output: {
    publicPath: publicUrl + '/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [{
      test: /\.(scss|sass|css)$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  watch: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Berrys',
      inject: true,
      template: './src/assets/index.html',
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: publicUrl,
    }),
  ]
});