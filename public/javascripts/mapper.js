$(document).ready(function(){
  $("#carparks, #buses, #refresh").click(function(evt){
    draw();
  });
});

function drawPolys(map){
  var polys = {
21906: [new google.maps.LatLng(53.48894560782739,-2.243255954235792),
        new google.maps.LatLng(53.48927116099835,-2.241764646023512),
        new google.maps.LatLng(53.48888177357927,-2.2412711195647717),
        new google.maps.LatLng(53.48837109613578,-2.2426444105803967)],
21914: [new google.maps.LatLng(53.48643046577408,-2.244931748136878),
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
        new google.maps.LatLng(53.484358872564044,-2.2442504670470953)],
21937: [new google.maps.LatLng(53.48139334967702,-2.2569030337035656),
        new google.maps.LatLng(53.48097196684921,-2.256463151425123),
        new google.maps.LatLng(53.48023772919509,-2.258169036358595),
        new google.maps.LatLng(53.48095281298487,-2.2577827982604504)],




21936: [new google.maps.LatLng(53.48005257160655,-2.2551295068114996),
        new google.maps.LatLng(53.48025049865416,-2.254764726385474),
        new google.maps.LatLng(53.47989295234719,-2.254298022016883),
        new google.maps.LatLng(53.47967906159819,-2.2547539975494146)],
21908: [new google.maps.LatLng(53.473568354059466,-2.2497436311095953),
        new google.maps.LatLng(53.473565161192276,-2.2485956456512213),
        new google.maps.LatLng(53.47328738082855,-2.2485366370528936),
        new google.maps.LatLng(53.473060685161315,-2.2486278321594),
        new google.maps.LatLng(53.472728621716236,-2.2498080041259527)],
21918: [new google.maps.LatLng(53.47476885509116,-2.2505590226501226),
        new google.maps.LatLng(53.47470180672683,-2.248981883749366),
        new google.maps.LatLng(53.47510090257215,-2.247973373159766),
        new google.maps.LatLng(53.47520307050513,-2.248327424749732),
        new google.maps.LatLng(53.47537228560302,-2.2493359353393316),
        new google.maps.LatLng(53.47502108370336,-2.249604156240821),
        new google.maps.LatLng(53.47496361402487,-2.2503927256911993)],
21921: [new google.maps.LatLng(53.47677387150989,-2.2500333096832037),
        new google.maps.LatLng(53.47655357975259,-2.248901417478919),
        new google.maps.LatLng(53.47559258349302,-2.249555876478553),
        new google.maps.LatLng(53.475806494842466,-2.250569751486182)],
21922: [new google.maps.LatLng(53.47770930058066,-2.249352028593421),
        new google.maps.LatLng(53.4769813916844,-2.2497597243636847),
        new google.maps.LatLng(53.47680579775664,-2.2487887647002935),
        new google.maps.LatLng(53.47752413195797,-2.248402526602149)],
21917: [new google.maps.LatLng(53.47679621988514,-2.246980955824256),
        new google.maps.LatLng(53.47619600229145,-2.2461119201034307),
        new google.maps.LatLng(53.475340358277734,-2.247828533872962),
        new google.maps.LatLng(53.475911853767485,-2.248831680044532)],
21928: [new google.maps.LatLng(53.47588311954116,-2.242512395605445),
        new google.maps.LatLng(53.475640474187315,-2.242281725630164),
        new google.maps.LatLng(53.47540421290432,-2.242984464392066),
        new google.maps.LatLng(53.47565324503,-2.2431990411132574)],
21910: [new google.maps.LatLng(53.4725945184346,-2.240874613635242),
        new google.maps.LatLng(53.4724077310147,-2.2407163633033633),
        new google.maps.LatLng(53.4725290631075,-2.240198696963489),
        new google.maps.LatLng(53.47277172625248,-2.2404427779838443)],
21905: [new google.maps.LatLng(53.4691044911694,-2.232959414832294),
        new google.maps.LatLng(53.469312048849815,-2.23231032025069),
        new google.maps.LatLng(53.46872449832434,-2.2317792428657413),
        new google.maps.LatLng(53.46851055127605,-2.2324041975662112)],
21934: [new google.maps.LatLng(53.485951678181536,-2.2386318258941174),
        new google.maps.LatLng(53.48540266175742,-2.2379237227141857),
        new google.maps.LatLng(53.485185606792584,-2.23832068964839),
        new google.maps.LatLng(53.485721858217524,-2.2390502505004406)],
21907: [new google.maps.LatLng(53.484483362532345,-2.2392970137298107),
        new google.maps.LatLng(53.484342912285264,-2.238717656582594),
        new google.maps.LatLng(53.48420246157317,-2.238717656582594),
        new google.maps.LatLng(53.48300222743128,-2.2393721155822277),
        new google.maps.LatLng(53.48314906641002,-2.2400802187621593)],
21912: [new google.maps.LatLng(53.48307883913576,-2.23731217905879),
        new google.maps.LatLng(53.48341720584232,-2.2372048906981945),
        new google.maps.LatLng(53.48329271274525,-2.236502612940967),
        new google.maps.LatLng(53.48355287098086,-2.236384595744312),
        new google.maps.LatLng(53.48344912709044,-2.235767226666212),
        new google.maps.LatLng(53.483161834992835,-2.2358852438628674),
        new google.maps.LatLng(53.483206525002466,-2.236164193600416),
        new google.maps.LatLng(53.482906462606074,-2.2363251261413097)],
21930: [new google.maps.LatLng(53.47787531314159,-2.241010358557105),
        new google.maps.LatLng(53.47777953674341,-2.2407743241637945),
        new google.maps.LatLng(53.47753370966515,-2.2411498334258795),
        new google.maps.LatLng(53.47764544942274,-2.241407325491309)],
21932: [new google.maps.LatLng(53.48027603756078,-2.2378721740096807),
        new google.maps.LatLng(53.4798450664523,-2.2385588195174932),
        new google.maps.LatLng(53.47966629196711,-2.238220861181617),
        new google.maps.LatLng(53.480119611516415,-2.2375556733459234)],














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
/*
var socket = io.connect('http://localhost');
socket.on('updateBusInfo', function () {
  draw();
});
socket.on('updateCarParkInfo', function() {
  draw();
})
*/

google.maps.event.addDomListener(window, 'load', draw);
