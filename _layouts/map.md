---
layout: home
---
<script type="text/javascript">
var datapoints = [
{% for post in site.posts %}
  { "lat": {{ post.lat }}, "lon": {{ post.lon }}, "url": "{{ post.url }}" },
{% endfor %} 
];
</script>

<div id="map" class="{{ page.mapClass }}">
<div id="main-mc"></div>
</div>

<script type="text/javascript" src="/js/script.js" ></script>

<div id="main-post-container" class="{{ page.mainClass}} right">
  <div id="main-post">
    {{ content }}
  </div>
  <div style="clear: both;"></div>
</div>
<div style="clear: both;"></div>
