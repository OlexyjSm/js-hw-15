const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: [path.resolve(__dirname, "./src/index.js")],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "",
    assetModuleFilename: "assets/[name].[contenthash] [ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.hbs$/i,
        loader: "handlebars-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.(ico|png|jpeg|webp|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "index",
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "src/assets/img"), to: "img" },
      ],
    }),
  ],
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
};
