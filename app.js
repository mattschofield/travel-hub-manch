
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , buses = require('./routes/buses')
  , stops = require('./routes/stops')
  , carparks = require('./routes/carparks')
  , stopTimes = require('./routes/stopTimes')
  , http = require('http')
  , path = require('path');
//var redis = require("redis"),
//client = redis.createClient();

var app = express();
var server = http.createServer(app);
var config = require('./config/config');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/buses', buses.list);
app.get('/stops', stops.listAll);
app.get('/stops/:id', stops.listByRoute);
app.get('/carparks', carparks.list);
app.get('/stopTimes/:id', stopTimes.listByStop);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var io = require("socket.io").listen(server);
io.set('log level', 1);

io.sockets.on('connection', function (socket) {
  require('./routes/sockets')(socket);
});

