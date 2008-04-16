// $Id: shadowbox.js,v 1.1 2008/04/16 11:46:59 psynaptic Exp $

$(document).ready(function(){
  var options = {
    assetURL:     Drupal.settings.shadowbox.shadowbox_path,
    animate:      Drupal.settings.shadowbox.shadowbox_options_animate,
    animSequence: Drupal.settings.shadowbox.shadowbox_options_animation_sequence,
    overlayColor: Drupal.settings.shadowbox.shadowbox_options_overlay_color,
    displayNav:   true,
    keysClose:    ['c', 27] // c or esc
  };
  Shadowbox.init(options);
});