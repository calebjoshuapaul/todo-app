(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(41)},30:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(5),r=n.n(c),i=(n(30),n(32),n(20)),d=n(6),l=n(13),s=Object(l.b)({name:"todos",initialState:{todoList:[]},reducers:{saveTodo:function(e,t){e.todoList.push(t.payload)},setCheck:function(e,t){e.todoList.map(function(e){t.payload===e.id&&(!0===e.done?e.done=!1:e.done=!0)})}}}),u=s.actions,m=u.saveTodo,p=u.setCheck,f=function(e){return e.todos.todoList},v=s.reducer,E=(n(37),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(d.b)();return o.a.createElement("div",{className:"input"},o.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}}),o.a.createElement("button",{onClick:function(){console.log("Adding ".concat(n)),r(m({item:n,done:!1,id:Date.now()}))}},"Add"))}),b=n(58),h=(n(39),function(e){var t=e.name,n=e.done,a=e.id,c=Object(d.b)();return o.a.createElement("div",{className:"todoItem"},o.a.createElement(b.a,{checked:n,color:"primary",onChange:function(){c(p(a))},inputProps:{"aria-label":"secondary checkbox"}}),o.a.createElement("p",{className:n&&"todoItem--done"},t))});var w=function(){var e=Object(d.c)(f);return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"appContainer"},o.a.createElement("h1",null,"ToDo List"),o.a.createElement("div",{className:"appTodoContainer"},e.map(function(e){return o.a.createElement(h,{name:e.item,done:e.done,id:e.id})})),o.a.createElement(E,null)))},g=Object(l.a)({reducer:{todos:v}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d.a,{store:g},o.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.d71f54cc.chunk.js.map