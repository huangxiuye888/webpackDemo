const path = require("path");
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
    library: {
      name: "_",
      type: "umd",
    },
  },
  devtool: 'source-map',
  module:{
    rules:[
        {
            test:/\.css$/i,
            use:[MiniCssExtractPlugin.loader,"css-loader"]
        }
    ]
  },

  plugins:[new MiniCssExtractPlugin()],
//   排除所有node_modules模块
  externals:[new nodeExternals()]
//   externals: {
//     lodash: {
//       commonjs: "lodash",
//       commonjs2: "lodash",
//       amd: "lodash",
//       root: "_",
//     },
//   },
};
