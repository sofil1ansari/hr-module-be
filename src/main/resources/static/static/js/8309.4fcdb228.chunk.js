"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[8309],{18309:(e,a,t)=>{t.r(a),t.d(a,{default:()=>T});var s=t(10499),l=t(62563),n=t(45733),i=t(47313),o=t(75627),r=t(85554),d=t(58467),c=t(35188),m=t(23516),u=t(40846),g=t(47590),h=t(95748),x=t(13586),y=t(25803),f=t(47575),p=t(37943),j=t(69138),b=t(21933),v=t(46417);const Z=b.Ry().shape({timestampRange:g.Z.datetimeRange((0,s.ag)("auditLog.fields.timestampRange")),entityNames:g.Z.stringArray((0,s.ag)("auditLog.fields.entityNames")),entityId:g.Z.string((0,s.ag)("auditLog.fields.entityId")),action:g.Z.string((0,s.ag)("auditLog.fields.action")),createdByEmail:g.Z.email((0,s.ag)("auditLog.fields.createdByEmail"))}),N={timestampRange:[],entityNames:[],entityId:null,action:null,createdByEmail:null},C={timestampRange:{label:(0,s.ag)("auditLog.fields.timestampRange"),render:u.Z.datetimeRange()},entityNames:{label:(0,s.ag)("auditLog.fields.entityNames"),render:u.Z.stringArray()},entityId:{label:(0,s.ag)("auditLog.fields.entityId"),render:u.Z.generic()},action:{label:(0,s.ag)("auditLog.fields.action"),render:u.Z.generic()},createdByEmail:{label:(0,s.ag)("auditLog.fields.createdByEmail"),render:u.Z.generic()}};const w=function(e){const a=(0,r.v9)(m.Z.selectRawFilter),t=(0,r.I0)(),u=(0,d.TH)(),[g,b]=(0,i.useState)(!1),[w]=(0,i.useState)((()=>{const e={...N,...a},t=n.Z.parse(u.search);return e.entityNames=t.entityNames||e.entityNames,e.entityNames&&!Array.isArray(e.entityNames)&&(e.entityNames=[e.entityNames]),e.entityId=t.entityId||e.entityId,e.createdByEmail=t.createdByEmail||e.createdByEmail,e})),L=(0,o.cI)({resolver:(0,l.X)(Z),defaultValues:w,mode:"all"});(0,i.useEffect)((()=>{t(c.Z.doFetch(Z.cast(w),a))}),[t]);const B=e=>{const a=L.getValues();t(c.Z.doFetch(e,a)),b(!1)},{loading:E}=e;return(0,v.jsxs)(j.Z,{children:[(0,v.jsx)(x.Z,{onClick:()=>{b(!g)},renders:C,values:a,expanded:g,onRemove:e=>(L.setValue(e,N[e]),L.handleSubmit(B)())}),(0,v.jsx)("div",{className:"container",children:(0,v.jsx)("div",{className:"collapse ".concat(g?"show":""),children:(0,v.jsx)(o.RV,{...L,children:(0,v.jsxs)("form",{onSubmit:L.handleSubmit(B),children:[(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-lg-6 col-12",children:(0,v.jsx)(y.Z,{name:"timestampRange",label:(0,s.ag)("auditLog.fields.timestampRange"),showTimeInput:!0})}),(0,v.jsx)("div",{className:"col-lg-6 col-12",children:(0,v.jsx)(f.Z,{name:"createdByEmail",label:(0,s.ag)("auditLog.fields.createdByEmail")})}),(0,v.jsx)("div",{className:"col-lg-6 col-12",children:(0,v.jsx)(p.Z,{name:"entityNames",label:(0,s.ag)("auditLog.fields.entityNames"),notFoundContent:(0,s.ag)("auditLog.entityNamesHint")})}),(0,v.jsx)("div",{className:"col-lg-6 col-12",children:(0,v.jsx)(f.Z,{name:"entityId",label:(0,s.ag)("auditLog.fields.entityId")})}),(0,v.jsx)("div",{className:"col-lg-6 col-12",children:(0,v.jsx)(f.Z,{name:"action",label:(0,s.ag)("auditLog.fields.action")})})]}),(0,v.jsx)("div",{className:"row",children:(0,v.jsxs)("div",{className:"col-12 filter-buttons",children:[(0,v.jsxs)("button",{className:"btn btn-primary",type:"submit",children:[(0,v.jsx)(h.Z,{loading:E,iconClass:"fas fa-search"})," ",(0,s.ag)("common.search")]}),(0,v.jsxs)("button",{className:"btn btn-light",type:"button",onClick:()=>{Object.keys(N).forEach((e=>{L.setValue(e,N[e])})),t(c.Z.doReset()),b(!1)},children:[(0,v.jsx)(h.Z,{loading:E,iconClass:"fas fa-undo"})," ",(0,s.ag)("common.reset")]})]})})]})})})})]})};var L=t(70816),B=t.n(L),E=t(61567),R=t(27216),I=t(97249),S=t(98848);const M=function(e){const a=(0,r.I0)(),t=e=>{const t=d.field===e&&"ascend"===d.order?"descend":"ascend";a(c.Z.doChangeSort({field:e,order:t}))},l=(0,r.v9)(m.Z.selectLoading),n=(0,r.v9)(m.Z.selectRows),i=(0,r.v9)(m.Z.selectPagination),o=(0,r.v9)(m.Z.selectHasRows),d=(0,r.v9)(m.Z.selectSorter);return(0,v.jsxs)(R.Z,{children:[(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsxs)("table",{className:"table table-striped mt-2",children:[(0,v.jsx)("thead",{className:"thead",children:(0,v.jsxs)("tr",{children:[(0,v.jsx)(S.Z,{onSort:t,hasRows:o,sorter:d,name:"timestamp",label:(0,s.ag)("auditLog.fields.timestamp")}),(0,v.jsx)(S.Z,{onSort:t,hasRows:o,sorter:d,name:"createdByEmail",label:(0,s.ag)("auditLog.fields.createdByEmail")}),(0,v.jsx)(S.Z,{onSort:t,hasRows:o,sorter:d,name:"entityName",label:(0,s.ag)("auditLog.fields.entityName")}),(0,v.jsx)(S.Z,{onSort:t,hasRows:o,sorter:d,name:"action",label:(0,s.ag)("auditLog.fields.action")}),(0,v.jsx)(S.Z,{onSort:t,hasRows:o,sorter:d,name:"entityId",label:(0,s.ag)("auditLog.fields.entityId")}),(0,v.jsx)(S.Z,{className:"th-actions-sm"})]})}),(0,v.jsxs)("tbody",{children:[l&&(0,v.jsx)("tr",{children:(0,v.jsx)("td",{colSpan:100,children:(0,v.jsx)(E.Z,{})})}),!l&&!o&&(0,v.jsx)("tr",{children:(0,v.jsx)("td",{colSpan:100,children:(0,v.jsx)("div",{className:"d-flex justify-content-center",children:(0,s.ag)("table.noData")})})}),!l&&n.map((e=>(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:B()(e.timestamp).format("YYYY-MM-DD HH:mm")}),(0,v.jsx)("td",{children:e.createdByEmail}),(0,v.jsx)("td",{children:e.entityName}),(0,v.jsx)("td",{children:e.action}),(0,v.jsx)("td",{children:e.entityId}),(0,v.jsx)("td",{children:(0,v.jsx)("button",{className:"btn btn-link",type:"button",onClick:()=>(e=>{const a=JSON.stringify(e,null,2);window.open("","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400").document.write("<pre>".concat(a,"</pre>"))})(e.values),children:(0,s.ag)("common.view")})})]},e.id)))]})]})}),(0,v.jsx)(I.Z,{onChange:e=>{a(c.Z.doChangePagination(e))},disabled:l,pagination:i})]})};var k=t(33640),F=t(10419);const V=function(e){const a=(0,r.v9)(m.Z.selectLoading),t=(0,r.v9)(m.Z.selectExportLoading),l=(0,r.v9)(m.Z.selectHasRows),n=(0,r.I0)(),i=!l||a;return(0,v.jsxs)(F.Z,{children:[(0,v.jsx)("span",{"data-tip":(0,s.ag)("common.noDataToExport"),"data-tip-disable":!i,"data-for":"audit-log-toolbar-export-tooltip",children:(0,v.jsxs)("button",{className:"btn btn-light",type:"button",disabled:i,onClick:()=>{n(c.Z.doExport())},children:[(0,v.jsx)(h.Z,{loading:t,iconClass:"far fa-file-excel"})," ",(0,s.ag)("common.export")]})}),(0,v.jsx)(k.u,{id:"audit-log-toolbar-export-tooltip"})]})};var H=t(27829),A=t(53852),D=t(75352);const T=function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(A.Z,{items:[[(0,s.ag)("dashboard.menu"),"/"],[(0,s.ag)("auditLog.menu")]]}),(0,v.jsxs)(H.Z,{children:[(0,v.jsx)(D.Z,{children:(0,s.ag)("auditLog.title")}),(0,v.jsx)(V,{}),(0,v.jsx)(w,{}),(0,v.jsx)(M,{})]})]})}},25803:(e,a,t)=>{t.d(a,{Z:()=>c});var s=t(47313),l=t(61378),n=t.n(l),i=(t(72632),t(75627)),o=t(49384),r=t(46417);function d(e){const{label:a,name:t,hint:l,placeholder:d,autoFocus:c,required:m,showTimeInput:u,externalErrorMessage:g}=e,{register:h,formState:{touchedFields:x,errors:y,isSubmitted:f},setValue:p,watch:j}=(0,i.Gc)(),b=o.Z.errorMessage(t,y,x,f,g),v=j(t);(0,s.useEffect)((()=>{h(t)}),[h,t]);const Z=()=>v?Array.isArray(!v)?null:v.length&&v[0]||null:null,N=()=>v?Array.isArray(!v)||v.length<2?null:v[1]||null:null;return(0,r.jsxs)("div",{className:"form-group",children:[Boolean(a)&&(0,r.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:t,children:a}),(0,r.jsxs)("div",{style:{display:"flex",flexWrap:"nowrap",alignItems:"baseline"},children:[(0,r.jsx)(n(),{id:"".concat(t,"Start"),name:"".concat(t,"Start"),onChange:a=>(a=>{p(t,[a,N()],{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange([a,N()])})(a),onBlur:a=>{e.onBlur&&e.onBlur(a)},selected:Z(),className:"form-control ".concat(b?"is-invalid":""),showTimeInput:u,popperModifiers:{preventOverflow:{enabled:!0,escapeWithReference:!1,boundariesElement:"viewport"}},placeholderText:d||"",autoFocus:c||void 0,autoComplete:"off",dateFormat:u?"yyyy-MM-dd HH:mm":"yyyy-MM-dd",timeIntervals:15}),(0,r.jsx)("div",{style:{flexShrink:1,marginLeft:"8px",marginRight:"8px"},children:"~"}),(0,r.jsx)(n(),{id:"".concat(t,"End"),name:"".concat(t,"End"),onChange:a=>(a=>{p(t,[Z(),a],{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange([Z(),a])})(a),onBlur:a=>{e.onBlur&&e.onBlur(a)},selected:N(),className:"form-control ".concat(b?"is-invalid":""),showTimeInput:u,placeholderText:d||"",autoFocus:c||void 0,autoComplete:"off",dateFormat:u?"yyyy-MM-dd HH:mm":"yyyy-MM-dd",timeIntervals:15,popperModifiers:{preventOverflow:{enabled:!0,escapeWithReference:!1,boundariesElement:"viewport"}}})]}),(0,r.jsx)("div",{className:"invalid-feedback",children:b}),Boolean(l)&&(0,r.jsx)("small",{className:"form-text text-muted",children:l})]})}d.defaultProps={required:!1};const c=d},37943:(e,a,t)=>{t.d(a,{Z:()=>c});var s=t(47313),l=t(75627),n=t(11495),i=t(10499),o=t(49384),r=t(46417);function d(e){const{label:a,name:t,hint:d,externalErrorMessage:c,required:m,placeholder:u,isClearable:g,notFoundContent:h}=e,{register:x,formState:{touchedFields:y,errors:f,isSubmitted:p},setValue:j,watch:b}=(0,l.Gc)(),v=o.Z.errorMessage(t,f,y,p,c);(0,s.useEffect)((()=>{x(t)}),[x,t]);const Z=b(t),N=Boolean(v)?{control:e=>({...e,borderColor:"red"})}:void 0;return(0,r.jsxs)("div",{className:"form-group",children:[Boolean(a)&&(0,r.jsx)("label",{className:"col-form-label ".concat(m?"required":null),children:a}),(0,r.jsx)("br",{}),(0,r.jsx)(n.Z,{className:"w-100",value:Z&&Z.length?Z.map((e=>({value:e,label:e}))):[],onChange:a=>{if(!a||!a.length)return j(t,null,{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange(null));const s=a.map((e=>e.value)).join(",").split(",");j(t,s,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(s)},onBlur:a=>{e.onBlur&&e.onBlur(a)},id:t,name:t,placeholder:u||"",isClearable:g,styles:N,isMulti:!0,formatCreateLabel:e=>e,loadingMessage:()=>(0,i.ag)("autocomplete.loading"),noOptionsMessage:()=>h||""}),(0,r.jsx)("div",{className:"invalid-feedback",children:v}),Boolean(d)&&(0,r.jsx)("small",{className:"form-text text-muted",children:d})]})}d.defaultProps={required:!1,isClearable:!0};const c=d}}]);