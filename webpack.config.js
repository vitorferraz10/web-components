const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const PUBLIC_DIR = "public";

module.exports = {
  devtool: "source-map",
  devServer: {
    
    hot: true,
    port: 3340,
  },
  entry: path.resolve(__dirname, "src", "main.js"),
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",       
        test: /\.js$/,
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, PUBLIC_DIR, "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  target: "web",
};
