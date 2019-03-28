---
layout: none
---
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">

 {% include head.md %}
 {% include head_map.md %}

 <body>
  <div id="page">

  <div id="info">
    lat:<br />
    lon:<br />
  </div>

    <div id="map" style="width: 100%" >
    </div>
    <script type="text/javascript" src="js/script.js"></script>

   </div>
<script>
  map.on('click', function(e) {
      $('#info').html("lat: " + e.latlng.lat + "<br />" + "lon:" + e.latlng.lng + "<br />");
    });
</script>
 </body>
</html>

