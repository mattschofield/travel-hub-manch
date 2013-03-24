
/*
 * GET stops listing.
 */
var request = require('request');
var config = require('../config/config');
var async = require('async');
var moment = require('moment');
var _ = require('underscore')

exports.listByStop = function(req, res){
  var times = [];
  getTimes(req.params.id, times, function(err, nearTimes) {
    res.json(nearTimes);
  })
};

function getTimes(stopId, times, callback){
  url = "http://gtfsapi.herokuapp.com/stop_times?limit=500&stop_id="+stopId
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var parsedTimes = JSON.parse(body).stop_times
      var now = moment().year(2000).dayOfYear(1).hour(5).minute(40);

      console.log(parsedTimes.length);
      for (var i = 0; i < parsedTimes.length; i++) {
        var checkTime = moment(parsedTimes[i].departure_time).year(2000).dayOfYear(1);
        if (checkTime.isBefore(now)) {

        } else {
          times = parsedTimes.splice(i, 5);
          break;
        }
      };
      callback(null, times);
    }
  });
  
};
