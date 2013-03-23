
/*
 * GET buses listing.
 */
var request = require('request');
var config = require('../config/config');
var async = require('async');
var _ = require('underscore');

exports.list = function(req, res){
  var buses = [];
  async.parallel([
    function(callback) {
      getbus(1, buses, function(err) {
        if (!err) { callback(null, 1); }
      })
    },
    function(callback) {
      getbus(2, buses, function(err) {
        if (!err) { callback(null, 2); }
      })
    },
    function(callback) {
      getbus(3, buses, function(err) {
        if (!err) { callback(null, 3); }
      })
    }
  ], function(err, results){
    res.type('application/json');
    var filteredBuses = _.filter(buses, function(bus){
      return true;//!bus.IsParked
    });
    res.json(buses);
  });
};

function getbus(id, buses, callback){
  var options = {
    url: config.apiAddr + '/api/routes/MET'+id+'/buses',
    headers: {
      DevKey:config.devKey,
      AppKey:config.appKey
    }
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      JSON.parse(body).forEach(function(el, i, arr){
        buses.push(el);     
      });
      callback(null);
    }
  });
  
};
