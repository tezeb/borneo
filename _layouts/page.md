   <div id="content">

    <article class="post">

      <header class="post-header">
        <h1 class="post-title">{{ page.title }}</h1>
      </header>

      <div class="post-content">
        {{ content }}
        <script src="/js/gallery.js" type="text/javascript"></script>

        <div class="gallery">

        {% assign image_files = site.static_files | where: "thumb", true | where_exp: "image", "image.path contains page.img_dir" %}

        <div class="nav"><a href="" id="left_nav"> &lt; </a></div>
        <div class="strip" id="strip">
          <!-- Thumbs -->
          <div class="thumbs" id="moving_strip">
            <!-- Fotorama, `data-auto="false"` is important -->
            <div class="fotorama" data-auto="false" data-allow-full-screen="true" data-thumb-width="70" data-thumb-height="47" data-nav="thumbs">
              {% for myimage in image_files %}
              <a href="{{ myimage.path | replace: 'thumbs', 'full' }}">
                <img src="{{ myimage.path }}" />
              </a>
              {% endfor %}
            </div>
          </div>
        </div><!-- strip -->
        <div class="nav"><a href="" id="right_nav"> &gt; </a></div>

        </div><!-- gallery -->

      </div><!-- post-content -->

    </article>
