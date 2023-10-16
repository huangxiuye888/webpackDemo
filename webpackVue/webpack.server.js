// webpack.server.js
const Merge = require("webpack-merge");
const path = require("path");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const base = require("./webpack.base");

module.exports = Merge.merge(base, {
  entry: {
    server: path.join(__dirname, "src/entry-server.js"),
  },
  target: "node",
  output: {
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin({ fileName: "manifest-server.json" }),
  ],
});
