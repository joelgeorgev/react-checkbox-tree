(this["webpackJsonpreact-checkbox-tree"]=this["webpackJsonpreact-checkbox-tree"]||[]).push([[0],{10:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var c=function(e){var n={},t=-1;return function e(c,r){var a="".concat(t+=1),i=c.text,o=void 0===i?"":i,l=c.checked,s=void 0!==l&&l;n[a]={text:o,checked:s,parentId:r,childIds:[]},r&&n[r].childIds.push(a),c.children&&c.children.length&&c.children.forEach((function(n){e(n,a)}))}(e),n}},11:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var c=t(4),r=function(e,n){return Object(c.a)(Object(c.a)({},e),{},{checked:n})},a=function e(n,t,a){var i=Object(c.a)({},n),o=i[t],l=o.childIds;return i[t]=r(o,a),l.length&&l.forEach((function(n){i=e(i,n,a)})),i},i=function e(n,t){var c=n[t],r=c.checked,a=c.childIds;return a.length?a.reduce((function(t,c){return t&&e(n,c)}),!0):r},o=function e(n,t){var a=n[t].parentId;if(void 0===a)return n;var o=Object(c.a)({},n),l=o[a],s=i(o,a);return l.checked!==s&&(o[a]=r(l,s)),e(o,a)},l=function(e,n){var t;return t=a(e,n,!e[n].checked),t=o(t,n)}},12:function(e,n){},17:function(e){e.exports=JSON.parse('{"text":"Select all","checked":false,"children":[{"text":"Name","checked":false,"children":[]},{"text":"Age","checked":false,"children":[]},{"text":"Contact","checked":false,"children":[{"text":"Telephone","checked":false,"children":[{"text":"Home","checked":false,"children":[]},{"text":"Work","checked":false,"children":[]}]},{"text":"Mobile","checked":false,"children":[]}]},{"text":"Address","checked":false,"children":[{"text":"House","checked":false,"children":[]},{"text":"Road","checked":false,"children":[]},{"text":"Zip Code","checked":false,"children":[]}]}]}')},28:function(e,n,t){"use strict";t.r(n);var c,r,a,i,o,l,s,d=t(2),h=t(1),u=t.n(h),f=t(13),b=t.n(f),j=t(3),x=t(18),g=t(6),p=t(0),O=j.b.ul(c||(c=Object(d.a)(["\n  list-style-type: none;\n  padding-left: 0;\n"]))),m=function(e){var n=e.data,t=Object(h.useState)(Object(g.normalize)(n)),c=Object(x.a)(t,2),r=c[0],a=c[1];return Object(p.jsx)(O,{children:Object(p.jsx)(y,{id:"0",nodes:r,onToggle:function(e){a((function(n){return Object(g.getNewState)(n,e)}))}})})},k=j.b.ul(r||(r=Object(d.a)(["\n  list-style-type: none;\n"]))),v=j.b.input(a||(a=Object(d.a)(["\n  margin-right: 0.5rem;\n  cursor: pointer;\n"]))),y=function e(n){var t=n.id,c=n.nodes,r=n.onToggle,a=c[t],i=a.text,o=a.childIds,l=a.checked;return Object(p.jsxs)(u.a.Fragment,{children:[i&&Object(p.jsx)("li",{children:Object(p.jsxs)("label",{children:[Object(p.jsx)(v,{type:"checkbox",checked:l,onChange:function(){return r(t)}}),i]})}),o.length?Object(p.jsx)("li",{children:Object(p.jsx)(k,{children:o.map((function(n){return Object(p.jsx)(e,{id:n,nodes:c,onToggle:r},n)}))})}):null]},t)},w=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"React Checkbox Tree"}),Object(p.jsxs)("p",{children:["A react app showcasing a simple checkbox tree component. This project was created using"," ",Object(p.jsx)("a",{href:"https://github.com/facebookincubator/create-react-app",children:"create-react-app"}),"."]})]})},S=t(17),I=t.p+"static/media/github.66378707.svg",C=j.b.main(i||(i=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  max-width: 64rem;\n  height: 100vh;\n  margin: 0 auto;\n"]))),T=j.b.section(o||(o=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: auto;\n"]))),F=j.b.footer(l||(l=Object(d.a)(["\n  align-self: center;\n  margin: 2rem;\n"]))),z=function(){return Object(p.jsxs)(C,{children:[Object(p.jsx)("header",{children:Object(p.jsx)(w,{})}),Object(p.jsx)(T,{children:Object(p.jsx)("article",{children:Object(p.jsx)(m,{data:S})})}),Object(p.jsx)(F,{children:Object(p.jsx)("a",{href:"https://github.com/joelgeorgev/react-checkbox-tree",children:Object(p.jsx)("img",{src:I,alt:"Go to GitHub repository page"})})})]})},E=t.p+"static/media/source-sans-pro-v11-latin-regular.96b15882.woff2",N=t.p+"static/media/source-sans-pro-v11-latin-regular.74ddb2b0.woff",P=Object(j.a)(s||(s=Object(d.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n    overscroll-behavior-y: none;\n  }\n\n  /* source-sans-pro-regular - latin */\n  @font-face {\n    font-family: 'Source Sans Pro';\n    font-style: normal;\n    font-weight: 400;\n    font-display: optional;\n    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),\n        url(",") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url(",") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n  }\n"])),E,N);b.a.render(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(P,{}),Object(p.jsx)(z,{})]}),document.getElementById("root"))},6:function(e,n,t){"use strict";var c=t(10);t.d(n,"normalize",(function(){return c.a}));var r=t(11);t.d(n,"getNewState",(function(){return r.a}));t(12)}},[[28,1,2]]]);
//# sourceMappingURL=main.15076e41.chunk.js.map