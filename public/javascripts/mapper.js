$(document).ready(function(){
  $("#carparks, #buses, #refresh").click(function(evt){
    draw();
  });
});

function drawPolys(map){
  var polys = {21906
: [new google.maps.LatLng(53.48894560782739,-2.243255954235792),
                new google.maps.LatLng(53.48927116099835,-2.241764646023512),
                new google.maps.LatLng(53.48888177357927,-2.2412711195647717),
                new google.maps.LatLng(53.48837109613578,-2.2426444105803967)],
               21914
: [new google.maps.LatLng(53.48643046577408,-2.244931748136878),
                new google.maps.LatLng(53.48667943318646,-2.2455701138824224),
                new google.maps.LatLng(53.48638897106329,-2.245950987562537),
                new google.maps.LatLng(53.486631554951416,-2.24638550542295),
                new google.maps.LatLng(53.48581761668719,-2.248654654249549),
                new google.maps.LatLng(53.485421813612774,-2.248477628454566),
                new google.maps.LatLng(53.48528775044378,-2.2487351205199957),
                new google.maps.LatLng(53.485191990778,-2.2486653830856085),
                new google.maps.LatLng(53.48517603081267,-2.248327424749732),
                new google.maps.LatLng(53.485112190891364,-2.2482415940612555),
                new google.maps.LatLng(53.48521752671001,-2.247748067602515),
                new google.maps.LatLng(53.48541862163746,-2.2479197289794683),
                new google.maps.LatLng(53.48579527306359,-2.246755650267005),
                new google.maps.LatLng(53.48549203700836,-2.246460607275367),
                new google.maps.LatLng(53.48534201415846,-2.246675183996558),
                new google.maps.LatLng(53.48506750288927,-2.2462460305541754),
                new google.maps.LatLng(53.485348398120344,-2.2457900550216436),
                new google.maps.LatLng(53.48580484890371,-2.24613337777555),
                new google.maps.LatLng(53.48594529431047,-2.2458769334480166),
                new google.maps.LatLng(53.48551118882334,-2.2455969359725714)],
                21923: [new google.maps.LatLng(53.4822265261311,-2.2494646813720465),
new google.maps.LatLng(53.481999878217785,-2.249598791822791),
new google.maps.LatLng(53.48192964904116,-2.249276926741004),
new google.maps.LatLng(53.48164553891293,-2.249453952535987),
new google.maps.LatLng(53.4816168085693,-2.2485902812331915),
new google.maps.LatLng(53.481999878217785,-2.248375704512)],
21926: [new google.maps.LatLng(53.48373641724243,-2.2471472527831793),
new google.maps.LatLng(53.48359277240965,-2.2462889458984137),
new google.maps.LatLng(53.48462700434953,-2.245586207136512),
new google.maps.LatLng(53.48471638123472,-2.2458973433822393),
new google.maps.LatLng(53.484419521568604,-2.246058275923133),
new google.maps.LatLng(53.484464210253314,-2.2462996747344732),
new google.maps.LatLng(53.48402051336837,-2.2466161753982306),
new google.maps.LatLng(53.48407477870409,-2.2469434048980474)],
21924: [new google.maps.LatLng(53.48450251480274,-2.245328715071082),
new google.maps.LatLng(53.483580003956526,-2.2459134366363287),
new google.maps.LatLng(53.48341082158982,-2.244985392317176),
new google.maps.LatLng(53.484358872564044,-2.2442504670470953)]

               };

                                  
  for (var key in polys){
    var cpPoly = new google.maps.Polygon({
                          paths: polys[key],
                          map: map,
                          fillColor: "black",
                          clickable: false,
                          zIndex: -1
                        });
  }
  

}

function drawRoute(map, segment) {
  console.log(segment.length);
  var routeOptions = {
    origin: segment.shift().location,
    destination: segment.pop().location,
    waypoints: segment,
    travelMode: google.maps.DirectionsTravelMode.WALKING
  };
  var rendererOptions = { map: map, 
                          suppressMarkers: true,
                          preserveViewport: true,                   
                        };
  var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(routeOptions, function(response, status) {
    console.log(status);
    console.log(response);
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      console.log("Route should be plotted");
    } else {
      console.log('failed to get directions');
    }
  })
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
  map.setOptions({draggableCursor: 'crosshair'});
  
  google.maps.event.addListener(map, 'click', function(evt){
          $('#coords').append("new google.maps.LatLng(" + evt.latLng.lat()+ "," +evt.latLng.lng()+"),\n");
  });

  drawPolys(map);
  

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
    var waypoints = [];

    data.forEach(function(el,i,arr) {
      var elMarker = new google.maps.Marker({
            icon: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
            position: new google.maps.LatLng(el.Latitude, el.Longitude),
            map: map,
            title: el.seq + " " + el.CommonName
      })
      waypoints.push({
        location: new google.maps.LatLng(el.Latitude, el.Longitude)
      });
    })
    

    var segment = [];
    while (waypoints.length > 0) {
      while (segment.length < 10 && waypoints.length > 0) {
        if (segment.length < 9) {
          segment.push(waypoints.shift());
        } else {
          segment.push(waypoints[0]);
        }
      }
      drawRoute(map, segment);
      segment = [];
    }
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
        google.maps.event.addListener(cpMarker, 'click', function(){
          //cpInfoWindow.open(map, cpMarker);
          $('#coords').append(cp.Id+"\n");
        });
        google.maps.event.addListener(cpMarker, 'mouseout', function(){
          cpInfoWindow.close()
        });
      })
    });
  }
};


google.maps.event.addDomListener(window, 'load', draw);
