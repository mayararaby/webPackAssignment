const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        main: './src/script/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].out.js'
    },

    mode: 'development',
    module: {
        rules: [{
                test: /\.(jpg|png|svg|gif)$/,
                use: { loader: 'file-loader', options: { outputPath: 'images' } }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',
    }
}