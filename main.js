(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(645),o=t.n(i)()((function(e){return e[1]}));o.push([e.id,'body {\n  height: 100vh;\n}\n.content {\n  display: flex;\n  flex-direction: column;\n}\n/* SUBRAYADOS SACAR, menos distancia en contact us, el orden en las cartas de menu */\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 10px;\n  height: 115px;\n}\nnav button {\n  min-height: 50px;\n  min-width: 100px;\n}\n#content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nav-button {\n  margin: 8px;\n  height: 45%;\n  width: 7%;\n  background-color: rgb(32, 29, 29);\n  color: white;\n  font-family: "Roboto", sans-serif;\n  font-weight: bold;\n  font-size: 24px;\n}\n.nav-button-disabled {\n  margin: 8px;\n  height: 45%;\n  width: 7%;\n  background-color: rgb(255, 255, 255);\n  color: rgb(0, 0, 0);\n  font-family: "Roboto", sans-serif;\n  font-weight: bold;\n  font-size: 24px;\n}\n/* HOME CONTENT */\n.home-content {\n  font-family: "Roboto", sans-serif;\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.home-title {\n  font-size: 50px;\n  font-weight: 900;\n  letter-spacing: -3.5px;\n}\n.intro-text {\n  font-size: 22px;\n  font-weight: 500;\n}\n.schedule {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background-color: black;\n  color: white;\n  padding-bottom: 40px;\n}\n.location {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 25px;\n  margin-bottom: 35px;\n}\n.schedule-title {\n  margin-top: 10px;\n  font-size: 35px;\n}\n.sched-text {\n  font-weight: 600;\n}\n/* Class to hide nav pages */\n\n.hidden {\n  display: none;\n}\n\n/* Menu content */\n.menu-title {\n  color: black;\n  font-size: 26px;\n}\n.menu-subtitles {\n  color: black;\n  font-size: 50px;\n  font-weight: 900;\n  letter-spacing: -3.5px;\n  text-decoration: underline;\n}\n.menu {\n  font-family: "Roboto", sans-serif;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.item-box {\n  background-color: rgba(207, 204, 204, 0.507);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-style: solid;\n  width: 80%;\n  border-radius: 5px;\n  border-width: 8px;\n  margin-bottom: 13px;\n}\n.item-name {\n  font-size: 32px;\n  letter-spacing: -2.5px;\n}\n.item-price {\n  font-size: 30px;\n  font-weight: 900;\n}\n.item-text {\n  font-size: 18px;\n  width: 80%;\n}\n.main-content {\n  color: black;\n  display: flex;\n  flex-direction: column;\n}\n.menu-images {\n  height: 250px;\n  width: 250px;\n  padding-bottom: 25px;\n}\n/* Contact content */\n.contact-title {\n  color: black;\n  font-size: 50px;\n  font-weight: 900;\n  letter-spacing: -3.5px;\n}\n\n.contact-info {\n  width: 85%;\n  margin-top: 10px;\n  border: 3px solid;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 2.5;\n  font-size: 24px;\n  font-weight: 800;\n  border-radius: 5px;\n}\n.contact {\n  font-family: "Roboto", sans-serif;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/* -- Footers -- */\nfooter {\n  width: 100%;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 2px solid;\n  align-self: flex-end;\n}\n.menu-footer {\n  height: 10%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 2px solid;\n  align-self: flex-end;\n  margin-top: 25px;\n}\n\n.contact-footer {\n  height: 10%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 2px solid;\n  align-self: center;\n  justify-self: flex-end;\n  margin-top: 25px;\n  position: fixed;\n  bottom: 5px;\n}\n@media (max-width: 1250px) {\n  .nav-button {\n    font-size: 18px;\n  }\n}\n@media (max-width: 1040px) {\n  nav {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: nowrap;\n    padding: 10px;\n    height: auto;\n  }\n  .intro-text {\n    width: 80%;\n  }\n}\n',""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var r=[].concat(e[c]);i&&o[r[0]]||(t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),n.push(r))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var a={},s=[],c=0;c<e.length;c++){var r=e[c],d=i.base?r[0]+i.base:r[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(n[u].references++,n[u].updater(h)):n.push({identifier:p,updater:o(h,i),references:1}),s.push(p)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=i(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=t(a[s]);n[c].references--}for(var r=i(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=r}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(i,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},34:(e,n,t)=>{e.exports=t.p+"343b2f725840af3edb10.jpg"},26:(e,n,t)=>{e.exports=t.p+"ac9ccfa68dde5c9084b1.jpg"},667:(e,n,t)=>{e.exports=t.p+"d97a9d3ea27cb8b95a5c.jpg"},885:(e,n,t)=>{e.exports=t.p+"f8bbec6b4f5466188109.jpg"},964:(e,n,t)=>{e.exports=t.p+"4cd9ea545fed51e91089.jpg"},654:(e,n,t)=>{e.exports=t.p+"49149ec684e9f4fc3350.jpg"},277:(e,n,t)=>{e.exports=t.p+"4798635cb610c86f8747.jpg"},653:(e,n,t)=>{e.exports=t.p+"78c9c782bf0363be7b33.jpg"}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),i=t(795),o=t.n(i),a=t(569),s=t.n(a),c=t(565),r=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),h=t(426),f={};f.styleTagTransform=u(),f.setAttributes=r(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=document.querySelector("#content");m.classList.add("content");const g=document.createElement("div");m.appendChild(g),g.classList.add("home-content");const x=function(){const e=document.createElement("h1");e.classList.add("home-title"),e.textContent="Panda's Brunch";const n=document.createElement("p");n.classList.add("intro-text"),n.innerText="Panda's brings you the best combination of breakfast and lunch, \n with the best coffee in town paired with some of the highest quality meals \n fresh out of our kitchen. \n Not an early morning eater? This is the spot for you.";const t=document.createElement("section"),i=document.createElement("h2");i.textContent="SCHEDULE";const o=document.createElement("span");o.classList.add("sched-text"),o.innerText="Sundays: 10:30 AM - 4 PM. \n Mondays closed \n Tuesdays: 10:00 AM - 5:00 PM \n Wednesdays: 10:00 AM - 5:00 PM \n Thursdays: 10:00 AM - 5:00 PM \n Fridays: 10:00 AM - 5:00 PM \n Saturdays: 10:30 AM - 4 PM",t.appendChild(i),t.appendChild(o),i.classList.add("schedule-title"),t.classList.add("schedule"),g.appendChild(e),g.appendChild(n),g.appendChild(t);const a=document.createElement("div");a.classList.add("location");const s=document.createElement("h2");s.innerText="Location";const c=document.createElement("span");c.innerText="Radiant secret shop, 5 trees from Roshan pit. \n Buy talisman of evasion to gain access.",a.appendChild(s),a.appendChild(c),g.appendChild(a);const r=document.createElement("footer"),d=document.createElement("p");d.innerText="Copyright © 2021 Agu Ibanez";const l=document.createElement("a");l.href="https://github.com/jinitsuga";const p=document.createElement("span");p.innerText="GitHub",l.appendChild(p),r.appendChild(d),r.appendChild(l),g.appendChild(r)},b=function(){g.classList.remove("home-content"),g.classList.add("hidden")};var y=t(964),v=t(885),w=t(653),E=t(34),C=t(277),L=t(26),T=t(654),j=t(667);const k=y;class M{constructor(e,n,t,i){this.name=e,this.price=n,this.description=t,this.img=i}get taxPrice(){return this.calcTax()}calcTax(){return.22*price}writeDescription(){let e=document.createElement("div");e.classList.add("item-box");let n=document.createElement("h3");n.classList.add("item-name");let t=document.createElement("p");t.classList.add("item-price");let i=document.createElement("p");i.classList.add("item-text");let o=document.createElement("img");o.src=this.img,o.classList.add("menu-images"),e.appendChild(n),e.appendChild(t),e.appendChild(i),e.appendChild(o),S.appendChild(e),n.innerText=this.name,t.innerText="$"+this.price,i.innerText=this.description}}const S=document.createElement("div");let A=0;const z=function(){S.classList.add("hidden"),S.classList.remove("menu")},P=document.createElement("div");let R=0;const O=function(){P.classList.remove("contact"),P.classList.add("hidden")};x();const q=document.querySelector("#test-button");q.classList.add("nav-button"),q.disabled=!0,q.addEventListener("click",(function(){if(z(),O(),q.disabled=!0,F.disabled=!1,N.disabled=!1,g.classList.contains("hidden"))return g.classList.remove("hidden"),void g.classList.add("home-content");x()}));const F=document.querySelector("#menu-button");F.classList.add("nav-button"),F.addEventListener("click",(function(){if(b(),O(),F.disabled=!0,q.disabled=!1,N.disabled=!1,A>0)return S.classList.remove("hidden"),void S.classList.add("menu");!function(){S.classList.add("menu"),A++;const e=document.createElement("h3");e.innerText="Liquids",e.classList.add("menu-subtitles"),S.appendChild(e);const n=new M("Mocha","4","Our chocolate-flavored delight of a coffee is waiting for you. \n Feel free to add cream on top and experience heaven.",k),t=new M("Latte","3.5","Enjoy the carefully crafted balance of milk and coffee \n with cream or chocolate to instantly make your day better.",v),i=new M("Oh Jay","2.5","Squeezed from the freshest oranges acquired in the market only a couple blocks away. \n We bring any other fresh fruit that they have, so feel free to ask about the options for the day! ",E);[n,t,new M("Fresh Fruit Smoothie","4","Made fresh from what's available at the market on the day. \n Doesn't get any tastier than this.",w),i].forEach((e=>e.writeDescription()));const o=document.createElement("h3");o.innerText="Solids",o.classList.add("menu-subtitles"),S.appendChild(o),[new M("Honey and fruit Pancakes","6","Start the day off the right way with our delicious pancakes. \n The aroma alone will get you in the best of moods.",C),new M("Scrambled Eggs","5","Organic eggs with seasoning, tomato, cheese and bacon. YES!",L),new M("Chocolate Muffins","3","2 units. The house special, and our top recommendation if you're on the sweeter side of life!",T),new M("French Toast (not baguette)","4","4 slices of this simple yet effective french dish, with a variety of toppings to choose from.",j)].forEach((e=>e.writeDescription())),m.appendChild(S),S.classList.add("hidden");const a=document.createElement("footer");a.classList.add("menu-footer");const s=document.createElement("p");s.innerText="Copyright © 2021 Agu Ibanez";const c=document.createElement("a");c.href="https://github.com/jinitsuga";const r=document.createElement("span");r.innerText="GitHub",c.appendChild(r),a.appendChild(s),a.appendChild(c),S.appendChild(a)}()}));const N=document.querySelector("#contact-button");N.classList.add("nav-button"),N.addEventListener("click",(function(){if(b(),z(),N.disabled=!0,q.disabled=!1,F.disabled=!1,R>0)return P.classList.remove("hidden"),void P.classList.add("contact");!function(){P.classList.add("contact"),R++;const e=document.createElement("h2");e.classList.add("contact-title"),e.innerText="Contact us!",P.appendChild(e);const n=document.createElement("p");n.innerText="We draw strength and creativity from hearing feedback and opinions from our clients. \n Pay us a visit, or find us at: ",P.appendChild(n);const t=document.createElement("div");t.classList.add("contact-info"),P.appendChild(t);const i=document.createElement("span");i.innerText="📧  hello@pandasbrunch.com",t.appendChild(i);const o=document.createElement("span");o.innerText=" 📞  +420 32269",t.appendChild(o),t.classList.add("contact-info");const a=document.createElement("footer");a.classList.add("contact-footer");const s=document.createElement("p");s.innerText="Copyright © 2021 Agu Ibanez";const c=document.createElement("a");c.href="https://github.com/jinitsuga";const r=document.createElement("span");r.innerText="GitHub",c.appendChild(r),a.appendChild(s),a.appendChild(c),P.appendChild(a),m.appendChild(P)}(),footer.classList.add("footer-again")}));const H=Array.from(document.getElementsByTagName("button"));H.forEach((e=>e.addEventListener("click",(function(){H.forEach((e=>{e.classList.remove("nav-button-disabled")})),e.disabled&&e.classList.add("nav-button-disabled")}))))})()})();