(this.webpackJsonpttunkalong=this.webpackJsonpttunkalong||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(2),r=n.n(a),i=n(27),s=n.n(i),o=n(6),u=n.n(o),l=n(18),j=n(9),d=n(4),b=n(16),O=n(7),f=n(19);n(35),n(37),n(49);f.a.initializeApp({apiKey:"AIzaSyAv9Ftd-QQRUWpV1e2fzdIbRUGLfBAgNLc",authDomain:"ttunkalong.firebaseapp.com",databaseURL:"https://ttunkalong.firebaseio.com",projectId:"ttunkalong",storageBucket:"ttunkalong.appspot.com",messagingSenderId:"268059335089",appId:"1:268059335089:web:94bd23828b1f410f74c590"});var h=f.a,p=f.a.auth(),m=f.a.firestore(),x=f.a.storage(),g=(n(40),function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),o=s[0],l=s[1],b=Object(a.useState)(!1),O=Object(d.a)(b,2),f=O[0],m=O[1],x=Object(a.useState)(""),g=Object(d.a)(x,2),v=g[0],y=g[1],w=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?r(c):"password"===n&&l(c)},N=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=7;break}return e.next=5,p.createUserWithEmailAndPassword(n,o);case 5:e.next=9;break;case 7:return e.next=9,p.signInWithEmailAndPassword(n,o);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),y(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t.target.name&&(n=new h.auth.GoogleAuthProvider),e.next=4,p.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"login_filed",children:Object(c.jsxs)("div",{className:"login_div",children:[Object(c.jsxs)("form",{onSubmit:N,className:"login_form",children:[Object(c.jsx)("input",{name:"email",type:"Email",placeholder:"Email",required:!0,value:n,onChange:w,className:"login_id"}),Object(c.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:w,className:"login_pw"}),Object(c.jsx)("input",{type:"submit",value:f?"Sing up":"Log In",className:"login_submit"}),v]}),Object(c.jsx)("span",{onClick:function(){return m((function(e){return!e}))},className:"changeAccount",children:f?"Log In":"Create Account"}),Object(c.jsxs)("div",{className:"atherBtn",children:[Object(c.jsx)("button",{name:"google",onClick:S,className:"login_google",children:"With Google"}),Object(c.jsx)("button",{children:"With None"})]})]})})}),v=function(e){var t=e.flagObj,n=e.isOwner,a=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=6;break}return e.next=4,m.doc("flag/".concat(t.id)).delete();case 4:return e.next=6,x.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:t.flagTime}),Object(c.jsx)("img",{src:t.attachmentUrl,width:"200px",height:"200px",alt:"flag"}),n&&Object(c.jsx)("div",{children:Object(c.jsx)("span",{onClick:a,children:"[del]"})})]})},y=n(51),w=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(d.a)(n,2),i=r[0],s=r[1],o=Object(a.useState)(""),b=Object(d.a)(o,2),O=b[0],f=b[1],h=Object(a.useState)(""),p=Object(d.a)(h,2),g=p[0],w=p[1],N=Object(a.useState)("\uc5c5\ub85c\ub4dc\ub300\uae30"),S=Object(d.a)(N,2),_=S[0],k=S[1],C=Object(a.useState)([]),A=Object(d.a)(C,2),F=A[0],D=A[1],I=function(){var e=Object(j.a)(u.a.mark((function e(n){var c,a,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),k("\uc5c5\ub85c\ub4dc\uc911..."),(c=document.querySelector("#upload_img_btn")).setAttribute("disabled",!0),a=x.ref().child("".concat(t.uid,"/").concat(Object(y.a)())),e.next=7,a.putString(i,"data_url");case 7:return r=e.sent,e.next=10,r.ref.getDownloadURL();case 10:return s=e.sent,console.log(s),e.next=14,m.collection("flag").add({createdAt:Date.now(),creatorId:t.uid,creatorDisplayName:t.displayName,attachmentUrl:s,flagTime:O});case 14:U(),k("\uc5c5\ub85c\ub4dc\uc644\ub8cc"),c.removeAttribute("disabled");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){s(""),document.querySelector("input[type=file]").value=""};return Object(a.useEffect)((function(){var e=new Date,n=e.getHours(),c=e.getMonth()+1+"\uc6d4"+e.getDate()+"\uc77c";n>=22||n<12?(w("\ud50c\ub798\uadf8 22\uc2dc"),f(c+"22\uc2dc")):n>=19?(w("\ud50c\ub798\uadf8 7\uc2dc"),f(c+"19\uc2dc")):n>=12?(w("\ud50c\ub798\uadf8 12\uc2dc"),f(c+"12\uc2dc")):(w("\ud50c\ub798\uadf8 \uc2dc\uac04\uc624\ub958"),f("flagNoTime")),m.collection("flag").where("creatorId","==",t.uid).orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));D(t)}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"title",children:"\ud50c\ub798\uadf8 \uc778\uc99d"}),Object(c.jsx)("h4",{children:g}),Object(c.jsxs)("form",{onSubmit:I,children:[Object(c.jsx)("input",{hidden:!0,defaultValue:O}),Object(c.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;s(t)},n.readAsDataURL(t)},required:!0}),Object(c.jsx)("input",{id:"upload_img_btn",type:"submit",value:"\uc5c5\ub85c\ub4dc",capture:"camera",disabled:!1}),i&&Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:i,width:"50px",height:"50px",alt:"flag"}),Object(c.jsx)("button",{onClick:function(){return U()},children:"Clear"})]})]}),Object(c.jsx)("h4",{children:_}),F.map((function(e){return Object(c.jsx)(v,{flagObj:e,isOwner:e.creatorId===t.uid},e.id)}))]})},N=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0];t[1];return Object(c.jsx)(c.Fragment,{children:n?Object(c.jsxs)("div",{children:["\uc218\ub85c => ",n]}):Object(c.jsx)("div",{children:"\uc218\ub85c\ud22c\ud45c\uc911..."})})},S=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:"\uacf5\uc9c0\uc0ac\ud56d"}),Object(c.jsx)("div",{children:"\ud50c\ub798\uadf8 \uc778\uc99d"}),Object(c.jsx)(N,{})]})},_=(n(41),function(e){var t=e.noticeObj,n=(e.authority,e.isOwner),r=Object(a.useState)(!1),i=Object(d.a)(r,2),s=i[0],o=i[1],l=Object(a.useState)(""),b=Object(d.a)(l,2),O=b[0],f=b[1],h=Object(a.useState)(""),p=Object(d.a)(h,2),x=p[0],g=p[1],v=Object(a.useState)(!1),y=Object(d.a)(v,2),w=y[0],N=y[1],S=function(){o((function(e){return!e})),f(t.noticeTitle),g(t.noticeContents)},_=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=4;break}return e.next=4,m.doc("notices/".concat(t.id)).delete();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(e){var t=e.target,n=t.name,c=t.value;"notice_title"===n?f(c):"notice_contents"===n&&g(c)},C=function(){var e=Object(j.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.doc("notices/".concat(t.id)).update({noticeTitle:O,noticeContents:x});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:s?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{className:"notice_form",onSubmit:C,autoComplete:"off",children:[Object(c.jsx)("input",{className:"notice_form_title",name:"notice_title",type:"text",placeholder:"\uc81c\ubaa9",maxLength:60,value:O,onChange:k,required:!0}),Object(c.jsx)("textarea",{className:"notice_form_contents",name:"notice_contents",cols:"40",rows:"8",placeholder:"\ub0b4\uc6a9",maxLength:500,value:x,onChange:k,required:!0}),Object(c.jsx)("input",{type:"submit",value:"\uc218\uc815\ud558\uae30"}),Object(c.jsx)("button",{onClick:S,children:"cancel"})]})}):Object(c.jsxs)("div",{className:"notice",children:[Object(c.jsxs)("div",{className:"notice_header",children:[Object(c.jsxs)("div",{className:"notice_title_and_button",children:[Object(c.jsx)("h4",{className:"notice_title",onClick:function(){N((function(e){return!e}))},children:t.noticeTitle}),Object(c.jsx)("div",{children:n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{onClick:S,children:"[edit]"}),Object(c.jsx)("span",{onClick:_,children:"[del]"})]})})]}),Object(c.jsx)("h4",{children:t.creatorDisplayName})]}),Object(c.jsx)("div",{className:"notice_contents",children:w&&Object(c.jsx)("pre",{children:t.noticeContents})})]})})}),k=(n(42),function(e){var t=e.userObj,n=e.authority,r=Object(a.useState)(""),i=Object(d.a)(r,2),s=i[0],o=i[1],b=Object(a.useState)(""),O=Object(d.a)(b,2),f=O[0],h=O[1],p=Object(a.useState)([]),x=Object(d.a)(p,2),g=x[0],v=x[1],y=Object(a.useState)(!1),w=Object(d.a)(y,2),N=w[0],S=w[1];Object(a.useEffect)((function(){m.collection("notices").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));v(t)}))}),[]);var k=function(){var e=Object(j.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.collection("notices").add({createdAt:Date.now(),creatorId:t.uid,creatorDisplayName:t.displayName,noticeTitle:s,noticeContents:f});case 3:o(""),h(""),S(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){var t=e.target,n=t.name,c=t.value;"notice_title"===n?o(c):"notice_contents"===n&&h(c)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"title",children:"\uacf5\uc9c0\uc0ac\ud56d"}),("admin"===n||"master"===n)&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{onClick:function(){S((function(e){return!e}))},children:"\uae00\uc4f0\uae30"}),N?Object(c.jsxs)("form",{onSubmit:k,className:"notice_form",autoComplete:"off",children:[Object(c.jsx)("input",{className:"notice_form_title",name:"notice_title",type:"text",placeholder:"\uc81c\ubaa9",maxLength:60,value:s,onChange:C,required:!0}),Object(c.jsx)("textarea",{className:"notice_form_contents",name:"notice_contents",cols:"40",rows:"8",placeholder:"\ub0b4\uc6a9",maxLength:500,value:f,onChange:C,required:!0}),Object(c.jsx)("input",{type:"submit",value:"\uc800\uc7a5"})]}):Object(c.jsx)(c.Fragment,{})]}),g.map((function(e){return Object(c.jsx)(_,{noticeObj:e,authority:n,isOwner:e.creatorId===t.uid||"master"===n},e.id)}))]})}),C=function(e){var t=e.refreshUser,n=e.userObj,r=Object(O.f)(),i=Object(a.useState)(n.displayName),s=Object(d.a)(i,2),o=s[0],l=s[1],b=function(){var e=Object(j.a)(u.a.mark((function e(c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n.displayName===o){e.next=5;break}return e.next=4,n.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{onSubmit:b,children:[Object(c.jsx)("input",{type:"text",placeholder:"\ub2c9\ub124\uc784",value:o,onChange:function(e){var t=e.target.value;l(t)}}),Object(c.jsx)("input",{type:"submit",value:"\uc218\uc815"})]}),Object(c.jsx)("button",{onClick:function(){p.signOut(),r.push("/")},children:"Log Out"})]})},A=function(e){var t=e.userObj;return Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsxs)(b.b,{to:"/profile",children:[t.displayName,"\uc758 \ud504\ub85c\ud544"]})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/notice",children:"Notice"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/flag",children:"Flag"})})]})})},F=function(e){var t=e.refreshUser,n=e.userObj,a=e.authority;return Object(c.jsx)(b.a,{children:Object(c.jsxs)("div",{className:"contents",children:[n&&Object(c.jsx)(A,{userObj:n}),Object(c.jsx)(O.c,{children:n?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O.a,{exact:!0,path:"/",children:Object(c.jsx)(S,{})}),Object(c.jsx)(O.a,{exact:!0,path:"/profile",children:Object(c.jsx)(C,{userObj:n,refreshUser:t})}),Object(c.jsx)(O.a,{exact:!0,path:"/notice",children:Object(c.jsx)(k,{userObj:n,authority:a})}),Object(c.jsx)(O.a,{exact:!0,path:"/flag",children:Object(c.jsx)(w,{userObj:n})})]}):Object(c.jsx)(O.a,{exact:!0,path:"/",children:Object(c.jsx)(g,{})})})]})})};var D=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(null),s=Object(d.a)(i,2),o=s[0],b=s[1],O=Object(a.useState)("user"),f=Object(d.a)(O,2),h=f[0],x=f[1],g=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("role").get();case 2:return e.next=4,e.sent.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));case 4:n=e.sent,c=n[0],a=c.master,r=c.submaster,c.outsider,c.user.includes(t)?x("user"):r.includes(t)?x("submaster"):a.includes(t)&&x("master");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){p.onAuthStateChanged((function(e){e?(b({displayName:e.displayName,uid:e.uid,authority:h,updateProfile:function(t){return e.updateProfile(t)}}),g(e.uid)):b(null),r(!0)}))}),[]),Object(c.jsx)(c.Fragment,{children:n?Object(c.jsx)(F,{refreshUser:function(){var e=p.currentUser;b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},userObj:o,authority:h}):"Loding..."})};n(47);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.2743f91f.chunk.js.map