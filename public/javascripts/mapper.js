$(document).ready(function(){
  var latlng = new google.maps.LatLng(53.477333 , -2.247412);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  var app = {
    map: map,
    stops: [],
    markers: [],
    polys: []
  }
  
  $("button").click(function(evt){
    $(this).toggleClass("checked");
    draw(app);
  });
  
  $("#hide-button").click(function(evt) {
    $(".approaching-buses").removeClass("active");
  })

  $(".route-finder").change(function(evt) {
    $(".stop-finder")
      .find('option')
      .remove()
      .end()
    
    for (var i = 0; i < app.stops.length; i++){
      if (app.stops[i].route == $(this).val()){
      var stop = app.stops[i]
        $(".stop-finder")
        .append($("<option />")
        .val(stop.AtcoCode)
        .text(stop.title));
      }
    }
  });

  $(".stop-finder").change(function(evt) {
    activateDepartureBoard(evt, null, app);
  })

  var socket = io.connect('http://localhost');
  socket.on('updateBusInfo', function () {
    draw(app);
  });
  socket.on('updateCarParkInfo', function() {
    draw(app);
  })
  draw(app);
});

function activateDepartureBoard(evt, stop, app){
  stopCode = (stop == null) ? $(evt.target).val() : stop;
  console.log(stopCode);
  $(".approaching-buses").addClass("active");
    for (var i = 0; i < app.stops.length; i++){
      if (app.stops[i].atcoCode == stopCode){
        var stop = app.stops[i];
        stop.setAnimation(google.maps.Animation.BOUNCE);
        app.map.panTo(stop.getPosition());
        app.map.setZoom(16);
        app.map.panBy(0, 200);
        break;
      }
    }
    // get stuff from bobop API
    // populate .approaching-buses
}

var polys = {
21916:[],
21927:[],
21940:[],
21919:[],
21920:[],
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
21915: [new google.maps.LatLng(53.47892564678946,-2.2401879681274295),
        new google.maps.LatLng(53.47873090604008,-2.2404830111190677),
        new google.maps.LatLng(53.478440389490416,-2.2398902429267764),
        new google.maps.LatLng(53.47872611732189,-2.2394154919311404),
        new google.maps.LatLng(53.478837853939304,-2.23967298399657),
        new google.maps.LatLng(53.47871175116401,-2.2398312343284488)],
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
21938: [new google.maps.LatLng(53.48239890542354,-2.2305248491466045),
        new google.maps.LatLng(53.48277717974917,-2.229460012167692),
        new google.maps.LatLng(53.48251701675657,-2.2289530746638775),
        new google.maps.LatLng(53.482161085660735,-2.2295243851840496),
        new google.maps.LatLng(53.48186261199138,-2.2292320244014263),
        new google.maps.LatLng(53.481525829019496,-2.2295082919299603),
        new google.maps.LatLng(53.481889746048104,-2.230165433138609)],
21913: [new google.maps.LatLng(53.48101665916571,-2.2315868362784386),
        new google.maps.LatLng(53.48118904337409,-2.2309860214591026),
        new google.maps.LatLng(53.480464386522385,-2.230353020131588),
        new google.maps.LatLng(53.48019942079477,-2.2305461391806602),
        new google.maps.LatLng(53.47996637728109,-2.23129715770483),
        new google.maps.LatLng(53.47980356529967,-2.231227420270443),
        new google.maps.LatLng(53.479576904442055,-2.231747768819332),
        new google.maps.LatLng(53.48030796117245,-2.2323914989829063),
        new google.maps.LatLng(53.480639965309834,-2.2313347086310387)],
21933: [new google.maps.LatLng(53.47918423558339,-2.231946252286434),
        new google.maps.LatLng(53.479082077235844,-2.2322895750403404),
        new google.maps.LatLng(53.47811475319126,-2.2312703356146812),
        new google.maps.LatLng(53.47771249313604,-2.2302457317709923),
        new google.maps.LatLng(53.4771697552718,-2.2279175743460655),
        new google.maps.LatLng(53.477275110811966,-2.2277727350592613),
        new google.maps.LatLng(53.4775847907337,-2.228931449353695),
        new google.maps.LatLng(53.477792306942305,-2.2292425855994225),
        new google.maps.LatLng(53.478140293383476,-2.23080363124609),
        new google.maps.LatLng(53.47907888478352,-2.231828235089779)],
21931: [new google.maps.LatLng(53.478204143796745,-2.2331639751791954),
        new google.maps.LatLng(53.47703566602414,-2.23329808562994),
        new google.maps.LatLng(53.47733257736,-2.232203744351864),
        new google.maps.LatLng(53.47803813252237,-2.2326060757040977)],
21909: [new google.maps.LatLng(53.47455493851098,-2.236632239073515),
        new google.maps.LatLng(53.47489177681731,-2.2352401725947857),
        new google.maps.LatLng(53.47457728805486,-2.2350443713366985),
        new google.maps.LatLng(53.47426120055434,-2.236457895487547)],
21939: [new google.maps.LatLng(53.48006534112137,-2.234826944768429),
        new google.maps.LatLng(53.480314345891884,-2.2341885790228844),
        new google.maps.LatLng(53.4800270325654,-2.2338398918509483),
        new google.maps.LatLng(53.479755679303864,-2.234467528760433)],
21925: [new google.maps.LatLng(53.47899907339732,-2.2359853237867355),
        new google.maps.LatLng(53.47941409096605,-2.2353415936231613),
        new google.maps.LatLng(53.4790565376105,-2.2348587960004807),
        new google.maps.LatLng(53.47860320670283,-2.2355132550001144)],
21911: [new google.maps.LatLng(53.47819935501907,-2.237383257597685),
        new google.maps.LatLng(53.4776949340785,-2.2381906025111675),
        new google.maps.LatLng(53.47734375140195,-2.237630020827055),
        new google.maps.LatLng(53.47787371687007,-2.2367904894053936)],
21935: [new google.maps.LatLng(53.477680567571475,-2.2395798191428185),
        new google.maps.LatLng(53.47778592184334,-2.2393276914954185),
        new google.maps.LatLng(53.477457087947045,-2.2387751564383507),
        new google.maps.LatLng(53.47763906430164,-2.238415740430355),
        new google.maps.LatLng(53.477281495987825,-2.2377290949225426),
        new google.maps.LatLng(53.47679302726081,-2.238517664372921),
        new google.maps.LatLng(53.477217644186126,-2.2391023859381676)],
21929: [new google.maps.LatLng(53.47558939077813,-2.2397300228476524),
        new google.maps.LatLng(53.47570432836234,-2.2393008694052696),
        new google.maps.LatLng(53.47540421290432,-2.2390111908316612),
        new google.maps.LatLng(53.47525734711948,-2.2394349798560143)]
};

function clear(app){
  for (var i = 0; i < app.markers.length; i++){
    app.markers[i].setMap(null);
  }
  for (var i = 0; i < app.polys.length; i++){
    app.polys[i].setMap(null);
  }
  for (var i = 0; i < app.stops.length; i++){
    app.stops[i].setMap(null);
  }
  app.markers = [];
  app.polys = [];
  app.stops = [];
}

function drawBuses(app){
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
        icon: "http://localhost:3000/images/"+colour+"boxed/bus.png",
        position: busLatLon,
        map: app.map,
        title: "Bus: "+bus.Id+" | Reg: "+bus.Registration 
      })
      app.markers.push(busMarker);

    })
  });
}

function drawStops(app){
  ["red", "blue", "red"].forEach(function(colour, ci, colours){
    url = "http://localhost:3000/stops/"+(ci+1); 
    $.get(url)
    .done(function(data) {
      data.forEach(function(stop,i,arr) {
        var stopMarker = new google.maps.Marker({
              icon: "http://localhost:3000/images/"+colour+"/busstop.png",
              position: new google.maps.LatLng(stop.Latitude, stop.Longitude),
              map: app.map,
              title: stop.CommonName,
              atcoCode: stop.AtcoCode,
              route: ci+1
        })
        app.stops.push(stopMarker);
       
        google.maps.event.addListener(stopMarker, 'click', function(evt){
          //stopInfoWindow.open(app.map, stopMarker);
          activateDepartureBoard(null, stop.AtcoCode, app);
        });
      })
    })
  });
}

function drawCarparks(app){
    $.get("http://localhost:3000/carparks")
    .done(function(data) {
      data.forEach(function(el,i,arr) {
        var cp = el;
        var cpLatLon = new google.maps.LatLng(cp.Longitude, cp.Latitude);
        var colour = "orange";
        
        var cpMarker = new google.maps.Marker({
          position: cpLatLon,
          map: app.map,
          visible: false
        })
        app.markers.push(cpMarker);
        cpHealth = cp.SpacesNow / cp.Capacity;
        colour = null;
        if (cpHealth > 0.6){
          colour = "green";
        } else if (cpHealth > 0.3){
          colour = "orange";
        } else {
          colour= "red";
        }
       
        var cpPoly = new google.maps.Polygon({paths: polys[cp.Id],
                              map: app.map,
                              fillColor: colour,
                              clickable: true
                            });
        app.polys.push(cpPoly);
                            
        var cpInfoOptions = {
          content: "<div class=\"infobox\" style=\"text-align:center;font-family:sans-serif;\"><b>"+cp.Name+"</b>" +
                   "<div style=\"background-color:"+colour+";width:80%;height:1em;margin:0;margin-left:10%;\"></div>" +
                   "<b>Spaces: </b>"+ cp.SpacesNow +
                   "<br /><em>30 mins: "+ cp.PredictedSpaces30Mins +
                   "<br /><em>60 mins: "+ cp.PredictedSpaces60Mins +
                   "</div>"
        }
        
        var cpInfoWindow = new google.maps.InfoWindow(cpInfoOptions);
        google.maps.event.addListener(cpPoly, 'mouseover', function(evt){
          cpInfoWindow.open(app.map, cpMarker);
        });
        
        google.maps.event.addListener(cpPoly, 'mouseout', function(evt){
          cpInfoWindow.close()
        });
        
      })
    });


}

function draw(app) {
  clear(app);
  if ($('#buses-button').hasClass('checked')){
    drawBuses(app);
  };
  if ($('#bus-stops-button').hasClass('checked')){
    drawStops(app);
  };
  if ($('#car-parks-button').hasClass('checked')){
    drawCarparks(app);
  }
};
