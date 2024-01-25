"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3271],{89994:(e,n,a)=>{a.d(n,{Z:()=>s});var r=a(70816),i=a.n(r),t=a(10499),l=a(21933);const s={generic:e=>l.nK().label(e),string(e,n){n=n||{};let a=l.Z_().transform(((e,n)=>""===n?null:e)).nullable().trim().label(e);return n.required&&(a=a.required()),(n.min||0===n.min)&&(a=a.min(n.min)),n.max&&(a=a.max(n.max)),n.matches&&(a=a.matches(n.matches)),a},boolean:(e,n)=>l.Xg().default(!1).label(e),relationToOne(e,n){n=n||{};let a=l.nK().nullable().label(e).transform(((e,n)=>n?n.id:null));return n.required&&(a=a.required()),a},stringArray(e,n){n=n||{};let a=l.IX().compact().ensure().of(l.Z_().transform(((e,n)=>""===n?null:e)).trim()).label(e);return(n.required||n.min)&&(a=a.required()),n.min||0===n.min?a=a.min(n.min):n.required&&(a=a.min(1)),n.max&&(a=a.max(n.max)),a},relationToMany(e,n){n=n||{};let a=l.IX().nullable().label(e).transform(((e,n)=>n&&n.length?n.map((e=>e.id)):[]));return(n.required||n.min)&&(a=a.required()),n.min||0===n.min?a=a.min(n.min):n.required&&(a=a.min(1)),n.max&&(a=a.max(n.max)),a},integer(e,n){n=n||{};let a=l.Rx().transform(((e,n)=>""===n?null:e)).integer().nullable().label(e);return n.required&&(a=a.required()),(n.min||0===n.min)&&(a=a.min(n.min)),n.max&&(a=a.max(n.max)),a},images(e,n){n=n||{};let a=l.IX().nullable().label(e);return(n.required||n.min)&&(a=a.required()),n.min||0===n.min?a=a.min(n.min):n.required&&(a=a.min(1)),n.max&&(a=a.max(n.max)),a},files(e,n){n=n||{};let a=l.IX().compact().ensure().nullable().label(e);return(n.required||n.min)&&(a=a.required()),n.min||0===n.min?a=a.min(n.min):n.required&&(a=a.min(1)),n.max&&(a=a.max(n.max)),a},enumerator(e,n){n=n||{};let a=l.Z_().transform(((e,n)=>""===n?null:e)).label(e).nullable().oneOf([null,...n.options||[]]);return n.required&&(a=a.required((0,t.ag)("validation.string.selected"))),a},email(e,n){n=n||{};let a=l.Z_().transform(((e,n)=>""===n?null:e)).nullable().trim().label(e).email();return n.required&&(a=a.required()),(n.min||0===n.min)&&(a=a.min(n.min)),n.max&&(a=a.max(n.max)),n.matches&&(a=a.matches(n.matches)),a},decimal(e,n){n=n||{};let a=l.Rx().transform(((e,n)=>""===n?null:e)).nullable().label(e);return n.required&&(a=a.required()),(n.min||0===n.min)&&(a=a.min(n.min)),n.max&&(a=a.max(n.max)),a},datetime(e,n){n=n||{};let a=l.nK().nullable().label(e).transform(((e,n)=>e?i()(n,"YYYY-MM-DD HH:mm").toISOString():null));return n.required&&(a=a.required()),a},date(e,n){n=n||{};let a=l.nK().nullable().label(e).test("is-date",(0,t.ag)("validation.mixed.default"),(e=>!e||i()(e,"YYYY-MM-DD").isValid())).transform((e=>e?i()(e).format("YYYY-MM-DD"):null));return n.required&&(a=a.required()),a}}},27829:(e,n,a)=>{a.d(n,{Z:()=>t});var r,i=a(30168);const t=a(20346).ZP.div(r||(r=(0,i.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n"])))},43271:(e,n,a)=>{a.r(n),a.d(n,{default:()=>S});var r=a(47313),i=a(85554),t=a(58467),l=a(10499),s=a(70189),o=a(35323);const d=e=>e.project.form,m=(0,o.P1)([d],(e=>e.record)),c={selectInitLoading:(0,o.P1)([d],(e=>Boolean(e.initLoading))),selectSaveLoading:(0,o.P1)([d],(e=>Boolean(e.saveLoading))),selectRecord:m,selectRaw:d};var u=a(48704),p=a(27829),x=a(62563),b=a(75627),g=a(89994),h=a(95748),v=a(47575),f=a(68160),j=a(21933),Z=a(46417);const q=j.Ry().shape({name:g.Z.string((0,l.ag)("entities.name.fields.name"),{}),description:g.Z.string((0,l.ag)("entities.description.fields.description"),{})}),N=e=>{const[n]=(0,r.useState)((()=>{const n=e.record||{};return{name:n.name,description:n.description}})),a=(0,b.cI)({resolver:(0,x.X)(q),mode:"all",defaultValues:n}),i=n=>{var a;e.onSubmit(null===e||void 0===e||null===(a=e.record)||void 0===a?void 0:a.id,n)};return(0,Z.jsx)(f.Z,{children:(0,Z.jsx)(b.RV,{...a,children:(0,Z.jsxs)("form",{onSubmit:a.handleSubmit(i),children:[(0,Z.jsxs)("div",{className:"row",children:[(0,Z.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,Z.jsx)(v.Z,{name:"name",label:(0,l.ag)("entities.project.fields.name")})}),(0,Z.jsx)("div",{className:"col-lg-7 col-md-8 col-12"})]}),(0,Z.jsxs)("div",{className:"form-buttons",children:[(0,Z.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:a.handleSubmit(i),children:[(0,Z.jsx)(h.Z,{loading:e.saveLoading,iconClass:"far fa-save"})," ",(0,l.ag)("common.save")]}),(0,Z.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:()=>{Object.keys(n).forEach((e=>{a.setValue(e,n[e])}))},children:[(0,Z.jsx)("i",{className:"fas fa-undo"})," ",(0,l.ag)("common.reset")]}),e.onCancel?(0,Z.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:()=>e.onCancel(),children:[(0,Z.jsx)("i",{className:"fas fa-times"})," ",(0,l.ag)("common.cancel")]}):null]})]})})})};var C=a(53852),y=a(61567),k=a(75352);const S=e=>{const[n,a]=(0,r.useState)(!1),o=(0,i.I0)(),{id:d}=(0,t.UO)(),m=(0,i.v9)(c.selectInitLoading),x=(0,i.v9)(c.selectSaveLoading),b=(0,i.v9)(c.selectRecord),g=Boolean(d),h=g?(0,l.ag)("entities.project.edit.title"):(0,l.ag)("entities.project.new.title");(0,r.useEffect)((()=>{o(s.Z.doInit(d)),a(!0)}),[o,d]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(C.Z,{items:[[(0,l.ag)("dashboard.menu"),"/"],[(0,l.ag)("entities.project.menu"),"/project"],[h]]}),(0,Z.jsxs)(p.Z,{children:[(0,Z.jsx)(k.Z,{children:h}),m&&(0,Z.jsx)(y.Z,{}),n&&!m&&(0,Z.jsx)(N,{saveLoading:x,initLoading:m,record:b,isEditing:g,onSubmit:(e,n)=>{o(g?s.Z.doUpdate(e,n):s.Z.doCreate(n))},onCancel:()=>(0,u.s1)().push("/project")})]})]})}},53852:(e,n,a)=>{a.d(n,{Z:()=>d});var r,i=a(30168),t=a(2135),l=a(20346),s=a(46417);const o=l.ZP.nav(r||(r=(0,i.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));const d=function(e){const n=e=>e.length>1;return(0,s.jsx)(o,{children:(0,s.jsx)("ol",{className:"breadcrumb",children:e.items.map(((a,r)=>(0,s.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===r?"active":""),children:n(a)?(0,s.jsx)(t.rU,{to:a[1],children:a[0]}):a[0]},a[0])))})})}},95748:(e,n,a)=>{a.d(n,{Z:()=>i});var r=a(46417);const i=e=>e.loading?(0,r.jsx)("span",{className:"spinner-border spinner-border-sm"}):e.iconClass?(0,r.jsx)("i",{className:e.iconClass}):null},61567:(e,n,a)=>{a.d(n,{Z:()=>i});var r=a(46417);const i=function(){return(0,r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,r.jsx)("div",{className:"spinner-border text-primary"})})}},49384:(e,n,a)=>{a.d(n,{Z:()=>r});class r{static errorMessage(e,n,a,r){var i;let t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(t)return t;if(!r&&!a[e])return null;const l=n[e];return(null===l||void 0===l||null===(i=l[0])||void 0===i?void 0:i.message)||(null===l||void 0===l?void 0:l.message)||l||null}}},47575:(e,n,a)=>{a.d(n,{Z:()=>o});var r=a(47313),i=a(75627),t=a(49384),l=a(46417);function s(e){const{label:n,name:a,hint:s,type:o,placeholder:d,autoFocus:m,autoComplete:c,required:u,externalErrorMessage:p,disabled:x,endAdornment:b}=e,{setValue:g,watch:h,register:v,formState:{touchedFields:f,isSubmitted:j,errors:Z}}=(0,i.Gc)(),q=t.Z.errorMessage(a,Z,f,j,p);return(0,r.useEffect)((()=>{v(a)}),[v,a]),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsxs)("div",{className:b?"input-group":"",children:[Boolean(n)&&(0,l.jsx)("label",{className:"col-form-label ".concat(u?"required":null),htmlFor:a,children:n}),(0,l.jsx)("input",{id:a,name:a,type:o,value:h(a),onChange:n=>{g(a,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:n=>{e.onBlur&&e.onBlur(n)},placeholder:d||void 0,autoFocus:m||void 0,autoComplete:c||void 0,disabled:x,className:"form-control ".concat(q?"is-invalid":"")}),b&&(0,l.jsx)("div",{className:"input-group-append",children:(0,l.jsx)("span",{className:"input-group-text",children:b})})]}),(0,l.jsx)("div",{className:"invalid-feedback",children:q}),Boolean(s)&&(0,l.jsx)("small",{className:"form-text text-muted",children:s})]})}s.defaultProps={type:"text",required:!1};const o=s},68160:(e,n,a)=>{a.d(n,{Z:()=>t});var r,i=a(30168);const t=a(20346).ZP.div(r||(r=(0,i.Z)(["\n  padding-top: 0;\n  padding-bottom: 0;\n\n  label.required::before {\n    display: inline-block;\n    margin-right: 4px;\n    content: '*';\n    line-height: 1;\n    font-size: 13px;\n    color: #f5222d;\n  }\n\n  .react-datepicker-wrapper {\n    width: 100%;\n  }\n\n  .custom-control {\n    z-index: 0;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  .form-buttons {\n    padding-top: 16px;\n\n    .btn {\n      margin-right: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"])))},75352:(e,n,a)=>{a.d(n,{Z:()=>t});var r,i=a(30168);const t=a(20346).ZP.h1(r||(r=(0,i.Z)(["\n  margin-bottom: 24px;\n"])))}}]);