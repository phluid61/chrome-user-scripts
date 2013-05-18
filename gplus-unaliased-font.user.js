// ==UserScript==
// @name           Google+ Unaliased Fonts
// @namespace      http://matthew.kerwin.net.au/
// @description    Disables font aliasing for the new new Google+ layout.
// @author         Matthew Kerwin
// @version        2.0
// @include        http://plus.google.com/*
// @include        https://plus.google.com/*
// @include        http://*.plus.google.com/*
// @include        https://*.plus.google.com/*
// ==/UserScript==

// Override the Roboto webfont with good old Helvetica/Arial
var css = '@font-face{font-family:Roboto;font-weight:400;src:local("Helvetica Neue"),local("Helvetica"),local("Arial")}';
css += '@font-face{font-family:Roboto;font-weight:300;src:local("Helvetica Neue"),local("Helvetica"),local("Arial")}';
css += '@font-face{font-family:Roboto;font-weight:700;src:local("Helvetica Neue"),local("Helvetica"),local("Arial")}';

if (typeof addStyle != "undefined") {
    addStyle(css);
} else {
    var heads = document.getElementsByTagName("head");
	var container;
    if (heads.length > 0) {
		container = heads[0];
	} else {
		container = document;
	}
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	container.appendChild(node);
}