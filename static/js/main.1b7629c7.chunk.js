(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports=[{key:"Name",checked:!1},{key:"Age",checked:!1},{key:"Contact",checked:!1,childKeys:[{key:"Telephone",checked:!1,childKeys:[{key:"Home",checked:!1},{key:"Work",checked:!1}]},{key:"Mobile",checked:!1}]},{key:"Address",checked:!1,childKeys:[{key:"House",checked:!1},{key:"Road",checked:!1},{key:"Zip Code",checked:!1}]}]},13:function(e,n,t){e.exports=t.p+"static/media/github.dc6635a4.svg"},14:function(e,n,t){e.exports=t.p+"static/media/source-sans-pro-v11-latin-regular.76d8cbb0.woff2"},15:function(e,n,t){e.exports=t.p+"static/media/source-sans-pro-v11-latin-regular.f94f84eb.woff"},20:function(e,n,t){e.exports=t(31)},31:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),o=t.n(c),a=t(9),i=t.n(a),l=t(2);function u(){var e=Object(r.a)(["\n  margin-right: 0.5rem;\n  cursor: pointer;\n"]);return u=function(){return e},e}function d(){var e=Object(r.a)(["\n  list-style-type: none;\n"]);return d=function(){return e},e}var s=l.b.ul(d()),f=l.b.input(u()),h=function e(n){var t=n.id,r=n.nodes,c=n.onToggle,a=r[t],i=a.key,l=a.childIds,u=a.checked;return o.a.createElement(o.a.Fragment,{key:t},i&&o.a.createElement("li",null,o.a.createElement("label",null,o.a.createElement(f,{type:"checkbox",checked:u,onChange:function(){return c(t)}}),i)),l.length?o.a.createElement("li",null,o.a.createElement(s,null,l.map(function(n){return o.a.createElement(e,{key:n,id:n,nodes:r,onToggle:c})}))):null)},m=t(16),p=t(3),v=t(4),g=t(19);function b(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}var k=t(12);function y(){var e=Object(r.a)(["\n  list-style-type: none;\n"]);return y=function(){return e},e}var E=l.b.ul(y()),w=function(){var e=Object(c.useState)(function(e){var n=e.list,t=void 0===n?[]:n,r=e.recursionKey,c=void 0===r?"children":r,o={},a=-1;return function e(n){var t=n.node,r=n.parentId,i=a+=1,l=(t[c],Object(g.a)(t,[c].map(b)));o[i]=Object(v.a)({},l,{parentId:r,childIds:[]}),r>=0&&o[r].childIds.push(i),t[c]&&t[c].length&&t[c].forEach(function(n){e({node:n,parentId:i})})}({node:Object(p.a)({},c,t)}),o}({list:k,recursionKey:"childKeys"})),n=Object(m.a)(e,2),t=n[0],r=n[1];return o.a.createElement(E,null,o.a.createElement(h,{id:0,nodes:t,onToggle:function(e){r(function(n){return function(e){var n=e.id,t=e.prevState,r=function(e){var n=e.node,t=e.checked;n.checked=t},c=function(e){var n={};return Object.keys(e).forEach(function(t){n[t]=Object(v.a)({},e[t])}),n}(t);return function e(n){var t=n.id,c=n.nodes,o=n.checked,a=c[t],i=a.childIds;r({node:a,checked:o}),i.length&&i.forEach(function(n){e({id:n,nodes:c,checked:o})})}({id:n,nodes:c,checked:!c[n].checked}),function e(n){var t=n.id,c=n.nodes,o=c[t].parentId,a=c[o],i=function e(n){var t=n.id,r=n.nodes,c=r[t],o=c.childIds;return o.length?o.reduce(function(n,t){return n&&e({id:t,nodes:r})},!0):c.checked}({id:o,nodes:c});r({node:a,checked:i}),a.parentId>=0&&e({id:o,nodes:c})}({id:n,nodes:c}),c}({id:e,prevState:n})})}}))},x=function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"React Checkbox Tree"),o.a.createElement("p",null,"A react app showcasing a simple checkbox tree component. This project was created using"," ",o.a.createElement("a",{href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"),"."))},j=t(13),O=t.n(j);function S(){var e=Object(r.a)(["\n  align-self: center;\n  margin: 2rem;\n"]);return S=function(){return e},e}function I(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  margin-top: 2rem;\n  overflow: auto;\n"]);return I=function(){return e},e}function C(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  max-width: 64rem;\n  height: 100vh;\n  margin: 0 auto;\n"]);return C=function(){return e},e}var T=l.b.section(C()),K=l.b.div(I()),P=l.b.div(S()),F=t(14),R=t.n(F),W=t(15),A=t.n(W);function H(){var e=Object(r.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n    overscroll-behavior-y: none;\n  }\n\n  /* source-sans-pro-regular - latin */\n  @font-face {\n    font-family: 'Source Sans Pro';\n    font-style: normal;\n    font-weight: 400;\n    font-display: optional;\n    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),\n        url(",") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url(",") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n  }\n"]);return H=function(){return e},e}var N=Object(l.a)(H(),R.a,A.a);i.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(N,null),o.a.createElement(function(){return o.a.createElement("main",{role:"main"},o.a.createElement(T,null,o.a.createElement(K,null,o.a.createElement(x,null),o.a.createElement(w,null)),o.a.createElement(P,null,o.a.createElement("a",{href:"https://github.com/joelgeorgev/react-checkbox-tree"},o.a.createElement("img",{src:O.a,alt:"GitHub"})))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",function(){var e="".concat("/react-checkbox-tree","/service-worker.js");navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})})}},[[20,1,2]]]);
//# sourceMappingURL=main.1b7629c7.chunk.js.map