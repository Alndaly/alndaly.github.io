"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4297],{97305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>x,contentTitle:()=>y,default:()=>N,frontMatter:()=>k,metadata:()=>g,toc:()=>T});var n=a(87462),l=a(67294),s=a(3905),r=(a(16758),a(86010)),o=a(72389),u=a(67392),i=a(7094),c=a(12466);const d="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:a,block:s,defaultValue:o,values:p,groupId:b,className:f}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,u.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:x}=(0,i.U)(),[T,C]=(0,l.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=b){const e=g[b];null!=e&&e!==T&&h.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,a=N.indexOf(t),n=h[a].value;n!==T&&(w(t),C(n),null!=b&&x(b,String(n)))},R=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},f)},h.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:R,onClick:E},s,{className:(0,r.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,l.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function b(e){const t=(0,o.Z)();return l.createElement(p,(0,n.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function v(e){let{children:t,hidden:a,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(f,n),hidden:a},t)}var h=a(68527);const k={title:"\u591a\u4e2aclassName\u7684\u60c5\u51b5"},y=void 0,g={unversionedId:"frontend/React/multiClass",id:"frontend/React/multiClass",title:"\u591a\u4e2aclassName\u7684\u60c5\u51b5",description:"\u53ef\u4ee5\u4f7f\u7528\u6a21\u7248\u5b57\u7b26\u4e32",source:"@site/docs/frontend/React/multiClass.md",sourceDirName:"frontend/React",slug:"/frontend/React/multiClass",permalink:"/en/docs/frontend/React/multiClass",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/frontend/React/multiClass.md",tags:[],version:"current",lastUpdatedAt:1673765055,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{title:"\u591a\u4e2aclassName\u7684\u60c5\u51b5"},sidebar:"frontEndSidebar",previous:{title:"\u4e00\u4e9bhooks",permalink:"/en/docs/frontend/React/hooks"},next:{title:"Codable",permalink:"/en/docs/frontend/Swift/Codable"}},x={},T=[],C={toc:T};function N(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},C,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u6a21\u7248\u5b57\u7b26\u4e32"),(0,s.kt)(b,{mdxType:"Tabs"},(0,s.kt)(v,{value:"tsx",label:"index.tsx",default:!0,mdxType:"TabItem"},(0,s.kt)(h.Z,{language:"jsx",mdxType:"CodeBlock"},"import React from 'react';\nimport styles from './index.scss';\n\nexport default function MyComponent() {\n  return (\n    <div className={`className1 ${styles.className2}`}>\n        <p>111</p>\n    </div>\n  );\n}")),(0,s.kt)(v,{value:"scss",label:"index.scss",mdxType:"TabItem"},(0,s.kt)(h.Z,{language:"scss",mdxType:"CodeBlock"},".className2{\n    width: 100px;\n    height: 100px;\n}\n"))))}N.isMDXComponent=!0}}]);