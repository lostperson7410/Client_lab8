(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},19:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(13),i=n.n(c),l=(n(19),n(9)),r=(n(20),n(35),function(e){var t=e.task,n=e.editTask,a=e.deleteTask,c=t.id,i=t.name;return o.a.createElement("li",null,o.a.createElement("div",{className:"id"},c),o.a.createElement("div",{className:"name"},i),o.a.createElement("div",{className:"container"},o.a.createElement("button",{className:"red",onClick:function(){return a(c)}},"delete"),o.a.createElement("button",{className:"blue",onClick:function(){return n(c)}},"Edit")))});var s=function(){var e=Object(a.useState)([{id:1,name:"do homewaork"},{id:2,name:"Write node js"}]),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),u=s[0],m=s[1];Object(a.useEffect)((function(){d()}),[]);var d=function(){p.collection("task").onSnapshot((function(e){console.log(e.docs);var t=e.docs.map((function(e){var t=e.data(),n=t.id,a=t.name;return console.log(n,a),{id:n,name:a}}));c(t)}))},f=function(e){p.collection("task").doc(e+"").set({id:e,name:u})},b=function(e){p.collection("task").doc(e+"").delete()};return o.a.createElement("div",null,o.a.createElement("h1",null,"Todo",o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"name",onChange:function(e){return m(e.target.value)}}),o.a.createElement("button",{onClick:function(){var e=0===n.length?1:n[n.length-1].id+1;p.collection("task").doc(e+"").set({id:e,name:u})}},"Add"),o.a.createElement("ul",{style:{display:"flex",listStyle:"none"}},n&&n.length?n.map((function(e,t){return o.a.createElement(r,{key:t,task:e,deleteTask:b,editTask:f})})):o.a.createElement("li",null,"No Task"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u={apiKey:"AIzaSyAYpRA4jbSnttL_-iC4wy-e5qStoMgOB-Q",authDomain:"lab8client.firebaseapp.com",databaseURL:"https://lab8client.firebaseio.com",projectId:"lab8client",storageBucket:"lab8client.appspot.com",messagingSenderId:"680382374914",appId:"1:680382374914:web:705a640e44357011fd731b",measurementId:"G-RHG5E221JE"},m=n(7),d=n.n(m);n(36);n.d(t,"firestore",(function(){return p})),0===d.a.apps.length&&d.a.initializeApp(u);var p=d.a.firestore();i.a.render(o.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.d11a6033.chunk.js.map