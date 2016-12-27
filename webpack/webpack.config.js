var webpack = require('webpack');


module.exports = {
    entry: './app.js', // more entries: {entry: 'path', entry2: 'path'...}
    module: {
        loaders: [
            {test: /\.html/,
                loaders: [
                    'raw-loader',
                    // more options...
                ]
            }
        ]
    },
    output: {
        path: './dist',
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new webpack.DefinePlugin({
            PROD: false,
            DEV: true
        })
    ]
};
