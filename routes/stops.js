
/*
 * GET stops listing.
 */
var request = require('request');
var config = require('../config/config');
var async = require('async');

exports.listAll = function(req, res){  
  var stops = [];
  async.parallel([
    function(callback) {
      getStops(1, stops, function(err) {
        if (!err) { callback(null, 1); }
      })
    },
    function(callback) {
      getStops(2, stops, function(err) {
        if (!err) { callback(null, 2); }
      })
    },
    function(callback) {
      getStops(3, stops, function(err) {
        if (!err) { callback(null, 3); }
      })
    }
  ], function(err, results){
    res.type('application/json');
    res.json(stops.reverse());
  });
};

exports.listByRoute = function(req, res){
  var stops = [];
  console.log(req.params.id);
  async.parallel([
    function(callback) {
      getStops(req.params.id, stops, function(err) {
        if (!err) { callback(null, req.params.id); }
      })
    }
  ], function(err, results){
    res.type('application/json');
    res.json(stops.reverse());
  });
};

function getStops(routeId, stops, callback){
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
        el.route = routeId;
        stops.push(el);      
      });
      callback(null);
    }
  });
  
};
