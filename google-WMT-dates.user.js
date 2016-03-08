// ==UserScript==
// @name           Google WMT Dates
// @namespace      matthew.kerwin.net.au
// @description    De-Americanises dates in Google Webmaster Tools.
// @author         Matthew Kerwin
// @include        https://www.google.com/webmasters/tools/*
// @version        1
// @grant          none
// ==/UserScript==

(function(w,d){
  var Y=(new Date()).getFullYear()%100;
  function s(e,g){
    var t=e.nodeType;
    if(t==3/*TEXT_NODE*//*||t==4*//*CDATA_SECTION_NODE*/) {
      var x=(g?'.':'-'); // date separator
      var v=e.nodeValue;
      var w=v.replace(/([1-9]|1[0-2])\/([1-9]|[12][0-9]|3[01])\/(\d\d)/g, function(_,m,d,y){
        if(!g&&y<100){
          if(y<=Y){y=2000+parseInt(y)}
          else{y=1900+parseInt(y)}
        }
        if(m<10)m='0'+m;
        if(d<10)d='0'+d;
        return [y,m,d].join(x);
      });
      if(v!=w){
        e.nodeValue=w;
      }
    }else if(t==1/*ELEMENT_NODE*/){
      if(!g){
        g=e.tagName.toLowerCase()=='svg';
      }
      for(var i in e.childNodes){
        var c=e.childNodes[i];
        if(c){
          s(c,g);
        }
      }
    }
  }
  d.addEventListener('DOMContentLoaded',function(){
    // wait *another* 5 seconds, then fix any dates
    w.setInterval(function(){
      var a=d.getElementsByTagName('body');
      for(var i in a){
        s(a[i],0);
      }
    }, 5000);
  },false);
})(window,document);
