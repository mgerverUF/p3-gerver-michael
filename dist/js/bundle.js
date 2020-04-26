!function(n){var t={};function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(o,i,function(t){return n[t]}.bind(null,i));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=4)}([function(n,t,e){var o=e(1),i=e(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1},a=(o(i,r),i.locals?i.locals:{});n.exports=a},function(n,t,e){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function c(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function s(n,t){for(var e={},o=[],i=0;i<n.length;i++){var r=n[i],s=t.base?r[0]+t.base:r[0],l=e[s]||0,u="".concat(s," ").concat(l);e[s]=l+1;var d=c(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:g(f,t),references:1}),o.push(u)}return o}function l(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function f(n,t,e,o){var i=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(t,i);else{var r=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(r,a[t]):n.appendChild(r)}}function h(n,t,e){var o=e.css,i=e.media,r=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,p=0;function g(n,t){var e,o,i;if(t.singleton){var r=p++;e=m||(m=l(t)),o=f.bind(null,e,r,!1),i=f.bind(null,e,r,!0)}else e=l(t),o=h.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var e=s(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var i=c(e[o]);a[i].references--}for(var r=s(n,t),l=0;l<e.length;l++){var u=c(e[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=r}}}},function(n,t,e){(t=e(3)(!1)).push([n.i,"header, nav, aside, article, footer, section, main, figure, figcaption {\n\tdisplay:block;\n}\n\n* {\n \tmargin:0;\n\tborder:0;\n\tpadding:0;\n}\n\nbody {\n    font-family: Helvetica, Arial, sans-serif;\n    font-weight: bold;\n\ttext-align: center;\n\tbackground-color:#ae2cf1;\n\tbackground-image: linear-gradient(#ae2cf1, #8662fb);\n}\n\nsection {\n\tbackground-color: white;\n\twidth: 85%;\n\tmargin: auto;\n\theight: 100%;\n}\n\nh1 {\n\tpadding: 15% 3% 8% 3%;\n\tfont-size: 1.7em;\n}\n\nh3 {\n\tfont-size: 2em;\n\tpadding: 0 3% 0 3%;\n}\n\np {\n\tpadding: 0 4% 10% 4%;\n}\n\nbutton {\n\tdisplay: block;\n\tmargin: auto;\n\tbackground-color: #278df1;\n\tcolor: white;\n\tborder-radius: 40px;\n\tfont-family: Helvetica, Arial, sans-serif;\n\tfont-weight: bold;\n\tfont-size: 1em;\n\tpadding: 3% 10%;\n\tmargin-bottom: 10%;\n}\n\nimg {\n\twidth: 70%;\n}\n\n/* https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/ */\nfooter {\n\tdisplay: block;\n\tposition: sticky;\n\tpadding: 2% 0;\n\tbottom: 0;\n\tmargin: auto;\n\tbackground-color: #c5c2ff;\n\twidth: 85%;\n}\n\n.on-arrival {\n\tdisplay: none;\n}\n\n@media (min-width: 425px) {\n\timg {\n\t\twidth: 50%;\n\t}\n}\n\n@media (min-width: 500px) {\n\th1 {\n\t\tpadding: 10% 3% 8% 3%;\n\t\tfont-size: 2.3em;\n\t}\n\t\n\th3 {\n\t\tfont-size: 2em;\n\t}\n\t\n\tp {\n\t\tfont-size: 1.3em;\n\t}\n\n\tbutton {\n\tfont-size: 1.2em;\n\tmargin-bottom: 2%;\n\t}\n}\n\n@media (min-width: 545px) {\n\tp {\n\t\tpadding: 0 4% 6% 4%;\n\t}\n\n\tbutton {\n\t\tmargin-bottom: 0;\n\t}\n\n\timg {\n\t\twidth: 40%;\n\t}\n}\n\n@media (min-width: 720px) {\n\tsection {\n\t\twidth: 70%;\n\t}\n\n\tbutton {\n\t\tfont-size: 1.5em;\n\t\tpadding: 2% 9%;\n\t\tmargin-bottom: 2%;\n\t}\n\n\th1 {\n\t\tfont-size: 2.6em;\n\t}\n\t\n\th3 {\n\t\tfont-size: 2.4em;\n\t}\n\t\n\tp {\n\t\tfont-size: 1.5em;\n\t\tpadding: 0 4% 5% 4%;\n\t}\n\n\timg {\n\t\twidth: 25%;\n\t}\n\n\tfooter {\n\t\twidth: 70%;\n\t}\n\n\th4 {\n\t\tdisplay: inline;\n\t}\n\n\t.footer-left {\n\t\ttext-align: left;\n\t\tpadding: 0 4% 0 4%;\n\t}\n\n\t.footer-right {\n\t\ttext-align: right;\n\t\tpadding: 0 4% 0 4%;\n\t}\n\n}\n\n@media (min-width: 1000px) {\n\tbutton {\n\t\tmargin-bottom: 1%;\n\t}\n\n\timg {\n\t\twidth: 20%;\n\t}\n\n\th4 {\n\t\tfont-size: 1.1em;\n\t}\n\n\t.footer-left {\n\t\tpadding: 0 15% 0 4%;\n\t}\n\n\t.footer-right {\n\t\tpadding: 0 4% 0 15%;\n\t}\n}\n\n@media (min-width: 1200px) {\n\tbutton {\n\t\tmargin-bottom: 1%;\n\t}\n\n\th1 {\n\t\tpadding: 8% 3% 5% 3%;\n\t\tfont-size: 2.8em;\n\t}\n\t\n\th3 {\n\t\tfont-size: 2em;\n\t}\n\t\n\tp {\n\t\tpadding: 0 7% 6% 7%;\n\t}\n\n\tfooter {\n\t\tpadding: 1% 0;\n\t}\n\n\t.footer-left {\n\t\tpadding: 0 20% 0 4%;\n\t}\n\n\t.footer-right {\n\t\tpadding: 0 4% 0 20%;\n\t}\n}",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),r=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(r).concat([i]).join("\n")}var a,c,s;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},function(n,t,e){"use strict";e.r(t);const o=new class{constructor(n,t){this.pageTitle=n,this.pageDescription=t}}("What's For Lunch?","Can't decide what to eat? Use our random food generator for a great lunchtime suggestion.");const i=new class{constructor(n,t){this.footerLabel=n,this.lastUpdate=t}}("Random Lunch Generator","Last updated 04.26.2020");const r=new class{constructor(n){this.lunchArray=[{lunchName:"Pizza",lunchPic:"././images/pizza.jpg"},{lunchName:"Noodle Bowl",lunchPic:"././images/noodlebowl.jpg"},{lunchName:"Burrito",lunchPic:"././images/burrito.jpg"},{lunchName:"Chicken and Fries",lunchPic:"././images/chicken.jpg"},{lunchName:"Burger and Fries",lunchPic:"././images/burger.jpg"},{lunchName:"Crab Cakes",lunchPic:"././images/crabcakes.jpg"},{lunchName:"Yogurt Parfait",lunchPic:"././images/yogurt.jpg"},{lunchName:"Grilled Chicken",lunchPic:"././images/grilledchicken.jpg"},{lunchName:"Boiled Egg",lunchPic:"././images/egg.jpg"},{lunchName:"Banana Smoothie",lunchPic:"././images/bananasmoothie.jpg"}]}randomizeLunches(){for(let n=this.lunchArray.length-1;n>0;n--){let t=Math.floor(Math.random()*n),e=this.lunchArray[n];this.lunchArray[n]=this.lunchArray[t],this.lunchArray[t]=e}}showResult(){window.onload=()=>{document.getElementById("lunch-button").addEventListener("click",()=>{this.randomizeLunches(),document.getElementById("result-pic").setAttribute("src",this.lunchArray[0].lunchPic),document.getElementById("result-pic").classList.remove("on-arrival"),document.getElementById("result").innerHTML=this.lunchArray[0].lunchName,document.getElementById("result").classList.remove("on-arrival")})}}};e(0);new class{constructor(){this.renderTemplate(),r.showResult()}renderTemplate(){const n=`\n        <section class="content">\n        <h1>${o.pageTitle}</h1>\n        <p>${o.pageDescription}</p>\n        <button id="lunch-button">GENERATE</button>\n        <img id="result-pic" class="on-arrival" src=${r.lunchArray[0].lunchPic} />\n        <h3 id="result" class="on-arrival">${r.showResult()}</h3>\n        </section>\n        <footer>\n        <h4 class="footer-left">${i.footerLabel}</h4>\n        <h4 class="footer-right">${i.lastUpdate}</h4>\n        </footer>\n        `;document.body.innerHTML=n}}}]);