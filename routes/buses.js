
/*
 * GET buses listing.
 */
var request = require('request');
var config = require('../config/config');
var async = require('async');
var moment = require('moment');
var _ = require('underscore');
var buses = [];

exports.list = function(req, res){
  async.parallel([
    function(callback) {
      getbus(1, function(err) {
        if (!err) { callback(null, 1); }
      })
    },
    function(callback) {
      getbus(2, function(err) {
        if (!err) { callback(null, 2); }
      })
    },
    function(callback) {
      getbus(3, function(err) {
        if (!err) { callback(null, 3); }
      })
    }
  ], function(err, results){
    res.type('application/json');
    var filteredBuses = _.filter(buses, function(bus){
      return true;//!bus.IsParked
    });
    buses = [];
    res.json(filteredBuses);
    
  });
};

function getbus(id, callback){
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
