const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    //   {
    //     test: /\.css$/i,
    //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
    //   },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })],
};
