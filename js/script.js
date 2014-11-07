
//set up our map
var map = L.map('map')
	.setView([40.68025, -74.00155], 13);


//set up basemap tiles from mapbox
L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);


//load external geoJSON
$.getJSON('centroids.geojson',function(data){
	L.geoJson(data.features, {
    onEachFeature: makeMarkers
  }).addTo(map);
});


function makeMarkers(feature, layer) {
	var thisFeature = feature.properties;

	//bind a leaflet popup to the marker
	layer.bindPopup(
			thisFeature.Address
			+ " <br/> The Zoning is " 
			+ thisFeature.AllZoning1 
			+ "<div class = '" 
			+ thisFeature.BBL 
			+ "'>Now I am classed "
			+ thisFeature.BBL 
			+ "</div>"
	  );

	//set up a bunch of divs classed using the BBL to see if we can select them later
	$('body').append(
		"<div class = '"
		+ thisFeature.BBL
		+ "'>" 
		+ thisFeature.BBL + "</div>")

	//attach a click listener to every feature
	//that selects divs classed with the current marker's BBL
	layer.on("click",function(e){
		$('.' + thisFeature.BBL)
			.css('background','steelblue');
	})
}