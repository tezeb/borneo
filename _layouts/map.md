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

<div id="map">
<div id="main-mc"></div>
</div>

<script type="text/javascript" src="/js/script.js" ></script>

<div id="main-post-container" class="hidden right">
  <iframe id="main-post" src="" />
</div>
