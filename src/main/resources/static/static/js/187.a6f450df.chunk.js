"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[187],{89994:(e,n,l)=>{l.d(n,{Z:()=>s});var a=l(70816),r=l.n(a),i=l(10499),t=l(21933);const s={generic:e=>t.nK().label(e),string(e,n){n=n||{};let l=t.Z_().transform(((e,n)=>""===n?null:e)).nullable().trim().label(e);return n.required&&(l=l.required()),(n.min||0===n.min)&&(l=l.min(n.min)),n.max&&(l=l.max(n.max)),n.matches&&(l=l.matches(n.matches)),l},boolean:(e,n)=>t.Xg().default(!1).label(e),relationToOne(e,n){n=n||{};let l=t.nK().nullable().label(e).transform(((e,n)=>n?n.id:null));return n.required&&(l=l.required()),l},stringArray(e,n){n=n||{};let l=t.IX().compact().ensure().of(t.Z_().transform(((e,n)=>""===n?null:e)).trim()).label(e);return(n.required||n.min)&&(l=l.required()),n.min||0===n.min?l=l.min(n.min):n.required&&(l=l.min(1)),n.max&&(l=l.max(n.max)),l},relationToMany(e,n){n=n||{};let l=t.IX().nullable().label(e).transform(((e,n)=>n&&n.length?n.map((e=>e.id)):[]));return(n.required||n.min)&&(l=l.required()),n.min||0===n.min?l=l.min(n.min):n.required&&(l=l.min(1)),n.max&&(l=l.max(n.max)),l},integer(e,n){n=n||{};let l=t.Rx().transform(((e,n)=>""===n?null:e)).integer().nullable().label(e);return n.required&&(l=l.required()),(n.min||0===n.min)&&(l=l.min(n.min)),n.max&&(l=l.max(n.max)),l},images(e,n){n=n||{};let l=t.IX().nullable().label(e);return(n.required||n.min)&&(l=l.required()),n.min||0===n.min?l=l.min(n.min):n.required&&(l=l.min(1)),n.max&&(l=l.max(n.max)),l},files(e,n){n=n||{};let l=t.IX().compact().ensure().nullable().label(e);return(n.required||n.min)&&(l=l.required()),n.min||0===n.min?l=l.min(n.min):n.required&&(l=l.min(1)),n.max&&(l=l.max(n.max)),l},enumerator(e,n){n=n||{};let l=t.Z_().transform(((e,n)=>""===n?null:e)).label(e).nullable().oneOf([null,...n.options||[]]);return n.required&&(l=l.required((0,i.ag)("validation.string.selected"))),l},email(e,n){n=n||{};let l=t.Z_().transform(((e,n)=>""===n?null:e)).nullable().trim().label(e).email();return n.required&&(l=l.required()),(n.min||0===n.min)&&(l=l.min(n.min)),n.max&&(l=l.max(n.max)),n.matches&&(l=l.matches(n.matches)),l},decimal(e,n){n=n||{};let l=t.Rx().transform(((e,n)=>""===n?null:e)).nullable().label(e);return n.required&&(l=l.required()),(n.min||0===n.min)&&(l=l.min(n.min)),n.max&&(l=l.max(n.max)),l},datetime(e,n){n=n||{};let l=t.nK().nullable().label(e).transform(((e,n)=>e?r()(n,"YYYY-MM-DD HH:mm").toISOString():null));return n.required&&(l=l.required()),l},date(e,n){n=n||{};let l=t.nK().nullable().label(e).test("is-date",(0,i.ag)("validation.mixed.default"),(e=>!e||r()(e,"YYYY-MM-DD").isValid())).transform((e=>e?r()(e).format("YYYY-MM-DD"):null));return n.required&&(l=l.required()),l}}},90187:(e,n,l)=>{l.r(n),l.d(n,{default:()=>Z});var a=l(62563),r=l(47313),i=l(75627),t=l(85554),s=l(2135),o=l(10499),m=l(926),d=l(86495),u=l(89994),c=l(32377),h=l(37078),x=l(11581),b=l(94827),g=l(95748),p=l(47575),f=l(21933),v=l(46417);const q=f.Ry().shape({email:u.Z.string((0,o.ag)("user.fields.email"),{required:!0,max:255})});const Z=function(){const e=(0,t.I0)(),n=(0,t.v9)(d.Z.selectLoadingPasswordResetEmail),l=(0,t.v9)(d.Z.selectBackgroundImageUrl),u=(0,t.v9)(d.Z.selectLogoUrl),[f]=(0,r.useState)((()=>({email:""}))),Z=(0,i.cI)({resolver:(0,a.X)(q),mode:"onSubmit",defaultValues:f});return(0,v.jsx)(b.Z,{style:{backgroundImage:"url(".concat(l||"/images/forgotPassword.jpg",")")},children:(0,v.jsxs)(c.Z,{children:[(0,v.jsx)(h.Z,{children:u?(0,v.jsx)("img",{src:u,width:"240px",alt:(0,o.ag)("app.title")}):(0,v.jsx)("h1",{children:(0,o.ag)("app.title")})}),(0,v.jsx)(i.RV,{...Z,children:(0,v.jsxs)("form",{onSubmit:Z.handleSubmit((async n=>{let{email:l}=n;await e(m.Z.doSendPasswordResetEmail(l)),Object.keys(f).forEach((e=>{Z.setValue(e,f[e])}))})),children:[(0,v.jsx)(p.Z,{name:"email",label:(0,o.ag)("user.fields.email"),autoComplete:"email",disabled:n,autoFocus:!0}),(0,v.jsxs)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:n,children:[(0,v.jsx)(g.Z,{loading:n})," ",(0,o.ag)("auth.passwordResetEmail.message")]}),(0,v.jsx)(x.Z,{children:(0,v.jsx)(s.rU,{className:"btn btn-sm btn-link",to:"/auth/signin",children:(0,o.ag)("common.cancel")})})]})})]})})}},32377:(e,n,l)=>{l.d(n,{Z:()=>i});var a,r=l(30168);const i=l(20346).ZP.div(a||(a=(0,r.Z)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  a,\n  a:hover {\n    color: white;\n  }\n\n  .btn-link,\n  .btn-link:hover {\n    color: white;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"])))},37078:(e,n,l)=>{l.d(n,{Z:()=>i});var a,r=l(30168);const i=l(20346).ZP.div(a||(a=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"])))},11581:(e,n,l)=>{l.d(n,{Z:()=>i});var a,r=l(30168);const i=l(20346).ZP.div(a||(a=(0,r.Z)(["\n  margin-top: 24px;\n  text-align: center;\n"])))},94827:(e,n,l)=>{l.d(n,{Z:()=>i});var a,r=l(30168);const i=l(20346).ZP.div(a||(a=(0,r.Z)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"])))},95748:(e,n,l)=>{l.d(n,{Z:()=>r});var a=l(46417);const r=e=>e.loading?(0,a.jsx)("span",{className:"spinner-border spinner-border-sm"}):e.iconClass?(0,a.jsx)("i",{className:e.iconClass}):null},49384:(e,n,l)=>{l.d(n,{Z:()=>a});class a{static errorMessage(e,n,l,a){var r;let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!a&&!l[e])return null;const t=n[e];return(null===t||void 0===t||null===(r=t[0])||void 0===r?void 0:r.message)||(null===t||void 0===t?void 0:t.message)||t||null}}},47575:(e,n,l)=>{l.d(n,{Z:()=>o});var a=l(47313),r=l(75627),i=l(49384),t=l(46417);function s(e){const{label:n,name:l,hint:s,type:o,placeholder:m,autoFocus:d,autoComplete:u,required:c,externalErrorMessage:h,disabled:x,endAdornment:b}=e,{setValue:g,watch:p,register:f,formState:{touchedFields:v,isSubmitted:q,errors:Z}}=(0,r.Gc)(),j=i.Z.errorMessage(l,Z,v,q,h);return(0,a.useEffect)((()=>{f(l)}),[f,l]),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("div",{className:b?"input-group":"",children:[Boolean(n)&&(0,t.jsx)("label",{className:"col-form-label ".concat(c?"required":null),htmlFor:l,children:n}),(0,t.jsx)("input",{id:l,name:l,type:o,value:p(l),onChange:n=>{g(l,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:n=>{e.onBlur&&e.onBlur(n)},placeholder:m||void 0,autoFocus:d||void 0,autoComplete:u||void 0,disabled:x,className:"form-control ".concat(j?"is-invalid":"")}),b&&(0,t.jsx)("div",{className:"input-group-append",children:(0,t.jsx)("span",{className:"input-group-text",children:b})})]}),(0,t.jsx)("div",{className:"invalid-feedback",children:j}),Boolean(s)&&(0,t.jsx)("small",{className:"form-text text-muted",children:s})]})}s.defaultProps={type:"text",required:!1};const o=s}}]);