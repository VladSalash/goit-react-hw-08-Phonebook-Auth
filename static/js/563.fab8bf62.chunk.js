"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[563],{9498:function(e,n,a){a.d(n,{D_:function(){return t},oq:function(){return r},wz:function(){return i}});var i={initial:{opacity:0,x:"-100vw",scale:.5},in:{opacity:1,x:0,scale:1},out:{opacity:0,x:"100vw",scale:.5}},t={type:"tween",ease:"anticipate",duration:.75},r={visible:{opacity:1,x:0,transition:{opacity:1}},hidden:{opacity:0,x:-100}}},5531:function(e,n,a){var i=a(885),t=a(2791);n.Z=function(){var e=(0,t.useState)("password"),n=(0,i.Z)(e,2),a=n[0],r=n[1];return[a,function(){r("password"===a?"text":"password")}]}},4563:function(e,n,a){a.r(n),a.d(n,{default:function(){return R}});var i,t,r=a(4270),o=a(5861),s=a(885),l=a(4687),c=a.n(l),u=a(5048),d=a(1087),m=a(5705),p=a(1724),h=a(5985),x=(a(5462),a(8819)),f=a(9498),w=a(6355),v=a(9126),j=a(6623),y=a(5531),g=a(3541),C=a(168),Z=a(7691),b=Z.ZP.form(i||(i=(0,C.Z)(["\n  width: 320px;\n"]))),k=Z.ZP.label(t||(t=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n"]))),_=a(184),q=p.Ry().shape({name:p.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:p.Z_().email("Invalid email").required("Required"),password:p.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required")}),S=function(){var e=(0,u.I0)(),n=(0,y.Z)(),a=(0,s.Z)(n,2),i=a[0],t=a[1],r=(0,j.lE)(),l=(0,s.Z)(r,1)[0],p=(0,m.TA)({initialValues:{name:"",email:"",password:""},onSubmit:function(){var n=(0,o.Z)(c().mark((function n(a,i){var t,r,o,s,u,d;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.name,r=a.email,o=a.password,s=i.resetForm,n.prev=2,n.next=5,l({name:t,email:r,password:o});case 5:u=n.sent,d=u.data,e((0,g.y1)(d)),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),console.log(n.t0),h.Am.error("Try to enter another name or email");case 14:s();case 15:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e,a){return n.apply(this,arguments)}}(),validationSchema:q}),C=p.values,Z=C.email,S=C.password;return(0,_.jsxs)(x.E.div,{animate:"in",initial:"initial",exit:"out",variants:f.wz,transition:f.D_,children:[(0,_.jsx)(w.m3W,{}),(0,_.jsx)("h2",{children:"Welcome"}),(0,_.jsxs)(b,{onSubmit:p.handleSubmit,autoComplete:"off",children:[(0,_.jsxs)(k,{children:["Username",(0,_.jsx)("input",{type:"text",name:"name",onChange:p.handleChange,value:p.values.name,placeholder:"Name"})]}),(0,_.jsxs)(k,{children:["Email",(0,_.jsx)("input",{type:"email",name:"email",onChange:p.handleChange,value:p.values.email,placeholder:"Email"})]}),(0,_.jsxs)(k,{children:["Password",(0,_.jsx)("input",{type:i,name:"password",onChange:p.handleChange,value:p.values.password,placeholder:"Password"}),(0,_.jsx)("span",{onClick:t,children:"password"===i?(0,_.jsx)(v.rCC,{}):(0,_.jsx)(v.I$m,{})})]}),(0,_.jsx)("button",{type:"submit",onClick:function(){if(""===Z||""===S)return h.Am.info("Form fields must be completed")},children:"Register"}),(0,_.jsxs)("p",{children:["Already register on PhoneBook?\xa0",(0,_.jsx)(d.OL,{to:"/signIn",children:"Sign in"})]})]})]})};function R(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r.q,{children:(0,_.jsx)("title",{children:"Registration"})}),(0,_.jsx)(S,{})]})}}}]);
//# sourceMappingURL=563.fab8bf62.chunk.js.map