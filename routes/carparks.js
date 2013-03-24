
/*
 * GET stops listing.
 */
var request = require('request');
var config = require('../config/config');
var async = require('async');

exports.list = function(req, res){
  var carparks = [];
  async.parallel([
    function(callback) {
      getCarparks(0, carparks, function(err) {
        if (!err) { callback(null, 0); }
      })
    },
    function(callback) {
      getCarparks(1, carparks, function(err) {
        if (!err) { callback(null, 1); }
      })
    },
    function(callback) {
      getCarparks(2, carparks, function(err) {
        if (!err) { callback(null, 2); }
      })
    },
    function(callback) {
      getCarparks(3, carparks, function(err) {
        if (!err) { callback(null, 3); }
      })
    }
  ], function(err, results){
    res.type('application/json');
    res.json(carparks);
  });
};

function getCarparks(pageNum, carparks, callback){
  var options = {
    url: config.apiAddr + '/api/CarParks?pageIndex='+pageNum+'&pageSize=10',
    headers: {
      DevKey:config.devKey,
      AppKey:config.appKey
    }
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      JSON.parse(body).forEach(function(el, i, arr){
        carparks.push(el);      
      });
      callback(null);
    }
  });
  
};
