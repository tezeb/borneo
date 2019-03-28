<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">

<head>

{% include head.md %}
{% if page.map %}
{% include head_map.md %}
{% endif %}

</head>

 <body>
  <div id="main-page">
   <div id="main-header">
    <div id="main-headerimg">
     <a href="{{ site.url }}"><img src="/img/mb_full.png" /></a>
    </div>
		<div id="main-menu">
      <ul>
        <li><a href="/" title="Mapa">Mapa</a></li>
        <li><a href="/places.html" title="Miejsca">Miejsca</a></li>
        <li><a href="/photos.html" title="Foto">Foto</a></li>
      </ul>
		</div>
   </div>
   <div id="main-content" >
      {{ content }} 
   </div>
 </body>
</html>
