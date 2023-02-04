"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7396],{43751:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=o(87462),i=(o(67294),o(3905));o(16758);const a={title:"Forking Workflow",date:new Date("2022-04-05T17:16:27.000Z"),tags:["git"],description:"Git\u76f8\u5173\u6587\u6863"},n="Forking Workflow",s={unversionedId:"others/Github/forking workflow",id:"others/Github/forking workflow",title:"Forking Workflow",description:"Git\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Github/forking workflow.md",sourceDirName:"others/Github",slug:"/others/Github/forking workflow",permalink:"/en/docs/others/Github/forking workflow",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Github/forking workflow.md",tags:[{label:"git",permalink:"/en/docs/tags/git"}],version:"current",lastUpdatedAt:1675524891,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{title:"Forking Workflow",date:"2022-04-05T17:16:27.000Z",tags:["git"],description:"Git\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"Git \u5927\u5c0f\u5199\u4e0d\u654f\u611f\u5f15\u53d1\u7684\u95ee\u9898",permalink:"/en/docs/others/Github/Git\u9ed8\u8ba4\u5927\u5c0f\u5199\u4e0d\u654f\u611f"},next:{title:"Gitflow Workflow",permalink:"/en/docs/others/Github/gitflow"}},l={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Forking vs cloning",id:"forking-vs-cloning",level:2},{value:"Branching in the Forking Workflow",id:"branching-in-the-forking-workflow",level:2},{value:"Fork a repository",id:"fork-a-repository",level:2},{value:"Clone your fork",id:"clone-your-fork",level:2},{value:"Adding a remote",id:"adding-a-remote",level:2},{value:"Working in a branch: making &amp; pushing changes",id:"working-in-a-branch-making--pushing-changes",level:2},{value:"Making a Pull Request",id:"making-a-pull-request",level:2},{value:"Summary",id:"summary",level:2}],h={toc:p};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"forking-workflow"},"Forking Workflow"),(0,i.kt)("p",null,"The Forking Workflow is fundamentally different than other popular Git workflows. Instead of using a single server-side repository to act as the \u201ccentral\u201d codebase, it gives every developer their own server-side repository. This means that each contributor has not one, but two Git repositories: a private local one and a public server-side one. The Forking Workflow is most often seen in public open source projects."),(0,i.kt)("p",null,"The main advantage of the Forking Workflow is that contributions can be integrated without the need for everybody to push to a single central repository. Developers push to their own server-side repositories, and only the project maintainer can push to the official repository. This allows the maintainer to accept commits from any developer without giving them write access to the official codebase."),(0,i.kt)("p",null,"The Forking Workflow typically follows a branching model based on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"},"Gitflow Workflow"),". This means that complete feature branches will be purposed for merge into the original project maintainer's repository. The result is a distributed workflow that provides a flexible way for large, organic teams (including untrusted third-parties) to collaborate securely. This also makes it an ideal workflow for open source projects.  "),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"As in the other ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/comparing-workflows"},"Git workflows"),", the Forking Workflow begins with an official public repository stored on a server. But when a new developer wants to start working on the project, they do not directly clone the official repository."),(0,i.kt)("p",null,"Instead, they fork the official repository to create a copy of it on the server. This new copy serves as their personal public repository\u2014no other developers are allowed to push to it, but they can pull changes from it (we\u2019ll see why this is important in a moment). After they have created their server-side copy, the developer performs a ",(0,i.kt)("inlineCode",{parentName:"p"},"[git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone)")," to get a copy of it onto their local machine. This serves as their private development environment, just like in the other workflows."),(0,i.kt)("p",null,"When they're ready to publish a local commit, they push the commit to their own public repository\u2014not the official one. Then, they file a pull request with the main repository, which lets the project maintainer know that an update is ready to be integrated. The pull request also serves as a convenient discussion thread if there are issues with the contributed code. The following is a step-by-step example of this workflow."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A developer 'forks' an 'official' server-side repository. This creates their own server-side copy."),(0,i.kt)("li",{parentName:"ol"},"The new server-side copy is cloned to their local system."),(0,i.kt)("li",{parentName:"ol"},"A Git remote path for the 'official' repository is added to the local clone."),(0,i.kt)("li",{parentName:"ol"},"A new local feature branch is created."),(0,i.kt)("li",{parentName:"ol"},"The developer makes changes on the new branch."),(0,i.kt)("li",{parentName:"ol"},"New commits are created for the changes."),(0,i.kt)("li",{parentName:"ol"},"The branch gets pushed to the developer's own server-side copy."),(0,i.kt)("li",{parentName:"ol"},"The developer opens a pull request from the new branch to the 'official' repository."),(0,i.kt)("li",{parentName:"ol"},"The pull request gets approved for merge and is merged into the original server-side repository  ")),(0,i.kt)("p",null,"To integrate the feature into the official codebase, the maintainer pulls the contributor\u2019s changes into their local repository, checks to make sure it doesn\u2019t break the project, merges it into their local ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch, then pushes the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch to the official repository on the server. The contribution is now part of the project, and other developers should pull from the official repository to synchronize their local repositories."),(0,i.kt)("p",null,"It\u2019s important to understand that the notion of an \u201cofficial\u201d repository in the Forking Workflow is merely a convention. In fact, the only thing that makes the official repository so official is that it\u2019s the public repository of the project maintainer."),(0,i.kt)("h2",{id:"forking-vs-cloning"},"Forking vs cloning"),(0,i.kt)("p",null,'It\'s important to note that "forked" repositories and "forking" are not special operations. Forked repositories are created using the standard ',(0,i.kt)("inlineCode",{parentName:"p"},"[git clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone)"),' command. Forked repositories are generally "server-side clones" and usually managed and hosted by a 3rd party Git service like ',(0,i.kt)("a",{parentName:"p",href:"https://bitbucket.org/product"},"Bitbucket"),". There is no unique Git command to create forked repositories. A clone operation is essentially a copy of a repository and its history. "),(0,i.kt)("h2",{id:"branching-in-the-forking-workflow"},"Branching in the Forking Workflow"),(0,i.kt)("p",null,"All of these personal public repositories are really just a convenient way to share branches with other developers. Everybody should still be using branches to isolate individual features, just like in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow"},"Feature Branch Workflow")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"},"Gitflow Workflow.")," The only difference is how those branches get shared. In the Forking Workflow, they are pulled into another developer\u2019s local repository, while in the Feature Branch and Gitflow Workflows they are pushed to the official repository."),(0,i.kt)("h2",{id:"fork-a-repository"},"Fork a repository"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://wac-cdn.atlassian.com/dam/jcr:642c56e3-ddc6-43ff-ab86-c5cd845afd05/03.svg?cdnVersion=116",alt:"git fork workflow - fork a repositiory"})),(0,i.kt)("p",null,"All new developers to a Forking Workflow project need to fork the official repository. As previously stated, forking is just a standard ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone")," operation. It\u2019s possible to do this by SSH\u2019ing into the server and running ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone")," to copy it to another location on the server. Popular Git hosting services like Bitbucket, offer repo forking features that automate this step."),(0,i.kt)("h2",{id:"clone-your-fork"},"Clone your fork"),(0,i.kt)("p",null,"Next each developer needs to clone their own public forked repository. They can do this with the familiar ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone"),"command."),(0,i.kt)("p",null,"Assuming the use of Bitbucket to host these repositories, developers on a project should have their own Bitbucket account and they should clone their forked copy of the repository with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://user@bitbucket.org/user/repo.git\n")),(0,i.kt)("h2",{id:"adding-a-remote"},"Adding a remote"),(0,i.kt)("p",null,"Whereas other Git workflows use a single origin remote that points to the central repository, the Forking Workflow requires two remotes\u2014one for the official repository, and one for the developer\u2019s personal server-side repository. While you can call these remotes anything you want, a common convention is to use origin as the remote for your forked repository (this will be created automatically when you run ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone"),") and upstream for the official repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream https://bitbucket.org/maintainer/repo\n")),(0,i.kt)("p",null,"You\u2019ll need to create the upstream remote yourself using the above command. This will let you easily keep your local repository up-to-date as the official project progresses. Note that if your upstream repository has authentication enabled (i.e., it's not open source), you'll need to supply a username, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream https://user@bitbucket.org/maintainer/repo.git\n")),(0,i.kt)("p",null,"This requires users to supply a valid password before cloning or pulling from the official codebase."),(0,i.kt)("h2",{id:"working-in-a-branch-making--pushing-changes"},"Working in a branch: making & pushing changes"),(0,i.kt)("p",null,"In the developer's local copy of the forked repository they can edit code, commit changes, and create branches just like in other Git workflows:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},'git checkout -b some-feature # Edit some code git commit -a -m "Add first draft of some feature"')),(0,i.kt)("p",null,"All of their changes will be entirely private until they push it to their public repository. And, if the official project has moved forward, they can access new commits with ",(0,i.kt)("inlineCode",{parentName:"p"},"git pull"),":"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"git pull upstream main")),(0,i.kt)("p",null,"Since developers should be working in a dedicated feature branch, this should generally result in a fast-forward merge."),(0,i.kt)("h2",{id:"making-a-pull-request"},"Making a Pull Request"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://wac-cdn.atlassian.com/dam/jcr:0de71551-5c08-4fc4-ab6d-dc8a51bfcc5a/05.svg?cdnVersion=116",alt:"Git Fork Workflow - Making a pull request"})),(0,i.kt)("p",null,"Once a developer is ready to share their new feature, they need to do two things. First, they have to make their contribution accessible to other developers by pushing it to their public repository. Their origin remote should already be set up, so all they should have to do is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git push origin feature-branch\n")),(0,i.kt)("p",null,"This diverges from the other workflows in that the origin remote points to the developer\u2019s personal server-side repository, not the main codebase."),(0,i.kt)("p",null,"Second, they need to notify the project maintainer that they want to merge their feature into the official codebase. Bitbucket provides a \u201cpull request\u201d button that leads to a form asking you to specify which branch you want to merge into the official repository. Typically, you\u2019ll want to integrate your ",(0,i.kt)("inlineCode",{parentName:"p"},"feature")," branch into the upstream remote\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"To recap, the Forking Workflow is commonly used in public open-source projects. Forking is a ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone")," operation executed on a server copy of a projects repo. A Forking Workflow is often used in conjunction with a Git hosting service like Bitbucket. A high-level example of a Forking Workflow is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You want to contribute to an open source library hosted at bitbucket.org/userA/open-project"),(0,i.kt)("li",{parentName:"ol"},"Using Bitbucket you create a fork of the repo to bitbucket.org/YourName/open-project"),(0,i.kt)("li",{parentName:"ol"},"On your local system you execute ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone")," on ",(0,i.kt)("a",{parentName:"li",href:"https://bitbucket.org/YourName/open-project"},"https://bitbucket.org/YourName/open-project")," to get a local copy of the repo"),(0,i.kt)("li",{parentName:"ol"},"You create a new ",(0,i.kt)("inlineCode",{parentName:"li"},"feature")," branch in your local repo"),(0,i.kt)("li",{parentName:"ol"},"Work is done to complete the new feature and ",(0,i.kt)("inlineCode",{parentName:"li"},"git commit"),"is executed to save the changes"),(0,i.kt)("li",{parentName:"ol"},"You then push the new ",(0,i.kt)("inlineCode",{parentName:"li"},"feature")," branch to your remote forked repo"),(0,i.kt)("li",{parentName:"ol"},"Using Bitbucket you open up a pull request for the new branch against the original repo at bitbucket.org/userA/open-project  ")),(0,i.kt)("p",null,'The Forking Workflow helps a maintainer of a project open up the repository to contributions from any developer without having to manually manage authorization settings for each individual contributor. This gives the maintainer more of a "pull" style workflow. Most commonly used in open-source projects, the Forking Workflow can also be applied to private business workflows to give more authoritative control over what is merged into a release. This can be useful in teams that have Deploy Managers or strict release cycles.'))}c.isMDXComponent=!0}}]);