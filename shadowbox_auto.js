// $Id: shadowbox_auto.js,v 1.1.4.3 2009/02/10 17:02:41 psynaptic Exp $
if (Drupal.jsEnabled) {
  $(document).ready(function() {
    var settings = Drupal.settings.shadowbox;
    if (settings.auto_enable_all_images == 1) {
      var images = 'a[href$=jpg][rel=""], a[href$=png][rel=""], a[href$=gif][rel=""], a[href$=jpeg][rel=""], a[href$=bmp][rel=""]';
      $(images).each(function() {
        if (settings.auto_gallery == 1) {
          $(this).attr('rel', 'shadowbox[gallery]');
        }
        else {
          $(this).attr('rel', 'shadowbox');
        };
      });
    };
  });
}
