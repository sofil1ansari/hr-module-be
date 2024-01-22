"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[4460],{89994:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(70816),l=t.n(a),r=t(10499),i=t(21933);const o={generic:e=>i.nK().label(e),string(e,n){n=n||{};let t=i.Z_().transform(((e,n)=>""===n?null:e)).nullable().trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:(e,n)=>i.Xg().default(!1).label(e),relationToOne(e,n){n=n||{};let t=i.nK().nullable().label(e).transform(((e,n)=>n?n.id:null));return n.required&&(t=t.required()),t},stringArray(e,n){n=n||{};let t=i.IX().compact().ensure().of(i.Z_().transform(((e,n)=>""===n?null:e)).trim()).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany(e,n){n=n||{};let t=i.IX().nullable().label(e).transform(((e,n)=>n&&n.length?n.map((e=>e.id)):[]));return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer(e,n){n=n||{};let t=i.Rx().transform(((e,n)=>""===n?null:e)).integer().nullable().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images(e,n){n=n||{};let t=i.IX().nullable().label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files(e,n){n=n||{};let t=i.IX().compact().ensure().nullable().label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator(e,n){n=n||{};let t=i.Z_().transform(((e,n)=>""===n?null:e)).label(e).nullable().oneOf([null,...n.options||[]]);return n.required&&(t=t.required((0,r.ag)("validation.string.selected"))),t},email(e,n){n=n||{};let t=i.Z_().transform(((e,n)=>""===n?null:e)).nullable().trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal(e,n){n=n||{};let t=i.Rx().transform(((e,n)=>""===n?null:e)).nullable().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime(e,n){n=n||{};let t=i.nK().nullable().label(e).transform(((e,n)=>e?l()(n,"YYYY-MM-DD HH:mm").toISOString():null));return n.required&&(t=t.required()),t},date(e,n){n=n||{};let t=i.nK().nullable().label(e).test("is-date",(0,r.ag)("validation.mixed.default"),(e=>!e||l()(e,"YYYY-MM-DD").isValid())).transform((e=>e?l()(e).format("YYYY-MM-DD"):null));return n.required&&(t=t.required()),t}}},98040:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(35323);const l=e=>e.tenant.form,r=(0,a.P1)([l],(e=>e.record)),i={selectInitLoading:(0,a.P1)([l],(e=>Boolean(e.initLoading))),selectSaveLoading:(0,a.P1)([l],(e=>Boolean(e.saveLoading))),selectRecord:r,selectRaw:l}},44460:(e,n,t)=>{t.r(n),t.d(n,{default:()=>B});var a=t(47313),l=t(85554),r=t(10499),i=t(926),o=t(86495),s=t(32377),d=t(37078),u=t(11581),m=t(94827),c=t(62563),g=t(75627),h=t(86430),b=t(89994),p=t(51853),x=t(98040),f=t(1354),v=t(47575),Z=t(21933);var j=t(46417);const y=Z.Ry().shape({name:b.Z.string((0,r.ag)("tenant.fields.tenantName"),{required:!0,max:50}),url:b.Z.string((0,r.ag)("tenant.fields.tenantUrl"),{required:!0,max:50}).matches(/^[a-z0-9][-a-zA-Z0-9]*$/,(0,r.ag)("tenant.validation.url"))}),q=Z.Ry().shape({name:b.Z.string((0,r.ag)("tenant.fields.tenantName"),{required:!0,max:50})}),w=f.w.isEnabled?y:q;const C=function(e){const n=(0,l.I0)(),[t]=(0,a.useState)({name:""}),i=(0,g.cI)({resolver:(0,c.X)(w),mode:"onSubmit",defaultValues:t}),s=(0,l.v9)(x.Z.selectSaveLoading),d=(0,l.v9)(o.Z.selectInvitedTenants);return(0,j.jsx)(g.RV,{...i,children:(0,j.jsxs)("form",{onSubmit:i.handleSubmit((e=>{n(p.Z.doCreate(e))})),children:[(0,j.jsx)(v.Z,{name:"name",label:(0,r.ag)("tenant.fields.tenantName"),autoComplete:"name",onChange:e=>{i.setValue("url",e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-"))},autoFocus:!0}),f.w.isEnabled&&(0,j.jsx)(v.Z,{name:"url",placeholder:(0,r.ag)("tenant.fields.tenantUrl"),endAdornment:".".concat(h.Z.frontendUrl.host)}),(0,j.jsx)("button",{style:{marginTop:"16px"},type:"submit",className:"btn btn-primary btn-block",disabled:s,children:(0,r.ag)("tenant.create.button")}),Boolean(d.length)&&(0,j.jsx)("button",{style:{marginTop:"16px"},type:"button",className:"btn btn-light btn-block",onClick:e.onViewToggle,children:(0,r.ag)("tenant.invitation.view")})]})})};var k=t(28769),N=t(10546),S=t(5544);const I=Z.Ry().shape({id:b.Z.string((0,r.ag)("tenant.fields.tenantId"))});const V=function(e){const n=(0,l.I0)(),t=(0,l.v9)(N.Z.selectLoading),i=(0,l.v9)(o.Z.selectInvitedTenants),s=(0,l.v9)(o.Z.selectCurrentUser),[d]=(0,a.useState)({id:i[0].id}),u=(0,g.cI)({resolver:(0,c.X)(I),mode:"onSubmit",defaultValues:d});return(0,j.jsx)(g.RV,{...u,children:(0,j.jsxs)("form",{onSubmit:u.handleSubmit((e=>{let{id:t}=e;const a=s.tenants.find((e=>e.tenant.id===t));n(k.Z.doAccept(a.invitationToken))})),children:[(0,j.jsx)(S.Z,{name:"id",label:(0,r.ag)("tenant.fields.tenantId"),options:i.map((e=>({value:e.id,label:e.name})))}),(0,j.jsx)("button",{style:{marginTop:"16px"},type:"submit",className:"btn btn-primary btn-block",disabled:t,children:(0,r.ag)("tenant.invitation.accept")}),(0,j.jsx)("button",{style:{marginTop:"16px"},type:"button",className:"btn btn-light btn-block",onClick:e.onViewToggle,children:(0,r.ag)("tenant.new.title")})]})})};const B=function(){const[e,n]=(0,a.useState)("form"),t=(0,l.I0)(),c=(0,l.v9)(o.Z.selectInvitedTenants),g=(0,l.v9)(o.Z.selectBackgroundImageUrl),h=(0,l.v9)(o.Z.selectLogoUrl);(0,a.useEffect)((()=>{n(c.length?"select":"form")}),[c]);const b=()=>{n((e=>"form"===e?"select":"form"))};return(0,j.jsx)(m.Z,{style:{backgroundImage:"url(".concat(g||"/images/tenant.jpg",")")},children:(0,j.jsxs)(s.Z,{children:[(0,j.jsx)(d.Z,{children:h?(0,j.jsx)("img",{src:h,width:"240px",alt:(0,r.ag)("app.title")}):(0,j.jsx)("h1",{children:(0,r.ag)("app.title")})}),"form"===e?(0,j.jsx)(C,{onViewToggle:b}):(0,j.jsx)(V,{onViewToggle:b}),(0,j.jsx)(u.Z,{children:(0,j.jsx)("button",{className:"btn btn-sm btn-link",type:"button",onClick:()=>{t(i.Z.doSignout())},children:(0,r.ag)("auth.signout")})})]})})}},32377:(e,n,t)=>{t.d(n,{Z:()=>r});var a,l=t(30168);const r=t(20346).ZP.div(a||(a=(0,l.Z)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  a,\n  a:hover {\n    color: white;\n  }\n\n  .btn-link,\n  .btn-link:hover {\n    color: white;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"])))},37078:(e,n,t)=>{t.d(n,{Z:()=>r});var a,l=t(30168);const r=t(20346).ZP.div(a||(a=(0,l.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"])))},11581:(e,n,t)=>{t.d(n,{Z:()=>r});var a,l=t(30168);const r=t(20346).ZP.div(a||(a=(0,l.Z)(["\n  margin-top: 24px;\n  text-align: center;\n"])))},94827:(e,n,t)=>{t.d(n,{Z:()=>r});var a,l=t(30168);const r=t(20346).ZP.div(a||(a=(0,l.Z)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"])))},49384:(e,n,t)=>{t.d(n,{Z:()=>a});class a{static errorMessage(e,n,t,a){var l;let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(r)return r;if(!a&&!t[e])return null;const i=n[e];return(null===i||void 0===i||null===(l=i[0])||void 0===l?void 0:l.message)||(null===i||void 0===i?void 0:i.message)||i||null}}},47575:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(47313),l=t(75627),r=t(49384),i=t(46417);function o(e){const{label:n,name:t,hint:o,type:s,placeholder:d,autoFocus:u,autoComplete:m,required:c,externalErrorMessage:g,disabled:h,endAdornment:b}=e,{setValue:p,watch:x,register:f,formState:{touchedFields:v,isSubmitted:Z,errors:j}}=(0,l.Gc)(),y=r.Z.errorMessage(t,j,v,Z,g);return(0,a.useEffect)((()=>{f(t)}),[f,t]),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsxs)("div",{className:b?"input-group":"",children:[Boolean(n)&&(0,i.jsx)("label",{className:"col-form-label ".concat(c?"required":null),htmlFor:t,children:n}),(0,i.jsx)("input",{id:t,name:t,type:s,value:x(t),onChange:n=>{p(t,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:n=>{e.onBlur&&e.onBlur(n)},placeholder:d||void 0,autoFocus:u||void 0,autoComplete:m||void 0,disabled:h,className:"form-control ".concat(y?"is-invalid":"")}),b&&(0,i.jsx)("div",{className:"input-group-append",children:(0,i.jsx)("span",{className:"input-group-text",children:b})})]}),(0,i.jsx)("div",{className:"invalid-feedback",children:y}),Boolean(o)&&(0,i.jsx)("small",{className:"form-text text-muted",children:o})]})}o.defaultProps={type:"text",required:!1};const s=o},5544:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(47313),l=t(75627),r=t(93605),i=t(10499),o=t(49384),s=t(46417);function d(e){const{label:n,name:t,hint:d,options:u,required:m,mode:c,placeholder:g,isClearable:h,externalErrorMessage:b}=e,{register:p,formState:{touchedFields:x,errors:f,isSubmitted:v},setValue:Z,watch:j}=(0,l.Gc)(),y=o.Z.errorMessage(t,f,x,v,b),q=j(t);(0,a.useEffect)((()=>{p(t)}),[p,t]);const w=()=>q?q.map((e=>u.find((n=>n.value===e)))):[],C=()=>{const{options:n}=e;return null!=q?n.find((e=>e.value===q)):null},k=n=>{if(!n)return Z(t,[],{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange([]));const a=n.map((e=>e?e.value:e)).filter((e=>null!=e));Z(t,a,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(a)},N=n=>{if(!n)return Z(t,null,{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange(null));Z(t,n.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.value)},S=Boolean(y)?{container:e=>({...e,color:"hsl(0,0%,20%)"}),control:e=>({...e,borderColor:"red"})}:{container:e=>({...e,color:"hsl(0,0%,20%)"})};return(0,s.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,s.jsx)("label",{className:"col-form-label ".concat(m?"required":null),children:n}),(0,s.jsx)("br",{}),(0,s.jsx)(r.ZP,{className:"w-100",value:(()=>{const{mode:n}=e;return"multiple"===n?w():C()})(),onChange:n=>{const{mode:t}=e;return"multiple"===t?k(n):N(n)},onBlur:n=>{e.onBlur&&e.onBlur(n)},id:t,name:t,options:u,isMulti:"multiple"===c,placeholder:g||"",isClearable:h,styles:S,loadingMessage:()=>(0,i.ag)("autocomplete.loading"),noOptionsMessage:()=>(0,i.ag)("autocomplete.noOptions")}),(0,s.jsx)("div",{className:"invalid-feedback",children:y}),Boolean(d)&&(0,s.jsx)("small",{className:"form-text text-muted",children:d})]})}d.defaultProps={required:!1,isClearable:!0};const u=d},93605:(e,n,t)=>{t.d(n,{ZP:()=>o});var a=t(36228),l=t(87462),r=t(47313),i=t(4194),o=(t(5296),t(1168),t(5236),(0,r.forwardRef)((function(e,n){var t=(0,a.u)(e);return r.createElement(i.S,(0,l.Z)({ref:n},t))})))},87462:(e,n,t)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,{Z:()=>a})}}]);