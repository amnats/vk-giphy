module.exports = {
   entry: {
      index: ['./src/vk-openapi.js', './src/index.js'],
      background: ['./src/vk-openapi.js', './src/background.js']
   },

   output: {
      filename: '[name].js',
      path: __dirname + '/bin'
   },

   module: {
      loaders: [
         { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015' }
      ]
   }
};