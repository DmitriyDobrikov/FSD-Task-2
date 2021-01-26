const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const PATHS = {
    // Path to main app dir
    src: path.join(__dirname, './src'),
    // Path to Output dir
    dist: path.join(__dirname, './dist'),
    // Path to Second Output dir (js/css/fonts etc folder)
    assets: 'assets/'
}




const PAGES_DIR = `${PATHS.src}/pug/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))






module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    // mode: 'development',
    // devServer: {
    //     historyApiFallback: true,
    //     contentBase: path.resolve(__dirname, './dist'),
    //     open: true,
    //     compress: true,
    //     hot: true,
    //     port: 8081,
    // },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
        
      },

    plugins: [

        // new HtmlWebpackPlugin({
        //     title: 'webpack Boilerplate',
        //     template: path.resolve(__dirname, './src/template.html'), // шаблон
        //     filename: 'index.html', // название выходного файла
        // }),

        // new CleanWebpackPlugin(),
  

        // применять изменения только при горячей перезагрузке
        new webpack.HotModuleReplacementPlugin(),

        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
          })),
          new CleanWebpackPlugin(),
    ],

    // devServer: {
    //     overlay: true,
    //     open: true
    //   },

    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },

            //Изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },

            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },


            // CSS, PostCSS, Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },


            // pug
            {
                test: /\.pug$/,
                loader: 'pug-loader'
              },
        ],
    }
}

/*Обратите внимание, что мы установили настройки для режима разработки.
 Для продакшна следует использовать MiniCssExtractPlugin вместо style-loader,
который экспортирует минифицированный CSS.*/