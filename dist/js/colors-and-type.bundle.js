(()=>{"use strict";var e,r,n={535:(e,r,n)=>{n(249);var t=new function e(){var r,n;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),n="Violin Charades",(r="name")in this?Object.defineProperty(this,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):this.name=n},o=document.createElement("p");o.textContent="I like ".concat(t.name,".");var i=document.createElement("h1");i.textContent="Как интересно!",document.querySelector("#root").append(i,o)},206:(e,r,n)=>{n.r(r),n.d(r,{default:()=>i});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,"html{font-size:40px;color:#0000F0}\n",""]);const i=o},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=e(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);t&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),r.push(d))}},r}},249:(e,r,n)=>{var t=n(379),o=n.n(t),i=n(206),a=o()(i.default,{insert:"head",singleton:!1});if(!i.default.locals||e.hot.invalidate){var c=i.default.locals;e.hot.accept(206,(r=>{i=n(206),function(e,r,n){if(!e&&r||e&&!r)return!1;var t;for(t in e)if(e[t]!==r[t])return!1;for(t in r)if(!e[t])return!1;return!0}(c,i.default.locals)?(c=i.default.locals,a(i.default)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),i.default.locals},379:(e,r,n)=>{var t,o=function(){var e={};return function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[r]=n}return e[r]}}(),i=[];function a(e){for(var r=-1,n=0;n<i.length;n++)if(i[n].identifier===e){r=n;break}return r}function c(e,r){for(var n={},t=[],o=0;o<e.length;o++){var c=e[o],d=r.base?c[0]+r.base:c[0],u=n[d]||0,l="".concat(d," ").concat(u);n[d]=u+1;var s=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==s?(i[s].references++,i[s].updater(f)):i.push({identifier:l,updater:v(f,r),references:1}),t.push(l)}return t}function d(e){var r=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=n.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(r);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var u,l=(u=[],function(e,r){return u[e]=r,u.filter(Boolean).join("\n")});function s(e,r,n,t){var o=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=l(r,o);else{var i=document.createTextNode(o),a=e.childNodes;a[r]&&e.removeChild(a[r]),a.length?e.insertBefore(i,a[r]):e.appendChild(i)}}function f(e,r,n){var t=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,h=0;function v(e,r){var n,t,o;if(r.singleton){var i=h++;n=p||(p=d(r)),t=s.bind(null,n,i,!1),o=s.bind(null,n,i,!0)}else n=d(r),t=f.bind(null,n,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var n=c(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var o=a(n[t]);i[o].references--}for(var d=c(e,r),u=0;u<n.length;u++){var l=a(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=d}}}}},t={};function o(e){if(t[e])return t[e].exports;var r=t[e]={id:e,exports:{}},i={id:e,module:r,factory:n[e],require:o};return o.i.forEach((function(e){e(i)})),r=i.module,i.factory.call(r.exports,r,r.exports,i.require),r.exports}o.m=n,o.c=t,o.i=[],o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var n in r)o.o(r,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o.hu=e=>e+"."+o.h()+".hot-update.js",o.hmrF=()=>"colors-and-type."+o.h()+".hot-update.json",o.h=()=>"19d5fa0ea37119e99380",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="task2:",o.l=(n,t,i,a)=>{if(e[n])e[n].push(t);else{var c,d;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var s=u[l];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==r+i){c=s;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",r+i),c.src=n),e[n]=[t];var f=(r,t)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),d&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,r,n,t,i={},a=o.c,c=[],d=[],u="idle";function l(e){u=e;for(var r=0;r<d.length;r++)d[r].call(null,e)}function s(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return s(e)}))}function f(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return l("check"),o.hmrM().then((function(t){if(!t)return l(v()?"ready":"idle"),null;l("prepare");var i=[];return r=[],n=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,r){return o.hmrC[r](t.c,t.r,t.m,e,n,i),e}),[])).then((function(){return s((function(){return e?h(e):(l("ready"),i)}))}))}))}function p(e){return"ready"!==u?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},v();var r=n.map((function(r){return r(e)}));n=void 0;var o,i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return l("abort"),Promise.resolve().then((function(){throw i[0]}));l("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),l("apply");var a=function(e){o||(o=e)},c=[];return r.forEach((function(e){if(e.apply){var r=e.apply(a);if(r)for(var n=0;n<r.length;n++)c.push(r[n])}})),o?(l("fail"),Promise.resolve().then((function(){throw o}))):t?h(e).then((function(e){return c.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(l("idle"),Promise.resolve(c))}function v(){if(t)return n||(n=[]),Object.keys(o.hmrI).forEach((function(e){t.forEach((function(r){o.hmrI[e](r,n)}))})),t=void 0,!0}o.hmrD=i,o.i.push((function(h){var v,m,y,b=h.module,g=function(n,t){var o=a[t];if(!o)return n;var i=function(r){if(o.hot.active){if(a[r]){var i=a[r].parents;-1===i.indexOf(t)&&i.push(t)}else c=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),c=[];return n(r)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var f in n)Object.prototype.hasOwnProperty.call(n,f)&&"e"!==f&&Object.defineProperty(i,f,d(f));return i.e=function(e){return function(e){switch(u){case"ready":return l("prepare"),r.push(e),s((function(){l("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},i}(h.require,h.id);b.hot=(v=h.id,m=b,y={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==v,_requireSelf:function(){c=m.parents.slice(),e=v,o(v)},active:!0,accept:function(e,r){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)y._acceptedDependencies[e[n]]=r||function(){};else y._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._declinedDependencies[e[r]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=y._disposeHandlers.indexOf(e);r>=0&&y._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":n=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,n)})),l("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(v)}},check:f,apply:p,status:function(e){if(!e)return u;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:i[v]},e=void 0,y),b.parents=c,b.children=[],c=[],h.require=g})),o.hmrC={},o.hmrI={}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{var e,r,n,t,i={26:0},a={};function c(e){return new Promise(((r,n)=>{a[e]=r;var t=o.p+o.hu(e),i=new Error;o.l(t,(r=>{if(a[e]){a[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading hot update chunk "+e+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,n(i)}}))}))}function d(a){function c(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var i=t.pop(),a=i.id,c=i.chain,u=o.c[a];if(u&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(u.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var l=0;l<u.parents.length;l++){var s=u.parents[l],f=o.c[s];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([s]),moduleId:a,parentId:s};-1===r.indexOf(s)&&(f.hot._acceptedDependencies[a]?(n[s]||(n[s]=[]),d(n[s],[a])):(delete n[s],r.push(s),t.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function d(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}o.f&&delete o.f.jsonpHmr,e=void 0;var u={},l=[],s={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(o.o(r,p)){var h,v=r[p],m=!1,y=!1,b=!1,g="";switch((h=v?c(p):{type:"disposed",moduleId:p}).chain&&(g="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":a.onDeclined&&a.onDeclined(h),a.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+g));break;case"declined":a.onDeclined&&a.onDeclined(h),a.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+g));break;case"unaccepted":a.onUnaccepted&&a.onUnaccepted(h),a.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+g));break;case"accepted":a.onAccepted&&a.onAccepted(h),y=!0;break;case"disposed":a.onDisposed&&a.onDisposed(h),b=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in s[p]=v,d(l,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,p)&&(u[p]||(u[p]=[]),d(u[p],h.outdatedDependencies[p]));b&&(d(l,[h.moduleId]),s[p]=f)}r=void 0;for(var w,E=[],_=0;_<l.length;_++){var I=l[_];o.c[I]&&o.c[I].hot._selfAccepted&&s[I]!==f&&!o.c[I].hot._selfInvalidated&&E.push({module:I,require:o.c[I].hot._requireSelf,errorHandler:o.c[I].hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var r,t=l.slice();t.length>0;){var a=t.pop(),c=o.c[a];if(c){var d={},s=c.hot._disposeHandlers;for(_=0;_<s.length;_++)s[_].call(null,d);for(o.hmrD[a]=d,c.hot.active=!1,delete o.c[a],delete u[a],_=0;_<c.children.length;_++){var f=o.c[c.children[_]];f&&(e=f.parents.indexOf(a))>=0&&f.parents.splice(e,1)}}}for(var p in u)if(o.o(u,p)&&(c=o.c[p]))for(w=u[p],_=0;_<w.length;_++)r=w[_],(e=c.children.indexOf(r))>=0&&c.children.splice(e,1)},apply:function(e){for(var r in s)o.o(s,r)&&(o.m[r]=s[r]);for(var n=0;n<t.length;n++)t[n](o);for(var i in u)if(o.o(u,i)){var c=o.c[i];if(c){w=u[i];for(var d=[],f=[],p=0;p<w.length;p++){var h=w[p],v=c.hot._acceptedDependencies[h];if(v){if(-1!==d.indexOf(v))continue;d.push(v),f.push(h)}}for(var m=0;m<d.length;m++)try{d[m].call(null,w)}catch(r){a.onErrored&&a.onErrored({type:"accept-errored",moduleId:i,dependencyId:f[m],error:r}),a.ignoreErrored||e(r)}}}for(var y=0;y<E.length;y++){var b=E[y],g=b.module;try{b.require(g)}catch(r){if("function"==typeof b.errorHandler)try{b.errorHandler(r)}catch(n){a.onErrored&&a.onErrored({type:"self-accept-error-handler-errored",moduleId:g,error:n,originalError:r}),a.ignoreErrored||e(n),e(r)}else a.onErrored&&a.onErrored({type:"self-accept-errored",moduleId:g,error:r}),a.ignoreErrored||e(r)}}return l}}}self.webpackHotUpdatetask2=(e,n,i)=>{for(var c in n)o.o(n,c)&&(r[c]=n[c]);i&&t.push(i),a[e]&&(a[e](),a[e]=void 0)},o.hmrI.jsonp=function(e,i){r||(r={},t=[],n=[],i.push(d)),o.o(r,e)||(r[e]=o.m[e])},o.hmrC.jsonp=function(a,u,l,s,f,p){f.push(d),e={},n=u,r=l.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],a.forEach((function(r){o.o(i,r)&&void 0!==i[r]&&(s.push(c(r)),e[r]=!0)})),o.f&&(o.f.jsonpHmr=function(r,n){e&&!o.o(e,r)&&o.o(i,r)&&void 0!==i[r]&&(n.push(c(r)),e[r]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),o(535)})();