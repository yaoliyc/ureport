/**
 * Created by Jacky.Gao on 2018-04-15.
 * Base on Webpack4
 */
const path=require('path');
module.exports={
    mode:'development',
    entry: {
        designer:'./src/index.js',
        searchform:'./src/form/index.js',
        preview:'./src/preview.js'
    },
    output:{
        path:path.resolve('../ureport2-console/src/main/resources/ureport-asserts/js'),
        filename:'[name].bundle.js'
    },
    devtool: 'cheap-module-eval-source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    // 抽离第三方插件
                    test: /handsontable|codemirror|chart.js/,
                    chunks: 'initial',
                    name: 'common',
                    priority: 10
                }
            }
        }
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test:/\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000000
                        }
                    }
                ]
            }
        ]
    }
};