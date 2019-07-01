const path = require('path');
const webpack = require('webpack');
module.exports = {
    // entry: './src/js/index.js',
    entry: {
        '/js/index': './src/js/index',
        '/js/poles': './src/js/poles',
        '/js/decouvrir': './src/js/decouvrir',
        '/js/expertises': './src/js/expertises',
        '/js/sectors': './src/js/sectors',
        '/js/magazine': './src/js/magazine',
        '/js/accademie': './src/js/accademie',
        '/js/contact': './src/js/contact',
        '/js/policies': './src/js/policies',
        // '/css': './src/scss/app.scss',
    },
    output: {
        publicPath: '/dist/',
        chunkFilename: '[name].js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist/')
    },
    mode: 'development', //'production'
    target: 'web',
    devServer: {
        host: 'localhost',
        publicPath: '/dist/',
        contentBase: path.resolve(__dirname, "public/dist"),
        watchContentBase: true,
        compress: true,
        port: 9000
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2,
                    minSize: 0
                }
            }
        },
        occurrenceOrder: true
    },
    module: {
        rules: [{
            // test: /\.css$/,
            test: /\.css|scss$/,
            use: [
                // {
                //     //add link tag to html file
                //     loader: 'style-loader/url'
                // }, 
                {
                    //save the file to dist/css folder
                    loader: 'file-loader',
                    options: {
                        // name: '[name].[ext]',
                        //save compiled sass to .css
                        name: '[name].css',
                        outputPath: 'css'
                    }
                }, {
                    //extract css code
                    loader: 'extract-loader'
                }, {
                    //parse css (@import and url)
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        // modules: true,
                        // importLoaders: 1,
                        // localIdentName: '[sha1:hash:hex:4]'
                    }
                }, {
                    //can be down in a postcss.config.js file
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        // exec: true,
                        plugins: [
                            // require('node-sass'),
                            require('autoprefixer')({
                                browsers: [
                                    'defaults',
                                    // 'last 140 version',
                                ]
                            })
                        ]
                    },
                },
                // {
                //     loader: 'resolve-url-loader',
                // },
                {
                    // Loads a SASS/SCSS file and compiles it to CSS
                    loader: 'sass-loader'
                }
            ],
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts'
                }
            }]
        },
        {
            // test: /\.(png|svg|jpg|jpe?g|gif)$/,
            test: /\.(png|svg|jpg|jpe?g|gif)$/,
            exclude: [
                path.resolve(__dirname, './src/fonts'),
            ],
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images',
                },
            }],
        },
            // {
            //     test: /\.ejs$/, 
            //     loader: 'ejs-loader',
            // },
            // {
            //     test: /\.html$/,
            //     loader: 'underscore-template-loader',
            //     //     use: [{
            //     //         loader: 'file-loader',
            //     //         options: {
            //     //             name: '[name].[ext]',
            //     //             outputPath: 'views',
            //     //         },
            //     //     },{
            //     //         loader: 'underscore-template-loader',
            //     //     }]
            // },
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
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
        }),
    ]
};