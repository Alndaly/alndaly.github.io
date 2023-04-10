"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4536],{59400:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var t=a(87462),l=(a(67294),a(3905));a(16758);const o={title:"Django\u5feb\u901f\u642d\u5efa\u540e\u7aef",date:new Date("2022-04-08T23:35:27.000Z"),tags:["Django"],description:"Django\u540e\u7aef\u3002"},s=void 0,r={unversionedId:"backend/Django/base",id:"backend/Django/base",title:"Django\u5feb\u901f\u642d\u5efa\u540e\u7aef",description:"Django\u540e\u7aef\u3002",source:"@site/docs/backend/Django/base.md",sourceDirName:"backend/Django",slug:"/backend/Django/base",permalink:"/docs/backend/Django/base",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Django/base.md",tags:[{label:"Django",permalink:"/docs/tags/django"}],version:"current",lastUpdatedAt:1681142816,formattedLastUpdatedAt:"2023\u5e744\u670810\u65e5",frontMatter:{title:"Django\u5feb\u901f\u642d\u5efa\u540e\u7aef",date:"2022-04-08T23:35:27.000Z",tags:["Django"],description:"Django\u540e\u7aef\u3002"},sidebar:"backEndSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/backend"},next:{title:"channels",permalink:"/docs/backend/Django/channels"}},d={},p=[{value:"\u5b98\u65b9\u6587\u6863\uff08\u542b\u6559\u7a0b\uff09",id:"\u5b98\u65b9\u6587\u6863\u542b\u6559\u7a0b",level:2},{value:"\u57fa\u672c\u64cd\u4f5c\uff08\u7ec8\u7aef\u4e2d\u6267\u884c\uff09",id:"\u57fa\u672c\u64cd\u4f5c\u7ec8\u7aef\u4e2d\u6267\u884c",level:2},{value:"rest_framework",id:"rest_framework",level:2},{value:"\u89e3\u51b3\u65f6\u533a\u95ee\u9898",id:"\u89e3\u51b3\u65f6\u533a\u95ee\u9898",level:2},{value:"\u89e3\u51b3\u8de8\u57df",id:"\u89e3\u51b3\u8de8\u57df",level:2},{value:"Django\u9ed8\u8ba4\u6837\u5f0f\u4e0d\u597d\u770b",id:"django\u9ed8\u8ba4\u6837\u5f0f\u4e0d\u597d\u770b",level:2},{value:"Django\u7684\u65f6\u95f4\u8fd4\u56de\u4e2d\u95f4\u5e26<code>T</code>",id:"django\u7684\u65f6\u95f4\u8fd4\u56de\u4e2d\u95f4\u5e26t",level:2},{value:"\u6570\u636e\u5e93\u914d\u7f6e",id:"\u6570\u636e\u5e93\u914d\u7f6e",level:2},{value:"Mysql\u8f6cDjango\u6a21\u578b\u7c7b",id:"mysql\u8f6cdjango\u6a21\u578b\u7c7b",level:2},{value:"\u65b9\u6cd5\u4e00",id:"\u65b9\u6cd5\u4e00",level:2}],i={toc:p};function g(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5b98\u65b9\u6587\u6863\u542b\u6559\u7a0b"},"\u5b98\u65b9\u6587\u6863\uff08\u542b\u6559\u7a0b\uff09"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.djangoproject.com/"},"Django")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.django-rest-framework.org/"},"Home - Django REST framework")),(0,l.kt)("h2",{id:"\u57fa\u672c\u64cd\u4f5c\u7ec8\u7aef\u4e2d\u6267\u884c"},"\u57fa\u672c\u64cd\u4f5c\uff08\u7ec8\u7aef\u4e2d\u6267\u884c\uff09"),(0,l.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2aDjango\u9879\u76ee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"django-admin startproject mysite\n")),(0,l.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u63a5\u53e3\u7ec4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"django-admin startapp test_app\n")),(0,l.kt)("p",null,"\u542f\u52a8Django\u9879\u76ee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python manage.py runserver\n")),(0,l.kt)("p",null,"\u521b\u5efa\u7ba1\u7406\u5458\u8d26\u6237"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python manage.py createsuperuser\n")),(0,l.kt)("h2",{id:"rest_framework"},"rest_framework"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"INSTALLED_APPS = [\n    'rest_framework', #\u589e\u52a0\u8fd9\u4e00\u884c\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n]\n")),(0,l.kt)("h2",{id:"\u89e3\u51b3\u65f6\u533a\u95ee\u9898"},"\u89e3\u51b3\u65f6\u533a\u95ee\u9898"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"settings.py"),"\u4e2d\u4fee\u6539"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"TIME_ZONE = 'Asia/Shanghai' #\u65f6\u533a\u6539\u6210\u4e0a\u6d77\n# USE_TZ = True #\u8fd9\u884c\u6ce8\u91ca\n")),(0,l.kt)("h2",{id:"\u89e3\u51b3\u8de8\u57df"},"\u89e3\u51b3\u8de8\u57df"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"settings.py"),"\u4e2d\u4fee\u6539"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'corsheaders',  # \u8fd9\u91cc\u589e\u52a0\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u5934\u914d\u7f6e\n]\n\nMIDDLEWARE = [\n    #\u4e2d\u95f4\u4ef6\u4fee\u6539\u6210\u5982\u4e0b\n    'django.middleware.security.SecurityMiddleware',\n    'django.contrib.sessions.middleware.SessionMiddleware',\n    'corsheaders.middleware.CorsMiddleware',\n    'django.middleware.common.CommonMiddleware',\n    'django.middleware.csrf.CsrfViewMiddleware',\n    'django.contrib.auth.middleware.AuthenticationMiddleware',\n    'django.contrib.messages.middleware.MessageMiddleware',\n    'django.middleware.clickjacking.XFrameOptionsMiddleware',\n]\n")),(0,l.kt)("h2",{id:"django\u9ed8\u8ba4\u6837\u5f0f\u4e0d\u597d\u770b"},"Django\u9ed8\u8ba4\u6837\u5f0f\u4e0d\u597d\u770b"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"settings.py"),"\u4e2d\u4fee\u6539"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"INSTALLED_APPS = [\n    'simpleui', #\u589e\u52a0\u8fd9\u4e00\u884c\n    'mall.apps.MallConfig',\n    'rest_framework',\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'corsheaders',  # \u8fd9\u91cc\u589e\u52a0\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u5934\u914d\u7f6e\n]\n")),(0,l.kt)("aside",null," \ud83d\udca1 simpleui\u7684\u4e00\u4e9b\u57fa\u672c\u914d\u7f6e\u2b07\ufe0f\uff0c\u5728`settings.py`\u4e2d\u589e\u52a0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# \u53bb\u6389\u9ed8\u8ba4Logo\u6216\u6362\u6210\u81ea\u5df1Logo\u94fe\u63a5\nSIMPLEUI_LOGO = '<https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109211712667.png>'\n# \u9ed8\u8ba4\u8bed\u8a00\u6362\u6210\u4e2d\u6587\nLANGUAGE_CODE = 'zh-hans'\n")),(0,l.kt)("h2",{id:"django\u7684\u65f6\u95f4\u8fd4\u56de\u4e2d\u95f4\u5e26t"},"Django\u7684\u65f6\u95f4\u8fd4\u56de\u4e2d\u95f4\u5e26",(0,l.kt)("inlineCode",{parentName:"h2"},"T")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"settings.py"),"\u4e2d\u589e\u52a0\u5982\u4e0b\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"REST_FRAMEWORK = {\n    'DATETIME_FORMAT': \"%Y-%m-%d %H:%M:%S\",\n}\n")),(0,l.kt)("h2",{id:"\u6570\u636e\u5e93\u914d\u7f6e"},"\u6570\u636e\u5e93\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"DATABASES = {\n    'default': {\n        'OPTIONS': {'charset': 'utf8mb4'},\n        'ENGINE': 'django.db.backends.mysql',  # \u6570\u636e\u5e93\u5f15\u64ce\n        'NAME': 'mall',  # \u6570\u636e\u5e93\u540d\u79f0\n        'USER': 'root',  # \u8fde\u63a5\u6570\u636e\u5e93\u7684\u7528\u6237\u540d\u79f0\n        'PASSWORD': 'root',  # \u7528\u6237\u5bc6\u7801\n        'HOST': 'localhost',  # \u8bbf\u95ee\u7684\u6570\u636e\u5e93\u7684\u4e3b\u673a\u7684ip\u5730\u5740\n        'PORT': '3306',  # \u9ed8\u8ba4mysql\u8bbf\u95ee\u7aef\u53e3\n    },\n}\n")),(0,l.kt)("h2",{id:"mysql\u8f6cdjango\u6a21\u578b\u7c7b"},"Mysql\u8f6cDjango\u6a21\u578b\u7c7b"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2aDjango\u9879\u76ee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"django-admin startproject \u2018xxxx\u2018\n")),(0,l.kt)("p",null,"\u4fee\u6539setting\u6587\u4ef6\uff0c\u5728setting\u91cc\u9762\u8bbe\u7f6e\u4f60\u8981\u8fde\u63a5\u7684\u6570\u636e\u5e93\u7c7b\u578b\u548c\u8fde\u63a5\u540d\u79f0\uff0c\u5730\u5740\u4e4b\u7c7b\uff0c\u548c\u521b\u5efa\u65b0\u9879\u76ee\u7684\u65f6\u5019\u4e00\u81f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"DATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.mysql',\n        'NAME': 'sqlexam',\n        'USER': 'root',\n        'PASSWORD': 'root12345',\n        'HOST': '127.0.0.1',\n        'PORT': 3306\n    }\n}\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u6839\u636e\u6570\u636e\u5e93\u6570\u636e\u751f\u6210\u5bf9\u5e94\u7684models\u6a21\u578b\u6587\u4ef6"),(0,l.kt)("p",null,"1\u3001\u751f\u6210\u6a21\u578b\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"python3 manage.py inspectdb\n")),(0,l.kt)("p",null,"2\u3001\u5c06\u6a21\u578b\u6587\u4ef6\u5bfc\u5165\u5230app\u5f53\u4e2d"),(0,l.kt)("p",null,"\u521b\u5efaapp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"python3 manage.py startapp 'app\u540d\u5b57'\n")),(0,l.kt)("p",null,"\u5c06\u6a21\u578b\u5bfc\u5165\u521b\u5efa\u7684app\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"python3 manage.py inspectdb > app/models.py\n")),(0,l.kt)("h1",{id:"\u4fee\u6539\u6570\u636e\u5e93"},"\u4fee\u6539\u6570\u636e\u5e93"),(0,l.kt)("h2",{id:"\u65b9\u6cd5\u4e00"},"\u65b9\u6cd5\u4e00"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728nivicat\u4e2d\u76f4\u63a5\u76f4\u63a5\u6539\u52a8\u6570\u636e\u7ed3\u6784")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u7ec8\u7aef\u4e2d\u6267\u884c"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"python manage.py inspectdb\n")))))}g.isMDXComponent=!0}}]);