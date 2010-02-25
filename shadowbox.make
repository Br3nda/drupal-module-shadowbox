; $Id: shadowbox.make,v 1.1.2.5 2010/02/25 10:41:56 nicholasalipaz Exp $
; Drush make file for downloading third party Shadowbox library.
; Syntax: http://bit.ly/7rp6vM

core = 6.x

libraries[shadowbox][download][type] = "get"
libraries[shadowbox][download][url] = "http://freestylesystems.co.uk/sites/freestylesystems.co.uk/files/shadowbox-build-3.0rc1.tgz"
libraries[shadowbox][directory_name] = "shadowbox"
