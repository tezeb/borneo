---
layout: map
---
{% for post in site.posts %}
<div class="post">
 <header class="post-header">
   <h1 class="post-title">
     <a href="#" onclick="showPlace('{{ post.url }}');">{{ post.title }}</a>
   </h1>
 </header>
</div>
{% endfor %}
