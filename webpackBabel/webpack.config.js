const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "dist")
    },
    devtool:false,
    mode: 'production',
    module: {
        rules: [{
                test: /\.less$/i,
                include: {
                    and: [path.join(__dirname, './src/')]
                },
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",
                    }
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
    plugins:[
        new ESLintPlugin({ extensions: ['.js', '.ts'] })
    ],
    resolve: {
        // 用于自动解析.ts,.js后缀文件，不需要引入后缀简化作用
        extensions: ['.ts', '.js']
    }
}