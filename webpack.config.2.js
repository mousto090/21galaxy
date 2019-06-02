const path = require('path');

module.exports = (mode = 'production') => {
    const pathToMainCss = require.resolve("./src/css/style.css");
    const loaders = [{
        loader: "css-loader",
        options: {
            sourceMap: true
        }
    }, ];

    if (mode === "production") {
        // loaders.unshift(
        //     "file-loader",
        //     "extract-loader"
        // );
        loaders.unshift(
            'style-loader/url',
            {
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                    outputPath: 'css',
                },
            },
            "extract-loader",
        );
    } else {
        loaders.unshift("style-loader");
    }


    const conf = {
        mode,
        entry: pathToMainCss,
        output: {
            publicPath: '/dist/',
            // chunkFilename: '[name].bundle.js',
            filename: 'main.js',
            // filename: '[name].js',
            path: path.resolve(__dirname, 'public/dist/')
            // path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [{
                    test: pathToMainCss,
                    loaders: loaders
                },
                {
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
            ]
        }
    };
    // var debug = require('debug')('21galaxy:webpack');
    // debug(conf);
    // // debug(conf.module);
    // debug(conf.module.rules[0].loaders);
    // console.log(err);

    return conf;
};