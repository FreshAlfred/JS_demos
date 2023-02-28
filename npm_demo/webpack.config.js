// webpack.config.js  
const path=require('path')

module.exports = {  
    mode: 'development',  
    entry: './index.js',  
    output: {  
      filename: 'main.js',  
      publicPath: 'dist'  
    },
    devServer: {
      static:{
        directory: path.join(__dirname,'/'),  // 这里指定入口位置
    },
    },
    module: {
        rules: [  
            {  
              test: /\.js$/,  
              exclude: /node_modules/,  
              use: {  
                loader: 'babel-loader',  
                options: {  
                  presets: ['@babel/preset-env']  
                }  
              }  
            }  
          ]  
    }
  };