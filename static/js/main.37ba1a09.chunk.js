(this.webpackJsonpttunkalong=this.webpackJsonpttunkalong||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(2),r=n.n(a),i=n(27),s=n.n(i),u=n(5),o=n.n(u),l=n(16),j=n(8),d=n(4),b=n(15),f=n(7),O=n(19);n(35),n(37),n(52);O.a.initializeApp({apiKey:"AIzaSyAv9Ftd-QQRUWpV1e2fzdIbRUGLfBAgNLc",authDomain:"ttunkalong.firebaseapp.com",databaseURL:"https://ttunkalong.firebaseio.com",projectId:"ttunkalong",storageBucket:"ttunkalong.appspot.com",messagingSenderId:"268059335089",appId:"1:268059335089:web:94bd23828b1f410f74c590"});var h=O.a,p=O.a.auth(),m=O.a.firestore(),x=O.a.storage(),v=(n(40),function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),u=s[0],l=s[1],b=Object(a.useState)(!1),f=Object(d.a)(b,2),O=f[0],x=f[1],v=Object(a.useState)(""),g=Object(d.a)(v,2),y=g[0],N=g[1],w=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?r(c):"password"===n&&l(c)},_=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("userList").doc("".concat(t.uid)).set({createdAt:Date.now(),email:t.email,displayName:t.displayName});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=7;break}return e.next=5,p.createUserWithEmailAndPassword(n,u).then((function(e){return _(e.user)}));case 5:e.next=9;break;case 7:return e.next=9,p.signInWithEmailAndPassword(n,u);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),"auth/wrong-password"===e.t0.code?N("\ube44\ubc00\ubc88\ud638\uac00 \ud2c0\ub838\uc2b5\ub2c8\ub2e4."):"auth/user-not-found"===e.t0.code?N("\uc544\uc774\ub514\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."):"auth/email-already-in-use"===e.t0.code?N("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uc544\uc774\ub514\uc785\ub2c8\ub2e4."):"auth/weak-password"===e.t0.code?N("\ube44\ubc00\ubc88\ud638\ub294 6\uae00\uc790 \uc774\uc0c1\uc73c\ub85c \ud574\uc8fc\uc138\uc694."):N(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t.target.name&&(n=new h.auth.GoogleAuthProvider),e.next=4,p.signInWithPopup(n).then((function(e){e.additionalUserInfo.isNewUser&&_(e.user)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"login_filed",children:Object(c.jsxs)("div",{className:"login_div",children:[Object(c.jsxs)("form",{onSubmit:S,className:"login_form",children:[Object(c.jsx)("input",{name:"email",type:"Email",placeholder:"Email",required:!0,value:n,onChange:w,className:"login_id"}),Object(c.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:w,className:"login_pw"}),Object(c.jsx)("input",{type:"submit",value:O?"Sing up":"Log In",className:"login_submit"})]}),y&&Object(c.jsx)("div",{className:"login_error",children:y}),Object(c.jsx)("span",{onClick:function(){return x((function(e){return!e}))},className:"changeAccount",children:O?"Log In":"Create Account"}),Object(c.jsxs)("div",{className:"atherBtn",children:[Object(c.jsx)("button",{name:"google",onClick:k,className:"login_google",children:"With Google"}),Object(c.jsx)("button",{children:"With None"})]})]})})}),g=(n(41),function(e){var t=e.flagObj,n=e.isOwner,a=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=6;break}return e.next=4,m.doc("flag/".concat(t.id)).delete();case 4:return e.next=6,x.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"flag_box",children:[Object(c.jsx)("div",{className:"fb_time",children:t.flagTime}),Object(c.jsx)("div",{className:"fb_name",children:t.creatorDisplayName}),Object(c.jsx)("img",{src:t.attachmentUrl,width:"200px",height:"200px",alt:"flag"}),n&&Object(c.jsx)("div",{className:"fb_btn",children:Object(c.jsx)("span",{onClick:a,children:"[del]"})})]})}),y=n(54),N=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(d.a)(n,2),i=r[0],s=r[1],u=Object(a.useState)(""),b=Object(d.a)(u,2),f=b[0],O=b[1],h=Object(a.useState)(""),p=Object(d.a)(h,2),v=p[0],N=p[1],w=Object(a.useState)("\uc5c5\ub85c\ub4dc\ub300\uae30"),_=Object(d.a)(w,2),S=_[0],k=_[1],C=Object(a.useState)([]),L=Object(d.a)(C,2),A=L[0],D=L[1],U=function(){var e=Object(j.a)(o.a.mark((function e(n){var c,a,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),k("\uc5c5\ub85c\ub4dc\uc911..."),(c=document.querySelector("#upload_img_btn")).setAttribute("disabled",!0),a=x.ref().child("".concat(t.uid,"/").concat(Object(y.a)())),e.next=7,a.putString(i,"data_url");case 7:return r=e.sent,e.next=10,r.ref.getDownloadURL();case 10:return s=e.sent,console.log(s),e.next=14,m.collection("flag").add({createdAt:Date.now(),creatorId:t.uid,creatorDisplayName:t.displayName,attachmentUrl:s,flagTime:f});case 14:I(),k("\uc5c5\ub85c\ub4dc\uc644\ub8cc"),c.removeAttribute("disabled");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){s(""),document.querySelector("input[type=file]").value=""};return Object(a.useEffect)((function(){var e=new Date,n=e.getHours(),c=e.getMonth()+1+"\uc6d4"+e.getDate()+"\uc77c";n>=22||n<12?(N("\ud50c\ub798\uadf8 22\uc2dc"),O(c+"22\uc2dc")):n>=19?(N("\ud50c\ub798\uadf8 7\uc2dc"),O(c+"19\uc2dc")):n>=12?(N("\ud50c\ub798\uadf8 12\uc2dc"),O(c+"12\uc2dc")):(N("\ud50c\ub798\uadf8 \uc2dc\uac04\uc624\ub958"),O("flagNoTime")),m.collection("flag").where("creatorId","==",t.uid).orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));D(t)}))}),[t.uid]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"title",children:"\ud50c\ub798\uadf8 \uc778\uc99d"}),Object(c.jsx)("h4",{children:v}),Object(c.jsxs)("form",{onSubmit:U,children:[Object(c.jsx)("input",{hidden:!0,defaultValue:f}),Object(c.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;s(t)},n.readAsDataURL(t)},required:!0}),Object(c.jsx)("input",{id:"upload_img_btn",type:"submit",value:"\uc5c5\ub85c\ub4dc",capture:"camera",disabled:!1}),i&&Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:i,width:"50px",height:"50px",alt:"flag"}),Object(c.jsx)("button",{onClick:function(){return I()},children:"Clear"})]})]}),Object(c.jsx)("h4",{children:S}),A.map((function(e){return Object(c.jsx)(g,{flagObj:e,isOwner:e.creatorId===t.uid},e.id)}))]})},w=(n(42),function(e){var t=e.userObj,n=e.authority,r=Object(f.f)(),i=Object(a.useState)("all"),s=Object(d.a)(i,2),u=s[0],b=s[1],O=Object(a.useState)([]),h=Object(d.a)(O,2),p=h[0],x=h[1],v=Object(a.useState)([]),y=Object(d.a)(v,2),N=y[0],w=y[1],_=Object(a.useState)(""),S=Object(d.a)(_,2),k=S[0],C=S[1],L=Object(a.useState)(""),A=Object(d.a)(L,2),D=A[0],U=A[1],I=Object(a.useCallback)((function(){"master"!==n&&"submaster"!==n&&r.push("/")}),[n]),F=function(e){var t=e.target.innerHTML;"\uc804\uccb4\ubcf4\uae30"===t?b("all"):"\uc720\uc800\ubcc4"===t&&b("user")},E=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x([]),C(""),w([]),t.preventDefault(),T({target:{innerHTML:D}});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=e.target.innerHTML;C(t),m.collection("flag").where("creatorDisplayName","==",t).orderBy("createdAt","desc").get().then((function(e){var t=[];e.forEach((function(e){t.push(Object(l.a)({id:e.id},e.data()))})),x(t)}))};return Object(a.useEffect)((function(){I()}),[I]),Object(a.useEffect)((function(){"all"===u?(w([]),C(""),m.collection("flag").orderBy("createdAt","desc").get().then((function(e){var t=[];e.forEach((function(e){t.push(Object(l.a)({id:e.id},e.data()))})),x(t)}))):"user"===u&&(x([]),C(""),m.collection("userList").orderBy("displayName","asc").get().then((function(e){var t=[];e.forEach((function(e){t.push(Object(l.a)({id:e.id},e.data()))})),w(t)})))}),[u]),Object(c.jsxs)("div",{className:"flagSearch",children:[Object(c.jsxs)("div",{className:"fs_header",children:[Object(c.jsx)("div",{onClick:F,className:"fs_menu",children:"\uc804\uccb4\ubcf4\uae30"}),Object(c.jsx)("div",{onClick:F,className:"fs_menu",children:"\uc720\uc800\ubcc4"}),Object(c.jsx)("div",{onClick:F,className:"fs_menu",children:"\uc2dc\uac04\ubcc4"}),Object(c.jsxs)("form",{onSubmit:E,children:[Object(c.jsx)("input",{type:"text",required:!0,className:"search_box",onChange:function(e){var t=e.target.value;U(t)},value:D}),Object(c.jsx)("input",{type:"submit",value:"\uac80\uc0c9",className:"search_btn"})]})]}),Object(c.jsxs)("div",{children:[N.map((function(e){return Object(c.jsx)("span",{onClick:T,className:"userList",children:e.displayName},e.id)})),k&&Object(c.jsx)("div",{className:"selectedUser",children:k}),p.map((function(e){return Object(c.jsx)(g,{flagObj:e,isOwner:e.creatorId===t.uid},e.id)}))]})]})}),_=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0];t[1];return Object(c.jsx)(c.Fragment,{children:n?Object(c.jsxs)("div",{children:["\uc218\ub85c => ",n]}):Object(c.jsx)("div",{children:"\uc218\ub85c\ud22c\ud45c\uc911..."})})},S=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:"\uacf5\uc9c0\uc0ac\ud56d"}),Object(c.jsx)("div",{children:"\ud50c\ub798\uadf8 \uc778\uc99d"}),Object(c.jsx)(_,{})]})},k=(n(47),function(e){var t=e.noticeObj,n=(e.authority,e.isOwner),r=Object(a.useState)(!1),i=Object(d.a)(r,2),s=i[0],u=i[1],l=Object(a.useState)(""),b=Object(d.a)(l,2),f=b[0],O=b[1],h=Object(a.useState)(""),p=Object(d.a)(h,2),x=p[0],v=p[1],g=Object(a.useState)(!1),y=Object(d.a)(g,2),N=y[0],w=y[1],_=function(){u((function(e){return!e})),O(t.noticeTitle),v(t.noticeContents)},S=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=4;break}return e.next=4,m.doc("notices/".concat(t.id)).delete();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(e){var t=e.target,n=t.name,c=t.value;"notice_title"===n?O(c):"notice_contents"===n&&v(c)},C=function(){var e=Object(j.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.doc("notices/".concat(t.id)).update({noticeTitle:f,noticeContents:x});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:s?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{className:"notice_form",onSubmit:C,autoComplete:"off",children:[Object(c.jsx)("input",{className:"notice_form_title",name:"notice_title",type:"text",placeholder:"\uc81c\ubaa9",maxLength:14,value:f,onChange:k,required:!0}),Object(c.jsx)("textarea",{className:"notice_form_contents",name:"notice_contents",cols:"40",rows:"8",placeholder:"\ub0b4\uc6a9",maxLength:500,value:x,onChange:k,required:!0}),Object(c.jsx)("input",{type:"submit",value:"\uc218\uc815\ud558\uae30"}),Object(c.jsx)("button",{onClick:_,children:"cancel"})]})}):Object(c.jsxs)("div",{className:"notice",children:[Object(c.jsxs)("div",{className:"notice_header",children:[Object(c.jsxs)("div",{className:"notice_title_and_button",children:[Object(c.jsx)("h4",{className:"notice_title",onClick:function(){w((function(e){return!e}))},children:t.noticeTitle}),Object(c.jsx)("div",{children:n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{onClick:_,children:"[edit]"}),Object(c.jsx)("span",{onClick:S,children:"[del]"})]})})]}),Object(c.jsx)("h4",{children:t.creatorDisplayName})]}),Object(c.jsx)("div",{className:"notice_contents",children:N&&Object(c.jsx)("pre",{children:t.noticeContents})})]})})}),C=(n(48),function(e){var t=e.userObj,n=e.authority,r=Object(a.useState)(""),i=Object(d.a)(r,2),s=i[0],u=i[1],b=Object(a.useState)(""),f=Object(d.a)(b,2),O=f[0],h=f[1],p=Object(a.useState)([]),x=Object(d.a)(p,2),v=x[0],g=x[1],y=Object(a.useState)(!1),N=Object(d.a)(y,2),w=N[0],_=N[1];Object(a.useEffect)((function(){m.collection("notices").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));g(t)}))}),[]);var S=function(){var e=Object(j.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.collection("notices").add({createdAt:Date.now(),creatorId:t.uid,creatorDisplayName:t.displayName,noticeTitle:s,noticeContents:O});case 3:u(""),h(""),_(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){var t=e.target,n=t.name,c=t.value;"notice_title"===n?u(c):"notice_contents"===n&&h(c)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"title",children:"\uacf5\uc9c0\uc0ac\ud56d"}),("master"===n||"submaster"===n)&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{onClick:function(){_((function(e){return!e}))},children:"\uae00\uc4f0\uae30"}),w?Object(c.jsxs)("form",{onSubmit:S,className:"notice_form",autoComplete:"off",children:[Object(c.jsx)("input",{className:"notice_form_title",name:"notice_title",type:"text",placeholder:"\uc81c\ubaa9",maxLength:60,value:s,onChange:C,required:!0}),Object(c.jsx)("textarea",{className:"notice_form_contents",name:"notice_contents",cols:"40",rows:"8",placeholder:"\ub0b4\uc6a9",maxLength:500,value:O,onChange:C,required:!0}),Object(c.jsx)("input",{type:"submit",value:"\uc800\uc7a5"})]}):Object(c.jsx)(c.Fragment,{})]}),v.map((function(e){return Object(c.jsx)(k,{noticeObj:e,authority:n,isOwner:e.creatorId===t.uid||"master"===n},e.id)}))]})}),L=function(e){var t=e.refreshUser,n=e.userObj,r=Object(f.f)(),i=Object(a.useState)(n.displayName),s=Object(d.a)(i,2),u=s[0],l=s[1],b=function(){var e=Object(j.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n.displayName===u){e.next=7;break}return e.next=4,n.updateProfile({displayName:u});case 4:return e.next=6,m.doc("userList/".concat(n.uid)).update({displayName:u});case 6:t();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{onSubmit:b,children:[Object(c.jsx)("input",{type:"text",placeholder:"\ub2c9\ub124\uc784",value:u,onChange:function(e){var t=e.target.value;l(t)}}),Object(c.jsx)("input",{type:"submit",value:"\uc218\uc815"})]}),Object(c.jsx)("button",{onClick:function(){p.signOut(),r.push("/")},children:"Log Out"})]})},A=(n(49),function(e){var t=e.userObj,n=e.authority;return Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/",children:"\uba54\uc778"})}),Object(c.jsx)("li",{children:Object(c.jsxs)(b.b,{to:"/profile",children:[t.displayName,"\uc758 \ud504\ub85c\ud544"]})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/notice",children:"\uacf5\uc9c0\uc0ac\ud56d"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/flag",children:"\ud50c\ub798\uadf8"})}),("master"===n||"submaster"===n)&&Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/flagSearch",children:"\ud50c\ub798\uadf8 \uc870\ud68c"})})]})})}),D=function(e){var t=e.refreshUser,n=e.userObj,a=e.authority;return Object(c.jsx)(b.a,{children:Object(c.jsxs)("div",{className:"contents",children:[n&&Object(c.jsx)(A,{userObj:n,authority:a}),Object(c.jsx)(f.c,{children:n?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f.a,{exact:!0,path:"/",children:Object(c.jsx)(S,{})}),Object(c.jsx)(f.a,{exact:!0,path:"/profile",children:Object(c.jsx)(L,{userObj:n,refreshUser:t})}),Object(c.jsx)(f.a,{exact:!0,path:"/notice",children:Object(c.jsx)(C,{userObj:n,authority:a})}),Object(c.jsx)(f.a,{exact:!0,path:"/flag",children:Object(c.jsx)(N,{userObj:n})}),Object(c.jsx)(f.a,{exact:!0,path:"/flagSearch",children:Object(c.jsx)(w,{userObj:n,authority:a})})]}):Object(c.jsx)(f.a,{exact:!0,path:"/",children:Object(c.jsx)(v,{})})})]})})};var U=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(null),s=Object(d.a)(i,2),u=s[0],b=s[1],f=Object(a.useState)("user"),O=Object(d.a)(f,2),h=O[0],x=O[1],v=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,c,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("role").get();case 2:return e.next=4,e.sent.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));case 4:n=e.sent,c=n[0],a=c.master,r=c.submaster,c.outsider,c.user.includes(t)?x("user"):r.includes(t)?x("submaster"):a.includes(t)&&x("master");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){p.onAuthStateChanged((function(e){e?(b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}),v(e.uid)):b(null),r(!0)}))}),[]),Object(c.jsx)(c.Fragment,{children:n?Object(c.jsx)(D,{refreshUser:function(){var e=p.currentUser;b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},userObj:u,authority:h}):"Loding..."})};n(50);s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(U,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.37ba1a09.chunk.js.map