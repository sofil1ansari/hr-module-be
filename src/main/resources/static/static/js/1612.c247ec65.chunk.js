"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[1612],{89994:(e,n,a)=>{a.d(n,{Z:()=>s});var r=a(70816),t=a.n(r),l=a(10499),i=a(21933);const s={generic:e=>i.nK().label(e),string(e,n){n=n||{};let a=i.Z_().transform(((e,n)=>""===n?null:e)).nullable().trim().label(e);return n.required&&(a=a.required()),(n.min||0===n.min)&&(a=a.min(n.min)),n.max&&(a=a.max(n.max)),n.matches&&(a=a.matches(n.matches)),a},boolean:(e,n)=>i.Xg().default(!1).label(e),relationToOne(e,n){n=n||{};let a=i.nK().nullable().label(e).transform(((e,n)=>n?n.id:null));return n.required&&(a=a.required()),a},stringArray(e,n){n=n||{};let a=i.IX().compact().ensure().of(i.Z_().transform(((e,n)=>""===n?null:e)).trim()).label(e);return(n.required||n.min)&&(a=a.required()),n.min||0===n.min?a=a.min(n.min):n.required&&(a=a.min(1)),n.max&&(a=a.max(n.max)),a},relationToMany(e,n){n=n||{};let a=i.IX().nullable().label(e).transform(((e,n)=>n&&n.length?n.map((e=>e.id)):[]));return(n.required||n.min)&&(a=a.required()),n.min||0===n.min?a=a.min(n.min):n.required&&(a=a.min(1)),n.max&&(a=a.max(n.max)),a},integer(e,n){n=n||{};let a=i.Rx().transform(((e,n)=>""===n?null:e)).integer().nullable().label(e);return n.required&&(a=a.required()),(n.min||0===n.min)&&(a=a.min(n.min)),n.max&&(a=a.max(n.max)),a},images(e,n){n=n||{};let a=i.IX().nullable().label(e);return(n.required||n.min)&&(a=a.required()),n.min||0===n.min?a=a.min(n.min):n.required&&(a=a.min(1)),n.max&&(a=a.max(n.max)),a},files(e,n){n=n||{};let a=i.IX().compact().ensure().nullable().label(e);return(n.required||n.min)&&(a=a.required()),n.min||0===n.min?a=a.min(n.min):n.required&&(a=a.min(1)),n.max&&(a=a.max(n.max)),a},enumerator(e,n){n=n||{};let a=i.Z_().transform(((e,n)=>""===n?null:e)).label(e).nullable().oneOf([null,...n.options||[]]);return n.required&&(a=a.required((0,l.ag)("validation.string.selected"))),a},email(e,n){n=n||{};let a=i.Z_().transform(((e,n)=>""===n?null:e)).nullable().trim().label(e).email();return n.required&&(a=a.required()),(n.min||0===n.min)&&(a=a.min(n.min)),n.max&&(a=a.max(n.max)),n.matches&&(a=a.matches(n.matches)),a},decimal(e,n){n=n||{};let a=i.Rx().transform(((e,n)=>""===n?null:e)).nullable().label(e);return n.required&&(a=a.required()),(n.min||0===n.min)&&(a=a.min(n.min)),n.max&&(a=a.max(n.max)),a},datetime(e,n){n=n||{};let a=i.nK().nullable().label(e).transform(((e,n)=>e?t()(n,"YYYY-MM-DD HH:mm").toISOString():null));return n.required&&(a=a.required()),a},date(e,n){n=n||{};let a=i.nK().nullable().label(e).test("is-date",(0,l.ag)("validation.mixed.default"),(e=>!e||t()(e,"YYYY-MM-DD").isValid())).transform((e=>e?t()(e).format("YYYY-MM-DD"):null));return n.required&&(a=a.required()),a}}},98040:(e,n,a)=>{a.d(n,{Z:()=>i});var r=a(35323);const t=e=>e.tenant.form,l=(0,r.P1)([t],(e=>e.record)),i={selectInitLoading:(0,r.P1)([t],(e=>Boolean(e.initLoading))),selectSaveLoading:(0,r.P1)([t],(e=>Boolean(e.saveLoading))),selectRecord:l,selectRaw:t}},27829:(e,n,a)=>{a.d(n,{Z:()=>l});var r,t=a(30168);const l=a(20346).ZP.div(r||(r=(0,t.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n"])))},53852:(e,n,a)=>{a.d(n,{Z:()=>d});var r,t=a(30168),l=a(2135),i=a(20346),s=a(46417);const o=i.ZP.nav(r||(r=(0,t.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));const d=function(e){const n=e=>e.length>1;return(0,s.jsx)(o,{children:(0,s.jsx)("ol",{className:"breadcrumb",children:e.items.map(((a,r)=>(0,s.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===r?"active":""),children:n(a)?(0,s.jsx)(l.rU,{to:a[1],children:a[0]}):a[0]},a[0])))})})}},95748:(e,n,a)=>{a.d(n,{Z:()=>t});var r=a(46417);const t=e=>e.loading?(0,r.jsx)("span",{className:"spinner-border spinner-border-sm"}):e.iconClass?(0,r.jsx)("i",{className:e.iconClass}):null},61567:(e,n,a)=>{a.d(n,{Z:()=>t});var r=a(46417);const t=function(){return(0,r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,r.jsx)("div",{className:"spinner-border text-primary"})})}},49384:(e,n,a)=>{a.d(n,{Z:()=>r});class r{static errorMessage(e,n,a,r){var t;let l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(l)return l;if(!r&&!a[e])return null;const i=n[e];return(null===i||void 0===i||null===(t=i[0])||void 0===t?void 0:t.message)||(null===i||void 0===i?void 0:i.message)||i||null}}},47575:(e,n,a)=>{a.d(n,{Z:()=>o});var r=a(47313),t=a(75627),l=a(49384),i=a(46417);function s(e){const{label:n,name:a,hint:s,type:o,placeholder:d,autoFocus:m,autoComplete:c,required:u,externalErrorMessage:x,disabled:b,endAdornment:g}=e,{setValue:p,watch:h,register:f,formState:{touchedFields:v,isSubmitted:Z,errors:j}}=(0,t.Gc)(),q=l.Z.errorMessage(a,j,v,Z,x);return(0,r.useEffect)((()=>{f(a)}),[f,a]),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsxs)("div",{className:g?"input-group":"",children:[Boolean(n)&&(0,i.jsx)("label",{className:"col-form-label ".concat(u?"required":null),htmlFor:a,children:n}),(0,i.jsx)("input",{id:a,name:a,type:o,value:h(a),onChange:n=>{p(a,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:n=>{e.onBlur&&e.onBlur(n)},placeholder:d||void 0,autoFocus:m||void 0,autoComplete:c||void 0,disabled:b,className:"form-control ".concat(q?"is-invalid":"")}),g&&(0,i.jsx)("div",{className:"input-group-append",children:(0,i.jsx)("span",{className:"input-group-text",children:g})})]}),(0,i.jsx)("div",{className:"invalid-feedback",children:q}),Boolean(s)&&(0,i.jsx)("small",{className:"form-text text-muted",children:s})]})}s.defaultProps={type:"text",required:!1};const o=s},68160:(e,n,a)=>{a.d(n,{Z:()=>l});var r,t=a(30168);const l=a(20346).ZP.div(r||(r=(0,t.Z)(["\n  padding-top: 0;\n  padding-bottom: 0;\n\n  label.required::before {\n    display: inline-block;\n    margin-right: 4px;\n    content: '*';\n    line-height: 1;\n    font-size: 13px;\n    color: #f5222d;\n  }\n\n  .react-datepicker-wrapper {\n    width: 100%;\n  }\n\n  .custom-control {\n    z-index: 0;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  .form-buttons {\n    padding-top: 16px;\n\n    .btn {\n      margin-right: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"])))},75352:(e,n,a)=>{a.d(n,{Z:()=>l});var r,t=a(30168);const l=a(20346).ZP.h1(r||(r=(0,t.Z)(["\n  margin-bottom: 24px;\n"])))},11612:(e,n,a)=>{a.r(n),a.d(n,{default:()=>S});var r=a(47313),t=a(85554),l=a(58467),i=a(10499),s=a(48704),o=a(51853),d=a(98040),m=a(27829),c=a(53852),u=a(61567),x=a(75352),b=a(62563),g=a(75627),p=a(86430),h=a(89994),f=a(1354),v=a(95748),Z=a(47575),j=a(68160),q=a(21933),N=a(46417);const y=q.Ry().shape({name:h.Z.string((0,i.ag)("tenant.fields.tenantName"),{required:!0,max:50}),url:h.Z.string((0,i.ag)("tenant.fields.tenantUrl"),{required:!0,max:50}).matches(/^[a-z0-9][-a-zA-Z0-9]*$/,(0,i.ag)("tenant.validation.url"))}),C=q.Ry().shape({name:h.Z.string((0,i.ag)("tenant.fields.tenantName"),{required:!0,max:50})}),k=f.w.isEnabled?y:C;const w=function(e){const[n]=(0,r.useState)((()=>e.record||{name:""})),a=(0,g.cI)({resolver:(0,b.X)(k),mode:"all",defaultValues:n}),t=n=>{var a;const{...r}=n;e.onSubmit(null===(a=e.record)||void 0===a?void 0:a.id,r)};return(0,N.jsx)(j.Z,{children:(0,N.jsx)(g.RV,{...a,children:(0,N.jsxs)("form",{onSubmit:a.handleSubmit(t),children:[(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,N.jsx)(Z.Z,{name:"name",label:(0,i.ag)("tenant.fields.name"),required:!0,autoFocus:!0})}),f.w.isEnabled&&(0,N.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,N.jsx)(Z.Z,{name:"url",label:(0,i.ag)("tenant.fields.tenantUrl"),endAdornment:".".concat(p.Z.frontendUrl.host)})})]}),(0,N.jsxs)("div",{className:"form-buttons",children:[(0,N.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:a.handleSubmit(t),children:[(0,N.jsx)(v.Z,{loading:e.saveLoading,iconClass:"far fa-save"})," ",(0,i.ag)("common.save")]}),(0,N.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:()=>{Object.keys(n).forEach((e=>{a.setValue(e,n[e])}))},children:[(0,N.jsx)("i",{className:"fas fa-undo"})," ",(0,i.ag)("common.reset")]}),e.onCancel?(0,N.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:()=>e.onCancel(),children:[(0,N.jsx)("i",{className:"fas fa-times"})," ",(0,i.ag)("common.cancel")]}):null]})]})})})};const S=function(){const e=(0,t.I0)(),[n,a]=(0,r.useState)(!1),{id:b}=(0,l.UO)(),g=(0,t.v9)(d.Z.selectInitLoading),p=(0,t.v9)(d.Z.selectSaveLoading),h=(0,t.v9)(d.Z.selectRecord),f=Boolean(b);(0,r.useEffect)((()=>{e(o.Z.doInit(b)),a(!0)}),[e,b]);const v=f?(0,i.ag)("tenant.edit.title"):(0,i.ag)("tenant.new.title");return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(c.Z,{items:[[(0,i.ag)("tenant.menu"),"/tenant"],[v]]}),(0,N.jsxs)(m.Z,{children:[(0,N.jsx)(x.Z,{children:v}),g&&(0,N.jsx)(u.Z,{}),n&&!g&&(0,N.jsx)(w,{saveLoading:p,record:h,isEditing:f,onSubmit:(n,a)=>{e(f?o.Z.doUpdate(n,a):o.Z.doCreate(a))},onCancel:()=>(0,s.s1)().push("/tenant")})]})]})}}}]);