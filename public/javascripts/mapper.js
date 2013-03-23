
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
}

google.maps.event.addDomListener(window, 'load', draw);
