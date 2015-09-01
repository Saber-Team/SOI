var jquery={};!function(e,t){"use strict";function n(){}function r(e,t,n){var r=[];if(N&&e.map===N)r=e.map(t,n);else if(e.length===+e.length)for(var i=0;i<e.length;++i)r.push(t.call(n||null,e[i],i,e));return r}function i(e,t,n){if(U&&e.forEach===U)e.forEach(t,n);else if(e.length===+e.length)for(var r=0,i=e.length;i>r&&t.call(n,e[r],r,e)!==F;r++);}function o(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return n;return-1}function s(e){return R[_.call(e)]}function u(e){return void 0===e||null===e}function a(e,t){var n=V.createElement("script");n.charset="utf-8",n.async=!0,n.kernel_name=t,n.onreadystatechange=n.onload=n.onerror=function(){n.onreadystatschange=n.onload=n.onerror=null,X=null,(!n.readyState||/complete/.test(n.readyState))&&z.removeChild(n)},n.src=e,$=n,P?z.insertBefore(n,P):z.appendChild(n),$=null}function c(){return V.getElementsByTagName("script")}function l(){return V.currentScript||$||function(){var e;return I?X&&"interactive"===X.readyState?X:(e=c(),i(e,function(e){return"interactive"===e.readyState?(X=e,F):void 0}),X):void 0}()||function(){var e,t=null;try{throw new Error}catch(n){e=n.stack}if(!e)return t;var n=-1!==e.indexOf(" at ")?" at ":"@",r=e.indexOf(".async");if(r>-1)e=e.substring(r+7),e=e.split(n)[1],e=e.replace(/^([^\(]*\()/,"");else for(;-1!==e.indexOf(n);)e=e.substring(e.indexOf(n)+n.length);e=e.substring(0,e.indexOf(".js")+3),e=e.replace(/^([^\(]*\()/,"");var o=c();return i(o,function(n){var r=d(n);return r===e?(t=n,F):void 0}),t}()}function d(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}function f(){var e=l();return e?d(e):null}function p(e){return e=e.replace(/(\/)+/g,"/"),e=h(e)}function h(e){e=e.split("/");for(var t=0;t<e.length;++t)"."===e[t]?(e.splice(t,1),--t):".."===e[t]&&t>0&&".."!==e[t-1]&&(e.splice(t-1,2),t-=2);return e.join("/")}function m(){return x(D.href)}function g(e){return y(e)&&"."!==e.charAt(0)}function v(e){return/:\/\//.test(e)||/^\//.test(e)}function y(e){return!v(e)&&(/^(\.){1,2}\//.test(e)||"/"!==e.charAt(0))}function b(e,t){if("require"===e||"module"===e||"exports"===e)return e;g(e)&&(e=S(e),e=j(e),t=null),e=p(e);var n="/"===e.charAt(0)?"":"/",r=(t?x(t):m())+n+e;return J.test(r)||(r+=".js"),r=h(r)}function x(e){return L.test(e)?e.slice(0,-1):(e=e.split("/"),e.pop(),e.join("/"))}function S(e){var t=[];if(Q.paths){for(var n=e,r=e.split("/");!(n in Q.paths)&&r.length;)t.unshift(r.pop()),n=r.join("/");e=Q.paths[n]?Q.paths[n]:n}return e+t.join("/")}function j(e){var t=Q.packages,n="";return t&&t.length>0&&i(t,function(t){return 0===e.indexOf(t.name)?(e.length===t.name.length&&(n="/"+(t.main?t.main:"main")),e=e.replace(t.name,t.location||t.name)+n,F):void 0}),e}function T(e){this.uid=e.uid,this.id=e.id||null,this.url=e.url,this.deps=e.deps||[],this.depMods=new Array(this.deps.length),this.status=e.status||T.STATUS.init,this.factory=e.factory||n,this.exports={}}function w(e){throw H.replace("%s",e)}function A(e,t,n){var i,o=Q.cache,u=Q.uidprefix+Q.uid++,a=f();if("string"!==s(e)&&(n=t,t=e,e=null),"array"!==s(t)&&(n=t,t=null),e){if(o.id2path[e]&&Q.debug)return Q.trigger(Q.events.ERROR,[H.replace("%s",e),a]),w(e);o.id2path[e]=a,o.mods[e]=G}o.path2uid[a]?o.path2uid[a].push(u):o.path2uid[a]=[u],i=o.mods[u]=G,t||"function"!==s(n)||(t=[],n.length&&(n.toString().replace(W,"").replace(K,function(e,n,r){t.push(r)}),t=(1===n.length?["require"]:["require","exports","module"]).concat(t))),i=o.mods[u]=new T({uid:u,id:e,url:a,deps:t,factory:n,status:T.STATUS.init}),Q.trigger(Q.events.create,[i]);var c=l().kernel_name;c&&g(c)&&!i.id&&(i.id=c),i.deps&&i.deps.length>0&&(i.deps=r(i.deps,function(e,t){("exports"===e||"module"===e)&&(i.cjsWrapper=!0);var n=O(e,i);return n&&(i.depMods[t]=n),e})),k(i)}function k(e){var t=Q.cache,n=e.deps.length,r=Q.paths&&Q.paths[e.id]?!0:!1,s=r?D.href:f();Y.add(e),t.mods[e.uid]||(t.mods[e.uid]=G),e.setStatus(T.STATUS.fetching),i(e.deps,function(r,i){if(e.depMods[i])return void--n;var u=b(r,s),c=t.path2uid[u];c&&t.mods[c[0]]&&(t.mods[c[0]].status===T.STATUS.complete||B(u,e))?(--n,e.depMods[i]=t.mods[c[0]].exports):(ee[u]?o(ee[u],e)<0&&ee[u].push(e):ee[u]=[e],te[u]||(te[u]=!0,a(u,r)))}),0===n&&q(e)}function E(e,t){if("object"===s(e)&&!t)return Q.config(e),null;if("array"===s(e)&&0===e.length)return"function"===s(t)?t():t;"string"===s(e)&&(e=[e]);var n,i=f();if(t){n=Q.uidprefix+Q.uid++;var o=new T({uid:n,id:null,url:i,deps:e,factory:t,status:T.STATUS.init});return o.depMods=r(e,function(e){var t=b(e,i);return O(e)||O(t)}),k(o),null}var u=b(e[0],i),a=O(e[0]);return 1===e.length&&a?a:(n=Q.cache.path2uid[u][0],Q.cache.mods[n].exports||null)}function q(e){Y.remove(e),e.cjsWrapper?e.factory.apply(null,e.depMods):e.exports="function"===s(e.factory)?e.factory.apply(null,e.depMods):e.factory,u(e.exports)&&(e.exports={}),e.setStatus(T.STATUS.complete),Q.cache.mods[e.uid]=e,e.id&&(Q.cache.mods[e.id]=e);var t=ee[e.url];t&&(delete ee[e.url],i(t,function(t){t.ready&&t.status===T.STATUS.fetching&&t.ready(e)}))}function O(e,t){if(Q.cache.mods[e]){var n=f(),r=b(e,n);if(Q.cache.mods[e].status===T.STATUS.complete||B(r,t))return Q.cache.mods[e].exports}return"require"===e?E:"module"===e?t:"exports"===e?t&&t.exports:null}function B(e,t){var n,r=!1,i=Q.cache.path2uid[e];return i&&(n=Q.cache.mods[i[0]])&&o(ee[t.url],n)>=0&&(r=!0),r}var M=Object.prototype,C=Array.prototype,U=C.forEach,N=C.map,Z=M.hasOwnProperty,_=M.toString,F={},R={"[object Object]":"object","[object Array]":"array","[object Function]":"function","[object RegExp]":"regexp","[object String]":"string","[object Number]":"number"},V=document,z=V.head||V.getElementsByTagName("head")[0],P=V.getElementsByTagName("base")[0];P&&(z=P.parentNode);var $,X,I="readyState"in V.createElement("script"),L=/\/$/g,J=/\.(js|css|tpl|txt)$/g,D=e.location;T.STATUS={init:0,loaded:1,fetching:2,complete:3},T.prototype.setStatus=function(e){if(0>e||e>4)throw"Status "+e+" is now allowed.";switch(this.status=e,e){case 0:break;case 2:Q.trigger(Q.events.startFetch,[this]);break;case 3:Q.trigger(Q.events.complete,[this])}},T.prototype.ready=function(e){var t;if(e.url){Q.paths&&Q.paths[this.id]&&(t=!0);for(var n=0;n<this.deps.length;++n){var r=b(this.deps[n],t?D.href:this.url);if(r===e.url){this.depMods[n]=e.exports;break}}}this.checkAllDepsOK()&&q(this)},T.prototype.checkAllDepsOK=function(){for(var e=!0,t=0;t<this.depMods.length;++t)if(u(this.depMods[t])){e=!1;break}return e};var K=/\brequire\s*\(\s*(["'])([^'"\s]+)\1\s*\)/g,W=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,G={id:null,uid:null,url:null,status:null,exports:{}},H="more then one module defined with the same id: %s";A.amd={creator:"AceMood",email:"zmike86@gmail.com"},E.toUrl=function(e){return b(e)},E.async=function(e,t){E([e],t)};var Q={};Q.uid=0,Q.uidprefix="AceMood@kernel_";var Y={mods:{},add:function(e){this.mods[e.uid]&&Q.trigger(Q.events.error,["current mod with uid: "+e.uid+" and file path: "+e.url+" is fetching now"]),this.mods[e.uid]=e},clear:function(){this.mods={}},remove:function(e){this.mods[e.uid]&&(this.mods[e.uid]=null,delete this.mods[e.uid])}},ee={},te={};Q.config=function(e){if("object"!==s(e))throw"config object must an object";var t,n;for(t in e)if(Z.call(e,t))if(Q[t])for(n in e[t])Q[t][n]=e[t][n];else Q[t]=e[t]},Q.cache={mods:{},id2path:{},path2uid:{},events:{}},Q.config({baseUrl:"",debug:!0,paths:{}}),Q.reset=function(){this.cache.mods={},this.cache.id2path={},this.cache.path2uid={}},Q.replace=function(e){return e},Q.url=function(e){return e},e.require=e._req=E,e.define=e._def=A,e.kerneljs=Q,Q.events={create:"create",startFetch:"start:fetch",endFetch:"end:fetch",complete:"complete",error:"error"},Q.on=function(e,t,n){this.cache.events[e]||(this.cache.events[e]=[]),this.cache.events[e].push({handler:t,context:n})},Q.trigger=function(e,t){var n=this.cache.events[e];n&&i(n,function(e){e.handler.apply(e.context,t)})}}(this);