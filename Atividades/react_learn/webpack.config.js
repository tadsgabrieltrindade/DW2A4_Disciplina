//Criado para não dá erro de compatibilidade no caminho em diferentes SOs
const path = require('path');

const HtmlWebpPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports ={

    mode: isDevelopment ? 'development' : 'production',
    //'entry' indica qual é o arquivo inicial da nossa aplicação
    //'resolve' recebe, no 1º parâmetro, a raiz do projeto, e os seguintes são os caminhos

    devtool: isDevelopment ? 'eval-source-map' : 'source-map', 

    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    

    //arquivo de saída do webpack
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    //indica quais arquivos que o webpack vai aceitar
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new HtmlWebpPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],

    devServer: {
        static: path.resolve(__dirname, 'public')
    },

    //com ela é possível fazer configurações para as regras de cada arquivo do projeto
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: 'babel-loader' //faz a intergração entre o babel e o webpack
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'] //faz a intergração entre o babel e o webpack
        }
    ]
    }
}