startWebRequest("http://gpsinsight.herokuapp.com/freshexpress", function(status, type, content) {
  var resp = JSON.parse(content);
  var vehicle=resp.data[0];
  
  setText("addressLbl", vehicle.address);
  setText("latLbl", vehicle.latitude);
  setText("lngLbl", vehicle.longitude);
});

