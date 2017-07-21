
function initMap(data) {

  console.log('data from init map', data)
  data = JSON.parse(data);

  var locations = [];

  for(var i = 0; i < data.length; i++) {
    var loc = [data[i].info, data[i].lat, data[i].long, i];

    debugger;

    locations.push(loc);
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(37.368809, -121.867614),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow({});

  var marker, i;

  var markers = [];

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    markers.push(marker);

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}