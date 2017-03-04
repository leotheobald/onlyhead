"use strict";

head.ready(document, function () {

  console.log("jquery loaded so script.js is now loaded!");

  jQuery.noConflict();

  // Load appropriate js for browsers.
  if (head.browser.chrome) {
    //head.js("/js/chrome.js");
    console.log("Chrome browser js loaded", head.browser.version);
    jQuery("p").css("color", "pink");
  };

  if (head.browser.ff) {
    console.log("Firefox browser js loaded", head.browser.version);
    jQuery("p").css("color", "blue");
  };

  if (head.browser.ie && head.browser.version < 9) {
    //head.js(["/css/html5.min.css", "/js/ie.js"]);
    console.log("IE version: ", head.browser.version);
  };

  if (head.browser.ie && head.browser.version > 9) {
    console.log("IE version: ", head.browser.version);
  };

});
