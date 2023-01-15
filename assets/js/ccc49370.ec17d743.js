"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6103],{65203:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(67294),l=a(86010),r=a(1944),o=a(35281),c=a(9460),i=a(40245),s=a(46806),m=a(87462),d=a(95999),g=a(32244);function p(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(g.Z,(0,m.Z)({},a,{subLabel:n.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(g.Z,(0,m.Z)({},t,{subLabel:n.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function h(){const{assets:e,metadata:t}=(0,c.C)(),{title:a,description:l,date:o,tags:i,authors:s,frontMatter:m}=t,{keywords:d}=m,g=e.image??m.image;return n.createElement(r.d,{title:a,description:l,keywords:d,image:g},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&n.createElement("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")}))}var u=a(39407);function b(e){let{sidebar:t,children:a}=e;const{metadata:l,toc:r}=(0,c.C)(),{nextItem:o,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:b}=d;return n.createElement(i.Z,{sidebar:t,toc:!g&&r.length>0?n.createElement(u.Z,{toc:r,minHeadingLevel:h,maxHeadingLevel:b}):void 0},n.createElement(s.Z,null,a),(o||m)&&n.createElement(p,{nextItem:o,prevItem:m}))}function v(e){const t=e.content;return n.createElement(c.n,{content:e.content,isBlogPostPage:!0},n.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},n.createElement(h,null),n.createElement(b,{sidebar:e.sidebar},n.createElement(t,null))))}},40245:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),l=a(86010),r=a(51652),o=a(36624);function c(e){const{sidebar:t,toc:a,children:c,...i}=e,s=t&&t.items.length>0;return n.createElement(r.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(o.Z,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&n.createElement("div",{className:"col col--2"},a))))}},89111:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010),r=a(18780),o=a(9460),c=a(66706);function i(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,o.C)();return n.createElement("div",{id:i?r.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(c.Z,null,t))}},43151:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),r=a(86010),o=a(95999),c=a(86668);const i="anchorWithStickyNavbar_loeA",s="anchorWithHideOnScrollNavbar_emO8";function m(e){let{as:t,id:a,...m}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();return"h1"!==t&&a?l.createElement(t,(0,n.Z)({},m,{className:(0,r.Z)("anchor",d?s:i),id:a}),m.children,l.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,n.Z)({},m,{id:void 0}))}},58063:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),l=a(67294),r=a(86010);const o="img_CujE",c="imgBox_y57G";function i(e){return l.createElement("div",{className:c},l.createElement("img",(0,n.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,o))})));var t}},66706:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(3905),r=a(29797);function o(e){let{children:t}=e;return n.createElement(l.Zo,{components:r.Z},t)}}}]);