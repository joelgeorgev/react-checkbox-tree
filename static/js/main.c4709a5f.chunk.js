(this["webpackJsonpreact-checkbox-tree"]=this["webpackJsonpreact-checkbox-tree"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"children":[{"text":"Name","checked":false},{"text":"Age","checked":false},{"text":"Contact","checked":false,"children":[{"text":"Telephone","checked":false,"children":[{"text":"Home","checked":false},{"text":"Work","checked":false}]},{"text":"Mobile","checked":false}]},{"text":"Address","checked":false,"children":[{"text":"House","checked":false},{"text":"Road","checked":false},{"text":"Zip Code","checked":false}]}]}')},26:function(e,n,t){"use strict";t.r(n);var c,r,o,a,i,s,l,d=t(2),h=t(1),f=t.n(h),u=t(9),b=t.n(u),j=t(3),x=t(14),g=t(4),p=t(16),O=t(15),m=function(e,n){return Object(g.a)(Object(g.a)({},e),{},{checked:n})},k=function e(n,t,c){var r=Object(g.a)({},n),o=r[t],a=o.childIds;return r[t]=m(o,c),a.length&&a.forEach((function(n){r=e(r,n,c)})),r},v=function e(n,t){var c=n[t],r=c.checked,o=c.childIds;return o.length?o.reduce((function(t,c){return t&&e(n,c)}),!0):r},w=function e(n,t){var c=n[t].parentId;if(void 0===c)return n;var r=Object(g.a)({},n),o=r[c],a=v(r,c);return o.checked!==a&&(r[c]=m(o,a)),e(r,c)},y=function(e,n){var t;return t=k(e,n,!e[n].checked),t=w(t,n)},I=t(0),S=j.b.ul(c||(c=Object(d.a)(["\n  list-style-type: none;\n  padding-left: 0;\n"]))),C=function(e){var n=e.data,t=Object(h.useState)(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",t={},c=-1;return function e(r){var o=r.node,a=r.parentId,i=c+=1,s=(o[n],Object(p.a)(o,[n].map(O.a)));t[i]=Object(g.a)(Object(g.a)({},s),{},{parentId:a,childIds:[]}),a>=0&&t[a].childIds.push(i),o[n]&&o[n].length&&o[n].forEach((function(n){e({node:n,parentId:i})}))}({node:e}),t}(n)),c=Object(x.a)(t,2),r=c[0],o=c[1];return Object(I.jsx)(S,{children:Object(I.jsx)(F,{id:0,nodes:r,onToggle:function(e){o((function(n){return y(n,e)}))}})})},E=j.b.ul(r||(r=Object(d.a)(["\n  list-style-type: none;\n"]))),T=j.b.input(o||(o=Object(d.a)(["\n  margin-right: 0.5rem;\n  cursor: pointer;\n"]))),F=function e(n){var t=n.id,c=n.nodes,r=n.onToggle,o=c[t],a=o.text,i=o.childIds,s=o.checked;return Object(I.jsxs)(f.a.Fragment,{children:[a&&Object(I.jsx)("li",{children:Object(I.jsxs)("label",{children:[Object(I.jsx)(T,{type:"checkbox",checked:s,onChange:function(){return r(t)}}),a]})}),i.length?Object(I.jsx)("li",{children:Object(I.jsx)(E,{children:i.map((function(n){return Object(I.jsx)(e,{id:n,nodes:c,onToggle:r},n)}))})}):null]},t)},P=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h1",{children:"React Checkbox Tree"}),Object(I.jsxs)("p",{children:["A react app showcasing a simple checkbox tree component. This project was created using"," ",Object(I.jsx)("a",{href:"https://github.com/facebookincubator/create-react-app",children:"create-react-app"}),"."]})]})},R=t(13),W=t.p+"static/media/github.66378707.svg",A=j.b.main(a||(a=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  max-width: 64rem;\n  height: 100vh;\n  margin: 0 auto;\n"]))),H=j.b.section(i||(i=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: auto;\n"]))),J=j.b.footer(s||(s=Object(d.a)(["\n  align-self: center;\n  margin: 2rem;\n"]))),N=function(){return Object(I.jsxs)(A,{children:[Object(I.jsx)("header",{children:Object(I.jsx)(P,{})}),Object(I.jsx)(H,{children:Object(I.jsx)("article",{children:Object(I.jsx)(C,{data:R})})}),Object(I.jsx)(J,{children:Object(I.jsx)("a",{href:"https://github.com/joelgeorgev/react-checkbox-tree",children:Object(I.jsx)("img",{src:W,alt:"Go to GitHub repository page"})})})]})},z=t.p+"static/media/source-sans-pro-v11-latin-regular.96b15882.woff2",G=t.p+"static/media/source-sans-pro-v11-latin-regular.74ddb2b0.woff";var B=Object(j.a)(l||(l=Object(d.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n    overscroll-behavior-y: none;\n  }\n\n  /* source-sans-pro-regular - latin */\n  @font-face {\n    font-family: 'Source Sans Pro';\n    font-style: normal;\n    font-weight: 400;\n    font-display: optional;\n    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),\n        url(",") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url(",") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n  }\n"])),z,G);b.a.render(Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(B,{}),Object(I.jsx)(N,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("/react-checkbox-tree","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))}},[[26,1,2]]]);
//# sourceMappingURL=main.c4709a5f.chunk.js.map