"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5291],{74631:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=a(87462),o=(a(67294),a(3905));a(16758);const i={title:"channels",description:"\u8ba9django\u652f\u6301\u591a\u79cd\u534f\u8bae\uff08http+websocket\uff09"},p=void 0,s={unversionedId:"backend/Django/channels",id:"backend/Django/channels",title:"channels",description:"\u8ba9django\u652f\u6301\u591a\u79cd\u534f\u8bae\uff08http+websocket\uff09",source:"@site/docs/backend/Django/channels.md",sourceDirName:"backend/Django",slug:"/backend/Django/channels",permalink:"/docs/backend/Django/channels",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Django/channels.md",tags:[],version:"current",lastUpdatedAt:1681142816,formattedLastUpdatedAt:"2023\u5e744\u670810\u65e5",frontMatter:{title:"channels",description:"\u8ba9django\u652f\u6301\u591a\u79cd\u534f\u8bae\uff08http+websocket\uff09"},sidebar:"backEndSidebar",previous:{title:"Django\u5feb\u901f\u642d\u5efa\u540e\u7aef",permalink:"/docs/backend/Django/base"},next:{title:"\u8de8\u57df\u5904\u7406",permalink:"/docs/backend/Django/cors"}},l={},d=[{value:"\u4fee\u6539<code>asgi.py</code>",id:"\u4fee\u6539asgipy",level:2},{value:"\u4fee\u6539<code>settings.py</code>",id:"\u4fee\u6539settingspy",level:2},{value:"\u5b89\u88c5Daphne",id:"\u5b89\u88c5daphne",level:2},{value:"\u7528Daphne\u542f\u52a8Django",id:"\u7528daphne\u542f\u52a8django",level:2}],r={toc:d};function c(n){let{components:e,...a}=n;return(0,o.kt)("wrapper",(0,t.Z)({},r,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"django\u5173\u4e8edaphne\u6587\u6863\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/daphne/"},"https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/daphne/"))),(0,o.kt)("h2",{id:"\u4fee\u6539asgipy"},"\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"h2"},"asgi.py")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=asgi.py",title:"asgi.py"},'"""\nASGI config for unionUser project.\n\nIt exposes the ASGI callable as a module-level variable named ``application``.\n\nFor more information on this file, see\nhttps://docs.djangoproject.com/en/4.1/howto/deployment/asgi/\n"""\n\nimport os\n\nfrom django.core.asgi import get_asgi_application\n\nfrom channels.routing import ProtocolTypeRouter\nfrom django.core.asgi import get_asgi_application\n\nos.environ.setdefault("DJANGO_SETTINGS_MODULE", "union.settings")\n\n# Initialize Django ASGI application early to ensure the AppRegistry\n# is populated before importing code that may import ORM models.\ndjango_asgi_app = get_asgi_application()\n\napplication = ProtocolTypeRouter({\n    "http": django_asgi_app,\n    # Just HTTP for now. (We can add other protocols later.)\n})\n')),(0,o.kt)("h2",{id:"\u4fee\u6539settingspy"},"\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"h2"},"settings.py")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=settings.py",title:"settings.py"},'INSTALLED_APPS = [\n    \'rest_framework\',  # \u589e\u52a0\u8fd9\u4e00\u884c\n    \'corsheaders\',  # \u8fd9\u91cc\u589e\u52a0\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u5934\u914d\u7f6e\n    "django.contrib.admin",\n    "django.contrib.auth",\n    "django.contrib.contenttypes",\n    "django.contrib.sessions",\n    "django.contrib.messages",\n    "django.contrib.staticfiles",\n    \'channels\',\n]\n\nASGI_APPLICATION = \'myproject.wsgi.application\'\n\nWSGI_APPLICATION = "union.wsgi.application"\n\n')),(0,o.kt)("h2",{id:"\u5b89\u88c5daphne"},"\u5b89\u88c5Daphne"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7pip\u5b89\u88c5daphne"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pip install daphne\n")),(0,o.kt)("h2",{id:"\u7528daphne\u542f\u52a8django"},"\u7528Daphne\u542f\u52a8Django"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u6b64\u65f6\u4e0d\u5e94\u8be5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"python manage.py runserver"),"\u542f\u52a8\u9879\u76ee\u4e86\uff01")),(0,o.kt)("p",null,"\u5f53Daphne\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u5bf9\u5e94\u7684\u7ec8\u7aef\u547d\u4ee4\u4fbf\u53ef\u6267\u884c\u4ee5\u7528\u6765\u5f00\u542fDaphne\u8fdb\u7a0b\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u6700\u7b80\u5355\u7684\u4f7f\u7528\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"daphne"),"\u547d\u4ee4\u9700\u8981\u4f20\u53c2\u4e00\u4e2aASGI\u5e94\u7528\uff0c\u5e76\u4e14\u8ddf\u968f",(0,o.kt)("inlineCode",{parentName:"p"},"application"),"\uff0c\u5192\u53f7\u5206\u9694\u3002")),(0,o.kt)("p",null,"\u6bd4\u5982\u5bf9\u4e8e\u4e00\u4e2a\u6700\u5178\u578b\u7684Django\u9879\u76ee\uff0c\u53ef\u4ee5\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"daphne myproject.asgi:application\n")),(0,o.kt)("p",null,"\u8fd9\u5c06\u4f1a\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8000"),"\u5f00\u542f\u4e00\u4e2a\u8fdb\u7a0b\u3002\u6ce8\u610f\u8be5\u547d\u4ee4\u6267\u884c\u4f4d\u7f6e\u5e94\u8be5\u548c\u4f60\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"manage.py"),"\u6587\u4ef6\u540c\u7ea7\u76ee\u5f55\u4e0b\u3002"))}c.isMDXComponent=!0}}]);