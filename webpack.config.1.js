const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    //   entry: './public/javascripts/index.js',
    output: {
        publicPath: '/dist/',
        // chunkFilename: '[name].bundle.js',
        // filename: 'main.js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist/')
        // path: path.resolve(__dirname, 'dist')
    },
    mode: 'development', //'production'
    target: 'web',
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     // use: ['style-loader', 'css-loader'],
            //     // use: [ 'file-loader','style-loader', 'css-loader'],
            //     // use: [ 'file-loader', 'css-loader'],
            //     // use: [  'css-loader'],
            //     use: [ {
            //         loader: 'style-loader/url'
            //     },
            //     {
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name].[ext]',
            //             outputPath: 'css',
            //         },
            //     }, 
            //     {
            //         loader: 'css-loader',
            //         options: {

            //         }
            //     },
                
            // ],
            // },
            // {
            //     test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
            //     loader: 'url-loader',
            //     // loader: 'file-loader',
            //     options: {
            //         limit: 1,
            //         name: '[name].[ext]',
            //         outputPath: 'images',
            //     },
            // },
            // {
            //     test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
            //     loader: 'url-loader',
            //     // loader: 'file-loader',
            //     options: {
            //         limit: 1,
            //         name: '[name].[ext]',
            //         outputPath: 'images',
            //     },
            // },
            // {
            //     test: /\.css$/,
            //     use: [{
            //         loader: 'style-loader/url'
            //     }, 
            //     {
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name].[ext]',
            //             outputPath: 'css',
            //         },
            //     }
            //     ],
            // },
            // {
            //     test: /\.css$/,
            //     use: [{
            //         loader: 'style-loader'
            //     }, 
            //     {
            //         loader: 'css-loader'
            //     }, 
            //     // {
            //     //     loader: 'file-loader',
            //     //     options: {
            //     //         name: '[name].[ext]',
            //     //         outputPath: 'css',
            //     //     },
            //     // }
            //     ],
            // },
            // {
            //     test: /\.(gif|png|jpe?g|svg)$/i,
            //     use: [
            //         'file-loader',
            //         {
            //             loader: 'image-webpack-loader',
            //             options: {
            //                 bypassOnDebug: true, // webpack@1.x
            //                 disable: true, // webpack@2.x and newer
            //             },
            //         },
            //     ],
            // },
            {
                // test: /\.(png|svg|jpg|gif)$/,
                
                test: /\.(png|svg|jpg|jpe?g|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                    },
                }],
            },
            {
                // Transpiles ES5+ into ES5
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // {
            //     test: /\.html$/,
            //     use: ['html-loader']
            // }
        ],
        // loaders: [
        //     {
        //         test: /\.ejs$/,
        //         loader: 'ejs-loader',
        //         query: {
        //             variable: 'data',
        //             interpolate : '\\{\\{(.+?)\\}\\}',
        //             evaluate : '\\[\\[(.+?)\\]\\]'
        //         }
        //     },
        // ]
    }
};