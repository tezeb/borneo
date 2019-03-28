var map_url = 'https://maps.tilehosting.com/styles/positron/{z}/{x}/{y}.png?key=ZrAXb63iqQo965PKtQew';

var OpenStreetMap_Mapnik = L.tileLayer(map_url, {
	attribution: '&copy; Stamen'
});

var kuching = new L.LatLng(1.625758, 110.874023)

var map = new L.Map('map', {
 zoom: 6,
 center: kuching,
 scrollWheelZoom: true,
 layers: [OpenStreetMap_Mapnik]
});

myCircleMarker = L.Marker.extend({
 options: {
  icon : L.divIcon({className : 'circle',
      iconSize : [ 10, 10 ]}),
  title : '',
  image_path: 'path/to/loading/todo',
  image_date: '?',
  image_eta: '?'
 }
});

function showPost() {
 $('#main-post-container').show();
 var src = this.options.url;
 $('#map').animate ({width:"33%"},"slow").siblings('#main-post-container')
   .animate({'width': '64%'}, "slow",function(){
     var iframe = document.getElementById('main-post');
     iframe.src = src;
     map.fitBounds(markers.getBounds(), {maxZoom: 8});
   });
 /*
 $('#loading').show();
 $('#postcard').hide();
 $('#postcard-container').show();
 $('#postcard-date').html(this.options.image_date);
 $('#postcard-eta').html("PozostaÅ‚o: " + this.options.image_eta);
 var downloadingImage = new Image();
 downloadingImage.onload = function() {
  image.src = this.src;
  $('#postcard').fadeIn(1000);
  $('#loading').hide();
  $('#postcard-error').hide();
 };
 downloadingImage.onerror = function() {
  $('#loading').hide();
  $('#postcard').hide();
  $('#postcard-error').html("No image!");
  $('#postcard-error').show();
 }
 downloadingImage.src = "upload/" + this.options.image_path;
 */
}

function hideImage() {
 $('#postcard-container').hide();
 $('#postcard').hide();
 $('#loading').show();
}

var markers = L.geoJson(null, {});
var line = L.polyline([], {
//  color: '#9242f4',
  color: 'red',
  weight: 4,
  opacity: 0.8,
  smoothFactor: 1,
  dashArray: '1, 10',
  clickable: true,
  });

map.on('load', function() {
  $('#zoom').attr('value', map.getZoom());
  });

function addToMarkers(point, url) {
	line.addLatLng(point);
	var marker = L.marker(point, {
		icon : L.divIcon({className : 'circle',
										 iconSize : [ 10, 10 ]}),
		//   line : line,
		riseOnHover: true,
		url: url,
	});
	marker.on('click', showPost, marker);
	markers.addLayer(marker); 
} 

$(document).ready(function(){
 var l = datapoints.length;

 if( l > 0) {
 for (i=0; i<l ;i++) {
  var lng = datapoints[i].lon;
  var lat = datapoints[i].lat;
  var point = new L.LatLng(lat,lng);
  addToMarkers(point, datapoints[i].url);
 }
 map.fitBounds(markers.getBounds(), {maxZoom: 8});
 map.addLayer(markers);
 line.addTo(map);
 }
}); 
