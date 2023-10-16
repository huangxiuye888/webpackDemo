const Merge = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const base = require("./webpack.base");
module.exports = Merge.merge(base, {
  mode: "development",
  entry: {
    client: path.join(__dirname, "./src/entry-client.js"),
  },
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new WebpackManifestPlugin({ fileName: "manifest-client.json" })],
});
