---
layout: home
map: true
---
<script type="text/javascript">
function showPlace(url) {
	
}
</script>
<div id="main-post-container" class="full">
{% for post in site.posts %}
  <div class="post">
    <header class="post-header">
      <h1 class="post-title">
			<a href="{{ post.url }}">{{ post.title }}</a>
			</h1>
      </header>
    </div>
{% endfor %}
</div>

