// $Id: shadowbox_auto.js,v 1.1.2.1 2008/09/17 09:20:20 psynaptic Exp $
if (Drupal.jsEnabled) {
  $(document).ready(function() {
	  var settings = Drupal.settings.shadowbox;
		if (settings.auto_enable_all_images == 1) {
			// all image links enabled
		  $('a[href$=jpg], a[href$=png], a[href$=gif], a[href$=jpeg], a[href$=bmp]').attr('rel', 'shadowbox');
		};
  });
}
