
/*
 * GET stops listing.
 */
var request = require('request');
var config = require('../config/config');
var async = require('async');
var stops = [];

exports.list = function(req, res){
  async.parallel([
    function(callback) {
      getStops(1, function(err) {
        if (!err) { callback(null, 1); }
      })
    },
    function(callback) {
      getStops(2, function(err) {
        if (!err) { callback(null, 2); }
      })
    },
    function(callback) {
      getStops(3, function(err) {
        if (!err) { callback(null, 3); }
      })
    }
  ], function(err, results){
    res.type('application/json');
    res.json(stops);
  });
};

function buildStopTasks(){
  var tasks = [];
  for (var i=1; i<4; i++){
    tasks.push(function(callback) {
      getStops(i, function(err) {
        if (!err) { callback(null, i); }
      })
    })
  }
}

function getStops(routeId, callback){
  var options = {
    url: config.apiAddr + '/api/routes/'+routeId+'/stops',
    headers: {
      DevKey:config.devKey,
      AppKey:config.appKey
    }
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      JSON.parse(body).forEach(function(el, i, arr){
        stops.push(el);      
      });
      callback(null);
    }
  });
  
};
