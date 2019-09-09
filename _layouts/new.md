<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">

<head>

{% include head.md %}
{% if page.map %}
{% include head_map.md %}
{% endif %}

</head>

 <body>
  <div id="body-margin">
  <div id="main-page">
   <div id="main-header">
		<div id="main-menu">
      <ul>
        <li><a href="/" title="Blog">Blog</a></li>
        <li><a href="/" title="Przewodnik">Przewodnik</a></li>
        <li><a href="/" title="Foto">Foto</a></li>
        <li><a href="/" title="Miejsca">Miejsca</a></li>
        <li><a href="/" title="Kontakt">Kontakt</a></li>
        <li><a title="&#9776;" id="nav-toggle" href="#">&#9776;</a></li>
      </ul>
		</div>
    <div id="main-headerimg">
     <a href="{{ site.url }}"><img src="/img/mb_full.png" /></a>
    </div>
   </div>
   <div id="main-content" >

     <!--      {{ content }} -->
     {% for post in site.posts limit:1 %}
     <div class="new_post">
        <div class="new_post_first" >
          <a href="{{ post.url }}"><img src="img/full/tusan_beach/0483.jpg" /></a>
          <div id="tags">
          {% for tag in post.categories %}
            <a href="/lista_postów_z_tagiem">#{{ tag }}</a>
          {% endfor %}
          </div>
          <header class="post-header">
            <a href="{{ post.url }}"><h1 class="post-title">{{ post.title }}</h1></a>
          </header>
          <div id="new_post_excerpt">
          {% assign tmp = post.excerpt | split : '<!--more_start-->' %}
          {{ tmp[1] | default: tmp[0] }}
          {% if post.excerpt != post.content %}
            <span class="more"><a href="{{ post.url }}">&#x203A;&nbsp;czytaj dalej</a></span>
          {% endif %}
          </div>
        </div>
        <div id="new_go_to_map">
          <span>
          Wejdź<br/>na mapę<br/>i zobacz<br/>gdzie teraz<br/>jesteśmy!
          </span>
        </div>
     </div>
     {% endfor %}


     {% for post in site.posts offset:1 limit:1 %}
     <div class="new_post">
        <div id="new_go_to_insta">
          <span>
          Obserwuj&nbsp;nas&nbsp;na&nbsp;instagramie!
          </span>
        </div>
        <div class="new_post_first" >
          <a href="{{ post.url }}"><img src="img/full/tusan_beach/0316.jpg" /></a>
          <div id="tags">
          {% for tag in post.categories %}
            <a href="/lista_postów_z_tagiem">#{{ tag }}</a>
          {% endfor %}
          </div>
          <header class="post-header">
            <a href="{{ post.url }}"><h1 class="post-title">{{ post.title }}</h1></a>
          </header>
          <div id="new_post_excerpt">
          {% assign tmp = post.excerpt | split : '<!--more_start-->' %}
          {{ tmp[1] | default: tmp[0] }}
          {% if post.excerpt != post.content %}
            <span class="more"><a href="{{ post.url }}">&#x203A;&nbsp;czytaj dalej</a></span>
          {% endif %}
          </div>
        </div>
     </div>
     {% endfor %}


    <div id="new_footer">
      <div id="new_footer_dots">
       <img src="/img/mb_full.png" />
      </div>
      <div id="new_contact">
        <span>
        <h2>napisz do nas! m&b@m&b.pl</h2>
        obserwuj nas na Instagramie<br/><br/>
        zaprojektowała Małgosia<br/>
        zaprogramował Bartek<br/><br />
        &#x00A9; Małgosia&Bartek 2019
        </span>
      </div>
    </div>


   </div>
  </div>



 </body>
</html>
