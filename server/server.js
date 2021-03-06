var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./../webpack.config.js');

var db = require('./db/database.js').db;
var addRecipes = require('./db/addRecipes.js');

var app = express();

var compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/../www'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at localhost', host, port);
});