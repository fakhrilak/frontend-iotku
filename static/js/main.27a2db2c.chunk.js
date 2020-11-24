(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/logo.c1cc3d53.png"},110:function(e,t){},113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),u=(a(59),a(60),a(7)),l=a(8),i=a(51),s=a(52),m=a(1),p={loading:!0,data:[],data_userId:[],error:null},d=a(4),f=Object(d.a)({token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null,error:null},"token",null),h=Object(l.combineReducers)({Iot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_DATA_ID_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{loading:!1,data:n,error:null});case"GET_DATA_ID_FAIL":return Object(m.a)(Object(m.a)({},e),{},{loading:!1,data:[],error:n});case"GET_DATA_USER_ID_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{loading:!1,data_userId:n,error:null});case"POST_DATA_SUCCESS":case"POST_DATA_FAIL":case"EDIT_DATA_SUCCESS":case"EDIT_DATA_FAIL":default:return e}},Auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"USER_LOADED":return Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!0,loading:!1,user:n});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",n.token),Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!0,loading:!1,error:null,token:n.token});case"REGISTER_FAIL":return Object(m.a)(Object(m.a)({},e),{},{error:n});case"AUTH_ERROR":case"LOGIN_FAIL":return Object(m.a)(Object(m.a)({},e),{},{error:n});case"LOGOUT":return localStorage.removeItem("token"),Object(m.a)(Object(m.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null});default:return e}}}),E=[s.a],b=Object(l.createStore)(h,{},Object(i.composeWithDevTools)(l.applyMiddleware.apply(void 0,E))),v=a(11),g=a.n(v),O=a(2),S=a.n(O),y=a(5),j=a(26),k=a.n(j),A=k.a.create({baseURL:"https://fakhrilak-iotku.herokuapp.com/iot/v1"}),w=(k.a.create({baseURL:"ws://localhost:5000"}),function(e){e?A.defaults.headers.common.Authorization="Bearer ".concat(e):delete A.defaults.headers.common.Authorization}),C=function(){return function(){var e=Object(y.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&w(localStorage.token),e.prev=1,e.next=4,A.get("/auth");case 4:a=e.sent,t({type:"USER_LOADED",payload:a.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"AUTH_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},N=a(6),T=Object(u.b)((function(e){return{auth:e.auth}}),{handleLogin:function(e,t){return function(){var a=Object(y.a)(S.a.mark((function a(n){var r,c,o;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,A.post("/login",c,r);case 5:o=a.sent,n({type:"LOGIN_SUCCESS",payload:o.data.data}),n(C()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),n({type:"LOGIN_FAIL",payload:a.t0.massage});case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t,a=e.handleLogin,c=Object(n.useState)({email:"",password:""}),o=Object(N.a)(c,2),u=o[0],l=o[1],i=u.email,s=u.password,p=function(e){l(Object(m.a)(Object(m.a)({},u),{},Object(d.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),a(i,s)}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Email",value:i,name:"email",onChange:function(e){return p(e)},className:"custom-input"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",(t={type:"password",placeholder:"Password",value:s,name:"password",onChange:function(e){return p(e)}},Object(d.a)(t,"placeholder","Password"),Object(d.a)(t,"className","custom-input"),t))),r.a.createElement("div",{className:"form-submit"},r.a.createElement("button",{className:"btn-submit"},"LOGIN"))))})),_=Object(u.b)((function(e){return{auth:e.auth}}),{handleRegister:function(e,t,a,n){return function(){var r=Object(y.a)(S.a.mark((function r(c){var o,u,l;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o={headers:{"Content-Type":"application/json"}},u=JSON.stringify({email:e,password:t,fullname:a,phone:n}),r.prev=2,r.next=5,A.post("/register",u,o);case 5:l=r.sent,c({type:"REGISTER_SUCCESS",payload:l.data.data}),c(C()),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),c({type:"REGISTER_FAIL",payload:r.t0});case 13:case"end":return r.stop()}}),r,null,[[2,10]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.handleRegister,a=Object(n.useState)({email:"",password:"",fullname:"",phone:""}),c=Object(N.a)(a,2),o=c[0],u=c[1],l=function(e){u(Object(m.a)(Object(m.a)({},o),{},Object(d.a)({},e.target.name,e.target.value)))},i=o.email,s=o.password,p=o.fullname,f=o.phone;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(i,s,p,f)}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Full Name",className:"custom-input",value:p,name:"fullname",onChange:function(e){return l(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email",className:"custom-input",value:i,name:"email",onChange:function(e){return l(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",className:"custom-input",value:s,name:"password",onChange:function(e){return l(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Phone",className:"custom-input",value:f,name:"phone",onChange:function(e){return l(e)}})),r.a.createElement("div",{className:"form-submit"},r.a.createElement("button",{className:"btn-submit"},"REGISTER"))))})),x=(a(83),function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"container-landingpage"},r.a.createElement("img",{src:g.a,style:{height:100,width:100,paddingTop:50}}),!a&&r.a.createElement(T,null),a&&r.a.createElement(_,null),!a&&r.a.createElement("div",null,r.a.createElement("p",{onClick:function(){return c(!a)}},"Dont Have Account ? Click Me")),a&&r.a.createElement("div",null,r.a.createElement("p",{onClick:function(){return c(!a)}},"Have Account ? Click Me")))}),I=(a(84),a(53)),D=a.n(I),L=(a(27),a(113),Object(u.b)((function(e){return{auth:e.Auth}}),{postData:function(e,t){return function(){var a=Object(y.a)(S.a.mark((function a(n){var r,c,o;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},c=JSON.stringify({text:e,data:"0",type:t}),a.prev=2,a.next=5,A.post("/data",c,r);case 5:o=a.sent,n({type:"POST_DATA_SUCCESS",payload:o.data.data}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),n({type:"POST_DATA_FAIL",payload:"error"});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()},handleLogout:function(){return function(){var e=Object(y.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CLEAR_PROFILE"}),t({type:"LOGOUT"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.handleLogout,a=e.postData,c=e.auth.token,o=e.setData,u=e.Data,l=Object(n.useState)({text:"",type:""}),i=Object(N.a)(l,2),s=i[0],p=i[1],f=function(e){p(Object(m.a)(Object(m.a)({},s),{},Object(d.a)({},e.target.name,e.target.value)))},h=s.text,E=s.type;return r.a.createElement("div",{className:"Containet-PostData"},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),a(h,E),p({text:"",type:""})}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Text",className:"custom-input",value:h,name:"text",onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"type",placeholder:"Type",className:"custom-input",value:E,name:"type",onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-submit"},r.a.createElement("button",{className:"btn-submit"},"SUBMIT"))),r.a.createElement("div",{style:{paddingTop:200,display:c?"flex":"default",paddingLeft:190}},c&&r.a.createElement("div",{style:{paddingRight:10}},r.a.createElement("button",{onClick:function(){navigator.clipboard.writeText(c)},className:"btn-submit"},"Copy Token")),r.a.createElement("button",{className:"btn-submit",onClick:function(){return t(),void o(!u)}},"Logout")))}))),R=Object(u.b)((function(e){return{auth:e.Auth,Iot:e.Iot}}),{})((function(e){var t=e.auth,a=t.isAuthenticated,c=t.user,o=D()("ws://fakhrilak-iotku.herokuapp.com/"),u=Object(n.useState)(!1),l=Object(N.a)(u,2),i=l[0],s=l[1],m=Object(n.useState)(""),p=Object(N.a)(m,2),d=p[0],f=p[1];Object(n.useEffect)((function(){c&&(o.emit("getAlldata",c.id),console.log(c.id))}),[i,c]),Object(n.useEffect)((function(){o.on("responsegetall",(function(e){f(e),console.log("seted")}))}),[i,c]);return r.a.createElement("div",{className:"container-Home"},a&&r.a.createElement("div",null,r.a.createElement("img",{src:g.a,className:"img-home",onClick:function(){return s(!i)}}),!i&&r.a.createElement("div",{className:"Body-Home"},0==d?r.a.createElement("div",null,"loading..."):d.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("button",{onClick:function(){return t=e.id,void("1"===(a=e.data)?o.emit("news",{data:0,token:"xnxx",id:t,user:c.id}):"0"===a&&o.emit("news",{data:1,token:"xnxx",id:t,user:c.id}));var t,a},style:{backgroundColor:"0"==e.data?"white":"grey"}},e.text))})))),!a&&r.a.createElement("div",null,r.a.createElement(x,null)),i&&r.a.createElement(L,{setData:s,Data:i}))}));localStorage.token&&w(localStorage.token);var U=function(){return Object(n.useEffect)((function(){b.dispatch(C())}),[]),r.a.createElement(u.a,{store:b},r.a.createElement("div",{className:"App"},r.a.createElement(R,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports=a(114)},59:function(e,t,a){},60:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.27a2db2c.chunk.js.map