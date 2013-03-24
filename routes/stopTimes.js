
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
    res.type("application/json");
    res.json(nearTimes);
  })
};

function getTimes(stopId, times, callback){
  console.log("Getting times for s_id : "+stopId);
  url = "http://gtfsapi.herokuapp.com/stops?stop_id="+stopId+"&include_stop_times=true&from=now&stop_time_limit=5"
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var parsedTimes = JSON.parse(body).stops[0].stop_times
      var now = moment().year(2000).dayOfYear(1);

      for (var i = 0; i < parsedTimes.length; i++) {
        var checkTime = moment(parsedTimes[i].departure_time, "HH:mm:ss").year(2000).dayOfYear(1);
        time = {
          routeName: parsedTimes[i].trip.route.route_short_name.trim(),
          depTime: checkTime.format("HH:mm"),
          expectedIn: checkTime.from(now)
        }
        times.push(time);
      };
      console.log(times);
      callback(null, times);
    }
  });
  
};
