var webpack = require('webpack')

module.exports = {
    entry: {
      app:'./src/main.js',
    },
    output: {
         path: './static',
         publicPath: '/static/',
         filename: 'build.js'
            },
    module: {
        noParse: [],
        loaders:
            [{test: /\.vue$/,loader: 'vue'},
             {test: /\.js$/,exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,loader: 'babel'}
            ]},
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
    }
}


if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
    new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
    module.exports.devtool = '#source-map'
}
