; $Id: shadowbox.make,v 1.1.2.1 2009/12/10 00:22:30 psynaptic Exp $
; Drush make file for downloading third party Shadowbox library.
; Syntax: http://bit.ly/7rp6vM

core = 6.x

libraries[shadowbox][download][type] = "get"
libraries[tinymce][download][url] = "http://bit.ly/7K7VOX"
libraries[tinymce][directory_name] = "shadowbox"
