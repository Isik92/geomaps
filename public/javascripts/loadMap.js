// initialize the map on the "map" div with a given center and zoom
var map = L.map("mapid", {
	center: [49.750037, 6.637174],
	zoom: 13
});

L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
	foo: "bar"
}).addTo(map);

// create a red polyline from an array of LatLng points
var latlngs = [
	[49.75, 6.64],
	[49.76, 6.64],
	[49.77, 6.65],
];

var polyline = L.polyline(latlngs, {
	color: "red"
}).addTo(map);

// zoom the map to the polyline
map.fitBounds(polyline.getBounds());
