// $Id: shadowbox_auto.js,v 1.1.4.4.2.2 2009/09/17 23:57:16 psynaptic Exp $

if (Drupal.jsEnabled) {
  var settings = Drupal.settings.shadowbox;
  if (settings.auto_enable_all_images == 1) {
    var images = 'a[href$=jpg][rel=""], a[href$=png][rel=""], a[href$=gif][rel=""], a[href$=jpeg][rel=""], a[href$=bmp][rel=""], a[href$=JPG][rel=""], a[href$=PNG][rel=""], a[href$=GIF][rel=""], a[href$=JPEG][rel=""], a[href$=BMP][rel=""]';
    $(images).each(function() {
      if (settings.auto_gallery == 1) {
        $(this).attr('rel', 'shadowbox[gallery]');
      }
      else {
        $(this).attr('rel', 'shadowbox');
      };
    });
  };
}
