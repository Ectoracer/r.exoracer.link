// ==UserScript==
// @name        Exolink redirect
// @namespace   Exolink redirect
// @author      JBMagination
// @license     AGPL-3.0-or-later OR MIT OR Apache-2.0
// @description Redirects Exoracer .page.link links to an Exolink instance.
// @match       https://exoracer.page.link/*
// @match       https://exo.page.link/*
// @supportURL  https://ectoracer.github.io/discord
// @updateURL   https://r.exoracer.link/r.user.js
// @downloadURL https://r.exoracer.link/r.user.js
// @homepageURL https://ectoracer.github.io/exolink
// @homepage    https://ectoracer.github.io/exolink
// @website     https://ectoracer.github.io/exolink
// @source      https://ectoracer.github.io/exolink
// @grant       GM_listValues
// @sandbox     DOM
// @version     1.0.0
// @run-at      document-start
// @inject-into content
// @compatible  chrome
// @compatible  firefox
// @compatible  opera
// @compatible  edge
// @compatible  safari
// ==/UserScript==

var search = new URLSearchParams(location).get('search');
var subdomain = (location.pathname == '/' && search.startsWith('?')) ? 'long' : (location.host == 'exo.page.link') ? 'exo' : 'exoracer';
if (new URLSearchParams(search).get('d') !== '1') window.location.href = 'https://r.exoracer.link/link/' + subdomain + location.pathname + search;
