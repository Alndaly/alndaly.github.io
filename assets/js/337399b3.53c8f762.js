"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3003],{54558:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(16758);const o={title:"Gitflow Workflow",date:new Date("2022-04-05T17:16:27.000Z"),tags:["git"],description:"Git\u76f8\u5173\u6587\u6863"},r="Gitflow Workflow",l={unversionedId:"others/Github/gitflow",id:"others/Github/gitflow",title:"Gitflow Workflow",description:"Git\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Github/gitflow.md",sourceDirName:"others/Github",slug:"/others/Github/gitflow",permalink:"/docs/others/Github/gitflow",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Github/gitflow.md",tags:[{label:"git",permalink:"/docs/tags/git"}],version:"current",lastUpdatedAt:1681142816,formattedLastUpdatedAt:"2023\u5e744\u670810\u65e5",frontMatter:{title:"Gitflow Workflow",date:"2022-04-05T17:16:27.000Z",tags:["git"],description:"Git\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"Forking Workflow",permalink:"/docs/others/Github/forking workflow"},next:{title:"\u4f18\u96c5\u7684\u63d0\u4ea4\u4f60\u7684 Git Commit Message",permalink:"/docs/others/Github/standard"}},s={},p=[{value:"What is Gitflow?",id:"what-is-gitflow",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Develop and main branches",id:"develop-and-main-branches",level:3},{value:"Feature branches",id:"feature-branches",level:2},{value:"Creating a feature branch",id:"creating-a-feature-branch",level:3},{value:"Finishing a feature branch",id:"finishing-a-feature-branch",level:3},{value:"Release branches",id:"release-branches",level:2},{value:"Hotfix branches",id:"hotfix-branches",level:2},{value:"Example",id:"example",level:2},{value:"Summary",id:"summary",level:2}],h={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gitflow-workflow"},"Gitflow Workflow"),(0,i.kt)("p",null,"Gitflow is a legacy Git workflow that was originally a disruptive and novel strategy for managing Git branches. Gitflow has fallen in popularity in favor of ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development"},"trunk-based workflows"),", which are now considered best practices for modern continuous software development and ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/devops/what-is-devops"},"DevOps")," practices. Gitflow also can be challenging to use with ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/continuous-delivery"},"CI/CD"),". This post details Gitflow for historical purposes."),(0,i.kt)("h2",{id:"what-is-gitflow"},"What is Gitflow?"),(0,i.kt)("p",null,"Giflow is an alternative Git branching model that involves the use of feature branches and multiple primary branches. It was first published and made popular by ",(0,i.kt)("a",{parentName:"p",href:"http://nvie.com/posts/a-successful-git-branching-model/"},"Vincent Driessen at nvie"),". Compared to trunk-based development, Giflow has numerous, longer-lived branches and larger commits. Under this model, developers create a feature branch and delay merging it to the main trunk branch until the feature is complete. These long-lived feature branches require more collaboration to merge and have a higher risk of deviating from the trunk branch. They can also introduce conflicting updates."),(0,i.kt)("p",null,"Gitflow can be used for projects that have a scheduled release cycle and for the ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/devops/what-is-devops/devops-best-practices"},"DevOps best practice")," of ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/continuous-delivery"},"continuous delivery"),". This workflow doesn\u2019t add any new concepts or commands beyond what\u2019s required for the ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow"},"Feature Branch Workflow"),". Instead, it assigns very specific roles to different branches and defines how and when they should interact. In addition to ",(0,i.kt)("inlineCode",{parentName:"p"},"feature")," branches, it uses individual branches for preparing, maintaining, and recording releases. Of course, you also get to leverage all the benefits of the Feature Branch Workflow: pull requests, isolated experiments, and more efficient collaboration."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Gitflow is really just an abstract idea of a Git workflow. This means it dictates what kind of branches to set up and how to merge them together. We will touch on the purposes of the branches below. The git-flow toolset is an actual command line tool that has an installation process. The installation process for git-flow is straightforward. Packages for git-flow are available on multiple operating systems. On OSX systems, you can execute ",(0,i.kt)("inlineCode",{parentName:"p"},"brew install git-flow"),". On windows you will need to ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/download/win"},"download and install git-flow"),". After installing git-flow you can use it in your project by executing ",(0,i.kt)("inlineCode",{parentName:"p"},"git flow init"),". Git-flow is a wrapper around Git. The ",(0,i.kt)("inlineCode",{parentName:"p"},"git flow init")," command is an extension of the default ",(0,i.kt)("inlineCode",{parentName:"p"},"[git init](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init)")," command and doesn't change anything in your repository other than creating branches for you."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://wac-cdn.atlassian.com/dam/jcr:a13c18d6-94f3-4fc4-84fb-2b8f1b2fd339/01%20How%20it%20works.svg?cdnVersion=116",alt:"Git flow workflow - Historical Branches"})),(0,i.kt)("h3",{id:"develop-and-main-branches"},"Develop and main branches"),(0,i.kt)("p",null,"Instead of a single ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch, this workflow uses two branches to record the history of the project. The ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch stores the official release history, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch serves as an integration branch for features. It's also convenient to tag all commits in the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch with a version number."),(0,i.kt)("p",null,"The first step is to complement the default ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),"branch. A simple way to do this is for one developer to create an empty ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch locally and push it to the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git branch develop\ngit push -u origin develop\n")),(0,i.kt)("p",null,"This branch will contain the complete history of the project, whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," will contain an abridged version. Other developers should now clone the central repository and create a tracking branch for ",(0,i.kt)("inlineCode",{parentName:"p"},"develop.")),(0,i.kt)("p",null,"When using the git-flow extension library, executing ",(0,i.kt)("inlineCode",{parentName:"p"},"git flow init")," on an existing repo will create the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),"branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ git flow init\nInitialized empty Git repository in ~/project/.git/No branches exist yet. Base branches must be created now.Branch name for production releases: [main]Branch name for "next release" development: [develop]\nHow to name your supporting branch prefixes?\nFeature branches? [feature/]\nRelease branches? [release/]\nHotfix branches? [hotfix/]\nSupport branches? [support/]\nVersion tag prefix? []\n\n$ git branch* develop main\n')),(0,i.kt)("h2",{id:"feature-branches"},"Feature branches"),(0,i.kt)("p",null,"Each new feature should reside in its own branch, which can be ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/syncing/git-push"},"pushed to the central repository")," for backup/collaboration. But, instead of branching off of ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"feature")," branches use ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),"as their parent branch. When a feature is complete, it gets ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/using-branches/git-merge"},"merged back into develop"),". Features should never interact directly with ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://wac-cdn.atlassian.com/dam/jcr:34c86360-8dea-4be4-92f7-6597d4d5bfae/02%20Feature%20branches.svg?cdnVersion=116",alt:"Git flow workflow - Feature Branches"})),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"feature")," branches combined with the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch is, for all intents and purposes, the Feature Branch Workflow. But, the Gitflow workflow doesn\u2019t stop there."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Feature")," branches are generally created off to the latest ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),"branch."),(0,i.kt)("h3",{id:"creating-a-feature-branch"},"Creating a feature branch"),(0,i.kt)("p",null,"Without the git-flow extensions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout develop\ngit checkout -b feature_branch\n")),(0,i.kt)("p",null,"When using the git-flow extension:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git flow feature start feature_branch\n")),(0,i.kt)("p",null,"Continue your work and use Git like you normally would."),(0,i.kt)("h3",{id:"finishing-a-feature-branch"},"Finishing a feature branch"),(0,i.kt)("p",null,"When you\u2019re done with the development work on the feature, the next step is to merge the ",(0,i.kt)("inlineCode",{parentName:"p"},"feature_branch")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),"."),(0,i.kt)("p",null,"Without the git-flow extensions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout develop\ngit merge feature_branch\n")),(0,i.kt)("p",null,"Using the git-flow extensions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git flow feature finish feature_branch\n")),(0,i.kt)("h2",{id:"release-branches"},"Release branches"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://wac-cdn.atlassian.com/dam/jcr:8f00f1a4-ef2d-498a-a2c6-8020bb97902f/03%20Release%20branches.svg?cdnVersion=116",alt:"Git Flow Workflow - Release Branches"})),(0,i.kt)("p",null,"Once ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," has acquired enough features for a release (or a predetermined release date is approaching), you fork a ",(0,i.kt)("inlineCode",{parentName:"p"},"release"),"branch off of ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),". Creating this branch starts the next release cycle, so no new features can be added after this point\u2014only bug fixes, documentation generation, and other release-oriented tasks should go in this branch. Once it's ready to ship, the ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," branch gets merged into ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," and tagged with a version number. In addition, it should be merged back into ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),", which may have progressed since the release was initiated."),(0,i.kt)("p",null,"Using a dedicated branch to prepare releases makes it possible for one team to polish the current release while another team continues working on features for the next release. It also creates well-defined phases of development (e.g., it's easy to say, \u201cThis week we're preparing for version 4.0,\u201d and to actually see it in the structure of the repository)."),(0,i.kt)("p",null,"Making ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," branches is another straightforward branching operation. Like ",(0,i.kt)("inlineCode",{parentName:"p"},"feature")," branches, ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," branches are based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch. A new ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," branch can be created using the following methods."),(0,i.kt)("p",null,"Without the git-flow extensions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout develop\ngit checkout -b release/0.1.0\n")),(0,i.kt)("p",null,"When using the git-flow extensions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ git flow release start 0.1.0\nSwitched to a new branch 'release/0.1.0'\n")),(0,i.kt)("p",null,"Once the release is ready to ship, it will get merged it into ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),", then the ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," branch will be deleted. It\u2019s important to merge back into ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," because critical updates may have been added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," branch and they need to be accessible to new features. If your organization stresses code review, this would be an ideal place for a pull request."),(0,i.kt)("p",null,"To finish a ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," branch, use the following methods:"),(0,i.kt)("p",null,"Without the git-flow extensions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout main\ngit merge release/0.1.0\n")),(0,i.kt)("p",null,"Or with the git-flow extension:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git flow release finish '0.1.0'\n")),(0,i.kt)("h2",{id:"hotfix-branches"},"Hotfix branches"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=116",alt:"Git flow workflow - Hotfix Branches"})),(0,i.kt)("p",null,"Maintenance or ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201chotfix\u201d")," branches are used to quickly patch production releases. ",(0,i.kt)("inlineCode",{parentName:"p"},"Hotfix")," branches are a lot like ",(0,i.kt)("inlineCode",{parentName:"p"},"release"),"branches and ",(0,i.kt)("inlineCode",{parentName:"p"},"feature")," branches except they're based on ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),". This is the only branch that should fork directly off of ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),". As soon as the fix is complete, it should be merged into both ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," (or the current ",(0,i.kt)("inlineCode",{parentName:"p"},"release"),"branch), and ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," should be tagged with an updated version number."),(0,i.kt)("p",null,"Having a dedicated line of development for bug fixes lets your team address issues without interrupting the rest of the workflow or waiting for the next release cycle. You can think of maintenance branches as ad hoc ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," branches that work directly with ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"hotfix")," branch can be created using the following methods:"),(0,i.kt)("p",null,"Without the git-flow extensions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout main\ngit checkout -b hotfix_branch\n")),(0,i.kt)("p",null,"When using the git-flow extensions: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ git flow hotfix start hotfix_branch\n")),(0,i.kt)("p",null,"Similar to finishing a ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," branch, a ",(0,i.kt)("inlineCode",{parentName:"p"},"hotfix")," branch gets merged into both ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"develop.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout main\ngit merge hotfix_branch\ngit checkout develop\ngit merge hotfix_branch\ngit branch -D hotfix_branch\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ git flow hotfix finish hotfix_branch\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"A complete example demonstrating a Feature Branch Flow is as follows. Assuming we have a repo setup with a ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout maingit checkout -b develop\ngit checkout -b feature_branch\n# work happens on feature branch\ngit checkout develop\ngit merge feature_branch\ngit checkout main\ngit merge develop\ngit branch -d feature_branch\n")),(0,i.kt)("p",null,"In addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"feature")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," flow, a ",(0,i.kt)("inlineCode",{parentName:"p"},"hotfix")," example is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout main\ngit checkout -b hotfix_branch\n# work is done commits are added to the hotfix_branchgit checkout develop\ngit merge hotfix_branch\ngit checkout main\ngit merge hotfix_branch\n")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Here we discussed the Gitflow Workflow. Gitflow is one of many styles of ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/comparing-workflows"},"Git workflows")," you and your team can utilize."),(0,i.kt)("p",null,"Some key takeaways to know about Gitflow are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The workflow is great for a release-based software workflow."),(0,i.kt)("li",{parentName:"ul"},"Gitflow offers a dedicated channel for hotfixes to production.  ")),(0,i.kt)("p",null,"The overall flow of Gitflow is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"develop")," branch is created from ",(0,i.kt)("inlineCode",{parentName:"li"},"main")),(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"release")," branch is created from ",(0,i.kt)("inlineCode",{parentName:"li"},"develop")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Feature")," branches are created from ",(0,i.kt)("inlineCode",{parentName:"li"},"develop")),(0,i.kt)("li",{parentName:"ol"},"When a ",(0,i.kt)("inlineCode",{parentName:"li"},"feature")," is complete it is merged into the ",(0,i.kt)("inlineCode",{parentName:"li"},"develop")," branch"),(0,i.kt)("li",{parentName:"ol"},"When the ",(0,i.kt)("inlineCode",{parentName:"li"},"release")," branch is done it is merged into ",(0,i.kt)("inlineCode",{parentName:"li"},"develop"),"and ",(0,i.kt)("inlineCode",{parentName:"li"},"main")),(0,i.kt)("li",{parentName:"ol"},"If an issue in ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," is detected a ",(0,i.kt)("inlineCode",{parentName:"li"},"hotfix")," branch is created from ",(0,i.kt)("inlineCode",{parentName:"li"},"main")),(0,i.kt)("li",{parentName:"ol"},"Once the ",(0,i.kt)("inlineCode",{parentName:"li"},"hotfix")," is complete it is merged to both ",(0,i.kt)("inlineCode",{parentName:"li"},"develop"),"and ",(0,i.kt)("inlineCode",{parentName:"li"},"main"))))}c.isMDXComponent=!0}}]);