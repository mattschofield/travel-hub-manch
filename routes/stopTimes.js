
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
  url = "http://gtfsapi.herokuapp.com/stops?stop_id="+stopId+"&include_stop_times=true"
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var parsedTimes = JSON.parse(body).stop_times
      var now = moment().year(2000).dayOfYear(1);

      for (var i = 0; i < parsedTimes.length; i++) {
        var checkTime = moment(parsedTimes[i].departure_time).year(2000).dayOfYear(1);
        if (checkTime.isBefore(now)) {

        } else {
          allDataFromAPI = parsedTimes.splice(i, 5);
          console.log(allDataFromAPI);
          allDataFromAPI.forEach(function(el, i, arr){
            time = {}
            time.routeName = el.trip.route.route_short_name;
            time.expectedIn = moment(el.departure_time).from(now);
            times.push(time);
          })
          break;
        }
      };
      console.log(times);
      callback(null, times);
    }
  });
  
};
