/*! For license information please see 5879.73b99d2f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[5879],{15021:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(35323),s=t(86495),r=t(26319),o=t(71945);const i=(0,a.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],((e,n)=>new r.Z(e,n).match(o.Z.values.userRead))),l=(0,a.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],((e,n)=>new r.Z(e,n).match(o.Z.values.userEdit))),c=(0,a.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],((e,n)=>new r.Z(e,n).match(o.Z.values.userDestroy))),d={selectPermissionToRead:i,selectPermissionToEdit:l,selectPermissionToCreate:(0,a.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],((e,n)=>new r.Z(e,n).match(o.Z.values.userCreate))),selectPermissionToImport:(0,a.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],((e,n)=>new r.Z(e,n).match(o.Z.values.userImport))),selectPermissionToDestroy:c}},27829:(e,n,t)=>{t.d(n,{Z:()=>r});var a,s=t(30168);const r=t(20346).ZP.div(a||(a=(0,s.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n"])))},53852:(e,n,t)=>{t.d(n,{Z:()=>c});var a,s=t(30168),r=t(2135),o=t(20346),i=t(46417);const l=o.ZP.nav(a||(a=(0,s.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));const c=function(e){const n=e=>e.length>1;return(0,i.jsx)(l,{children:(0,i.jsx)("ol",{className:"breadcrumb",children:e.items.map(((t,a)=>(0,i.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===a?"active":""),children:n(t)?(0,i.jsx)(r.rU,{to:t[1],children:t[0]}):t[0]},t[0])))})})}},95748:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(46417);const s=e=>e.loading?(0,a.jsx)("span",{className:"spinner-border spinner-border-sm"}):e.iconClass?(0,a.jsx)("i",{className:e.iconClass}):null},61567:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(46417);const s=function(){return(0,a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,a.jsx)("div",{className:"spinner-border text-primary"})})}},75352:(e,n,t)=>{t.d(n,{Z:()=>r});var a,s=t(30168);const r=t(20346).ZP.h1(a||(a=(0,s.Z)(["\n  margin-bottom: 24px;\n"])))},10419:(e,n,t)=>{t.d(n,{Z:()=>r});var a,s=t(30168);const r=t(20346).ZP.div(a||(a=(0,s.Z)(["\n  margin-bottom: 8px;\n\n  .btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])))},25969:(e,n,t)=>{t.d(n,{Z:()=>r});var a,s=t(30168);const r=t(20346).ZP.div(a||(a=(0,s.Z)(["\n  .btn.btn-link {\n    padding-left: 0;\n  }\n"])))},61840:(e,n,t)=>{t.d(n,{Z:()=>Q});var a=t(47313),s=t(10499),r=t(33512),o=t(56573);const i="array",l="bit",c="bits",d="byte",u="bytes",m="",p="exponent",b="function",g="iec",f="Invalid number",h="Invalid rounding method",x="jedec",v="object",y=".",j="round",Z="s",w="kbit",C="kB",N=" ",U="string",B="0",k={symbol:{iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},fullform:{iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]}};function P(e){let{bits:n=!1,pad:t=!1,base:a=-1,round:s=2,locale:r=m,localeOptions:o={},separator:P=m,spacer:T=N,symbols:I={},standard:S=m,output:E=U,fullform:M=!1,fullforms:z=[],exponent:R=-1,roundingMethod:A=j,precision:F=0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},L=R,O=Number(e),V=[],D=0,G=m;-1===a&&0===S.length?(a=10,S=x):-1===a&&S.length>0?(S=S===g?g:x,a=S===g?2:10):(a=2===a?2:10,S=10===a||S===x?x:g);const K=10===a?1e3:1024,Y=!0===M,W=O<0,$=Math[A];if("bigint"!==typeof e&&isNaN(e))throw new TypeError(f);if(typeof $!==b)throw new TypeError(h);if(W&&(O=-O),(-1===L||isNaN(L))&&(L=Math.floor(Math.log(O)/Math.log(K)),L<0&&(L=0)),L>8&&(F>0&&(F+=8-L),L=8),E===p)return L;if(0===O)V[0]=0,G=V[1]=k.symbol[S][n?c:u][L];else{D=O/(2===a?Math.pow(2,10*L):Math.pow(1e3,L)),n&&(D*=8,D>=K&&L<8&&(D/=K,L++));const e=Math.pow(10,L>0?s:0);V[0]=$(D*e)/e,V[0]===K&&L<8&&-1===R&&(V[0]=1,L++),G=V[1]=10===a&&1===L?n?w:C:k.symbol[S][n?c:u][L]}if(W&&(V[0]=-V[0]),F>0&&(V[0]=V[0].toPrecision(F)),V[1]=I[V[1]]||V[1],!0===r?V[0]=V[0].toLocaleString():r.length>0?V[0]=V[0].toLocaleString(r,o):P.length>0&&(V[0]=V[0].toString().replace(y,P)),t&&!1===Number.isInteger(V[0])&&s>0){const e=P||y,n=V[0].toString().split(e),t=n[1]||m,a=t.length,r=s-a;V[0]="".concat(n[0]).concat(e).concat(t.padEnd(a+r,B))}return Y&&(V[1]=z[L]?z[L]:k.fullform[S][L]+(n?l:d)+(1===V[0]?m:Z)),E===i?V:E===v?{value:V[0],symbol:V[1],exponent:L,unit:G}:V.join(T)}var T,I=t(81384),S=t(63922),E=new Uint8Array(16);function M(){if(!T&&!(T="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return T(E)}const z=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const R=function(e){return"string"===typeof e&&z.test(e)};for(var A=[],F=0;F<256;++F)A.push((F+256).toString(16).substr(1));const L=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(A[e[n+0]]+A[e[n+1]]+A[e[n+2]]+A[e[n+3]]+"-"+A[e[n+4]]+A[e[n+5]]+"-"+A[e[n+6]]+A[e[n+7]]+"-"+A[e[n+8]]+A[e[n+9]]+"-"+A[e[n+10]]+A[e[n+11]]+A[e[n+12]]+A[e[n+13]]+A[e[n+14]]+A[e[n+15]]).toLowerCase();if(!R(t))throw TypeError("Stringified UUID is invalid");return t};const O=function(e,n,t){var a=(e=e||{}).random||(e.rng||M)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n){t=t||0;for(var s=0;s<16;++s)n[t+s]=a[s];return n}return L(a)};class V{static validate(e,n){if(!n)return;if(n.image&&!e.type.startsWith("image"))throw new Error((0,s.ag)("fileUploader.image"));if(n.storage.maxSizeInBytes&&e.size>n.storage.maxSizeInBytes)throw new Error((0,s.ag)("fileUploader.size",P(n.storage.maxSizeInBytes)));const t=D(e.name);if(n.formats&&!n.formats.includes(t))throw new Error((0,s.ag)("fileUploader.formats",n.formats.join(", ")))}static async upload(e,n){try{this.validate(e,n)}catch(l){return Promise.reject(l)}const t=D(e.name),a=O(),s="".concat(a,".").concat(t),{uploadCredentials:r,downloadUrl:o,privateUrl:i}=await this.fetchFileCredentials(s,n);return await this.uploadToServer(e,r),{id:a,name:e.name,sizeInBytes:e.size,publicUrl:r&&r.publicUrl?r.publicUrl:null,privateUrl:i,downloadUrl:o,new:!0}}static async fetchFileCredentials(e,n){const t=I.Z.get(),{data:a}=await S.Z.get("/tenant/".concat(t,"/file/credentials"),{params:{filename:e,storageId:n.storage.id}});return a}static async uploadToServer(e,n){try{const t=n.url,a=new FormData;for(const[e,s]of Object.entries(n.fields||{}))a.append(e,s);return a.append("file",e),o.Z.post(t,a,{headers:{"Content-Type":"multipart/form-data"}})}catch(t){throw console.error(t),t}}}function D(e){if(!e)return null;const n=/(?:\.([^.]+))?$/.exec(e);return n?n[1]:null}var G,K=t(95748),Y=t(30168),W=t(20346),$=t(46417);const _=W.ZP.div(G||(G=(0,Y.Z)(["\n  /* The Modal (background) */\n  .modal {\n    display: block;\n    position: fixed; /* Stay in place */\n    z-index: 9999; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0, 0, 0); /* Fallback color */\n    background-color: rgba(\n      0,\n      0,\n      0,\n      0.9\n    ); /* Black w/ opacity */\n  }\n\n  /* Modal Content (Image) */\n  .modal-content {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n  }\n\n  /* Caption of Modal Image (Image Text) - Same Width as the Image */\n  #caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n  }\n\n  /* Add Animation - Zoom in the Modal */\n  .modal-content,\n  #caption {\n    animation-name: zoom;\n    animation-duration: 0.6s;\n  }\n\n  @keyframes zoom {\n    from {\n      transform: scale(0);\n    }\n    to {\n      transform: scale(1);\n    }\n  }\n\n  /* The Close Button */\n  .close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n  }\n\n  .close:hover,\n  .close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  /* 100% Image Width on Smaller Screens */\n  @media only screen and (max-width: 700px) {\n    .modal-content {\n      width: 100%;\n    }\n  }\n"])));const q=function(e){return(0,$.jsx)(_,{children:(0,$.jsxs)("div",{className:"modal",children:[(0,$.jsx)("span",{className:"close",onClick:e.onClose,children:"\xd7"}),(0,$.jsx)("img",{className:"modal-content",src:e.src,alt:e.alt})]})})};var H;const J=W.ZP.div(H||(H=(0,Y.Z)(["\n  .img-card:hover .img-buttons {\n    display: block;\n  }\n\n  .img-buttons {\n    display: none;\n    position: relative;\n    bottom: 2.1rem;\n    width: calc(100px);\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n\n  .img-buttons * {\n    color: white;\n  }\n"])));const Q=function(e){const[n,t]=(0,a.useState)(!1),[o,i]=(0,a.useState)(null),l=(0,a.useRef)(),c=()=>{const{value:n}=e;return n?Array.isArray(n)?n:[n]:[]},{max:d,readonly:u}=e,m=(0,$.jsxs)("label",{className:"btn btn-outline-secondary px-4 mb-2",style:{cursor:"pointer"},children:[(0,$.jsx)(K.Z,{loading:n,iconClass:"fas fa-plus"})," ",(0,s.ag)("fileUploader.upload"),(0,$.jsx)("input",{style:{display:"none"},disabled:n||u,accept:"image/*",type:"file",onChange:async n=>{try{const a=n.target.files;if(!a||!a.length)return;let s=a[0];V.validate(s,{storage:e.storage,image:!0}),t(!0),s=await V.upload(s,{storage:e.storage,image:!0}),l.current.value="",t(!1),e.onChange([...c(),s])}catch(a){l.current.value="",console.error(a),t(!1),r.Z.showMessage(a)}},ref:l})]});return(0,$.jsxs)(J,{children:[u||d&&c().map((e=>({uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl}))).length>=d?null:m,c()&&c().length?(0,$.jsx)("div",{className:"d-flex flex-row flex-wrap",children:c().map((n=>(0,$.jsxs)("div",{className:"mr-2 mb-2 img-card",style:{height:"100px"},children:[(0,$.jsx)("img",{alt:n.name,src:n.downloadUrl,className:"img-thumbnail",style:{width:"100px",height:"100px",objectFit:"cover"}}),(0,$.jsxs)("div",{className:"img-buttons rounded-bottom",children:[(0,$.jsx)("button",{type:"button",className:"btn btn-link",onClick:()=>(e=>{i({src:e.downloadUrl,alt:e.name})})(n),children:(0,$.jsx)("i",{className:"fas fa-search"})}),!u&&(0,$.jsx)("button",{type:"button",className:"btn btn-link ml-2",onClick:()=>{return t=n.id,void e.onChange(c().filter((e=>e.id!==t)));var t},children:(0,$.jsx)("i",{className:"fas fa-times"})})]})]},n.id)))}):null,o&&(0,$.jsx)(q,{src:o.src,alt:o.alt,onClose:()=>{i(null)}})]})}},31287:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(46417);const s=function(e){if(!e.value&&0!==e.value&&!1!==e.value)return null;const n="".concat(e.prefix?"".concat(e.prefix," "):"").concat(e.value);return(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{className:"col-form-label",children:e.label}),(0,a.jsx)("input",{type:"text",readOnly:!0,className:"form-control-plaintext",value:n})]})}},93488:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(10499),s=t(46417);const r=function(e){const{value:n}=e;return n?"active"===n?(0,s.jsx)("span",{className:"badge badge-success",children:(0,a.ag)("user.status.active")}):"empty-permissions"===n?(0,s.jsx)("span",{className:"badge badge-danger",children:(0,a.ag)("user.status.empty-permissions")}):(0,s.jsx)("span",{className:"badge badge-warning",children:(0,a.ag)("user.status.invited")}):null}},15879:(e,n,t)=>{t.r(n),t.d(n,{default:()=>I});var a=t(47313),s=t(85554),r=t(58467),o=t(10499),i=t(94688),l=t(35323);const c=e=>e.user.view,d=(0,l.P1)([c],(e=>e.user)),u={selectLoading:(0,l.P1)([c],(e=>Boolean(e.loading))),selectUser:d,selectRaw:c};var m=t(27829),p=t(53852),b=t(75352),g=t(17366),f=t(61567),h=t(25969),x=t(46417);const v=function(e){return!e.value&&0!==e.value&&!1!==e.value||Array.isArray(e.value)&&!e.value.length?null:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{className:"col-form-label",children:e.label}),(0,x.jsx)("br",{}),e.render(e.value)]})};var y=t(61840);const j=function(e){const n=()=>{const{value:n}=e;return n?Array.isArray(n)?n:[n]:[]};return n().length?(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{className:"col-form-label",children:e.label}),(0,x.jsx)("br",{}),(0,x.jsx)(y.Z,{readonly:!0,value:n()})]}):null};var Z=t(31287),w=t(93488);const C=function(e){const{user:n,loading:t}=e;return t||!n?(0,x.jsx)(f.Z,{}):(0,x.jsxs)(h.Z,{children:[(0,x.jsx)(Z.Z,{label:(0,o.ag)("user.fields.email"),value:n.email}),(0,x.jsx)(Z.Z,{label:(0,o.ag)("user.fields.firstName"),value:n.firstName}),(0,x.jsx)(Z.Z,{label:(0,o.ag)("user.fields.lastName"),value:n.lastName}),(0,x.jsx)(Z.Z,{label:(0,o.ag)("user.fields.phoneNumber"),value:n.phoneNumber,prefix:"+"}),(0,x.jsx)(j,{label:(0,o.ag)("user.fields.avatars"),value:n.avatars}),(0,x.jsx)(v,{label:(0,o.ag)("user.fields.roles"),value:n.roles,render:e=>e.map((e=>(0,x.jsx)("div",{children:(0,x.jsx)("span",{children:g.Z.labelOf(e)})},e)))}),(0,x.jsx)(v,{label:(0,o.ag)("user.fields.status"),value:n.status,render:e=>(0,x.jsx)(w.Z,{value:e})})]})};var N=t(2135),U=t(23516),B=t(15021),k=t(95748),P=t(10419);const T=function(e){const{id:n}=(0,r.UO)(),t=(0,s.v9)(u.selectUser),a=(0,s.v9)(U.Z.selectPermissionToRead),i=(0,s.v9)(B.Z.selectPermissionToEdit);return(0,x.jsxs)(P.Z,{children:[i&&(0,x.jsx)(N.rU,{to:"/user/".concat(n,"/edit"),children:(0,x.jsxs)("button",{className:"btn btn-primary",type:"button",children:[(0,x.jsx)(k.Z,{iconClass:"fas fa-edit"})," ",(0,o.ag)("common.edit")]})}),a&&(0,x.jsx)(N.rU,{to:"/audit-logs?entityId=".concat(n),children:(0,x.jsxs)("button",{className:"btn btn-light",type:"button",children:[(0,x.jsx)(k.Z,{iconClass:"fas fa-history"})," ",(0,o.ag)("auditLog.menu")]})}),t&&t.email&&a&&(0,x.jsx)(N.rU,{to:"/audit-logs?createdByEmail=".concat(encodeURIComponent(t.email)),children:(0,x.jsxs)("button",{className:"btn btn-light",type:"button",children:[(0,x.jsx)(k.Z,{iconClass:"far fa-eye"})," ",(0,o.ag)("user.view.activity")]})})]})};const I=function(e){const n=(0,s.I0)(),{id:t}=(0,r.UO)(),l=(0,s.v9)(u.selectLoading),c=(0,s.v9)(u.selectUser);return(0,a.useEffect)((()=>{n(i.Z.doFind(t))}),[n,t]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.Z,{items:[[(0,o.ag)("dashboard.menu"),"/"],[(0,o.ag)("user.menu"),"/user"],[(0,o.ag)("user.view.title")]]}),(0,x.jsxs)(m.Z,{children:[(0,x.jsx)(b.Z,{children:(0,o.ag)("user.view.title")}),(0,x.jsx)(T,{}),(0,x.jsx)(C,{loading:l,user:c})]})]})}}}]);