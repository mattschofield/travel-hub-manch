
/*
 * GET users listing.
 */
var request = require('request');
var config = require('../config/config');

exports.list = function(req, res){
  var options = {
    url: config.apiAddr + '/api/routes/MET1/buses',
    headers: {
      DevKey:config.devKey,
      AppKey:config.appKey
    }
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.send(body);
    }
  });
};
