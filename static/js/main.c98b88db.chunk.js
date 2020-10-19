(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},34:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),u=(a(33),a(34),a(7)),l=a(8),i=a(25),s=a(26),p=a(1),m={loading:!0,data:[],data_userId:[],error:null},d=a(4),f=Object(d.a)({token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null,error:null},"token",null),E=Object(l.combineReducers)({Iot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_DATA_ID_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,data:n,error:null});case"GET_DATA_ID_FAIL":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,data:[],error:n});case"GET_DATA_USER_ID_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,data_userId:n,error:null});case"POST_DATA_SUCCESS":case"POST_DATA_FAIL":case"EDIT_DATA_SUCCESS":case"EDIT_DATA_FAIL":default:return e}},Auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"USER_LOADED":return Object(p.a)(Object(p.a)({},e),{},{isAuthenticated:!0,loading:!1,user:n});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",n.token),Object(p.a)(Object(p.a)({},e),{},{isAuthenticated:!0,loading:!1,error:null,token:n.token});case"REGISTER_FAIL":return Object(p.a)(Object(p.a)({},e),{},{error:n});case"AUTH_ERROR":case"LOGIN_FAIL":return Object(p.a)(Object(p.a)({},e),{},{error:n});case"LOGOUT":return localStorage.removeItem("token"),Object(p.a)(Object(p.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null});default:return e}}}),h=[s.a],v=Object(l.createStore)(E,{},Object(i.composeWithDevTools)(l.applyMiddleware.apply(void 0,h))),b=a(9),g=a.n(b),y=a(2),O=a.n(y),S=a(5),j=a(27),A=a.n(j).a.create({baseURL:"https://fakhrilak-iotku.herokuapp.com/iot/v1"}),_=function(e){e?A.defaults.headers.common.Authorization="Bearer ".concat(e):delete A.defaults.headers.common.Authorization},T=function(){return function(){var e=Object(S.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&_(localStorage.token),e.prev=1,e.next=4,A.get("/auth");case 4:a=e.sent,t({type:"USER_LOADED",payload:a.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"AUTH_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},I=a(6),k=Object(u.b)((function(e){return{auth:e.auth}}),{handleLogin:function(e,t){return function(){var a=Object(S.a)(O.a.mark((function a(n){var r,c,o;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,A.post("/login",c,r);case 5:o=a.sent,n({type:"LOGIN_SUCCESS",payload:o.data.data}),n(T()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),n({type:"LOGIN_FAIL",payload:a.t0.massage});case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t,a=e.handleLogin,c=Object(n.useState)({email:"",password:""}),o=Object(I.a)(c,2),u=o[0],l=o[1],i=u.email,s=u.password,m=function(e){l(Object(p.a)(Object(p.a)({},u),{},Object(d.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),a(i,s)}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Email",value:i,name:"email",onChange:function(e){return m(e)},className:"custom-input"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",(t={type:"password",placeholder:"Password",value:s,name:"password",onChange:function(e){return m(e)}},Object(d.a)(t,"placeholder","Password"),Object(d.a)(t,"className","custom-input"),t))),r.a.createElement("div",{className:"form-submit"},r.a.createElement("button",{className:"btn-submit"},"LOGIN"))))})),C=Object(u.b)((function(e){return{auth:e.auth}}),{handleRegister:function(e,t,a,n){return function(){var r=Object(S.a)(O.a.mark((function r(c){var o,u,l;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o={headers:{"Content-Type":"application/json"}},u=JSON.stringify({email:e,password:t,fullname:a,phone:n}),r.prev=2,r.next=5,A.post("/register",u,o);case 5:l=r.sent,c({type:"REGISTER_SUCCESS",payload:l.data.data}),c(T()),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),c({type:"REGISTER_FAIL",payload:r.t0});case 13:case"end":return r.stop()}}),r,null,[[2,10]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.handleRegister,a=Object(n.useState)({email:"",password:"",fullname:"",phone:""}),c=Object(I.a)(a,2),o=c[0],u=c[1],l=function(e){u(Object(p.a)(Object(p.a)({},o),{},Object(d.a)({},e.target.name,e.target.value)))},i=o.email,s=o.password,m=o.fullname,f=o.phone;console.log(i);return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(i,s,m,f),console.log("test")}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Full Name",className:"custom-input",value:m,name:"fullname",onChange:function(e){return l(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email",className:"custom-input",value:i,name:"email",onChange:function(e){return l(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",className:"custom-input",value:s,name:"password",onChange:function(e){return l(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Phone",className:"custom-input",value:f,name:"phone",onChange:function(e){return l(e)}})),r.a.createElement("div",{className:"form-submit"},r.a.createElement("button",{className:"btn-submit"},"REGISTER"))))})),D=(a(59),function(){var e=Object(n.useState)(!1),t=Object(I.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"container-landingpage"},r.a.createElement("img",{src:g.a,style:{height:100,width:100,paddingTop:50}}),!a&&r.a.createElement(k,null),a&&r.a.createElement(C,null),!a&&r.a.createElement("div",null,r.a.createElement("p",{onClick:function(){return c(!a)}},"Dont Have Account ? Click Me")),a&&r.a.createElement("div",null,r.a.createElement("p",{onClick:function(){return c(!a)}},"Have Account ? Click Me")))}),w=(a(14),a(60),a(61),Object(u.b)((function(e){return{auth:e.Auth}}),{postData:function(e,t){return function(){var a=Object(S.a)(O.a.mark((function a(n){var r,c,o;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},c=JSON.stringify({text:e,data:"0",type:t}),a.prev=2,a.next=5,A.post("/data",c,r);case 5:o=a.sent,n({type:"POST_DATA_SUCCESS",payload:o.data.data}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),n({type:"POST_DATA_FAIL",payload:"error"});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()},handleLogout:function(){return function(){var e=Object(S.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CLEAR_PROFILE"}),t({type:"LOGOUT"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.handleLogout,a=e.postData,c=e.auth.token,o=e.setData,u=e.Data,l=Object(n.useState)({text:"",type:""}),i=Object(I.a)(l,2),s=i[0],m=i[1],f=function(e){m(Object(p.a)(Object(p.a)({},s),{},Object(d.a)({},e.target.name,e.target.value)))},E=s.text,h=s.type;return r.a.createElement("div",{className:"Containet-PostData"},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),a(E,h),m({text:"",type:""})}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Text",className:"custom-input",value:E,name:"text",onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"type",placeholder:"Type",className:"custom-input",value:h,name:"type",onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-submit"},r.a.createElement("button",{className:"btn-submit"},"SUBMIT"))),r.a.createElement("div",{style:{paddingTop:200,display:c?"flex":"default",paddingLeft:190}},c&&r.a.createElement("div",{style:{paddingRight:10}},r.a.createElement("button",{onClick:function(){navigator.clipboard.writeText(c)},className:"btn-submit"},"Copy Token")),r.a.createElement("button",{className:"btn-submit",onClick:function(){return t(),void o(!u)}},"Logout")))}))),N=Object(u.b)((function(e){return{auth:e.Auth,Iot:e.Iot}}),{getDataId:function(e){return function(){var t=Object(S.a)(O.a.mark((function t(a){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.get("/data/".concat(e));case 3:n=t.sent,a({type:"GET_DATA_ID_SUCCESS",payload:n.data.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"GET_DATA_ID_FAIL",payload:t.t0.massage});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},editData:function(e,t){return function(){var a=Object(S.a)(O.a.mark((function a(n){var r,c,o;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},c=JSON.stringify({data:e}),a.prev=2,a.next=5,A.patch("/data/".concat(t),c,r);case 5:o=a.sent,n({type:"EDIT_DATA_SUCCESS",payload:o.data.data}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),n({type:"EDIT_DATA_FAIL",payload:"error"});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()},getDataUserId:function(e){return function(){var t=Object(S.a)(O.a.mark((function t(a){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.get("/user/".concat(e));case 3:n=t.sent,a({type:"GET_DATA_USER_ID_SUCCESS",payload:n.data.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"GET_DATA_USER_IS_FAIL",payload:t.t0.massage});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.getDataUserId,a=e.editData,c=e.auth,o=c.isAuthenticated,u=c.user,l=e.Iot.data_userId,i=Object(n.useState)(!1),s=Object(I.a)(i,2),p=s[0],m=s[1],d=Object(n.useState)(!1),f=Object(I.a)(d,2),E=f[0],h=f[1];Object(n.useEffect)((function(){u&&t(u.id)}),[u,p,E]);var v=l;return r.a.createElement("div",{className:"container-Home"},o&&r.a.createElement("div",null,r.a.createElement("img",{src:g.a,className:"img-home",onClick:function(){return m(!p)}})),!o&&r.a.createElement("div",null,r.a.createElement(D,null)),!p&&r.a.createElement("div",{className:"Body-Home"},null==u?r.a.createElement("div",null," Loading..."):v.map((function(e){return r.a.createElement("div",{className:"objeck-render"},"Button"==e.type?r.a.createElement("button",{onClick:function(){return function(e,n){"0"===n?a("1",e):"1"===n&&a("0",e),t(u.id),h(!E)}(e.id,e.data)},style:{background:"0"===e.data?"white":"grey"}},e.text,r.a.createElement("p",null,e.id)):"Input"==e.type?r.a.createElement("div",null,r.a.createElement("input",{placeholder:e.text}),r.a.createElement("div",{style:{paddingTop:10}},r.a.createElement("button",{style:{minWidth:50}},"Kirim"))):null)}))),p&&r.a.createElement(w,{setData:m,Data:p}))}));localStorage.token&&_(localStorage.token);var x=function(){return Object(n.useEffect)((function(){v.dispatch(T())}),[]),r.a.createElement(u.a,{store:v},r.a.createElement("div",{className:"App"},r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a.p+"static/media/logo.c1cc3d53.png"}},[[28,1,2]]]);
//# sourceMappingURL=main.c98b88db.chunk.js.map