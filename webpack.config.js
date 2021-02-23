const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')



const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/'
}


const pageNames = [
    'form-elements', 'cards', 'main', 'colors-and-type', 'headers-and-footers', 
    'landing-page', 'registration', 'room-details', 'search-room',
  ];
  
  const entries = pageNames.reduce(
    (accumulator, pageName) => (
      { ...accumulator, ...{ [pageName]: `${PATHS.src}/site-pages/${pageName}/${pageName}.js` } }
    ), {},
  );


const sitePages = pageNames
  .map((name) => new HtmlWebpackPlugin({
    template: `./src/site-pages/${name}/${name}.pug`,
    filename: `./${name}.html` ,
    chunks: [`${name}`, 'vendors'],
  }));






module.exports = {
    entry: entries,//{
        // main: path.resolve(__dirname, './src/index.js'),
    // },

    output: {
        path: PATHS.dist, // path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js',
    },


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

        new CleanWebpackPlugin(),

        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.$': 'jquery',
          'window.jQuery': 'jquery',
        }),
  

        // применять изменения только при горячей перезагрузке
        new webpack.HotModuleReplacementPlugin(),

        // ...PAGES.map(page => new HtmlWebpackPlugin({
        //     template: `${PAGES_DIR}/${page}`,
        //     filename: `./${page.replace(/\.pug/,'.html')}`
        //   })),
        //PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug')),

 
          
    ].concat(sitePages),

    

    

    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },

            //Изображения
            // {
            //     test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            //     type: 'asset/resource',
            // },

            {
              test: /\.(ico|gif|png|jpg|jpeg)$/i,
              //loader: 'file-loader',
              type: 'asset/resource',
              //include: [path.resolve(PATHS.src, 'images')],
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