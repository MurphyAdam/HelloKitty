(this.webpackJsonpmeow=this.webpackJsonpmeow||[]).push([[0],{69:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(9),o=n.n(i),s=(n(69),n(24)),r=n(123),l=n(126),j=n(128),b=n(129),d=n(132),u=n(134),h=n(55),O=n.n(h),m=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_KITTY_KEY,p=n(7),g=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,152))})),f=Object(r.a)((function(e){return{root:{padding:e.spacing(2)},titleTypo:{padding:e.spacing(1)}}}));function x(){var e=f(),t=Object(a.useState)([]),n=Object(s.a)(t,2),i=n[0],o=n[1],r=Object(a.useState)(!1),h=Object(s.a)(r,2),x=h[0],v=h[1],S=Object(a.useState)(!1),T=Object(s.a)(S,2),y=T[0],w=T[1],E=Object(a.useState)(!1),_=Object(s.a)(E,2),P=_[0],C=_[1],N=Object(a.useState)(25),A=Object(s.a)(N,2),K=A[0],L=A[1],F=function(){v(!0),w(!1),function(e){return O.a.get("https://api.thecatapi.com/v1/breeds",{headers:{"X-Api-Key":m},params:{limit:e}})}(K).then((function(e){o(e.data),C(!0)})).catch((function(e){w("Something went wrong. Please try again later."),console.log(e)})).finally((function(){v(!1)}))};return Object(a.useEffect)((function(){P||y||x||F()}),[y,x,K]),Object(a.useEffect)((function(){F()}),[K]),Object(p.jsx)("div",{className:e.root,children:Object(p.jsxs)(l.a,{container:!0,component:j.a,spacing:2,children:[Object(p.jsx)(l.a,{item:!0,xs:4,children:Object(p.jsx)(b.a,{variant:"h5",component:"h1",className:e.titleTypo,children:"Hello, Kitty!"})}),Object(p.jsxs)(l.a,{item:!0,xs:4,align:"center",children:[Object(p.jsx)(b.a,{variant:"h5",component:"span",className:e.titleTypo,children:"Limit"}),Object(p.jsx)(d.a,{labelId:"Limit",id:"limit",value:K,onChange:function(e){var t=e.target.value;return L(t)},fullWidth:!0,children:[10,25,50,100].map((function(e){return Object(p.jsx)(u.a,{value:e,disabled:x,children:e},e)}))})]}),Object(p.jsx)(l.a,{item:!0,xs:4,children:Object(p.jsx)(b.a,{variant:"h5",align:"right",component:"h2",className:e.titleTypo,children:"A meow API"})}),x&&Object(p.jsx)(l.a,{item:!0,xs:12,children:Object(p.jsxs)(b.a,{variant:"h5",component:"h2",align:"center",className:e.titleTypo,children:["Loading a limit of ",K," cats..."]})}),!x&&i.length?Object(p.jsx)(c.a.Suspense,{fallback:"Please wait while we load a place for kitties...",children:i.map((function(e){return Object(p.jsx)(g,{cat:e},e.id)}))}):y?Object(p.jsxs)(l.a,{item:!0,xs:12,children:[Object(p.jsx)(b.a,{variant:"h6",component:"h2",align:"center",className:e.titleTypo,children:"Something went wrong"}),Object(p.jsx)(b.a,{variant:"body",align:"center",children:y})]}):null]})})}var v=n(130),S=n(131),T=Object(r.a)((function(e){return{root:{padding:e.spacing(2)}}}));function y(){var e=T();return Object(p.jsxs)(v.a,{children:[Object(p.jsx)(S.a,{}),Object(p.jsx)(l.a,{component:"main",className:e.root,children:Object(p.jsx)(x,{})})]})}var w=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,156)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),w()}},[[94,1,2]]]);
//# sourceMappingURL=main.731fe006.chunk.js.map