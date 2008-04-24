$Id: README.txt,v 1.3 2008/04/24 14:57:24 psynaptic Exp $

AUTHOR/MAINTAINERS
------------------

Module created by Richard Burford, aka, psynaptic
http://freestylesystems.co.uk

Shadowbox created by Michael J. I. Jackson
http://mjijackson.com

DESCRIPTION
-----------

"Shadowbox is a cross-browser, cross-platform, cleanly-coded and
fully-documented media viewer application written entirely in JavaScript. Using
Shadowbox, website authors can display a wide assortment of media in all major
browsers without navigating away from the linking page."
http://mjijackson.com/shadowbox/index.html

This module adds a modal popup/overlay media viewer to Drupal. Currently this
module provides basic functionality and can be used to give thickbox/lightbox
type functionality for viewing images. The plan for the future is to add more
advanced configuration options for images and to add for support for video,
flash, and web content in general.

INSTALLATION
------------

See INSTALL.txt

ISSUES
------

There is currently a bug in Shadowbox when using a setting of Simultaneous for
Animation sequence. A possible fix is posted on the Shadowbox forum:
http://www.nabble.com/Box-builds-down-then-slides-up-into-place-to15718047.html#a15718047

CHANGELOG
---------

See CHANGELOG.txt

KNOWN ISSUES
------------

There is currenly a bug when setting the 'Enable animation' setting to unchecked
where the next/previous item cannot be found and the Shadowbox stalls.
