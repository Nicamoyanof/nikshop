const path = require('path');

const rulesForJavascript = {
    test: /\.js$/,
    loader: 'babel-loader',
    options:{
        "presets": [
            '@babel/preset-react',
            {"runtime" : "automatic"}
        ]
    }
}

const rulesForCss ={
    test: /\.css$/,
    use: [
        'style-loader' , 'css-loader'
    ]
}

const rules = [rulesForJavascript, rulesForCss ]

module.exports = {
    output:{
        path: path.resolve(__dirname,'build')
    },
    rules: 
}