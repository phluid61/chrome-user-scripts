// ==UserScript==
// @name           Google+ Unaliased Fonts
// @namespace      http://matthew.kerwin.net.au/
// @description    Disables font aliasing for the new new Google+ layout.
// @author         Matthew Kerwin
// @version        1.0
// @include        http://plus.google.com/*
// @include        https://plus.google.com/*
// @include        http://*.plus.google.com/*
// @include        https://*.plus.google.com/*
// ==/UserScript==

// Plain-text Message Body
var css = 'body,.YF.a-n,.cw,.yd{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif!important;}';

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