// $Id: shadowbox.js,v 1.4.2.4.2.3 2009/01/13 11:03:49 psynaptic Exp $
if (Drupal.jsEnabled) {
  $(document).ready(function() {
    var settings = Drupal.settings.shadowbox;
    var options = {
      animate:            settings.animation,
      animateFade:        settings.animation_fade,
      animSequence:       settings.animation_sequence,
      flvPlayer:          settings.flv_player,
      modal:              settings.modal,
      overlayColor:       '#' + settings.overlay_color,
      overlayOpacity:     settings.overlay_opacity,
      flashBgColor:       '#' + settings.flash_background,
      autoplayMovies:     settings.autoplay_movies,
      showMovieControls:  settings.show_movie_controls,
      slideshowDelay:     settings.slideshow_delay,
      resizeDuration:     settings.resize_duration,
      fadeDuration:       settings.fade_duration,
      displayNav:         settings.display_nav,
      continuous:         settings.continuous_galleries,
      displayCounter:     settings.display_counter,
      counterType:        settings.counter_type,
      counterLimit:       settings.counter_limit,
      viewportPadding:    settings.viewport_padding,
      handleOversize:     settings.handle_oversize,
      handleUnsupported:  settings.handle_unsupported,
      initialHeight:      settings.initial_height,
      initialWidth:       settings.initial_width,
      enableKeys:         settings.enable_keys,
      ext: {
        img:              settings.extensions_img,
        swf:              settings.extensions_swf,
        flv:              settings.extensions_flv,
        qt:               settings.extensions_qt,
        wmp:              settings.extensions_wmp,
        qtwmp:            settings.extensions_qtwmp,
        iframe:           settings.extensions_iframe
      }
    };
    Shadowbox.init(options);
  });
}
