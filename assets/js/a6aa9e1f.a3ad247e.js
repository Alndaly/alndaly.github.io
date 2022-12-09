"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3089],{93269:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(67294),l=n(86010),i=n(52263),r=n(1944),o=n(35281),c=n(40245),s=n(95999),m=n(32244);function d(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(m.Z,{permalink:n,title:a.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&a.createElement(m.Z,{permalink:l,title:a.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var u=n(90197),p=n(9460),h=n(46806);function E(e){let{items:t,component:n=h.Z}=e;return a.createElement(a.Fragment,null,t.map((e=>{let{content:t}=e;return a.createElement(p.n,{key:t.metadata.permalink,content:t},a.createElement(n,null,a.createElement(t,null)))})))}function f(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,i.Z)(),{blogDescription:l,blogTitle:o,permalink:c}=t,s="/"===c?n:o;return a.createElement(a.Fragment,null,a.createElement(r.d,{title:s,description:l}),a.createElement(u.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:n,sidebar:l}=e;return a.createElement(c.Z,{sidebar:l},a.createElement(E,{items:n}),a.createElement(d,{metadata:t}))}function v(e){return a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},a.createElement(f,e),a.createElement(g,e))}},29797:(e,t,n)=>{n.d(t,{Z:()=>B});var a=n(87462),l=n(67294),i=n(35742);var r=n(68527);var o=n(39960);var c=n(86010),s=n(72389),m=n(86043);const d="details_lb9f",u="isBrowser_bmU9",p="collapsibleContent_i85q";function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function E(e,t){return!!e&&(e===t||E(e.parentElement,t))}function f(e){let{summary:t,children:n,...i}=e;const r=(0,s.Z)(),o=(0,l.useRef)(null),{collapsed:f,setCollapsed:g}=(0,m.u)({initialState:!i.open}),[v,b]=(0,l.useState)(i.open);return l.createElement("details",(0,a.Z)({},i,{ref:o,open:v,"data-collapsed":f,className:(0,c.Z)(d,r&&u,i.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&E(t,o.current)&&(e.preventDefault(),f?(g(!1),b(!0)):g(!0))}}),t??l.createElement("summary",null,"Details"),l.createElement(m.z,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),b(!e)}},l.createElement("div",{className:p},n)))}const g="details_b_Ee";function v(e){let{...t}=e;return l.createElement(f,(0,a.Z)({},t,{className:(0,c.Z)("alert alert--info",g,t.className)}))}var b=n(43151);function Z(e){return l.createElement(b.Z,e)}const N="containsTaskList_mC6p";var C=n(58063),y=n(35281),T=n(95999);const k="admonition_LlT9",w="admonitionHeading_tbUL",z="admonitionIcon_kALy",x="admonitionContent_S0QG";const _={note:{infimaClassName:"secondary",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:l.createElement(T.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 12 16"},l.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:l.createElement(T.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 12 16"},l.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:l.createElement(T.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:l.createElement(T.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 16 16"},l.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:l.createElement(T.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},A={secondary:"note",important:"info",success:"tip",warning:"danger"};function M(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=l.Children.toArray(e),n=t.find((e=>{var t;return l.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),a=l.createElement(l.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:e.title??t,children:n}}const B={head:function(e){const t=l.Children.map(e.children,(e=>l.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return l.createElement(e.props.originalType,a)}return e}(e):e));return l.createElement(i.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return l.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,l.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?l.createElement("code",e):l.createElement(r.Z,e)},a:function(e){return l.createElement(o.Z,e)},pre:function(e){var t;return l.createElement(r.Z,(0,l.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=l.Children.toArray(e.children),n=t.find((e=>{var t;return l.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),i=l.createElement(l.Fragment,null,t.filter((e=>e!==n)));return l.createElement(v,(0,a.Z)({},e,{summary:n}),i)},ul:function(e){return l.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,c.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&N))}));var t},img:C.Z,h1:e=>l.createElement(Z,(0,a.Z)({as:"h1"},e)),h2:e=>l.createElement(Z,(0,a.Z)({as:"h2"},e)),h3:e=>l.createElement(Z,(0,a.Z)({as:"h3"},e)),h4:e=>l.createElement(Z,(0,a.Z)({as:"h4"},e)),h5:e=>l.createElement(Z,(0,a.Z)({as:"h5"},e)),h6:e=>l.createElement(Z,(0,a.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:a,icon:i}=M(e),r=function(e){const t=A[e]??e;return _[t]||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),_.info)}(n),o=a??r.label,{iconComponent:s}=r,m=i??l.createElement(s,null);return l.createElement("div",{className:(0,c.Z)(y.k.common.admonition,y.k.common.admonitionType(e.type),"alert",`alert--${r.infimaClassName}`,k)},l.createElement("div",{className:w},l.createElement("span",{className:z},m),o),l.createElement("div",{className:x},t))},mermaid:()=>null}},40245:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010),i=n(51652),r=n(36624);function o(e){const{sidebar:t,toc:n,children:o,...c}=e,s=t&&t.items.length>0;return a.createElement(i.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(r.Z,{sidebar:t}),a.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&a.createElement("div",{className:"col col--2"},n))))}},89111:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),l=n(86010),i=n(18780),r=n(9460),o=n(66706);function c(e){let{children:t,className:n}=e;const{isBlogPostPage:c}=(0,r.C)();return a.createElement("div",{id:c?i.blogPostContainerID:void 0,className:(0,l.Z)("markdown",n),itemProp:"articleBody"},a.createElement(o.Z,null,t))}},43151:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),l=n(67294),i=n(86010),r=n(95999),o=n(86668);const c="anchorWithStickyNavbar_loeA",s="anchorWithHideOnScrollNavbar_emO8";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,o.L)();return"h1"!==t&&n?l.createElement(t,(0,a.Z)({},m,{className:(0,i.Z)("anchor",d?s:c),id:n}),m.children,l.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,a.Z)({},m,{id:void 0}))}},58063:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),l=n(67294),i=n(86010);const r="img_CujE",o="imgBox_y57G";function c(e){return l.createElement("div",{className:o},l.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,i.Z)(t,r))})));var t}},66706:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),l=n(3905),i=n(29797);function r(e){let{children:t}=e;return a.createElement(l.Zo,{components:i.Z},t)}}}]);