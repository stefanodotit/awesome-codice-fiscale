const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        'awesome_codice_fiscale': './src/index.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'awesome_codice_fiscale.js',
        library: 'AwesomeCodiceFiscale',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true
    }
}