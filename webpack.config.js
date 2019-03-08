var webpack = require('webpack');
var path = require('path');
var htmwebpackplugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

var extractPlugin = new extractTextPlugin({
    filename:'css/[name].css'
})

var config = {

    entry :{
        main:SRC_DIR+'/js/main.js'
    },

    output : {
        path:DIST_DIR,
        filename:'[name].js'
    },

    module :{
       rules : [
           {
               test: /\.html$/,
               use:['html-loader']
           },
           {
               test :/\.(png|jpg)/,
               use:[
                   {
                       loader :'file-loader',
                       options : {
                           name : '[name].[ext]',
                           outputPath : 'img/',
                           publicPath : '../img/'
                       }
                   }
               ]
           },  

           {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule 
            loader: "url-loader",
            query:{
              limit:'100000',
              name:'[name].[ext]',
              outputPath: DIST_DIR +'/fonts'
              //the fonts will be emmited to public/assets/fonts/ folder 
              //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }  
            }
          },
         

          /* {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule 
            use:[
                {
                    loader: "url-loader",
                    query:{
                      limit:'10000',
                      name:'[name].[ext]',
                      outputPath:DIST_DIR +"fonts/"
                      //the fonts will be emmited to public/assets/fonts/ folder 
                      //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }  
                    }
                }
            ]
           },   */

          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },

          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
              }
              // other vue-loader options go here
            }
          },
          {
            test: /\.css$/,
            use:extractPlugin.extract({
                use:{
                    loader: "css-loader"
                  } ,
                fallback: "style-loader"
            }) 
          } ,

          {
            test: /\.(scss)$/,
            use: [
              {
                // Adds CSS to the DOM by injecting a `<style>` tag
                loader: 'style-loader'
              },
              {
                // Interprets `@import` and `url()` like `import/require()` and will resolve them
                loader: 'css-loader'
              },
              {
                // Loader for webpack to process CSS with PostCSS
                loader: 'postcss-loader',
                options: {
                  plugins: function () {
                    return [
                      require('autoprefixer')
                    ];
                  }
                }
              },
              {
                // Loads a SASS/SCSS file and compiles it to CSS
                loader: 'sass-loader'
              }
            ]
          }
        ]
    },

    plugins:[
      
      new webpack.ProvidePlugin({
        jQuery:'jquery',
        $:'jquery'
    }),
        extractPlugin,
       new htmwebpackplugin({
           filename :'index.html',
           chunks : ['main'],
           template : 'src/main.html'
       })
    ]
}

module.exports = config;
