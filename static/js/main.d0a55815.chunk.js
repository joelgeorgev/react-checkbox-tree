(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports=[{key:"Name",checked:!1},{key:"Age",checked:!1},{key:"Contact",checked:!1,childKeys:[{key:"Telephone",checked:!1,childKeys:[{key:"Home",checked:!1},{key:"Work",checked:!1}]},{key:"Mobile",checked:!1}]},{key:"Address",checked:!1,childKeys:[{key:"House",checked:!1},{key:"Road",checked:!1},{key:"Zip Code",checked:!1}]}]},13:function(e,n,t){e.exports=t.p+"static/media/github.dc6635a4.svg"},14:function(e,n,t){e.exports=t.p+"static/media/source-sans-pro-v11-latin-regular.76d8cbb0.woff2"},15:function(e,n,t){e.exports=t.p+"static/media/source-sans-pro-v11-latin-regular.f94f84eb.woff"},20:function(e,n,t){e.exports=t(31)},31:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),a=t.n(c),o=t(9),i=t.n(o),l=t(2);function u(){var e=Object(r.a)(["\n  margin-right: 0.5rem;\n  cursor: pointer;\n"]);return u=function(){return e},e}function d(){var e=Object(r.a)(["\n  list-style-type: none;\n"]);return d=function(){return e},e}var s=l.b.ul(d()),f=l.b.input(u()),h=function e(n){var t=n.id,r=n.nodes,c=n.onToggle,o=r[t],i=o.key,l=o.childIds,u=o.checked;return a.a.createElement(a.a.Fragment,{key:t},i&&a.a.createElement("li",null,a.a.createElement("label",null,a.a.createElement(f,{type:"checkbox",checked:u,onChange:function(){return c(t)}}),i)),l.length?a.a.createElement("li",null,a.a.createElement(s,null,l.map(function(n){return a.a.createElement(e,{key:n,id:n,nodes:r,onToggle:c})}))):null)},m=t(16),p=t(3),v=t(4),g=t(19);function k(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}var b=t(12);function y(){var e=Object(r.a)(["\n  list-style-type: none;\n"]);return y=function(){return e},e}var E=l.b.ul(y()),w=function(){var e=Object(c.useState)(function(e){var n=e.list,t=void 0===n?[]:n,r=e.recursionKey,c=void 0===r?"children":r,a={},o=-1;return function e(n){var t=n.node,r=n.parentId,i=o+=1,l=(t[c],Object(g.a)(t,[c].map(k)));a[i]=Object(v.a)({},l,{parentId:r,childIds:[]}),r>=0&&a[r].childIds.push(i),t[c]&&t[c].length&&t[c].forEach(function(n){e({node:n,parentId:i})})}({node:Object(p.a)({},c,t)}),a}({list:b,recursionKey:"childKeys"})),n=Object(m.a)(e,2),t=n[0],r=n[1];return a.a.createElement(E,null,a.a.createElement(h,{id:0,nodes:t,onToggle:function(e){r(function(n){return function(e){var n=e.id,t=e.prevState,r=function(e){var n=e.node,t=e.checked;n.checked=t},c=function(e){var n={};return Object.keys(e).forEach(function(t){n[t]=Object(v.a)({},e[t])}),n}(t);return function e(n){var t=n.id,c=n.nodes,a=n.checked,o=c[t],i=o.childIds;r({node:o,checked:a}),i.length&&i.forEach(function(n){e({id:n,nodes:c,checked:a})})}({id:n,nodes:c,checked:!c[n].checked}),function e(n){var t=n.id,c=n.nodes,a=c[t].parentId,o=c[a],i=function e(n){var t=n.id,r=n.nodes,c=r[t],a=c.childIds;return a.length?a.reduce(function(n,t){return n&&e({id:t,nodes:r})},!0):c.checked}({id:a,nodes:c});r({node:o,checked:i}),o.parentId>=0&&e({id:a,nodes:c})}({id:n,nodes:c}),c}({id:e,prevState:n})})}}))},j=function(){return a.a.createElement("div",null,a.a.createElement("h3",null,"React Checkbox Tree"),a.a.createElement("p",null,"A react app showcasing a simple checkbox tree component. This project was created using"," ",a.a.createElement("a",{href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"),"."))},x=t(13),O=t.n(x);function S(){var e=Object(r.a)(["\n  align-self: center;\n"]);return S=function(){return e},e}function I(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"]);return I=function(){return e},e}function C(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  max-width: 64rem;\n  height: 100vh;\n  margin: 0 auto;\n  padding: 4rem 0;\n"]);return C=function(){return e},e}var T=l.b.section(C()),K=l.b.div(I()),P=l.b.div(S()),F=t(14),R=t.n(F),W=t(15),A=t.n(W);function H(){var e=Object(r.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n  }\n\n  /* source-sans-pro-regular - latin */\n  @font-face {\n    font-family: 'Source Sans Pro';\n    font-style: normal;\n    font-weight: 400;\n    font-display: optional;\n    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),\n        url(",") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url(",") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n  }\n"]);return H=function(){return e},e}var N=Object(l.a)(H(),R.a,A.a);i.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null),a.a.createElement(function(){return a.a.createElement("main",{role:"main"},a.a.createElement(T,null,a.a.createElement(K,null,a.a.createElement(j,null),a.a.createElement(w,null)),a.a.createElement(P,null,a.a.createElement("a",{href:"https://github.com/joelgeorgev/react-checkbox-tree"},a.a.createElement("img",{src:O.a,alt:"GitHub"})))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",function(){var e="".concat("/react-checkbox-tree","/service-worker.js");navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})})}},[[20,1,2]]]);
//# sourceMappingURL=main.d0a55815.chunk.js.map