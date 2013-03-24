
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
  // url = "http://gtfsapi.herokuapp.com/stops?stop_id="+stopId+"&include_stop_times=true"
  // request(url, function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     var parsedTimes = JSON.parse(body).stop_times
  //     var now = moment().year(2000).dayOfYear(1);

  //     for (var i = 0; i < parsedTimes.length; i++) {
  //       var checkTime = moment(parsedTimes[i].departure_time).year(2000).dayOfYear(1);
  //       if (checkTime.isBefore(now)) {

  //       } else {
  //         allDataFromAPI = parsedTimes.splice(i, 5);
  //         console.log(allDataFromAPI);
  //         allDataFromAPI.forEach(function(el, i, arr){
  //           time = {
  //             routeName: el.trip.route.route_short_name,
  //             depTime: moment(el.departure_time).format("HH:mm"),
  //             expectedIn: moment(el.departure_time).from(now)
  //           }
  //           times.push(time);
  //         })
  //         break;
  //       }
  //     };
  //     console.log(times);
  //     callback(null, times);
  //   }
  // });
  tmpTimes = [
    {
      routeName: "MET1"
      ,depTime: "11:45"
      ,expectedIn: "1 min"
    },
    {
      routeName:"MET1"
      ,depTime: "11:48"
      ,expectedIn: "4 mins"
    },
    {
      routeName: "MET1"
      ,depTime: "12:00"
      ,expectedIn: "16 mins"
    },
    {
      routeName: "MET1"
      ,depTime: "12:02"
      ,expectedIn: "18 mins"
    },
    {
      routeName: "MET1"
      ,depTime: "12:15"
      ,expectedIn: "30 mins"
    }
  ];
  callback(null, tmpTimes);
  
};
