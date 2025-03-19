"use strict";(self.webpackChunkalndaly_github_io=self.webpackChunkalndaly_github_io||[]).push([[5140],{3881:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(8101);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}},4456:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"others/Github/gitflow","title":"Gitflow Workflow","description":"Git\u76f8\u5173\u6587\u6863","source":"@site/docs/others/Github/gitflow.md","sourceDirName":"others/Github","slug":"/others/Github/gitflow","permalink":"/en/docs/others/Github/gitflow","draft":false,"unlisted":false,"editUrl":"https://github.com/Alndaly/alndaly.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/others/Github/gitflow.md","tags":[{"inline":true,"label":"git","permalink":"/en/docs/tags/git"}],"version":"current","lastUpdatedAt":1742396220000,"frontMatter":{"title":"Gitflow Workflow","date":"2022-04-05T17:16:27.000Z","tags":["git"],"description":"Git\u76f8\u5173\u6587\u6863"},"sidebar":"anyThing","previous":{"title":"Forking Workflow","permalink":"/en/docs/others/Github/forking workflow"},"next":{"title":"\u4f18\u96c5\u7684\u63d0\u4ea4\u4f60\u7684 Git Commit Message","permalink":"/en/docs/others/Github/standard"}}');var r=i(5105),s=i(3881);const a={title:"Gitflow Workflow",date:new Date("2022-04-05T17:16:27.000Z"),tags:["git"],description:"Git\u76f8\u5173\u6587\u6863"},o="Gitflow Workflow",c={},l=[{value:"What is Gitflow?",id:"what-is-gitflow",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Develop and main branches",id:"develop-and-main-branches",level:3},{value:"Feature branches",id:"feature-branches",level:2},{value:"Creating a feature branch",id:"creating-a-feature-branch",level:3},{value:"Finishing a feature branch",id:"finishing-a-feature-branch",level:3},{value:"Release branches",id:"release-branches",level:2},{value:"Hotfix branches",id:"hotfix-branches",level:2},{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"gitflow-workflow",children:"Gitflow Workflow"})}),"\n",(0,r.jsxs)(n.p,{children:["Gitflow is a legacy Git workflow that was originally a disruptive and novel strategy for managing Git branches. Gitflow has fallen in popularity in favor of ",(0,r.jsx)(n.a,{href:"https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development",children:"trunk-based workflows"}),", which are now considered best practices for modern continuous software development and ",(0,r.jsx)(n.a,{href:"https://www.atlassian.com/devops/what-is-devops",children:"DevOps"})," practices. Gitflow also can be challenging to use with ",(0,r.jsx)(n.a,{href:"https://www.atlassian.com/continuous-delivery",children:"CI/CD"}),". This post details Gitflow for historical purposes."]}),"\n",(0,r.jsx)(n.h2,{id:"what-is-gitflow",children:"What is Gitflow?"}),"\n",(0,r.jsxs)(n.p,{children:["Giflow is an alternative Git branching model that involves the use of feature branches and multiple primary branches. It was first published and made popular by ",(0,r.jsx)(n.a,{href:"http://nvie.com/posts/a-successful-git-branching-model/",children:"Vincent Driessen at nvie"}),". Compared to trunk-based development, Giflow has numerous, longer-lived branches and larger commits. Under this model, developers create a feature branch and delay merging it to the main trunk branch until the feature is complete. These long-lived feature branches require more collaboration to merge and have a higher risk of deviating from the trunk branch. They can also introduce conflicting updates."]}),"\n",(0,r.jsxs)(n.p,{children:["Gitflow can be used for projects that have a scheduled release cycle and for the ",(0,r.jsx)(n.a,{href:"https://www.atlassian.com/devops/what-is-devops/devops-best-practices",children:"DevOps best practice"})," of ",(0,r.jsx)(n.a,{href:"https://www.atlassian.com/continuous-delivery",children:"continuous delivery"}),". This workflow doesn\u2019t add any new concepts or commands beyond what\u2019s required for the ",(0,r.jsx)(n.a,{href:"https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow",children:"Feature Branch Workflow"}),". Instead, it assigns very specific roles to different branches and defines how and when they should interact. In addition to ",(0,r.jsx)(n.code,{children:"feature"})," branches, it uses individual branches for preparing, maintaining, and recording releases. Of course, you also get to leverage all the benefits of the Feature Branch Workflow: pull requests, isolated experiments, and more efficient collaboration."]}),"\n",(0,r.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(n.p,{children:["Gitflow is really just an abstract idea of a Git workflow. This means it dictates what kind of branches to set up and how to merge them together. We will touch on the purposes of the branches below. The git-flow toolset is an actual command line tool that has an installation process. The installation process for git-flow is straightforward. Packages for git-flow are available on multiple operating systems. On OSX systems, you can execute ",(0,r.jsx)(n.code,{children:"brew install git-flow"}),". On windows you will need to ",(0,r.jsx)(n.a,{href:"https://git-scm.com/download/win",children:"download and install git-flow"}),". After installing git-flow you can use it in your project by executing ",(0,r.jsx)(n.code,{children:"git flow init"}),". Git-flow is a wrapper around Git. The ",(0,r.jsx)(n.code,{children:"git flow init"})," command is an extension of the default ",(0,r.jsx)(n.code,{children:"[git init](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init)"})," command and doesn't change anything in your repository other than creating branches for you."]}),"\n",(0,r.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://wac-cdn.atlassian.com/dam/jcr:a13c18d6-94f3-4fc4-84fb-2b8f1b2fd339/01%20How%20it%20works.svg?cdnVersion=116",alt:"Git flow workflow - Historical Branches"})}),"\n",(0,r.jsx)(n.h3,{id:"develop-and-main-branches",children:"Develop and main branches"}),"\n",(0,r.jsxs)(n.p,{children:["Instead of a single ",(0,r.jsx)(n.code,{children:"main"})," branch, this workflow uses two branches to record the history of the project. The ",(0,r.jsx)(n.code,{children:"main"})," branch stores the official release history, and the ",(0,r.jsx)(n.code,{children:"develop"})," branch serves as an integration branch for features. It's also convenient to tag all commits in the ",(0,r.jsx)(n.code,{children:"main"})," branch with a version number."]}),"\n",(0,r.jsxs)(n.p,{children:["The first step is to complement the default ",(0,r.jsx)(n.code,{children:"main"})," with a ",(0,r.jsx)(n.code,{children:"develop"}),"branch. A simple way to do this is for one developer to create an empty ",(0,r.jsx)(n.code,{children:"develop"})," branch locally and push it to the server:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"git branch develop\ngit push -u origin develop\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This branch will contain the complete history of the project, whereas ",(0,r.jsx)(n.code,{children:"main"})," will contain an abridged version. Other developers should now clone the central repository and create a tracking branch for ",(0,r.jsx)(n.code,{children:"develop."})]}),"\n",(0,r.jsxs)(n.p,{children:["When using the git-flow extension library, executing ",(0,r.jsx)(n.code,{children:"git flow init"})," on an existing repo will create the ",(0,r.jsx)(n.code,{children:"develop"}),"branch:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'$ git flow init\nInitialized empty Git repository in ~/project/.git/No branches exist yet. Base branches must be created now.Branch name for production releases: [main]Branch name for "next release" development: [develop]\nHow to name your supporting branch prefixes?\nFeature branches? [feature/]\nRelease branches? [release/]\nHotfix branches? [hotfix/]\nSupport branches? [support/]\nVersion tag prefix? []\n\n$ git branch* develop main\n'})}),"\n",(0,r.jsx)(n.h2,{id:"feature-branches",children:"Feature branches"}),"\n",(0,r.jsxs)(n.p,{children:["Each new feature should reside in its own branch, which can be ",(0,r.jsx)(n.a,{href:"https://www.atlassian.com/git/tutorials/syncing/git-push",children:"pushed to the central repository"})," for backup/collaboration. But, instead of branching off of ",(0,r.jsx)(n.code,{children:"main"}),", ",(0,r.jsx)(n.code,{children:"feature"})," branches use ",(0,r.jsx)(n.code,{children:"develop"}),"as their parent branch. When a feature is complete, it gets ",(0,r.jsx)(n.a,{href:"https://www.atlassian.com/git/tutorials/using-branches/git-merge",children:"merged back into develop"}),". Features should never interact directly with ",(0,r.jsx)(n.code,{children:"main"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://wac-cdn.atlassian.com/dam/jcr:34c86360-8dea-4be4-92f7-6597d4d5bfae/02%20Feature%20branches.svg?cdnVersion=116",alt:"Git flow workflow - Feature Branches"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"feature"})," branches combined with the ",(0,r.jsx)(n.code,{children:"develop"})," branch is, for all intents and purposes, the Feature Branch Workflow. But, the Gitflow workflow doesn\u2019t stop there."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Feature"})," branches are generally created off to the latest ",(0,r.jsx)(n.code,{children:"develop"}),"branch."]}),"\n",(0,r.jsx)(n.h3,{id:"creating-a-feature-branch",children:"Creating a feature branch"}),"\n",(0,r.jsx)(n.p,{children:"Without the git-flow extensions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git checkout develop\ngit checkout -b feature_branch\n"})}),"\n",(0,r.jsx)(n.p,{children:"When using the git-flow extension:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git flow feature start feature_branch\n"})}),"\n",(0,r.jsx)(n.p,{children:"Continue your work and use Git like you normally would."}),"\n",(0,r.jsx)(n.h3,{id:"finishing-a-feature-branch",children:"Finishing a feature branch"}),"\n",(0,r.jsxs)(n.p,{children:["When you\u2019re done with the development work on the feature, the next step is to merge the ",(0,r.jsx)(n.code,{children:"feature_branch"})," into ",(0,r.jsx)(n.code,{children:"develop"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Without the git-flow extensions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"git checkout develop\ngit merge feature_branch\n"})}),"\n",(0,r.jsx)(n.p,{children:"Using the git-flow extensions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"git flow feature finish feature_branch\n"})}),"\n",(0,r.jsx)(n.h2,{id:"release-branches",children:"Release branches"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://wac-cdn.atlassian.com/dam/jcr:8f00f1a4-ef2d-498a-a2c6-8020bb97902f/03%20Release%20branches.svg?cdnVersion=116",alt:"Git Flow Workflow - Release Branches"})}),"\n",(0,r.jsxs)(n.p,{children:["Once ",(0,r.jsx)(n.code,{children:"develop"})," has acquired enough features for a release (or a predetermined release date is approaching), you fork a ",(0,r.jsx)(n.code,{children:"release"}),"branch off of ",(0,r.jsx)(n.code,{children:"develop"}),". Creating this branch starts the next release cycle, so no new features can be added after this point\u2014only bug fixes, documentation generation, and other release-oriented tasks should go in this branch. Once it's ready to ship, the ",(0,r.jsx)(n.code,{children:"release"})," branch gets merged into ",(0,r.jsx)(n.code,{children:"main"})," and tagged with a version number. In addition, it should be merged back into ",(0,r.jsx)(n.code,{children:"develop"}),", which may have progressed since the release was initiated."]}),"\n",(0,r.jsx)(n.p,{children:"Using a dedicated branch to prepare releases makes it possible for one team to polish the current release while another team continues working on features for the next release. It also creates well-defined phases of development (e.g., it's easy to say, \u201cThis week we're preparing for version 4.0,\u201d and to actually see it in the structure of the repository)."}),"\n",(0,r.jsxs)(n.p,{children:["Making ",(0,r.jsx)(n.code,{children:"release"})," branches is another straightforward branching operation. Like ",(0,r.jsx)(n.code,{children:"feature"})," branches, ",(0,r.jsx)(n.code,{children:"release"})," branches are based on the ",(0,r.jsx)(n.code,{children:"develop"})," branch. A new ",(0,r.jsx)(n.code,{children:"release"})," branch can be created using the following methods."]}),"\n",(0,r.jsx)(n.p,{children:"Without the git-flow extensions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git checkout develop\ngit checkout -b release/0.1.0\n"})}),"\n",(0,r.jsx)(n.p,{children:"When using the git-flow extensions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ git flow release start 0.1.0\nSwitched to a new branch 'release/0.1.0'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Once the release is ready to ship, it will get merged it into ",(0,r.jsx)(n.code,{children:"main"})," and ",(0,r.jsx)(n.code,{children:"develop"}),", then the ",(0,r.jsx)(n.code,{children:"release"})," branch will be deleted. It\u2019s important to merge back into ",(0,r.jsx)(n.code,{children:"develop"})," because critical updates may have been added to the ",(0,r.jsx)(n.code,{children:"release"})," branch and they need to be accessible to new features. If your organization stresses code review, this would be an ideal place for a pull request."]}),"\n",(0,r.jsxs)(n.p,{children:["To finish a ",(0,r.jsx)(n.code,{children:"release"})," branch, use the following methods:"]}),"\n",(0,r.jsx)(n.p,{children:"Without the git-flow extensions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git checkout main\ngit merge release/0.1.0\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or with the git-flow extension:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git flow release finish '0.1.0'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"hotfix-branches",children:"Hotfix branches"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=116",alt:"Git flow workflow - Hotfix Branches"})}),"\n",(0,r.jsxs)(n.p,{children:["Maintenance or ",(0,r.jsx)(n.code,{children:"\u201chotfix\u201d"})," branches are used to quickly patch production releases. ",(0,r.jsx)(n.code,{children:"Hotfix"})," branches are a lot like ",(0,r.jsx)(n.code,{children:"release"}),"branches and ",(0,r.jsx)(n.code,{children:"feature"})," branches except they're based on ",(0,r.jsx)(n.code,{children:"main"})," instead of ",(0,r.jsx)(n.code,{children:"develop"}),". This is the only branch that should fork directly off of ",(0,r.jsx)(n.code,{children:"main"}),". As soon as the fix is complete, it should be merged into both ",(0,r.jsx)(n.code,{children:"main"})," and ",(0,r.jsx)(n.code,{children:"develop"})," (or the current ",(0,r.jsx)(n.code,{children:"release"}),"branch), and ",(0,r.jsx)(n.code,{children:"main"})," should be tagged with an updated version number."]}),"\n",(0,r.jsxs)(n.p,{children:["Having a dedicated line of development for bug fixes lets your team address issues without interrupting the rest of the workflow or waiting for the next release cycle. You can think of maintenance branches as ad hoc ",(0,r.jsx)(n.code,{children:"release"})," branches that work directly with ",(0,r.jsx)(n.code,{children:"main"}),". A ",(0,r.jsx)(n.code,{children:"hotfix"})," branch can be created using the following methods:"]}),"\n",(0,r.jsx)(n.p,{children:"Without the git-flow extensions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git checkout main\ngit checkout -b hotfix_branch\n"})}),"\n",(0,r.jsx)(n.p,{children:"When using the git-flow extensions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ git flow hotfix start hotfix_branch\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Similar to finishing a ",(0,r.jsx)(n.code,{children:"release"})," branch, a ",(0,r.jsx)(n.code,{children:"hotfix"})," branch gets merged into both ",(0,r.jsx)(n.code,{children:"main"})," and ",(0,r.jsx)(n.code,{children:"develop."})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git checkout main\ngit merge hotfix_branch\ngit checkout develop\ngit merge hotfix_branch\ngit branch -D hotfix_branch\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ git flow hotfix finish hotfix_branch\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["A complete example demonstrating a Feature Branch Flow is as follows. Assuming we have a repo setup with a ",(0,r.jsx)(n.code,{children:"main"})," branch."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git checkout maingit checkout -b develop\ngit checkout -b feature_branch\n# work happens on feature branch\ngit checkout develop\ngit merge feature_branch\ngit checkout main\ngit merge develop\ngit branch -d feature_branch\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In addition to the ",(0,r.jsx)(n.code,{children:"feature"})," and ",(0,r.jsx)(n.code,{children:"release"})," flow, a ",(0,r.jsx)(n.code,{children:"hotfix"})," example is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git checkout main\ngit checkout -b hotfix_branch\n# work is done commits are added to the hotfix_branchgit checkout develop\ngit merge hotfix_branch\ngit checkout main\ngit merge hotfix_branch\n"})}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(n.p,{children:["Here we discussed the Gitflow Workflow. Gitflow is one of many styles of ",(0,r.jsx)(n.a,{href:"https://www.atlassian.com/git/tutorials/comparing-workflows",children:"Git workflows"})," you and your team can utilize."]}),"\n",(0,r.jsx)(n.p,{children:"Some key takeaways to know about Gitflow are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The workflow is great for a release-based software workflow."}),"\n",(0,r.jsx)(n.li,{children:"Gitflow offers a dedicated channel for hotfixes to production."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The overall flow of Gitflow is:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.code,{children:"develop"})," branch is created from ",(0,r.jsx)(n.code,{children:"main"})]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.code,{children:"release"})," branch is created from ",(0,r.jsx)(n.code,{children:"develop"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Feature"})," branches are created from ",(0,r.jsx)(n.code,{children:"develop"})]}),"\n",(0,r.jsxs)(n.li,{children:["When a ",(0,r.jsx)(n.code,{children:"feature"})," is complete it is merged into the ",(0,r.jsx)(n.code,{children:"develop"})," branch"]}),"\n",(0,r.jsxs)(n.li,{children:["When the ",(0,r.jsx)(n.code,{children:"release"})," branch is done it is merged into ",(0,r.jsx)(n.code,{children:"develop"}),"and ",(0,r.jsx)(n.code,{children:"main"})]}),"\n",(0,r.jsxs)(n.li,{children:["If an issue in ",(0,r.jsx)(n.code,{children:"main"})," is detected a ",(0,r.jsx)(n.code,{children:"hotfix"})," branch is created from ",(0,r.jsx)(n.code,{children:"main"})]}),"\n",(0,r.jsxs)(n.li,{children:["Once the ",(0,r.jsx)(n.code,{children:"hotfix"})," is complete it is merged to both ",(0,r.jsx)(n.code,{children:"develop"}),"and ",(0,r.jsx)(n.code,{children:"main"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);