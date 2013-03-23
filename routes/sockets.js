
var request = require('request');
var config = require('../config/config');
var async = require('async');
var _ = require('underscore');

var sockets = function(socket) {
  setInterval(function(){
    console.log("Emitting updateBusInfo event");
    socket.emit('updateBusInfo');
  }, 120000);

  setInterval(function(){
    console.log("Emitting updateCarParkInfo event");
    socket.emit('updateCarParkInfo');
  }, 300000);
}
module.exports = sockets;