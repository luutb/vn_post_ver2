export default `<!DOCTYPE html>
<html>
  <head>
    <style>
      body{
	margin:0px
	}
      #map {
	position:absolute;
        height: 100%; 
        width: 100%; 
       }
    </style>
  </head>
  <body>
   
    <div id="map"></div>
    <script>
// Initialize and add the map
let positions = [{lat: 20.980324, lng: 105.795840},{lat: 20.986919, lng:  105.793773}]
function initMap() {

    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 25, center: positions [0]});

  for (var pos of positions ){

 
  var marker = new google.maps.Marker({position: pos, map: map});
  }
}
    </script>
    <!--Load the API from the specified URL
    * The async attribute allows the browser to render the page while the API loads
    * The key parameter will contain your own API key (which is not needed for this tutorial)
    * The callback parameter executes the initMap() function
    -->
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDQHOnkXBu5C_CVGOuQ9F8UN2y09m6RL8
&callback=initMap">
    </script>
  </body>
</html>`