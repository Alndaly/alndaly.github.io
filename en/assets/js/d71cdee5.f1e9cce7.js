"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4297],{65938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>q,contentTitle:()=>I,default:()=>D,frontMatter:()=>V,metadata:()=>S,toc:()=>R});var n=a(87462),r=a(67294),l=a(3905),s=(a(16758),a(86010)),u=a(12466),o=a(16550),c=a(91980),i=a(67392),d=a(50012);function m(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function f(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=f(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,c]=b({queryString:a,groupId:n}),[i,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=o??i;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),m(e)}),[c,m,l]),tabValues:l}}var v=a(72389);const g="tabList__CuJ",y="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:l,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),m=e=>{const t=e.currentTarget,a=i.indexOf(t),n=c[a].value;n!==l&&(d(t),o(n))},f=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;a=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;a=i[t]??i[i.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:u}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>i.push(e),onKeyDown:f,onClick:m},u,{className:(0,s.Z)("tabs__item",y,null==u?void 0:u.className,{"tabs__item--active":l===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",g)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function x(e){const t=(0,v.Z)();return r.createElement(T,(0,n.Z)({key:String(t)},e))}const E="tabItem_Ymn6";function C(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(E,n),hidden:a},t)}var N=a(68527);const V={title:"\u591a\u4e2aclassName\u7684\u60c5\u51b5"},I=void 0,S={unversionedId:"frontend/React/multiClass",id:"frontend/React/multiClass",title:"\u591a\u4e2aclassName\u7684\u60c5\u51b5",description:"\u53ef\u4ee5\u4f7f\u7528\u6a21\u7248\u5b57\u7b26\u4e32",source:"@site/docs/frontend/React/multiClass.md",sourceDirName:"frontend/React",slug:"/frontend/React/multiClass",permalink:"/en/docs/frontend/React/multiClass",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/React/multiClass.md",tags:[],version:"current",lastUpdatedAt:1679721690,formattedLastUpdatedAt:"Mar 25, 2023",frontMatter:{title:"\u591a\u4e2aclassName\u7684\u60c5\u51b5"},sidebar:"frontEndSidebar",previous:{title:"\u4e00\u4e9bhooks",permalink:"/en/docs/frontend/React/hooks"},next:{title:"Codable",permalink:"/en/docs/frontend/Swift/Codable"}},q={},R=[],Z={toc:R};function D(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},Z,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u6a21\u7248\u5b57\u7b26\u4e32"),(0,l.kt)(x,{mdxType:"Tabs"},(0,l.kt)(C,{value:"tsx",label:"index.tsx",default:!0,mdxType:"TabItem"},(0,l.kt)(N.Z,{language:"jsx",mdxType:"CodeBlock"},"import React from 'react';\nimport styles from './index.scss';\n\nexport default function MyComponent() {\n  return (\n    <div className={`className1 ${styles.className2}`}>\n        <p>111</p>\n    </div>\n  );\n}")),(0,l.kt)(C,{value:"scss",label:"index.scss",mdxType:"TabItem"},(0,l.kt)(N.Z,{language:"scss",mdxType:"CodeBlock"},".className2{\n    width: 100px;\n    height: 100px;\n}\n"))))}D.isMDXComponent=!0}}]);