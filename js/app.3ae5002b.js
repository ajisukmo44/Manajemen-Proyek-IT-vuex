(function(e){function t(t){for(var r,o,l=t[0],i=t[1],u=t[2],c=0,d=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a={1:0},s=[];function l(e){return i.p+"js/"+({}[e]||e)+"."+{2:"af5c5d41",3:"49e41db7",4:"0af348f0",5:"80bbe6db",6:"6e8da7b2",7:"e8b573bf",8:"dbf1c5d3"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={2:1,3:1,4:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"732d1865",3:"732d1865",4:"d06bf944",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0"}[e]+".css",a=i.p+r,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var u=s[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===a))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],c=u.getAttribute("data-href");if(c===r||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],p.parentNode.removeChild(p),n(s)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=l(e);var d=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=c;s.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r=n("c973"),o=n.n(r),a=(n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),s=n("1f91"),l=n("42d2"),i=n("b05d"),u=n("436b");a["a"].use(i["a"],{config:{},lang:s["a"],iconSet:l["a"],plugins:{Dialog:u["a"]}});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},d=[],p={name:"App"},f=p,m=n("2877"),h=Object(m["a"])(f,c,d,!1,null,null,null),b=h.exports,v=n("2f62"),y=n("1732");const g={tasks:{ID1:{name:"SI Akademik",completed:!1,deadline:"2020/09/19",developer:"samsul"},ID2:{name:"SI Medis",completed:!1,deadline:"2020/09/19",developer:"bambang"},ID3:{name:"SI Puskesmas",completed:!1,deadline:"2020/12/19",developer:"feby"},ID4:{name:"SI E-Commerce",completed:!1,deadline:"2020/11/19",developer:"uri"}}},k={updateTask(e,t){Object.assign(e.tasks[t.id],t.updates)},deleteTask(e,t){a["a"].delete(e.tasks,t)},addTask(e,t){a["a"].set(e.tasks,t.id,t.task)}},w={updateTask({commit:e},t){e("updateTask",t)},deleteTask({commit:e},t){e("deleteTask",t)},addTask({commit:e},t){let n=Object(y["a"])(),r={id:n,task:t};e("addTask",r)}},P={tasksList:e=>{let t={};return Object.keys(e.tasks).forEach((function(n){let r=e.tasks[n];r.completed||(t[n]=r)})),t},tasksCompleted:e=>{let t={};return Object.keys(e.tasks).forEach((function(n){let r=e.tasks[n];r.completed&&(t[n]=r)})),t}};var O={namespaced:!0,state:g,mutations:k,actions:w,getters:P};a["a"].use(v["a"]);var j=function(){const e=new v["a"].Store({modules:{tasks:O},strict:!1});return e},T=n("8c4f");n("e6cf");const S=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"a9c3")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"bc13"))},{path:"/onproses",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"ad3d"))},{path:"/settings",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"311b"))},{path:"/selesai",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"1254"))},{path:"/info",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"8a05"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var E=S;a["a"].use(T["a"]);var _=function(){const e=new T["a"]({scrollBehavior:()=>({x:0,y:0}),routes:E,mode:"hash",base:""});return e},x=function(){return C.apply(this,arguments)};function C(){return C=o()((function*(){const e="function"===typeof j?yield j({Vue:a["a"]}):j,t="function"===typeof _?yield _({Vue:a["a"],store:e}):_;e.$router=t;const n={router:t,store:e,render:e=>e(b),el:"#q-app"};return{app:n,store:e,router:t}})),C.apply(this,arguments)}function I(){return A.apply(this,arguments)}function A(){return A=o()((function*(){const{app:e,store:t,router:n}=yield x();new a["a"](e)})),A.apply(this,arguments)}I()},"31cd":function(e,t,n){}});