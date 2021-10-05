// ==UserScript==
// @name        Note & Clossse
// @namespace   Violentmonkey Scripts
// @match       https://*.reddit.com/r/*/comments/*
// @include     *://*
// @include     *gta*
// @include     *twitch*
// @include     *discord*
// @include     *router*
// @include     *wireless*
// @include     *wifi*
// @include     *stackoverflow*
// @include     *thread*
// @include     *gsm*
// @include     *amazon*
// @include     *realme*
// @include     *mi.com*
// @include     *python*
// @include     *java*
// @include     *youtube*
// @exclude     *://v3d4n7v2.gisthub.io*
// @grant       window.close
// @version     1.0
// @author      -
// @description 6/16/2021, 6:19:34 PM
// @run-at document-idle
// ==/UserScript==
if (window.location.origin == "http://192.168.0.64") {
window.close();
}
else {
    window.location.href = "http://192.168.0.64/?q=" + btoa(escape(document.title.replaceAll(" ","+") + "+" + document.location.href));
  }