// ==UserScript==
// @name           Google+ Unaliased Fonts
// @namespace      http://matthew.kerwin.net.au/
// @description    Disables font aliasing for the new new Google+ layout.
// @author         Matthew Kerwin
// @version        2.1
// @include        http://plus.google.com/*
// @include        https://plus.google.com/*
// @include        http://*.plus.google.com/*
// @include        https://*.plus.google.com/*
// ==/UserScript==

// Replace the Roboto webfont with good old Helvetica/Arial
var css = '@font-face{font-family:Roboto;font-weight:400;src:local("Helvetica Neue"),local("Helvetica"),local("Arial")}';
css += '@font-face{font-family:Roboto;font-weight:300;src:local("Helvetica Neue"),local("Helvetica"),local("Arial")}';
css += '@font-face{font-family:Roboto;font-weight:700;src:local("Helvetica Neue"),local("Helvetica"),local("Arial")}';
css += 'body{-webkit-font-smoothing:antialiased;}';

var done=false;
var heads = document.getElementsByTagName("head");
for(var i in heads){
	var h=heads[i];
	var s=h.getElementsByTagName("style");
	for(var j in s){
		var c=s[j];
		if(c.textContent.search(/@font-face\s*\{\s*font-family:\s*'Roboto'/)>=0){
			c.textContent = css;
			done=true;
			break;
		}
	}
}
if(!done){
	if (typeof addStyle != "undefined") {
		addStyle(css);
	} else {
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
}
