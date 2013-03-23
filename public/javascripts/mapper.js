$(document).ready(function(){
  $("#carparks, #buses, #refresh").click(function(evt){
    draw();
  });
});

function drawRoute(map, arr) {
  var origin = destination = null;
  var waypoints = [];
  for (var i = 0; i < arr.length; i++) {
    if (i==0) { origin = arr[i].location; }
    else if (i==arr.length-1) { destination = arr[i].location; }
    else {
      waypoints.push(arr[i]);
    }
  };

  var request = {
    origin: origin,
    destination: destination,
    waypoints: waypoints,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  
  console.log("ORIGIN: "+origin);
  console.log("DESTINATION: "+destination);

  var rendererOptions = { map: map, suppressMarkers: false };
  directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
  directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    // var duration = response.routes[0].legs[0].duration.text;
    console.log(status);
    console.log(response);
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      console.log("Route should be plotted");
    } else {
      console.log('failed to get directions');
    }
  })
  waypoints = [];
}

function draw() {
  //Load Google Map
  var latlng = new google.maps.LatLng(53.477333 , -2.247412);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  if ($('#buses').is(':checked')){
    $.get("http://localhost:3000/buses")
    .done(function(data) {
      data.forEach(function(el,i,arr) {
        var bus = el;
        var busLatLon = new google.maps.LatLng(bus.Latitude, bus.Longitude);

        var colour = null;
        if (bus.Route == "MET1") { colour = "red"; }
        if (bus.Route == "MET2") { colour = "green"; }
        if (bus.Route == "MET3") { colour = "blue"; }

        var busMarker = new google.maps.Marker({
          icon: "http://maps.google.com/mapfiles/ms/icons/"+colour+"-dot.png",
          position: busLatLon,
          map: map,
          title: "Bus: "+bus.Id+" | Reg: "+bus.Registration 
        })

      })
    });
  }

  $.get("http://localhost:3000/stops/1")
  .done(function(data) {
    var origin = null,
        destination = null,
        waypoints = [],
        allpoints = [];

    data.forEach(function(el,i,arr) {
      allpoints.push({
        location: new google.maps.LatLng(el.Latitude, el.Longitude)
      });
    })

    var lastDestination = null;
    var tmp = []
    while (allpoints.length!=0) {
      while (tmp.length != 10 && allpoints.length != 0) {
        if (tmp.length == 9) {
          tmp.push(allpoints[0]);
        } else {
          tmp.push(allpoints.shift());
        }
      }
      console.log("TMP: "+tmp.length);
      console.log("AP: "+allpoints.length);

      drawRoute(map, tmp);
      // while (temp.length) { tmp.shift(); }
      tmp = [];
    }
    // allpoints = [];

  });

  if ($('#carparks').is(':checked')){
    $.get("http://localhost:3000/carparks")
    .done(function(data) {
      data.forEach(function(el,i,arr) {
        var cp = el;
        var cpLatLon = new google.maps.LatLng(cp.Longitude, cp.Latitude);
        var colour = "orange";
        var cpMarker = new google.maps.Marker({
          icon: "http://maps.google.com/mapfiles/ms/icons/"+colour+"-dot.png",
          position: cpLatLon,
          map: map,
          title: cp.Name + " Car Park" 
        })
        cpHealth = cp.SpacesNow / cp.Capacity;
        colour = null;
        if (cpHealth > 0.6){
          colour = "green";
        } else if (cpHealth > 0.3){
          colour = "orange";
        } else {
          colour= "red";
        }
        var cpInfoOptions = {
          content: "<div style=\"text-align:center;font-family:sans-serif;\"><b>"+cp.Name+"</b>" +
                   "<div style=\"background-color:"+colour+";width:80%;height:1em;margin:0;margin-left:10%;\"></div>" +
                   "<b>Spaces: </b>"+ cp.SpacesNow +
                   "<br /><em>30 mins: "+ cp.PredictedSpaces30Mins +
                   "<br /><em>60 mins: "+ cp.PredictedSpaces60Mins +
                   "</div>"
        }
        var cpInfoWindow = new google.maps.InfoWindow(cpInfoOptions);
        google.maps.event.addListener(cpMarker, 'mouseover', function(){
          cpInfoWindow.open(map, cpMarker);
        });
        google.maps.event.addListener(cpMarker, 'mouseout', function(){
          cpInfoWindow.close()
        });
      })
    });
  }
};


google.maps.event.addDomListener(window, 'load', draw);
