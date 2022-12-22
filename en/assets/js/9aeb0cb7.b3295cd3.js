"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[798],{87489:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));t(16758);const n={title:"rest_framework\u57fa\u672c\u64cd\u4f5c"},s=void 0,i={unversionedId:"backend/Django/rest_framework",id:"backend/Django/rest_framework",title:"rest_framework\u57fa\u672c\u64cd\u4f5c",description:"\u4e00\u822c\u60c5\u51b5\u4e0bviews.py\u9700\u8981\u5f15\u5165\u7684\u5e93",source:"@site/docs/backend/Django/rest_framework.md",sourceDirName:"backend/Django",slug:"/backend/Django/rest_framework",permalink:"/en/docs/backend/Django/rest_framework",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/backend/Django/rest_framework.md",tags:[],version:"current",lastUpdatedAt:1671687717,formattedLastUpdatedAt:"Dec 22, 2022",frontMatter:{title:"rest_framework\u57fa\u672c\u64cd\u4f5c"},sidebar:"backEndSidebar",previous:{title:"oauth",permalink:"/en/docs/backend/Django/oauth"},next:{title:"Nginx\u6280\u5de7\u548c\u4e00\u4e9b\u95ee\u9898",permalink:"/en/docs/backend/Nginx/Nginx\u6280\u5de7\u548c\u4e00\u4e9b\u95ee\u9898"}},d={},l=[{value:"\u4e00\u822c\u60c5\u51b5\u4e0b<code>views.py</code>\u9700\u8981\u5f15\u5165\u7684\u5e93",id:"\u4e00\u822c\u60c5\u51b5\u4e0bviewspy\u9700\u8981\u5f15\u5165\u7684\u5e93",level:2},{value:"\u5e8f\u5217\u5316",id:"\u5e8f\u5217\u5316",level:2}],m={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u822c\u60c5\u51b5\u4e0bviewspy\u9700\u8981\u5f15\u5165\u7684\u5e93"},"\u4e00\u822c\u60c5\u51b5\u4e0b",(0,o.kt)("inlineCode",{parentName:"h2"},"views.py"),"\u9700\u8981\u5f15\u5165\u7684\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from django.shortcuts import render\nfrom django.shortcuts import render\nimport logging\nfrom rest_framework.views import Response\nfrom rest_framework.views import APIView\nfrom .serializers import *\nfrom rest_framework.decorators import api_view\nfrom .models import *\n")),(0,o.kt)("h2",{id:"\u5e8f\u5217\u5316"},"\u5e8f\u5217\u5316"),(0,o.kt)("p",null,"\u5728\u6bcf\u4e00\u4e2a\u63a5\u53e3\u7ec4\u4e0b\u65b0\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"serializers.py"),"\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from rest_framework.serializers import Serializer\nfrom rest_framework import serializers\nfrom .models import Data\n\nclass DataSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Data\n        fields = '__all__'\n")))}p.isMDXComponent=!0}}]);