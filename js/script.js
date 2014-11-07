var map = L.map('map').setView([40.68025, -74.00155], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

var marker = L.marker([40.68025, -74.00155]).addTo(map);
marker.bindPopup("Larry's house").openPopup();

function makeMarkers(feature, layer) {
	console.log(feature);
	layer.bindPopup(
			feature.properties.Address
			+ " <br/> The Zoning is " 
			+ feature.properties.AllZoning1 
			+ "<div class = '" 
			+ feature.properties.BBL 
			+ "'>Now I am classed "
			+ feature.properties.BBL 
			+ "</div>"
	  );

	$('body').append("<div>" + feature.properties.BBL + "</div>")

}



$.getJSON('centroids.geojson',function(data){
	//console.log(data);

	L.geoJson(data.features, {
    onEachFeature: makeMarkers
  }).addTo(map);




});