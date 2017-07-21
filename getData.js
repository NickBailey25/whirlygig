function getData() {
  console.log("geting data.............")
  // get the data
  
  loadJSON(function(data) {
    console.log('got the data', data)
    initMap(data)  
  });
}

  
function loadJSON(callback) {
  var req = new XMLHttpRequest();
  req.overrideMimeType("application/json");
  req.open('GET', 'https://99a023a1.ngrok.io/locations', true);
  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == "200") {

      // .open will NOT return a value but simply returns undefined in async mode so use a callback
      callback(req.responseText);

    }
  }
  req.send(null);
}
