const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');


const rulesForJavascript = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        "presets": [
            ["@babel/preset-react", {
                "runtime": "automatic"
            }]
        ]
    }
}

const rulesForCss = {
    test: /\.css$/,
    use: [
        'style-loader', 'css-loader'
    ]
}

const rulesForPng = {
    test: /\.(png|jpg|gif|svg)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'assets/img/',
                useRelativePath: true
            }
        }
    ]
   /*  loader: 'file-loader? name=/public/img/[name].[ext]' */
}


// const rulesForJson = {
//     test: /\.json$/,
//     options: {
//         name: '[name].[ext]',
//         outputPath: 'assets/json/',
//         useRelativePath: true
//     },
//     // type: 'javascript/auto'
// }



const rules = [rulesForJavascript, rulesForCss, rulesForPng ]

module.exports = {
    entry: [
        path.resolve(__dirname, 'src', 'index.js')
      ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js'
        },
    module: {
        rules: rules,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
        }
        ),
    ],
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
   },
    devServer: {
        open: true,
        port: 3000,
        historyApiFallback:{
            index:'/'
        },
    }

}