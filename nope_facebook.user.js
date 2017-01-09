// ==UserScript==
// @name        Bypass facebook feed and go directly to messages
// @namespace   naure
// @include     https://www.facebook.com/
// @version     1
// @grant       none
// ==/UserScript==

if(location.pathname === "/") {
  // You went straight to the main feed? Nope.
  window.stop();
  document.body.innerHTML="<br/>&nbsp;<i>Going straight to messages…</i>"
  location.pathname = "/messages/";
}
