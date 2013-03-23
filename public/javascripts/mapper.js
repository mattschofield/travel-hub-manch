function draw(pos) {
  
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
}

google.maps.event.addDomListener(window, 'load', draw);