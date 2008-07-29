// $Id: shadowbox.js,v 1.4.2.4.2.1 2008/07/29 14:15:21 psynaptic Exp $
if (Drupal.jsEnabled) {
  $(window).load(function(){
    var options = {
      animate:              Drupal.settings.shadowbox.animation,
      animateFade:          Drupal.settings.shadowbox.animation_fade,
      animSequence:         Drupal.settings.shadowbox.animation_sequence,
      flvPlayer:            Drupal.settings.shadowbox.flv_player,
      modal:                Drupal.settings.shadowbox.modal,
      overlayColor:         '#' + Drupal.settings.shadowbox.overlay_color,
      overlayOpacity:       Drupal.settings.shadowbox.overlay_opacity,
      flashBgColor:         '#' + Drupal.settings.shadowbox.flash_background,
      autoplayMovies:       Drupal.settings.shadowbox.autoplay_movies,
      showMovieControls:    Drupal.settings.shadowbox.show_movie_controls,
      slideshowDelay:       Drupal.settings.shadowbox.slideshow_delay,
      resizeDuration:       Drupal.settings.shadowbox.resize_duration,
      fadeDuration:         Drupal.settings.shadowbox.fade_duration,
      displayNav:           Drupal.settings.shadowbox.display_nav,
      continuous:           Drupal.settings.shadowbox.continuous_galleries,
      displayCounter:       Drupal.settings.shadowbox.display_counter,
      counterType:          Drupal.settings.shadowbox.counter_type,
			counterLimit:         Drupal.settings.shadowbox.counter_limit,
      viewportPadding:      Drupal.settings.shadowbox.viewport_padding,
      handleOversize:       Drupal.settings.shadowbox.handle_oversize,
      handleUnsupported:    Drupal.settings.shadowbox.handle_unsupported,
      initialHeight:        Drupal.settings.shadowbox.initial_height,
      initialWidth:         Drupal.settings.shadowbox.initial_width,
      enableKeys:           Drupal.settings.shadowbox.enable_keys,
      ext: {
        img:                Drupal.settings.shadowbox.extensions_img,
				swf:                Drupal.settings.shadowbox.extensions_swf,
				flv:        				Drupal.settings.shadowbox.extensions_flv,
        qt:                 Drupal.settings.shadowbox.extensions_qt,
        wmp:                Drupal.settings.shadowbox.extensions_wmp,
        qtwmp:              Drupal.settings.shadowbox.extensions_qtwmp,
        iframe:             Drupal.settings.shadowbox.extensions_iframe
      }
    };
    Shadowbox.init(options);
  });
}
