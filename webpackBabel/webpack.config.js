const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "dist")
    },
    devtool: false,
    mode: 'development',
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }, 
            {
                test: /\.less$/i,
                include: {
                    and: [path.join(__dirname, './src/')]
                },
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    // {
                    //     loader:"postcss-loader",
                    //     options:{
                    //         postcssOptions:{
                    //             plugins:[require("autoprefixer")]
                    //         }
                    //     }
                    // 将postcss抽离
                    // },
                    "less-loader"
                ]
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                    // 可以选择使用 @babel/preset-typescript规则集，借助babel-loader完成js与ts的转码工作，只是简单完成代码转换，并未做类似 ts-loader 的类型检查工作
                    // options: {
                    //     presets: ['@babel/preset-typescript'],
                    // },
                }],

            },
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader'
                }]
            }
        ]
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['.js', '.ts']
        }),
        new HTMLWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    resolve: {
        // 用于自动解析.ts,.js后缀文件，不需要引入后缀简化作用
        extensions: ['.ts', '.js']
    }
}

 // style - loader， 会在js主程序中注入runningtime代码， 配合HTMLWebpackPlugin， 动态以style标签注入样式， 且支持hmr； mini - css - extract - plugin将css打包成独立的文件， 不支持hmr；
// 性能影响： style - loader由于混合在js中， 代码的颗粒度很大，无论js或css变动会导致缓存失效， 并且不能利用异步加载， 会导致页面卡顿， mini - css - extract - plugin因为是link引入所以不会影响， 且没有注入多余的js代码。