const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/client/index.html',
  filename: './index.html',
});

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'], // Added to let webpack resolve jsx files e.g import Markup from './App'
  },
  entry: {
    main: path.resolve(__dirname, './src/client/index.jsx'),
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // Used to load images
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
};
