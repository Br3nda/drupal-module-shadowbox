// $Id: shadowbox_auto.js,v 1.1.4.4.2.3 2010/01/03 22:52:15 psynaptic Exp $

Drupal.behaviors.shadowbox = function (context) {
  var settings = Drupal.settings.shadowbox;
  if (settings.auto_enable_all_images == 1) {
    $("a[href$='jpg'], a[href$='png'], a[href$='gif'], a[href$='jpeg'], a[href$='bmp'], a[href$='JPG'], a[href$='PNG'], a[href$='GIF'], a[href$='JPEG'], a[href$='BMP']").each(function() {
      if (settings.auto_gallery == 1) {
        $rel = $(this).attr('rel');
        console.log($rel);
        $(this).attr('rel', 'shadowbox[gallery]');
      }
      else {
        $(this).attr('rel', 'shadowbox');
      };
    });
  };
};
