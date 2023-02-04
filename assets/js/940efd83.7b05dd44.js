"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1777],{24913:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>m,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var i=t(87462),l=(t(67294),t(3905));t(16758);const a={title:"Vimrc",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},m="Ch22. Vimrc",p={unversionedId:"others/Vim/ch22_vimrc",id:"others/Vim/ch22_vimrc",title:"Vimrc",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch22_vimrc.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch22_vimrc",permalink:"/docs/others/Vim/ch22_vimrc",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Vim/ch22_vimrc.md",tags:[{label:"VIM",permalink:"/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1675524891,formattedLastUpdatedAt:"2023\u5e742\u67084\u65e5",frontMatter:{title:"Vimrc",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"\u591a\u6587\u4ef6\u64cd\u4f5c",permalink:"/docs/others/Vim/ch21_multiple_file_operations"},next:{title:"Vim\u8f6f\u4ef6\u5305",permalink:"/docs/others/Vim/ch23_vim_packages"}},r={},o=[{value:"Vim\u5982\u4f55\u627e\u5230Vimrc",id:"vim\u5982\u4f55\u627e\u5230vimrc",level:2},{value:"\u5e94\u8be5\u628a\u4ec0\u4e48\u653e\u5728Vimrc\u4e2d\uff1f",id:"\u5e94\u8be5\u628a\u4ec0\u4e48\u653e\u5728vimrc\u4e2d",level:2},{value:"Vimrc\u57fa\u7840\u5185\u5bb9",id:"vimrc\u57fa\u7840\u5185\u5bb9",level:2},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:3},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:3},{value:"\u81ea\u5b9a\u4e49\u51fd\u6570",id:"\u81ea\u5b9a\u4e49\u51fd\u6570",level:3},{value:"\u81ea\u5b9a\u4e49\u547d\u4ee4",id:"\u81ea\u5b9a\u4e49\u547d\u4ee4",level:3},{value:"\u952e\u76d8\u6620\u5c04",id:"\u952e\u76d8\u6620\u5c04",level:3},{value:"\u7ec4\u7ec7\u7ba1\u7406Vimrc",id:"\u7ec4\u7ec7\u7ba1\u7406vimrc",level:2},{value:"\u5212\u5206\u60a8\u7684vimrc",id:"\u5212\u5206\u60a8\u7684vimrc",level:3},{value:"\u4fdd\u6301\u5355\u72ec\u7684\u4e00\u4e2aVimrc\u6587\u4ef6",id:"\u4fdd\u6301\u5355\u72ec\u7684\u4e00\u4e2avimrc\u6587\u4ef6",level:3},{value:"\u542f\u52a8Vim\u65f6\u52a0\u8f7d/\u4e0d\u52a0\u8f7dVimrc\u548c\u63d2\u4ef6",id:"\u542f\u52a8vim\u65f6\u52a0\u8f7d\u4e0d\u52a0\u8f7dvimrc\u548c\u63d2\u4ef6",level:2},{value:"\u806a\u660e\u5730\u914d\u7f6eVimrc",id:"\u806a\u660e\u5730\u914d\u7f6evimrc",level:2}],k={toc:o};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,i.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ch22-vimrc"},"Ch22. Vimrc"),(0,l.kt)("p",null,"\u5728\u5148\u524d\u7684\u7ae0\u8282\u4e2d\uff0c\u60a8\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528Vim\u3002\u5728\u672c\u7ae0\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u7ec4\u7ec7\u548c\u914d\u7f6eVimrc\u3002"),(0,l.kt)("h2",{id:"vim\u5982\u4f55\u627e\u5230vimrc"},"Vim\u5982\u4f55\u627e\u5230Vimrc"),(0,l.kt)("p",null,"\u5bf9\u4e8eVimrc\uff0c\u5e38\u89c1\u7684\u7406\u89e3\u662f\u5728\u6839\u76ee\u5f55\u4e0b\u6dfb\u52a0\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},".vimrc")," \u70b9\u6587\u4ef6\uff08\u6839\u636e\u60a8\u4f7f\u7528\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u6587\u4ef6\u8def\u5f84\u540d\u53ef\u80fd\u4e0d\u540c\uff09\u3002"),(0,l.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0cVim\u5728\u591a\u4e2a\u5730\u65b9\u67e5\u627evimrc\u6587\u4ef6\u3002\u4e0b\u9762\u662fVim\u68c0\u67e5\u7684\u8def\u5f84\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$VIMINIT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.vimrc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.vim/vimrc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$EXINIT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$HOME/.exrc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$VIMRUNTIME/default.vim"))),(0,l.kt)("p",null,"\u5f53\u60a8\u542f\u52a8Vim\u65f6\uff0c\u5b83\u5c06\u5728\u4e0a\u9762\u5217\u51fa\u76846\u4e2a\u4f4d\u7f6e\u6309\u987a\u5e8f\u68c0\u67e5vimrc\u6587\u4ef6\uff0c\u7b2c\u4e00\u4e2a\u88ab\u627e\u5230\u7684vimrc\u6587\u4ef6\u5c06\u88ab\u52a0\u8f7d\uff0c\u800c\u5176\u4f59\u7684\u5c06\u88ab\u5ffd\u7565\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0cVim\u5c06\u67e5\u627e\u73af\u5883\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"$VIMINIT"),"\u3002\u5982\u679c\u6ca1\u6709\u627e\u5230\uff0cVim\u5c06\u68c0\u67e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.vimrc"),"\u3002\u5982\u679c\u8fd8\u6ca1\u627e\u5230\uff0cVIm\u5c31\u68c0\u67e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.vim/vimrc"),"\u3002\u5982\u679cVim\u627e\u5230\u4e86vimrc\u6587\u4ef6\uff0c\u5b83\u5c31\u505c\u6b62\u67e5\u627e\uff0c\u5e76\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.vim/vimrc"),"\u3002"),(0,l.kt)("p",null,"\u5173\u4e8e\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"$VIMINIT")," \u662f\u4e00\u4e2a\u73af\u5883\u53d8\u91cf\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5b83\u662f\u672a\u5b9a\u4e49\u7684\u3002\u5982\u679c\u60a8\u60f3\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/dotfiles/testvimrc")," \u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"$VIMINTI")," \u7684\u503c\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5305\u542b\u90a3\u4e2avimrc\u8def\u5f84\u7684\u73af\u5883\u53d8\u91cf\u3002\u5f53\u60a8\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"export VIMINIT='let $MYVIMRC=\"$HOME/dotfiles/testvimrc\" | source $MYVIMRC'"),"\u540e\uff0cVIm\u5c06\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/dotfiles/testvimrc")," \u4f5c\u4e3a\u60a8\u7684vimrc\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u4f4d\u7f6e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.vimrc")," \u662f\u5f88\u591aVim\u7528\u6237\u4e60\u60ef\u4f7f\u7528\u7684\u8def\u5f84\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME")," \u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u662f\u60a8\u7684\u6839\u76ee\u5f55\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"~"),"\uff09\u3002\u5982\u679c\u60a8\u6709\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vimrc")," \u6587\u4ef6\uff0cVim\u5c06\u4f7f\u7528\u5b83\u4f5c\u4e3a\u60a8\u7684vimrc\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e09\u4e2a\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.vim/vimrc"),"\uff0c\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim")," \u76ee\u5f55\u4e2d\u3002\u60a8\u53ef\u80fd\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim")," \u76ee\u5f55\u7528\u4e8e\u5b58\u653e\u63d2\u4ef6\u3001\u81ea\u5b9a\u4e49\u811a\u672c\u3001\u6216\u89c6\u56fe\u6587\u4ef6\u3002\u6ce8\u610f\u8fd9\u91cc\u7684vimrc\u6587\u4ef6\u540d\u6ca1\u6709\u201c\u70b9\u201d\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.vim/.vimrc")," \u4e0d\u4f1a\u88ab\u8bc6\u522b\uff0c\u4f46 ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.vim/vimrc"),"\u80fd\u88ab\u8bc6\u522b\uff09\u3002"),(0,l.kt)("p",null,"\u7b2c\u56db\u4e2a\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"$EXINIT")," \u5de5\u4f5c\u65b9\u5f0f\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"$VIMINIT")," \u7c7b\u4f3c\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e94\u4e2a\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.exrc")," \u5de5\u4f5c\u65b9\u5f0f\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.vimrc")," \u7c7b\u4f3c\u3002"),(0,l.kt)("p",null,"\u7b2c\u516d\u4e2a\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"$VIMRUNTIME/defaults.vim")," \u662fVim\u7f16\u8bd1\u65f6\u81ea\u5e26\u7684\u9ed8\u8ba4vimrc\u6587\u4ef6\u3002\u5728\u6211\u7684\u7535\u8111\u4e2d\uff0c\u6211\u662f\u4f7f\u7528Homebrew\u5b89\u88c5\u7684Vim8.2\uff0c\u6240\u4ee5\u6211\u7684\u8def\u5f84\u662f\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/share/vim/vim82"),"\uff09\u3002\u5982\u679cVim\u5728\u524d5\u4e2a\u4f4d\u7f6e\u90fd\u6ca1\u6709\u627e\u5230vimrc\u6587\u4ef6\uff0c\u5b83\u5c06\u4f7f\u7528\u8fd9\u4e2aVim\u81ea\u5e26\u7684vimrc\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u5728\u672c\u7ae0\u5269\u4f59\u90e8\u5206\uff0c\u6211\u5c06\u5047\u8bbevimrc\u4f7f\u7528\u7684\u8def\u5f84\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vimrc"),"\u3002"),(0,l.kt)("h2",{id:"\u5e94\u8be5\u628a\u4ec0\u4e48\u653e\u5728vimrc\u4e2d"},"\u5e94\u8be5\u628a\u4ec0\u4e48\u653e\u5728Vimrc\u4e2d\uff1f"),(0,l.kt)("p",null,"\u6211\u521a\u5f00\u59cb\u914d\u7f6eVimrc\u65f6\uff0c\u66fe\u95ee\u8fc7\u4e00\u4e2a\u95ee\u9898\uff0c\u201c\u6211\u7a76\u7adf\u8be5\u628a\u4ec0\u4e48\u653e\u5728Vimrc\u6587\u4ef6\u4e2d\uff1f\u201d\u3002"),(0,l.kt)("p",null,"\u7b54\u6848\u662f\uff0c\u201c\u4efb\u4f55\u60a8\u60f3\u653e\u7684\u4e1c\u897f\u201d\u3002\xa0\u76f4\u63a5\u590d\u5236\u7c98\u8d34\u522b\u4eba\u7684vimrc\u6587\u4ef6\u7684\u786e\u662f\u4e00\u4e2a\u8bf1\u60d1\uff0c\u4f46\u60a8\u5e94\u5f53\u62b5\u5236\u8fd9\u4e2a\u8bf1\u60d1\u3002\u5982\u679c\u60a8\u4ecd\u7136\u575a\u6301\u4f7f\u7528\u522b\u4eba\u7684vimrc\u6587\u4ef6\uff0c\u786e\u4fdd\u60a8\u77e5\u9053\u8fd9\u4e2avimrc\u5e72\u4e86\u4ec0\u4e48\uff0c\u4e3a\u4ec0\u4e48\u4ed6/\u5979\u8981\u7528\u8fd9\u4e9b\u8bbe\u7f6e\uff1f\u4ee5\u53ca\u4ed6/\u5979\u5982\u4f55\u4f7f\u7528\u8fd9\u4e9b\u8bbe\u7f6e\uff1f\u8fd8\u6709\u6700\u91cd\u8981\u7684\u662f\uff0c\u8fd9\u4e2avimrc\u6587\u4ef6\u662f\u5426\u7b26\u5408\u4f60\u7684\u5b9e\u9645\u9700\u8981\uff1f\u522b\u4eba\u4f7f\u7528\u5e76\u4e0d\u4ee3\u8868\u60a8\u4e5f\u8981\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"vimrc\u57fa\u7840\u5185\u5bb9"},"Vimrc\u57fa\u7840\u5185\u5bb9"),(0,l.kt)("p",null,"\u7b80\u5355\u5730\u8bf4\uff0c\u4e00\u4e2avimrc\u662f\u4ee5\u4e0b\u5185\u5bb9\u7684\u96c6\u5408\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u547d\u4ee4"),(0,l.kt)("li",{parentName:"ul"},"\u952e\u76d8\u6620\u5c04")),(0,l.kt)("p",null,"\u5f53\u7136\u8fd8\u6709\u4e00\u4e9b\u4e0a\u9762\u6ca1\u6709\u63d0\u5230\u7684\u5185\u5bb9\uff0c\u4f46\u603b\u4f53\u8bf4\uff0c\u5df2\u7ecf\u6db5\u76d6\u4e86\u7edd\u5927\u90e8\u5206\u4f7f\u7528\u573a\u666f\u3002"),(0,l.kt)("h3",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728\u524d\u9762\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u66fe\u63d0\u5230\u5f88\u591a\u4e0d\u540c\u7684\u63d2\u4ef6\uff0c\u6bd4\u5982",(0,l.kt)("a",{parentName:"p",href:"https://github.com/junegunn/fzf.vim"},"fzf.vim"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/simnalamburt/vim-mundo"},"vim-mundo"),", \u8fd8\u6709 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tpope/vim-fugitive"},"vim-fugitive"),"."),(0,l.kt)("p",null,"\u5341\u5e74\u524d\uff0c\u7ba1\u7406\u63d2\u4ef6\u63d2\u4ef6\u662f\u4e00\u4e2a\u5669\u68a6\u3002\u4f46\u968f\u7740\u5f88\u591a\u73b0\u4ee3\u63d2\u4ef6\u7ba1\u7406\u5668\u7684\u5f00\u53d1\uff0c\u73b0\u5728\u5b89\u88c5\u63d2\u4ef6\u53ef\u4ee5\u5728\u51e0\u79d2\u5185\u5b8c\u6210\u3002\u6211\u73b0\u5728\u6b63\u5728\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://github.com/junegunn/vim-plug"},"vim-plug"),"\u4f5c\u4e3a\u6211\u7684\u63d2\u4ef6\u7ba1\u7406\u5668\uff0c\u6240\u4ee5\u6211\u5728\u672c\u8282\u4e2d\u5c06\u4f7f\u7528\u5b83\u3002\u76f8\u5173\u6982\u5ff5\u548c\u5176\u4ed6\u6d41\u884c\u7684\u63d2\u4ef6\u7ba1\u7406\u5668\u5e94\u8be5\u662f\u7c7b\u4f3c\u7684\u3002\u6211\u5f3a\u70c8\u5efa\u8bae\u60a8\u591a\u8bd5\u8bd5\u51e0\u4e2a\u63d2\u4ef6\u7ba1\u7406\u5668\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/VundleVim/Vundle.vim"},"vundle.vim")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tpope/vim-pathogen"},"vim-pathogen")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Shougo/dein.vim"},"dein.vim"))),(0,l.kt)("p",null,"\u9664\u4e86\u4e0a\u9762\u5217\u51fa\u7684\uff0c\u8fd8\u6709\u5f88\u591a\u63d2\u4ef6\u7ba1\u7406\u5668\uff0c\u53ef\u4ee5\u968f\u4fbf\u770b\u770b\u3002\u8981\u60f3\u5b89\u88c5 vim-plug\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662fUnix\uff0c\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim\n")),(0,l.kt)("p",null,"\u8981\u6dfb\u52a0\u65b0\u7684\u63d2\u4ef6\uff0c\u5c06\u60a8\u7684\u63d2\u4ef6\u540d(\u6bd4\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Plug 'github-username/repository-name'"),") \u653e\u7f6e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"call plug#begin()")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"call plug#end()")," \u4e4b\u95f4\u7684\u884c\u4e2d. \u6240\u4ee5\uff0c\u5982\u679c\u60a8\u60f3\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"emmet-vim")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"nerdtree"),"\uff0c\u5c06\u4e0b\u9762\u7684\u7247\u6bb5\u653e\u5230\u60a8\u7684vimrc\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"call plug#begin('~/.vim/plugged')\n  Plug 'mattn/emmet-vim'\n  Plug 'preservim/nerdtree'\ncall plug#end()\n")),(0,l.kt)("p",null,"\u7136\u540e\u4fdd\u5b58\u4fee\u6539\uff0c\u52a0\u8f7d\u5f53\u524dvimrc (",(0,l.kt)("inlineCode",{parentName:"p"},":source %"),"), \u7136\u540e\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":PlugInstall")," \u5b89\u88c5\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4ee5\u540e\u60a8\u60f3\u5220\u9664\u4e0d\u4f7f\u7528\u7684\u63d2\u4ef6\uff0c\u60a8\u53ea\u9700\u5c06\u63d2\u4ef6\u540d\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"call")," \u4ee3\u7801\u5757\u4e4b\u95f4\u79fb\u9664\uff0c\u4fdd\u5b58\u5e76\u52a0\u8f7d\uff0c\u7136\u540e\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":PlugClean")," \u547d\u4ee4\u5c06\u5b83\u4ece\u673a\u5668\u4e0a\u5220\u9664\u3002"),(0,l.kt)("p",null,"Vim 8 \u6709\u81ea\u5df1\u7684\u5185\u7f6e\u5305\u7ba1\u7406\u5668\u3002\u60a8\u53ef\u4ee5\u67e5\u9605 ",(0,l.kt)("inlineCode",{parentName:"p"},":h packages")," \u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002\u5728\u540e\u9762\u4e00\u7ae0\u4e2d\uff0c\u6211\u5c06\u5411\u60a8\u5c55\u793a\u5982\u4f55\u4f7f\u7528\u5b83\u3002"),(0,l.kt)("h3",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),(0,l.kt)("p",null,"\u5728\u4efb\u610f\u4e00\u4e2avimrc\u6587\u4ef6\u4e2d\u90fd\u53ef\u4ee5\u770b\u5230\u5927\u91cf\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," \u9009\u9879\u3002 \u5982\u679c\u60a8\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e2d\u8fd0\u884c set \u547d\u4ee4\uff0c\u5b83\u53ea\u662f\u6682\u65f6\u7684\u3002\u5f53\u60a8\u5173\u95edVim\uff0c\u8bbe\u7f6e\u5c31\u4f1a\u4e22\u5931\u3002\u6bd4\u5982\uff0c\u4e3a\u4e86\u907f\u514d\u60a8\u6bcf\u6b21\u8fd0\u884cVim\u65f6\u90fd\u5fc5\u987b\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":set relativenumber number")," \u547d\u4ee4\uff0c\u60a8\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u547d\u4ee4\u6dfb\u52a0\u5728vimrc\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set relativenumber number\n")),(0,l.kt)("p",null,"\u6709\u4e00\u4e9b\u8bbe\u7f6e\u9700\u8981\u60a8\u8d4b\u4e88\u4e00\u4e2a\u503c\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"set tabstop=2"),"\u3002\u60f3\u4e86\u89e3\u4e00\u4e2a\u8bbe\u7f6e\u53ef\u4ee5\u63a5\u6536\u4ec0\u4e48\u7c7b\u578b\u7684\u503c\uff0c\u53ef\u4ee5\u67e5\u770b\u5e2e\u52a9\u9875\u3002"),(0,l.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u6765\u4ee3\u66ff ",(0,l.kt)("inlineCode",{parentName:"p"},"set"),"\uff08\u786e\u4fdd\u5728\u9009\u9879\u524d\u6dfb\u52a0\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"&"),"\u53f7\uff09\u3002\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u8868\u8fbe\u5f0f\u8fdb\u884c\u8d4b\u503c\u3002\u6bd4\u5982\uff0c\u8981\u60f3\u4ec5\u5f53\u67d0\u4e2a\u8def\u5f84\u5b58\u5728\u65f6\uff0c\u624d\u5c06\u8be5\u8def\u5f84\u8d4b\u4e88 ",(0,l.kt)("inlineCode",{parentName:"p"},"'dictionary'")," \u9009\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'let s:english_dict = "/usr/share/dict/words"\n\nif filereadable(s:english_dict)\n  let &dictionary=s:english_dict\nendif\n')),(0,l.kt)("p",null,"\u5728\u540e\u9762\u7684\u7ae0\u8282\u4e2d\u60a8\u5c06\u4e86\u89e3\u5173\u4e8eVimscript\u8d4b\u503c\u548c\u6761\u4ef6\u7684\u77e5\u8bc6\u3002"),(0,l.kt)("p",null,"\u8981\u67e5\u770bVim\u4e2d\u6240\u6709\u53ef\u7528\u7684\u9009\u9879\uff0c\u67e5\u9605 ",(0,l.kt)("inlineCode",{parentName:"p"},":h E355"),"\u3002"),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u51fd\u6570"},"\u81ea\u5b9a\u4e49\u51fd\u6570"),(0,l.kt)("p",null,"Vimrc\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u7528\u6765\u653e\u7f6e\u81ea\u5b9a\u4e49\u51fd\u6570\u7684\u5730\u65b9\u3002\u5728\u540e\u9762\u7684\u7ae0\u8282\u4e2d\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u5199\u60a8\u81ea\u5df1\u7684Vimscript\u51fd\u6570\u3002"),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u547d\u4ee4"},"\u81ea\u5b9a\u4e49\u547d\u4ee4"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"command")," \u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u547d\u4ee4\u884c\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u663e\u793a\u4eca\u5929\u65e5\u671f\u7684\u57fa\u672c\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"GimmeDate"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':command! GimmeDate echo call("strftime", ["%F"])\n')),(0,l.kt)("p",null,"\u5f53\u60a8\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":GimmeDate"),' \u65f6\uff0cVim\u5c06\u663e\u793a\u4e00\u4e2a\u7c7b\u4f3c "2021-01-1"\u7684\u65e5\u671f\u3002'),(0,l.kt)("p",null,"\u8981\u521b\u5efa\u4e00\u4e2a\u53ef\u4ee5\u63a5\u6536\u8f93\u5165\u7684\u57fa\u672c\u547d\u4ee4\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"<args>")," \u3002\u5982\u679c\u60a8\u60f3\u5411 ",(0,l.kt)("inlineCode",{parentName:"p"},"GimmeDate")," \u4f20\u9012\u4e00\u4e2a\u65f6\u95f4/\u65e5\u671f\u683c\u5f0f\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':command! GimmeDate echo call("strftime", [<args>])\n\n:GimmeDate "%F"\n" 2020-01-01\n\n:GimmeDate "%H:%M"\n" 11:30\n')),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u9650\u5b9a\u53c2\u6570\u7684\u6570\u76ee\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"-nargs")," \u6807\u5fd7\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"-nargs=0")," \u8868\u793a\u6ca1\u6709\u53c2\u6570\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"-nargs=1")," \u8868\u793a\u4f20\u90121\u4e2a\u53c2\u6570\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"-nargs=+")," \u8868\u793a\u81f3\u5c111\u4e2a\u53c2\u6570\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"-nargs=*")," \u8868\u793a\u4f20\u9012\u4efb\u610f\u6570\u91cf\u7684\u53c2\u6570\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"-nargs=?")," \u8868\u793a\u4f20\u90120\u4e2a\u62161\u4e2a\u53c2\u6570\u3002\u5982\u679c\u60a8\u60f3\u4f20\u9012n\u4e2a\u53c2\u6570\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"-nargs=n"),"\uff08\u8fd9\u91cc ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u662f\u4e00\u4e2a\u4efb\u610f\u6574\u6570\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<args>")," \u6709\u4e24\u4e2a\u53d8\u4f53\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"<f-args>")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"<q-args>")," \u3002\u524d\u8005\u7528\u6765\u5411Vimscript\u51fd\u6570\u4f20\u9012\u53c2\u6570\uff0c\u540e\u8005\u7528\u6765\u5c06\u7528\u6237\u8f93\u5165\u81ea\u52a8\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':command! -nargs=1 Hello echo "Hello " . <args>\n:Hello "Iggy"\n" returns \'Hello Iggy\'\n\n:Hello Iggy\n" Undefined variable error\n')),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"q-args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':command! -nargs=1 Hello echo "Hello " . <q-args>\n:Hello Iggy\n" returns \'Hello Iggy\'\n')),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"f-args"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':function! PrintHello(person1, person2)\n:  echo "Hello " . a:person1 . " and " . a:person2\n:endfunction\n\n:command! -nargs=* Hello call PrintHello(<f-args>)\n\n:Hello Iggy1 Iggy2\n" returns "Hello Iggy1 and Iggy2"\n')),(0,l.kt)("p",null,"\u5f53\u60a8\u5b66\u4e86\u5173\u4e8eVimscript\u51fd\u6570\u7684\u7ae0\u8282\u540e\uff0c\u4e0a\u9762\u7684\u51fd\u6570\u5c06\u66f4\u6709\u610f\u4e49\u3002"),(0,l.kt)("p",null,"\u67e5\u9605 ",(0,l.kt)("inlineCode",{parentName:"p"},":h command")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},":args")," \u4e86\u89e3\u66f4\u591a\u5173\u4e8ecommand\u548cargs\u7684\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"\u952e\u76d8\u6620\u5c04"},"\u952e\u76d8\u6620\u5c04"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u53d1\u73b0\u60a8\u91cd\u590d\u5730\u6267\u884c\u4e00\u4e9b\u76f8\u540c\u7684\u590d\u6742\u64cd\u4f5c\uff0c\u90a3\u4e48\u4e3a\u8fd9\u4e9b\u590d\u6742\u64cd\u4f5c\u5efa\u7acb\u4e00\u4e2a\u952e\u76d8\u6620\u5c04\u5c06\u4f1a\u5f88\u6709\u7528\uff1a"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c\u5728\u6211\u7684vimrc\u6587\u4ef6\u4e2d\u67092\u4e2a\u952e\u76d8\u6620\u5c04\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nnoremap <silent> <C-f> :GFiles<CR>\n\nnnoremap <Leader>tn :call ToggleNumber()<CR>\n")),(0,l.kt)("p",null,"\u5728\u7b2c\u4e00\u4e2a\u4e2d\uff0c\u6211\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-F")," \u6620\u5c04\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/junegunn/fzf.vim"},"fzf.vim")," \u63d2\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},":Gfiles")," \u547d\u4ee4(\u5feb\u901f\u641c\u7d22Git\u6587\u4ef6)\u4e0a\u3002\u5728\u7b2c\u4e8c\u4e2a\u4e2d\uff0c\u6211\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"<leader>tn")," \u6620\u5c04\u5230\u8c03\u7528\u4e00\u4e2a\u81ea\u5b9a\u4e49\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"ToggleNumber")," \uff08\u5207\u6362 ",(0,l.kt)("inlineCode",{parentName:"p"},"norelativenumber")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"relativenumber")," \u9009\u9879\uff09\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-f")," \u6620\u5c04\u8986\u76d6\u4e86Vim\u7684\u539f\u751f\u7684\u9875\u9762\u6eda\u52a8\u3002\u5982\u679c\u53d1\u751f\u51b2\u7a81\uff0c\u60a8\u7684\u6620\u5c04\u5c06\u4f1a\u8986\u76d6Vim\u7684\u8bbe\u7f6e\u3002\u56e0\u4e3a\u4ece\u51e0\u4e4e\u4ece\u6765\u4e0d\u7528Vim\u539f\u751f\u7684\u9875\u9762\u6eda\u52a8\u529f\u80fd\uff0c\u6240\u4ee5\u6211\u8ba4\u4e3a\u53ef\u4ee5\u5b89\u5168\u5730\u8986\u76d6\u5b83\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"<Leader>tn"),' \u4e2d\u7684 "leader" \u952e\u5230\u5e95\u662f\u4ec0\u4e48?'),(0,l.kt)("p",null,"Vim\u6709\u4e00\u4e2aleader\u952e\u7528\u6765\u8f85\u52a9\u952e\u76d8\u6620\u5c04\u3002\u6bd4\u5982\uff0c\u6211\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"<leader>tn")," \u6620\u5c04\u4e3a\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"ToggleNumber()")," \u51fd\u6570\u3002\u5982\u679c\u6ca1\u6709leader\u952e\uff0c\u6211\u53ef\u80fd\u4f1a\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"tn"),"\uff0c\u4f46Vim\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"t"),' \u5df2\u7ecf\u7528\u505a\u5176\u4ed6\u529f\u80fd\uff08"till"\u641c\u7d22\u5bfc\u822a\u547d\u4ee4\uff09\u4e86\u3002\u6709\u4e86leader\u952e\uff0c\u6211\u73b0\u5728\u5148\u6309\u5b9a\u4e49\u597d\u7684leader\u952e\u4f5c\u4e3a\u5f00\u5934\uff0c\u7136\u540e\u6309 ',(0,l.kt)("inlineCode",{parentName:"p"},"tn"),"\uff0c\u800c\u4e0d\u7528\u5e72\u6270\u5df2\u7ecf\u5b58\u5728\u7684\u547d\u4ee4\u3002\u60a8\u53ef\u4ee5\u8bbe\u7f6eleader\u952e\u4f5c\u4e3a\u60a8\u6620\u5c04\u7684\u8fde\u7eed\u6309\u952e\u7684\u7b2c\u4e00\u4e2a\u6309\u952e\u3002\u9ed8\u8ba4Vim\u4f7f\u7528\u53cd\u659c\u6760\u4f5c\u4e3aleader\u952e\uff08\u6240\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"<Leader>tn"),' \u4f1a\u53d8\u6210 "\u53cd\u659c\u6760-t-n"\uff09\u3002'),(0,l.kt)("p",null,"\u6211\u4e2a\u4eba\u559c\u6b22\u4f7f\u7528\u7a7a\u683c ",(0,l.kt)("inlineCode",{parentName:"p"},"<Space>")," \u4f5c\u4e3aleader\u952e\uff0c\u4ee3\u66ff\u9ed8\u8ba4\u7684\u53cd\u659c\u6760\u3002\u8981\u60f3\u6539\u53d8\u60a8\u7684leader\u952e\uff0c\u5c06\u4e0b\u9762\u7684\u6587\u672c\u6dfb\u52a0\u5230\u60a8\u7684vimrc\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'let mapleader = "\\<space>"\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"nnoremap")," \u547d\u4ee4\u53ef\u4ee5\u5206\u89e3\u4e3a\u4e09\u4e2a\u90e8\u5206\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n")," \u8868\u793a\u666e\u901a\u6a21\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nore")," \u8868\u793a\u7981\u6b62\u9012\u5f52\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," \u662f\u952e\u76d8\u6620\u5c04\u547d\u4ee4\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"nnoremap"),"\uff0c\u60a8\u81f3\u5c11\u4e5f\u5f97\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"nmap")," (",(0,l.kt)("inlineCode",{parentName:"p"},"nmap <silent> <C-f> :Gfiles<CR>"),")\u3002\u4f46\u662f\uff0c\u6700\u597d\u8fd8\u662f\u4f7f\u7528\u7981\u6b62\u9012\u5f52\u7684\u7248\u672c\uff0c\u8fd9\u6837\u662f\u4e3a\u4e86\u907f\u514d\u952e\u76d8\u6620\u5c04\u65f6\u6f5c\u5728\u7684\u65e0\u9650\u5faa\u73af\u98ce\u9669\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u8fdb\u884c\u952e\u76d8\u6620\u5c04\u65f6\u4e0d\u4f7f\u7528\u7981\u6b62\u9012\u5f52\uff0c\u4e0b\u9762\u4f8b\u5b50\u6f14\u793a\u4e86\u4f1a\u53d1\u751f\u4ec0\u4e48\u3002\u5047\u8bbe\u60a8\u60f3\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"B")," \u6dfb\u52a0\u4e00\u4e2a\u952e\u76d8\u6620\u5c04\uff0c\u7528\u6765\u5728\u4e00\u884c\u7684\u672b\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u5206\u53f7\uff0c\u7136\u540e\u8df3\u56de\u524d\u4e00\u4e2a\u8bcd\u7ec4\uff08\u56de\u60f3\u4e00\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"B")," \u662fVim\u666e\u901a\u6a21\u5f0f\u7684\u4e00\u4e2a\u5bfc\u822a\u547d\u4ee4\uff0c\u7528\u6765\u8df3\u56de\u524d\u4e00\u4e2a\u8bcd\u7ec4)\u3002 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nmap B A;<esc>B\n")),(0,l.kt)("p",null,"\u5f53\u60a8\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"B")," ...\u54e6\u8c41\uff0cVim\u5f00\u59cb\u5931\u63a7\u4e86\uff0c\u5f00\u59cb\u65e0\u6b62\u5c3d\u7684\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},";"),"\uff08\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-c"),"\u7ec8\u6b62\uff09\u3002\u4e3a\u4ec0\u4e48\u4f1a\u53d1\u751f\u8fd9\u6837\u7684\u60c5\u51b5\uff1f\u56e0\u4e3a\u5728\u952e\u76d8\u6620\u5c04 ",(0,l.kt)("inlineCode",{parentName:"p"},"A;<esc>B"),"\u4e2d\uff0c\u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"B"),"\u4e0d\u518d\u662fVim\u539f\u751f\u7684\u5bfc\u822a\u547d\u4ee4\uff0c\u5b83\u5df2\u7ecf\u88ab\u6620\u5c04\u5230\u60a8\u521a\u624d\u521b\u5efa\u7684\u952e\u76d8\u6620\u5c04\u4e2d\u4e86\u3002\u8fd9\u662f\u60a8\u5b9e\u9645\u4e0a\u6267\u884c\u7684\u64cd\u4f5c\u5e8f\u5217\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"A;<esc>A;<esc>A;<esc>A;esc>...\n")),(0,l.kt)("p",null,"\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u60a8\u9700\u8981\u6307\u5b9a\u952e\u76d8\u6620\u5c04\u7981\u6b62\u9012\u5f52\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nnoremap B A;<esc>B\n")),(0,l.kt)("p",null,"\u73b0\u5728\u518d\u6309\u4e00\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"B")," \u8bd5\u8bd5\u3002\u8fd9\u4e00\u6b21\u5b83\u6210\u529f\u5730\u5728\u884c\u5c3e\u6dfb\u52a0\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},";"),"\uff0c\u7136\u540e\u8df3\u56de\u5230\u524d\u4e00\u4e2a\u8bcd\u7ec4\u3002\u8fd9\u4e2a\u6620\u5c04\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"B")," \u5c31\u8868\u793aVim\u539f\u751f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"B"),"\u4e86\u3002"),(0,l.kt)("p",null,"Vim\u9488\u5bf9\u4e0d\u540c\u7684\u6a21\u5f0f\u6709\u4e0d\u540c\u7684\u952e\u76d8\u6620\u5c04\u547d\u4ee4\u3002\u5982\u679c\u60a8\u60f3\u521b\u5efa\u4e00\u4e2a\u63d2\u5165\u6a21\u5f0f\u4e0b\u7684\u952e\u76d8\u6620\u5c04 ",(0,l.kt)("inlineCode",{parentName:"p"},"jk"),"\uff0c\u7528\u6765\u9000\u51fa\u63d2\u5165\u6a21\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"inoremap jk <esc>\n")),(0,l.kt)("p",null,"\u5176\u4ed6\u6a21\u5f0f\u7684\u952e\u76d8\u6620\u5c04\u547d\u4ee4\u6709\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"map"),"\uff08\u666e\u901a\u3001\u53ef\u89c6\u3001\u9009\u62e9\u3001\u4ee5\u53ca\u64cd\u4f5c\u7b26\u7b49\u5f85\u6a21\u5f0f\uff09\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"vmap"),"\uff08\u53ef\u89c6\u3001\u9009\u62e9\uff09\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"smap"),"\uff08\u9009\u62e9\uff09\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"xmap"),"\uff08\u53ef\u89c6\uff09\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"omap"),"\uff08\u64cd\u4f5c\u7b26\u7b49\u5f85\u6a21\u5f0f\uff09\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"map!"),"\uff08\u63d2\u5165\u3001\u547d\u4ee4\u884c\uff09\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"lmap"),"\uff08\u63d2\u5165\uff0c\u547d\u4ee4\u884c\uff0cLang-arg\u6a21\u5f0f\uff09\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"cmap"),"\uff08\u547d\u4ee4\u884c\uff09\uff0c \u8fd8\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"tmap"),"\uff08\u7ec8\u7aef\u4efb\u52a1\uff09\u3002\u5728\u8fd9\u91cc\u6211\u4e0d\u4f1a\u8be6\u7ec6\u7684\u8bb2\u89e3\u5b83\u4eec\uff0c\u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u67e5\u9605 ",(0,l.kt)("inlineCode",{parentName:"p"},":h map.txt"),"\u3002"),(0,l.kt)("p",null,"\u521b\u5efa\u6700\u76f4\u89c2\u3001\u6700\u4e00\u81f4\u3001\u6700\u6613\u4e8e\u8bb0\u5fc6\u7684\u952e\u76d8\u6620\u5c04\u3002"),(0,l.kt)("h2",{id:"\u7ec4\u7ec7\u7ba1\u7406vimrc"},"\u7ec4\u7ec7\u7ba1\u7406Vimrc"),(0,l.kt)("p",null,"\u4e00\u6bb5\u65f6\u5019\u952e\uff0c\u60a8\u7684vimrc\u6587\u4ef6\u5c31\u4f1a\u53d8\u5927\u4e14\u590d\u6742\u5f97\u96be\u4ee5\u9605\u8bfb\u3002\u6709\u4e24\u79cd\u65b9\u6cd5\u8ba9\u60a8\u7684vimrc\u6587\u4ef6\u4fdd\u6301\u6574\u6d01\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u60a8\u7684vimrc\u6587\u4ef6\u5212\u5206\u4e3a\u51e0\u4e2a\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u6298\u53e0\u60a8\u7684vimrc\u6587\u4ef6")),(0,l.kt)("h3",{id:"\u5212\u5206\u60a8\u7684vimrc"},"\u5212\u5206\u60a8\u7684vimrc"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528Vim\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},":source")," \u547d\u4ee4\u5c06\u60a8\u7684vimrc\u6587\u4ef6\u5212\u5206\u4e3a\u591a\u4e2a\u6587\u4ef6\u3002\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u6839\u636e\u7ed9\u5b9a\u7684\u6587\u4ef6\u53c2\u6570\uff0c\u8bfb\u53d6\u6587\u4ef6\u4e2d\u7684\u547d\u4ee4\u884c\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim")," \u4e0b\u521b\u5efa\u4e00\u4e2a\u5b50\u6587\u4ef6\u5939\uff0c\u53d6\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"/settings"),"\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/settings"),"\uff09\u3002\u540d\u5b57\u53ef\u4ee5\u53d6\u4e3a\u4efb\u610f\u60a8\u559c\u6b22\u7684\u540d\u5b57\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u4f60\u5728\u8fd9\u4e2a\u6587\u4ef6\u5939\u4e0b\u521b\u5efa4\u4e2a\u6587\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9\u63d2\u4ef6 (",(0,l.kt)("inlineCode",{parentName:"li"},"~/.vim/settings/plugins.vim"),")."),(0,l.kt)("li",{parentName:"ul"},"\u901a\u7528\u8bbe\u7f6e (",(0,l.kt)("inlineCode",{parentName:"li"},"~/.vim/settings/configs.vim"),")."),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u51fd\u6570 (",(0,l.kt)("inlineCode",{parentName:"li"},"~/.vim/settings/functions.vim"),")."),(0,l.kt)("li",{parentName:"ul"},"\u952e\u76d8\u6620\u5c04 (",(0,l.kt)("inlineCode",{parentName:"li"},"~/.vim/settings/mappings.vim"),") .")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vimrc")," \u91cc\u9762\u6dfb\u52a0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"source $HOME/.vim/settings/plugins.vim\nsource $HOME/.vim/settings/configs.vim\nsource $HOME/.vim/settings/functions.vim\nsource $HOME/.vim/settings/mappings.vim\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/settings/plugins.vim")," \u91cc\u9762:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"call plug#begin('~/.vim/plugged')\n  Plug 'mattn/emmet-vim'\n  Plug 'preservim/nerdtree'\ncall plug#end()\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/settings/configs.vim")," \u91cc\u9762:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set nocompatible\nset relativenumber\nset number\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/settings/functions.vim")," \u91cc\u9762:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"function! ToggleNumber()\n  if(&relativenumber == 1)\n    set norelativenumber\n  else\n    set relativenumber\n  endif\nendfunc\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/settings/mappings.vim")," \u91cc\u9762:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"inoremap jk <esc>\nnnoremap <silent> <C-f> :GFiles<CR>\nnnoremap <Leader>tn :call ToggleNumber()<CR>\n")),(0,l.kt)("p",null,"\u8fd9\u6837\u60a8\u7684vimrc\u6587\u4ef6\u4f9d\u7136\u80fd\u591f\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f46\u73b0\u5728\u5b83\u53ea\u67094\u884c\u4e86\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u8fd9\u6837\u7684\u8bbe\u7f6e\uff0c\u60a8\u53ef\u4ee5\u8f7b\u6613\u77e5\u9053\u5230\u54ea\u53bb\u4fee\u6539\u914d\u7f6e\u3002\u5982\u679c\u60a8\u8981\u6dfb\u52a0\u4e00\u4e9b\u952e\u76d8\u6620\u5c04\uff0c\u5c31\u5c06\u5b83\u4eec\u6dfb\u52a0\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/mappings.vim")," \u6587\u4ef6\u4e2d\u3002\u4ee5\u540e\uff0c\u5f53\u60a8\u7684vimrc\u53d8\u5927\u65f6\uff0c\u60a8\u603b\u662f\u53ef\u4ee5\u65b0\u5efa\u51e0\u4e2a\u5b50\u6587\u4ef6\u6765\u7f29\u5c0f\u5b83\u7684\u5927\u5c0f\u3002\u6bd4\u5982\uff0c\u5982\u679c\u60a8\u60f3\u4e3a\u4e3b\u9898\u914d\u8272\u521b\u5efa\u76f8\u5173\u8bbe\u7f6e\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/settings/themes.vim"),"\u3002"),(0,l.kt)("h3",{id:"\u4fdd\u6301\u5355\u72ec\u7684\u4e00\u4e2avimrc\u6587\u4ef6"},"\u4fdd\u6301\u5355\u72ec\u7684\u4e00\u4e2aVimrc\u6587\u4ef6"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u503e\u5411\u4e8e\u4fdd\u6301\u4e00\u4e2a\u5355\u72ec\u7684vimrc\u6587\u4ef6\uff0c\u4ee5\u4f7f\u5b83\u66f4\u52a0\u4fbf\u4e8e\u643a\u5e26\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6807\u5fd7\u6298\u53e0\u8ba9\u5b83\u4fdd\u6301\u6709\u5e8f\u3002\u5728vimrc\u6587\u4ef6\u7684\u9876\u90e8\u6dfb\u52a0\u4e00\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'" setup folds {{{\naugroup filetype_vim\n  autocmd!\n  autocmd FileType vim setlocal foldmethod=marker\naugroup END\n" }}}\n')),(0,l.kt)("p",null,"Vim\u80fd\u591f\u68c0\u6d4b\u5f53\u524dbuffer\u6240\u5c5e\u7684\u6587\u4ef6\u7c7b\u578b (",(0,l.kt)("inlineCode",{parentName:"p"},":set filetype?"),"). \u5982\u679c\u53d1\u73b0\u5c5e\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"vim")," \u7c7b\u578b\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6807\u5fd7\u6298\u53e0\u3002\u56de\u60f3\u4e00\u4e2a\u6807\u5fd7\u6298\u53e0\u7684\u7528\u6cd5\uff0c\u5b83\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"{{{")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"}}}")," \u6765\u6307\u660e\u6298\u53e0\u7684\u5f00\u59cb\u548c\u7ed3\u675f\u3002"),(0,l.kt)("p",null,"\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"{{{")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"}}}")," \u6807\u5fd7\u5c06\u60a8\u7684vimrc\u6587\u4ef6\u5176\u4ed6\u90e8\u5206\u6298\u53e0\u8d77\u6765\u3002(\u522b\u5fd8\u4e86\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},'"')," \u5bf9\u6807\u5fd7\u8fdb\u884c\u6ce8\u91ca):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'" setup folds {{{\naugroup filetype_vim\n  autocmd!\n  autocmd FileType vim setlocal foldmethod=marker\naugroup END\n" }}}\n\n" plugins {{{\ncall plug#begin(\'~/.vim/plugged\')\n  Plug \'mattn/emmet-vim\'\n  Plug \'preservim/nerdtree\'\ncall plug#end()\n" }}}\n\n" configs {{{\nset nocompatible\nset relativenumber\nset number\n" }}}\n\n" functions {{{\nfunction! ToggleNumber()\n  if(&relativenumber == 1)\n    set norelativenumber\n  else\n    set relativenumber\n  endif\nendfunc\n" }}}\n\n" mappings {{{\ninoremap jk <esc>\nnnoremap <silent> <C-f> :GFiles<CR>\nnnoremap <Leader>tn :call ToggleNumber()<CR>\n" }}}\n')),(0,l.kt)("p",null,"\u60a8\u7684vimrc\u6587\u4ef6\u5c06\u4f1a\u770b\u8d77\u6765\u7c7b\u4f3c\u4e0b\u9762\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+-- 6 lines: setup folds -----\n\n+-- 6 lines: plugins ---------\n\n+-- 5 lines: configs ---------\n\n+-- 9 lines: functions -------\n\n+-- 5 lines: mappings --------\n")),(0,l.kt)("h2",{id:"\u542f\u52a8vim\u65f6\u52a0\u8f7d\u4e0d\u52a0\u8f7dvimrc\u548c\u63d2\u4ef6"},"\u542f\u52a8Vim\u65f6\u52a0\u8f7d/\u4e0d\u52a0\u8f7dVimrc\u548c\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u8981\u542f\u52a8Vim\u65f6\uff0c\u65e2\u4e0d\u52a0\u8f7dVimrc\uff0c\u4e5f\u4e0d\u52a0\u8f7d\u63d2\u4ef6\uff0c\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim -u NONE\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u8981\u542f\u52a8Vim\u65f6\uff0c\u4e0d\u52a0\u8f7dVimrc\uff0c\u4f46\u52a0\u8f7d\u63d2\u4ef6\uff0c\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim -u NORC\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u8981\u542f\u52a8Vim\u65f6\uff0c\u52a0\u8f7dVimrc\uff0c\u4f46\u4e0d\u52a0\u8f7d\u63d2\u4ef6\uff0c\u8fd0\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim --noplugin\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u8981Vim\u542f\u52a8\u52a0\u8f7d\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"\u5176\u4ed6\u7684")," vimrc, \u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vimrc-backup"),", \u8fd0\u884c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim -u ~/.vimrc-backup\n")),(0,l.kt)("h2",{id:"\u806a\u660e\u5730\u914d\u7f6evimrc"},"\u806a\u660e\u5730\u914d\u7f6eVimrc"),(0,l.kt)("p",null,"Vimrc\u662f\u5b9a\u5236Vim\u65f6\u7684\u4e00\u4e2a\u91cd\u8981\u7ec4\u4ef6\uff0c\u5b66\u4e60\u6784\u5efa\u60a8\u7684Vimrc\u6700\u597d\u662f\u9996\u5148\u9605\u8bfb\u4ed6\u4eba\u7684vimrc\u6587\u4ef6\uff0c\u7136\u540e\u9010\u6e10\u5730\u5efa\u7acb\u81ea\u5df1\u7684\u3002\u6700\u597d\u7684vimrc\u5e76\u4e0d\u662f\u8c01\u8c01\u8c01\u4f7f\u7528\u7684\uff0c\u800c\u662f\u6700\u9002\u5408\u60a8\u7684\u5de5\u4f5c\u9700\u8981\u548c\u7f16\u8f91\u98ce\u683c\u7684\u3002"))}d.isMDXComponent=!0}}]);