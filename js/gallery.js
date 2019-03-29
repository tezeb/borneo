/* handlers for gallery */
$(function () {

  // overlay for smoother fullscreen enter
  var $overlay = $('<div class="fotorama-overlay"></div>')
      .css({position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 10001})
      .fadeTo(0, 0)
      .hide()
      .appendTo('body');

  // take all .fotorama blocks
  $('.thumbs').each(function () {
    var $thumbs = $(this),

        // clone it and make fotorama
        $fotorama = $('.fotorama', $thumbs)
            .clone()
            //.show()
            .css({position: 'absolute', left: -99999, top: -99999})
            .appendTo('body')
            .fadeTo(0, 0)
            .fotorama(),
        fotorama = $fotorama.data('fotorama');

    for (var _i = 0, _l = fotorama.data.length; _i < _l; _i++) {
      // prepare id to use in fotorama.show()
      fotorama.data[_i].id = fotorama.data[_i].img;
    }

    // bind clicks
    $thumbs.on('click', 'a', function (e) {
      e.preventDefault();

      var $this = $(this);

      $overlay
          .show()
          .stop()
          .fadeTo(150, 1, function () {
            $fotorama.stop().fadeTo(150, 1);

            // API calls
            fotorama
                // show needed frame
                .show({index: $this.attr('href'), time: 0})
                // open fullscreen
                .requestFullScreen();
          });
    });

    $fotorama.on('fotorama:fullscreenexit', function () {
      $fotorama.stop().fadeTo(0, 0);
      $overlay.stop().fadeTo(300, 0, function () {
        $overlay.hide();
      });
    });
  });

});

function scroll(e, d) {
  e.preventDefault();
  $('#moving_strip').finish();
  var s_l=$('#moving_strip').offset()['left'];
  var s_w = $('#moving_strip').width();
  var p_l=$('#strip').offset()['left'];
  var p_w=$('#strip').width();
  s_l-=p_l;
  s_l+=d;
  if ( s_l + s_w < p_w) {
    s_l = p_w - s_w;
  }
  if ( s_l > p_l ){
    s_l = 0;
  }
  if ( s_l < 0)
    $('#left_nav').fadeIn();
  else
    $('#left_nav').fadeOut();
  if ( s_l > p_w-s_w)
    $('#right_nav').fadeIn();
  else
    $('#right_nav').fadeOut();
  $('#moving_strip').animate({left: (s_l).toString()}, "slow");
}

$(document).ready(function(){
  $('#left_nav').on('click',function(e){scroll(e, 300);});
  $('#right_nav').on('click',function(e){scroll(e, -300);});
});
$(function () {

  // overlay for smoother fullscreen enter
  var $overlay = $('<div class="fotorama-overlay"></div>')
      .css({position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 10001})
      .fadeTo(0, 0)
      .hide()
      .appendTo('body');

  // take all .fotorama blocks
  $('.thumbs').each(function () {
    var $thumbs = $(this),

        // clone it and make fotorama
        $fotorama = $('.fotorama', $thumbs)
            .clone()
            //.show()
            .css({position: 'absolute', left: -99999, top: -99999})
            .appendTo('body')
            .fadeTo(0, 0)
            .fotorama(),
        fotorama = $fotorama.data('fotorama');

    for (var _i = 0, _l = fotorama.data.length; _i < _l; _i++) {
      // prepare id to use in fotorama.show()
      fotorama.data[_i].id = fotorama.data[_i].img;
    }

    // bind clicks
    $thumbs.on('click', 'a', function (e) {
      e.preventDefault();

      var $this = $(this);

      $overlay
          .show()
          .stop()
          .fadeTo(150, 1, function () {
            $fotorama.stop().fadeTo(150, 1);

            // API calls
            fotorama
                // show needed frame
                .show({index: $this.attr('href'), time: 0})
                // open fullscreen
                .requestFullScreen();
          });
    });

    $fotorama.on('fotorama:fullscreenexit', function () {
      $fotorama.stop().fadeTo(0, 0);
      $overlay.stop().fadeTo(300, 0, function () {
        $overlay.hide();
      });
    });
  });

});

function scroll(e, d) {
  e.preventDefault();
  $('#moving_strip').finish();
  var s_l=$('#moving_strip').offset()['left'];
  var s_w = $('#moving_strip').width();
  var p_l=$('#strip').offset()['left'];
  var p_w=$('#strip').width();
  s_l-=p_l;
  s_l+=d;
  if ( s_l + s_w < p_w) {
    s_l = p_w - s_w;
  }
  if ( s_l > p_l ){
    s_l = 0;
  }
  if ( s_l < 0)
    $('#left_nav').fadeIn();
  else
    $('#left_nav').fadeOut();
  if ( s_l > p_w-s_w)
    $('#right_nav').fadeIn();
  else
    $('#right_nav').fadeOut();
  $('#moving_strip').animate({left: (s_l).toString()}, "slow");
}

$(document).ready(function(){
  $('#left_nav').on('click',function(e){scroll(e, 300);});
  $('#right_nav').on('click',function(e){scroll(e, -300);});
});
