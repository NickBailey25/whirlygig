
function initMap() {

  var chevron = {
    info: '<strong>Chipotle on Broadway</strong><br>\
          5224 N Broadway St<br> Chicago, IL 60640<br>\
          <a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
    lat: 37.3682772,
    long: -121.8994837
  };

  var shell = {
    info: '<strong>Chipotle on Belmont</strong><br>\
          1025 W Belmont Ave<br> Chicago, IL 60657<br>\
          <a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
    lat: 37.3684831,
    long: -121.8994837
  };

  var arco = {
    info: '<strong>Chipotle on Sheridan</strong><br>\r\
          6600 N Sheridan Rd<br> Chicago, IL 60626<br>\
          <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
    lat: 37.3685551,
    long: -121.8694927
  };

  var locations = [
      [chevron.info, chevron.lat, chevron.long, 0],
      [shell.info, shell.lat, shell.long, 1],
      [arco.info, arco.lat, arco.long, 2],
    ];

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