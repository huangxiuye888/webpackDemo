const path = require('path')
const {
    VueLoaderPlugin
} = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/entry-client.js',
    output: {
        filename: "[name].js",
        path: path.join(__dirname, 'dist')
    },
    mode:'development',
    devServer: {
        hot: true,
        open: true
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }

        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            templateContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Webpack App</title>
        </head>
        <body>
          <div id="app" />
        </body>
      </html>
          `,
        }),
    ],
    resolve: {
        extensions: [".vue", ".js"],
    },
}