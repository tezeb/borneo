---
layout: map
---
<div id="content" style="height: 80%;">
{% for post in site.posts %}
   <h1 class="post-title">
     <a href="#" onclick="showPlace('{{ post.url }}');">{{ post.title }}</a>
   </h1>
{% endfor %}
</div>
