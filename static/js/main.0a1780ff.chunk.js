(this["webpackJsonpreact-checkbox-tree"]=this["webpackJsonpreact-checkbox-tree"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"text":"Select all","checked":false,"children":[{"text":"Name","checked":false,"children":[]},{"text":"Age","checked":false,"children":[]},{"text":"Contact","checked":false,"children":[{"text":"Telephone","checked":false,"children":[{"text":"Home","checked":false,"children":[]},{"text":"Work","checked":false,"children":[]}]},{"text":"Mobile","checked":false,"children":[]}]},{"text":"Address","checked":false,"children":[{"text":"House","checked":false,"children":[]},{"text":"Road","checked":false,"children":[]},{"text":"Zip Code","checked":false,"children":[]}]}]}')},24:function(e,n,t){"use strict";t.r(n);var c,r,a,i,o,l,s,d=t(2),h=t(9),f=t.n(h),b=t(3),u=t(14),j=t(1),x=t.n(j),p=t(4),g=function(e,n){return Object(p.a)(Object(p.a)({},e),{},{checked:n})},O=function e(n,t,c){var r=Object(p.a)({},n),a=r[t],i=a.childIds;return r[t]=g(a,c),i.length&&i.forEach((function(n){r=e(r,n,c)})),r},m=function e(n,t){var c=n[t],r=c.checked,a=c.childIds;return a.length?a.reduce((function(t,c){return t&&e(n,c)}),!0):r},k=function e(n,t){var c=n[t].parentId;if(void 0===c)return n;var r=Object(p.a)({},n),a=r[c],i=m(r,c);return a.checked!==i&&(r[c]=g(a,i)),e(r,c)},v=function(e,n){var t;return t=O(e,n,!e[n].checked),t=k(t,n)},y=t(0),w=b.b.ul(c||(c=Object(d.a)(["\n  list-style-type: none;\n  padding-left: 0;\n"]))),S=function(e){var n=e.data,t=Object(j.useState)(function(e){var n={},t=-1;return function e(c,r){var a="".concat(t+=1),i=c.text,o=void 0===i?"":i,l=c.checked,s=void 0!==l&&l;n[a]={text:o,checked:s,parentId:r,childIds:[]},r&&n[r].childIds.push(a),c.children&&c.children.length&&c.children.forEach((function(n){e(n,a)}))}(e),n}(n)),c=Object(u.a)(t,2),r=c[0],a=c[1];return Object(y.jsx)(w,{children:Object(y.jsx)(T,{id:"0",nodes:r,onToggle:function(e){a((function(n){return v(n,e)}))}})})},I=b.b.ul(r||(r=Object(d.a)(["\n  list-style-type: none;\n"]))),C=b.b.input(a||(a=Object(d.a)(["\n  margin-right: 0.5rem;\n  cursor: pointer;\n"]))),T=function e(n){var t=n.id,c=n.nodes,r=n.onToggle,a=c[t],i=a.text,o=a.childIds,l=a.checked;return Object(y.jsxs)(x.a.Fragment,{children:[i&&Object(y.jsx)("li",{children:Object(y.jsxs)("label",{children:[Object(y.jsx)(C,{type:"checkbox",checked:l,onChange:function(){return r(t)}}),i]})}),o.length?Object(y.jsx)("li",{children:Object(y.jsx)(I,{children:o.map((function(n){return Object(y.jsx)(e,{id:n,nodes:c,onToggle:r},n)}))})}):null]},t)},F=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h1",{children:"React Checkbox Tree"}),Object(y.jsxs)("p",{children:["A react app showcasing a simple checkbox tree component. This project was created using"," ",Object(y.jsx)("a",{href:"https://github.com/facebookincubator/create-react-app",children:"create-react-app"}),"."]})]})},E=t(13),P=t.p+"static/media/github.66378707.svg",R=b.b.main(i||(i=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  max-width: 64rem;\n  height: 100vh;\n  margin: 0 auto;\n"]))),A=b.b.section(o||(o=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: auto;\n"]))),H=b.b.footer(l||(l=Object(d.a)(["\n  align-self: center;\n  margin: 2rem;\n"]))),J=function(){return Object(y.jsxs)(R,{children:[Object(y.jsx)("header",{children:Object(y.jsx)(F,{})}),Object(y.jsx)(A,{children:Object(y.jsx)("article",{children:Object(y.jsx)(S,{data:E})})}),Object(y.jsx)(H,{children:Object(y.jsx)("a",{href:"https://github.com/joelgeorgev/react-checkbox-tree",children:Object(y.jsx)("img",{src:P,alt:"Go to GitHub repository page"})})})]})},z=t.p+"static/media/source-sans-pro-v11-latin-regular.96b15882.woff2",G=t.p+"static/media/source-sans-pro-v11-latin-regular.74ddb2b0.woff",N=Object(b.a)(s||(s=Object(d.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n    overscroll-behavior-y: none;\n  }\n\n  /* source-sans-pro-regular - latin */\n  @font-face {\n    font-family: 'Source Sans Pro';\n    font-style: normal;\n    font-weight: 400;\n    font-display: optional;\n    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),\n        url(",") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url(",") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n  }\n"])),z,G);f.a.render(Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(N,{}),Object(y.jsx)(J,{})]}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0a1780ff.chunk.js.map