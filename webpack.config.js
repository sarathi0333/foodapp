var config = {
   entry: './src/main.js',
	
   output: {
      path:'/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 3000
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }, {
             test: /\.css$/,
             use: ['css-loader']
         }
      ]
   }
}

module.exports = config;