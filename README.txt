$Id: README.txt,v 1.1 2008/04/16 11:46:59 psynaptic Exp $


Shadowbox Module, Version 0.1
-----------------------------

"Shadowbox is a cross-browser, cross-platform, cleanly-coded and fully-documented media viewer application written entirely in JavaScript. Using Shadowbox, website authors can display a wide assortment of media in all major browsers without navigating away from the linking page." http://mjijackson.com/shadowbox/index.html

This module adds a modal popup/overlay media viewer to Drupal. Currently this module provides basic functionality and can be used to give thickbox/lightbox type functionality for viewing images. The plan for the future is to add more advanced configuration options for images and to add for support for video, flash, and web content in general.


Requirements
------------

This module requires Drupal 6.x

Why no 5.x version?

A Drupal 5.x version is unlikely due to the old version of jQuery that ships with core and that jquery_update does not update to the required version for Shadowbox to function correctly. There seems to be a conflict between older versions of jQuery and the 'animate' setting within Shadowbox that stops it from working. I may consider releasing a version that doesn't use the animate feature if there is enough call for it.


Installation
------------

1. Place the shadowbox directory in your modules directory (usually sites/all/modules/shadowbox)

2. Download the 'code only' Shadowbox distribution: http://mjijackson.com/shadowbox/download.php?code

3. Extract the download and place it in the shadowbox module directory (sites/all/modules/shadowbox/shadowbox)

4. Enable the Shadowbox module (admin/build/modules)

5. Visit the Shadowbox configuration page to review the settings (admin/settings/shadowbox)

6. Add an image link to test out Shadowbox:

    Using HTML:

    <a href="image.jpg" rel="shadowbox">Click me</a>

    Using PHP:

    <?php print l('Click me', 'image.jpg', array('rel' => 'shadowbox')); ?>


Issues
------

- There is currently a bug in Shadowbox when using a setting of Simultaneous for Animation sequence. A possible fix is posted on the Shadowbox forum: http://www.nabble.com/Box-builds-down-then-slides-up-into-place-to15718047.html#a15718047


Author/Maintainers
------------------

Written by Richard Burford, aka, psynaptic
  rich@freestylesystems.co.uk
  http://freestylesystems.co.uk


Changelog
---------

2008-Apr-16, Initial Commit

- Created module
- Added options for animate, animSequence, overlayColor