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

  var mattsPolys = {
    21938: [
      new google.maps.LatLng(53.48239890542354,-2.2305248491466045),
      new google.maps.LatLng(53.48277717974917,-2.229460012167692),
      new google.maps.LatLng(53.48251701675657,-2.2289530746638775),
      new google.maps.LatLng(53.482161085660735,-2.2295243851840496),
      new google.maps.LatLng(53.48186261199138,-2.2292320244014263),
      new google.maps.LatLng(53.481525829019496,-2.2295082919299603),
      new google.maps.LatLng(53.481889746048104,-2.230165433138609)
    ],
    21913: [
      new google.maps.LatLng(53.48101665916571,-2.2315868362784386),
      new google.maps.LatLng(53.48118904337409,-2.2309860214591026),
      new google.maps.LatLng(53.480464386522385,-2.230353020131588),
      new google.maps.LatLng(53.48019942079477,-2.2305461391806602),
      new google.maps.LatLng(53.47996637728109,-2.23129715770483),
      new google.maps.LatLng(53.47980356529967,-2.231227420270443),
      new google.maps.LatLng(53.479576904442055,-2.231747768819332),
      new google.maps.LatLng(53.48030796117245,-2.2323914989829063),
      new google.maps.LatLng(53.480639965309834,-2.2313347086310387)
    ],
    21933: [
      new google.maps.LatLng(53.47918423558339,-2.231946252286434),
      new google.maps.LatLng(53.479082077235844,-2.2322895750403404),
      new google.maps.LatLng(53.47811475319126,-2.2312703356146812),
      new google.maps.LatLng(53.47771249313604,-2.2302457317709923),
      new google.maps.LatLng(53.4771697552718,-2.2279175743460655),
      new google.maps.LatLng(53.477275110811966,-2.2277727350592613),
      new google.maps.LatLng(53.4775847907337,-2.228931449353695),
      new google.maps.LatLng(53.477792306942305,-2.2292425855994225),
      new google.maps.LatLng(53.478140293383476,-2.23080363124609),
      new google.maps.LatLng(53.47907888478352,-2.231828235089779)
    ],
    21931: [
      new google.maps.LatLng(53.478204143796745,-2.2331639751791954),
      new google.maps.LatLng(53.47703566602414,-2.23329808562994),
      new google.maps.LatLng(53.47733257736,-2.232203744351864),
      new google.maps.LatLng(53.47803813252237,-2.2326060757040977)
    ],
    21909: [
      new google.maps.LatLng(53.47455493851098,-2.236632239073515),
      new google.maps.LatLng(53.47489177681731,-2.2352401725947857),
      new google.maps.LatLng(53.47457728805486,-2.2350443713366985),
      new google.maps.LatLng(53.47426120055434,-2.236457895487547)
    ],
    21939: [
      new google.maps.LatLng(53.48006534112137,-2.234826944768429),
      new google.maps.LatLng(53.480314345891884,-2.2341885790228844),
      new google.maps.LatLng(53.4800270325654,-2.2338398918509483),
      new google.maps.LatLng(53.479755679303864,-2.234467528760433)
    ],
    21925: [
      new google.maps.LatLng(53.47899907339732,-2.2359853237867355),
      new google.maps.LatLng(53.47941409096605,-2.2353415936231613),
      new google.maps.LatLng(53.4790565376105,-2.2348587960004807),
      new google.maps.LatLng(53.47860320670283,-2.2355132550001144)
    ],
    21911: [
      new google.maps.LatLng(53.47819935501907,-2.237383257597685),
      new google.maps.LatLng(53.4776949340785,-2.2381906025111675),
      new google.maps.LatLng(53.47734375140195,-2.237630020827055),
      new google.maps.LatLng(53.47787371687007,-2.2367904894053936)
    ],
    21935: [
      new google.maps.LatLng(53.477680567571475,-2.2395798191428185),
      new google.maps.LatLng(53.47778592184334,-2.2393276914954185),
      new google.maps.LatLng(53.477457087947045,-2.2387751564383507),
      new google.maps.LatLng(53.47763906430164,-2.238415740430355),
      new google.maps.LatLng(53.477281495987825,-2.2377290949225426),
      new google.maps.LatLng(53.47679302726081,-2.238517664372921),
      new google.maps.LatLng(53.477217644186126,-2.2391023859381676)
    ],
    21929: [
      new google.maps.LatLng(53.47558939077813,-2.2397300228476524),
      new google.maps.LatLng(53.47570432836234,-2.2393008694052696),
      new google.maps.LatLng(53.47540421290432,-2.2390111908316612),
      new google.maps.LatLng(53.47525734711948,-2.2394349798560143)
    ]
  }

                                  
  for (var key in mattsPolys){
    var cpPoly = new google.maps.Polygon({
                          paths: mattsPolys[key],
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

var socket = io.connect('http://localhost');
// socket.on('updateBusInfo', function () {
//   draw();
// });
// socket.on('updateCarParkInfo', function() {
//   draw();
// })

google.maps.event.addDomListener(window, 'load', draw);
