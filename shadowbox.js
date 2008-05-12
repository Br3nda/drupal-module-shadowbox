// $Id: shadowbox.js,v 1.1.2.2 2008/05/12 22:46:45 psynaptic Exp $
if (Drupal.jsEnabled) {
  $(document).ready(function(){
    var options = {
      assetURL:             Drupal.settings.shadowbox.asset_url,
      loadingImage:         Drupal.settings.shadowbox.loading_image,
      animate:              Drupal.settings.shadowbox.animation,
      animSequence:         Drupal.settings.shadowbox.animation_sequence,
      flvPlayer:            Drupal.settings.shadowbox.flv_player,
      overlayColor:         Drupal.settings.shadowbox.overlay_color,
      overlayOpacity:       Drupal.settings.shadowbox.overlay_opacity,
      overlayBgImage:       Drupal.settings.shadowbox.background_image,
      listenOverlay:        Drupal.settings.shadowbox.overlay_listen,
      autoplayMovies:       Drupal.settings.shadowbox.autoplay_movies,
      showMovieControls:    Drupal.settings.shadowbox.show_movie_controls,
      resizeDuration:       Drupal.settings.shadowbox.resize_duration,
      fadeDuration:         Drupal.settings.shadowbox.fade_duration,
      displayNav:           Drupal.settings.shadowbox.display_nav,
      continuous:           Drupal.settings.shadowbox.continuous_galleries,
      displayCounter:       Drupal.settings.shadowbox.display_counter,
      counterType:          Drupal.settings.shadowbox.counter_type,
      viewportPadding:      Drupal.settings.shadowbox.viewport_padding,
      handleLgImages:       Drupal.settings.shadowbox.handle_large_images,
      initialHeight:        Drupal.settings.shadowbox.initial_height,
      initialWidth:         Drupal.settings.shadowbox.initial_width,
      enableKeys:           Drupal.settings.shadowbox.enable_keys,
      keysClose:            Drupal.settings.shadowbox.keys_close,
      keysPrev:             Drupal.settings.shadowbox.keys_previous,
      keysNext:             Drupal.settings.shadowbox.keys_next,
      handleUnsupported:    Drupal.settings.shadowbox.handle_unsupported
    };
    Shadowbox.init(options);
  });
}