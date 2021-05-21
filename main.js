(()=>{"use strict";var n={917:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(645),i=e.n(o)()((function(n){return n[1]}));i.push([n.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n    vertical-align: baseline;\n    box-sizing: border-box;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n    display: block;\n    box-sizing: border-box;\n}\nbody {\n    line-height: 1;\n    box-sizing: border-box;\n}\nol, ul {\n    list-style: none;\n    box-sizing: border-box;\n}\nblockquote, q {\n    quotes: none;\n    box-sizing: border-box;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\na{\n    text-decoration: none;\n    color: inherit;\n}\n\nbutton {\n    border-width: 0;\n    cursor: pointer;\n}",""]);const r=i},28:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(645),i=e.n(o)()((function(n){return n[1]}));i.push([n.id,'.rounded {\n  font-family: "M PLUS Rounded 1c", sans-serif;\n}\n\n.bold {\n  font-weight: 700;\n}\n\n.extra-bold {\n  font-weight: 800;\n}\n\n.x-large {\n  font-size: 40px;\n}\n\n.medium {\n  font-weight: 500;\n  font-size: 25px;\n}\n\n.regular {\n  font-size: 20px;\n}\n\n.flex {\n  display: flex;\n}\n\n.space-between {\n  justify-content: space-between;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.inverse {\n  flex-direction: row-reverse;\n}\n\n.align-center {\n  align-items: center;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.center-h {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.fit-content {\n  width: fit-content;\n}\n\n.relative {\n  position: relative;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.hidden-overflow {\n  overflow: hidden;\n}\n\n.none {\n  display: none;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n@media (min-width: 768px) {\n  .md-inline {\n    display: inline;\n  }\n\n  .md-block {\n    display: block;\n  }\n\n  .md-flex {\n    display: flex;\n  }\n\n  .md-align-center {\n    align-items: center;\n  }\n}\n.color-primary {\n  color: #f1f7ed;\n}\n\n.bg-color-primary {\n  background-color: #f1f7ed;\n}\n\n.color-secondary {\n  color: #4b76b8;\n}\n\n.bg-color-secondary {\n  background-color: #4b76b8;\n}\n\n.color-secondary-transparent {\n  color: #4b77b8a8;\n}\n\n.bg-color-secondary-transparent {\n  background-color: #4b77b8a8;\n}\n\n.color-supplementary {\n  color: #f1f7ed;\n}\n\n.bg-color-supplementary {\n  background-color: #f1f7ed;\n}\n\n.color-bl {\n  color: #0f0a0a;\n}\n\n.bg-color-bl {\n  background-color: #0f0a0a;\n}\n\n.color-cream {\n  color: #f1f7ed;\n}\n\n.bg-color-cream {\n  background-color: #f1f7ed;\n}\n\n@media (min-width: 768px) {\n  .md-color-primary {\n    color: #f1f7ed;\n  }\n}\n.m-10 {\n  margin: 10px;\n}\n\n.m-left-10 {\n  margin-left: 10px;\n}\n\n.m-right-10 {\n  margin-right: 10px;\n}\n\n.m-top-10 {\n  margin-top: 10px;\n}\n\n.m-bottom-10 {\n  margin-bottom: 10px;\n}\n\n.m-x-10 {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.m-y-10 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.p-10 {\n  padding: 10px;\n}\n\n.p-left-10 {\n  padding-left: 10px;\n}\n\n.p-right-10 {\n  padding-right: 10px;\n}\n\n.p-top-10 {\n  padding-top: 10px;\n}\n\n.p-bottom-10 {\n  padding-bottom: 10px;\n}\n\n.p-x-10 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.p-y-10 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.m-20 {\n  margin: 20px;\n}\n\n.m-left-20 {\n  margin-left: 20px;\n}\n\n.m-right-20 {\n  margin-right: 20px;\n}\n\n.m-top-20 {\n  margin-top: 20px;\n}\n\n.m-bottom-20 {\n  margin-bottom: 20px;\n}\n\n.m-x-20 {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.m-y-20 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.p-20 {\n  padding: 20px;\n}\n\n.p-left-20 {\n  padding-left: 20px;\n}\n\n.p-right-20 {\n  padding-right: 20px;\n}\n\n.p-top-20 {\n  padding-top: 20px;\n}\n\n.p-bottom-20 {\n  padding-bottom: 20px;\n}\n\n.p-x-20 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.p-y-20 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.m-40 {\n  margin: 40px;\n}\n\n.m-left-40 {\n  margin-left: 40px;\n}\n\n.m-right-40 {\n  margin-right: 40px;\n}\n\n.m-top-40 {\n  margin-top: 40px;\n}\n\n.m-bottom-40 {\n  margin-bottom: 40px;\n}\n\n.m-x-40 {\n  margin-left: 40px;\n  margin-right: 40px;\n}\n\n.m-y-40 {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.p-40 {\n  padding: 40px;\n}\n\n.p-left-40 {\n  padding-left: 40px;\n}\n\n.p-right-40 {\n  padding-right: 40px;\n}\n\n.p-top-40 {\n  padding-top: 40px;\n}\n\n.p-bottom-40 {\n  padding-bottom: 40px;\n}\n\n.p-x-40 {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.p-y-40 {\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\n.m-80 {\n  margin: 80px;\n}\n\n.m-left-80 {\n  margin-left: 80px;\n}\n\n.m-right-80 {\n  margin-right: 80px;\n}\n\n.m-top-80 {\n  margin-top: 80px;\n}\n\n.m-bottom-80 {\n  margin-bottom: 80px;\n}\n\n.m-x-80 {\n  margin-left: 80px;\n  margin-right: 80px;\n}\n\n.m-y-80 {\n  margin-top: 80px;\n  margin-bottom: 80px;\n}\n\n.p-80 {\n  padding: 80px;\n}\n\n.p-left-80 {\n  padding-left: 80px;\n}\n\n.p-right-80 {\n  padding-right: 80px;\n}\n\n.p-top-80 {\n  padding-top: 80px;\n}\n\n.p-bottom-80 {\n  padding-bottom: 80px;\n}\n\n.p-x-80 {\n  padding-left: 80px;\n  padding-right: 80px;\n}\n\n.p-y-80 {\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n\n.m-100 {\n  margin: 100px;\n}\n\n.m-left-100 {\n  margin-left: 100px;\n}\n\n.m-right-100 {\n  margin-right: 100px;\n}\n\n.m-top-100 {\n  margin-top: 100px;\n}\n\n.m-bottom-100 {\n  margin-bottom: 100px;\n}\n\n.m-x-100 {\n  margin-left: 100px;\n  margin-right: 100px;\n}\n\n.m-y-100 {\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n\n.p-100 {\n  padding: 100px;\n}\n\n.p-left-100 {\n  padding-left: 100px;\n}\n\n.p-right-100 {\n  padding-right: 100px;\n}\n\n.p-top-100 {\n  padding-top: 100px;\n}\n\n.p-bottom-100 {\n  padding-bottom: 100px;\n}\n\n.p-x-100 {\n  padding-left: 100px;\n  padding-right: 100px;\n}\n\n.p-y-100 {\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n\n.m-p10 {\n  margin: 10%;\n}\n\n.m-left-p10 {\n  margin-left: 10%;\n}\n\n.m-right-p10 {\n  margin-right: 10%;\n}\n\n.m-top-p10 {\n  margin-top: 10%;\n}\n\n.m-bottom-p10 {\n  margin-bottom: 10%;\n}\n\n.m-x-p10 {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.m-y-p10 {\n  margin-top: 10%;\n  margin-bottom: 10%;\n}\n\n.p-p10 {\n  padding: 10%;\n}\n\n.p-left-p10 {\n  padding-left: 10%;\n}\n\n.p-right-p10 {\n  padding-right: 10%;\n}\n\n.p-top-p10 {\n  padding-top: 10%;\n}\n\n.p-bottom-p10 {\n  padding-bottom: 10%;\n}\n\n.p-x-p10 {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.p-y-p10 {\n  padding-top: 10%;\n  padding-bottom: 10%;\n}\n\n.z-1 {\n  z-index: 1;\n}\n\n.z-2 {\n  z-index: 2;\n}\n\n.z-3 {\n  z-index: 3;\n}\n\n.z-4 {\n  z-index: 4;\n}\n\n@media (min-width: 768px) {\n  .md-p-top-200 {\n    padding-top: 200px;\n  }\n\n  .md-m-left-20 {\n    margin-left: 20px;\n  }\n}\nnav {\n  top: 0;\n  left: 0;\n  height: 80px;\n}\n\n.nav-container {\n  height: 80px;\n  width: 100%;\n}\n\n.intro {\n  min-height: calc(100vh - 80px);\n}\n\n.container {\n  max-width: 1400px;\n}\n\n.content {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .content {\n    width: 50%;\n  }\n}\n\n.dot {\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n}\n\n.circle {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n}\n\n.sm-circle {\n  border-radius: 50%;\n  height: 100px;\n  width: 100px;\n  top: calc(100px - 50px);\n  left: calc(100px - 50px);\n}\n\n.circle1 {\n  bottom: -250px;\n  right: 0;\n}\n\n.circle2 {\n  top: -150px;\n  left: -50px;\n}\n\n.dragable {\n  cursor: pointer;\n}\n\n.top-200 {\n  top: 160px;\n  left: 160px;\n}\n\n.tag {\n  border-radius: 10px;\n}\n\n.img {\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  height: 100%;\n}\n\n.img-container {\n  width: 100%;\n  min-height: 100%;\n  height: 400px;\n}\n\n.about-me {\n  max-width: 80%;\n}\n\n.button {\n  border: solid 1px;\n  border-color: black;\n  width: fit-content;\n  width: -moz-fit-content;\n}\n\n.lang-icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n',""]);const r=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var p=this[r][0];null!=p&&(i[p]=!0)}for(var a=0;a<n.length;a++){var d=[].concat(n[a]);o&&i[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),t.push(d))}},t}},379:(n,t,e)=>{var o,i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),r=[];function p(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function a(n,t){for(var e={},o=[],i=0;i<n.length;i++){var a=n[i],d=t.base?a[0]+t.base:a[0],l=e[d]||0,m="".concat(d," ").concat(l);e[d]=l+1;var g=p(m),c={css:a[1],media:a[2],sourceMap:a[3]};-1!==g?(r[g].references++,r[g].updater(c)):r.push({identifier:m,updater:x(c,t),references:1}),o.push(m)}return o}function d(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=e.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var p=i(n.insert||"head");if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(t)}return t}var l,m=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function g(n,t,e,o){var i=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=m(t,i);else{var r=document.createTextNode(i),p=n.childNodes;p[t]&&n.removeChild(p[t]),p.length?n.insertBefore(r,p[t]):n.appendChild(r)}}function c(n,t,e){var o=e.css,i=e.media,r=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var s=null,f=0;function x(n,t){var e,o,i;if(t.singleton){var r=f++;e=s||(s=d(t)),o=g.bind(null,e,r,!1),i=g.bind(null,e,r,!0)}else e=d(t),o=c.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=a(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var i=p(e[o]);r[i].references--}for(var d=a(n,t),l=0;l<e.length;l++){var m=p(e[l]);0===r[m].references&&(r[m].updater(),r.splice(m,1))}e=d}}}}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return n[o](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n=e(379),t=e.n(n),o=e(917);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var i=e(28);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;let r=0,p=0;const a=n=>{n.preventDefault(),r=n.clientX,p=n.clientY,elem.style.cursor="move",document.onmouseup=l,document.onmousemove=d},d=n=>{n.preventDefault(),offset_x=r-n.clientX,offset_y=p-n.clientY,r=n.clientX,p=n.clientY,elem.style.top=elem.offsetTop-offset_y+"px",elem.style.left=elem.offsetLeft-offset_x+"px"},l=()=>{elem.style.cursor="pointer",document.onmouseup=null,document.onmousemove=null},m=n=>{n.onmousedown=a};elements=document.getElementsByClassName("dragable");for(let n=0;n<elements.length;n++)m(elements[n])})()})();