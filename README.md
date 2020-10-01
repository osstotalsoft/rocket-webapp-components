# webapp-rocket [![NPM version][npm-image]][npm-url]
> React web application sample with GraphQL, Apollo Client and AxaGuilDEv Oidc Client integration.

![Building blocks](assets/img/appicon.png)

[[_TOC_]]
##Our Bit account
We have an account where we place all the components written in React gathered in a single package named _**core**_. 
You should check out the following link https://bit.dev/totalsoft/react-mui/core, where you can see a lot of helpful information about the package, such as:
- the current version(with all the old versions along)
- the number of downloads
- the latest changes
- the description
- the providers which you can import the package with
- the overview of the package where you can test and write some code to see how it behave
- the dependencies
- the output of the build

Please, listen to this video to better comprehend all of the aforementioned sayings:
[BitInANutshell.mp4](/.attachments/BitInANutshell-9b636096-2864-4178-983f-5f022a18b1c8.mp4)
##The core of components

###Why we need a single package of react components?
I've noticed that these components are placed in each of our projects with their logic even though their purpose is supposed to be the same regardless of the project. Besides, a lot of components are quite different depending upon the project, although the name is the same and I guess this is a sort of problem. By using this package those flaws won't be a problem anymore because you have versions and descriptions, it means every time you want to modify a component you must bump up the version and when is the case, add a simple description saying if the component has some specific logic for a specific project. Those things keep the components well-organized and consistent.

###The source code of the core
The source code is on the Azure platform. You can find it here:
https://dev.azure.com/totalsoft/Components/_git/core_components?version=GBmaster
It's ok for code to be also on Azure due to the traceability of the code as in the other projects even tough the code also appears on the Bit platform.

###Installation of core
Listen to this video to see how to install the core: [Installation.mp4](/.attachments/Installation-3cc650d4-0f9a-45a7-b81b-9bbfdda84d32.mp4)
###Leverage Bit CLI by using Azure DevOps
####The best approach of working with the core of components

Bit platform comes with a performant CLI with which you can import, tag, and export components. (Of course, there are a lot of commands but for the sake of our purpose those three are enough). To work with components you are not supposed to have prior experience with Bit because Azure DevOps do that for you. But how? To answer, by pipeline steps we set in which there are certain commands for exporting and tagging components. You just have to do some changes in your components and set up a pull request. Afterward, the pipeline will carry your changes on Bit.

Please, take a look at this video for further understanding of these steps: https://1drv.ms/v/s!AjNJY058hJ8vgQxSSlwhIOascHxY?e=ce5DUS (link to drive because the video is too large to fit here)

## Bit in a nutshell
Bit is an open-source CLI tool for collaborating on isolated components across projects and repositories.
Use Bit to distribute discrete components from a design library or a project into a standalone reusable package and utilize it across applications.
You can set up your own server for components collaboration, or use the bit.dev cloud hosting for private and public components sharing.
Bit facilitates the process of collaborating on UI components. Team members can share, maintain, and synchronize isolated components from different projects.

Bit allows teams to:
- Increase code reusability
- Increase design and development efficiency
- Retain UI and UX consistency
- Increase project's stability

Key Features:
- Extract a component for sharing directly from an existing library or project.
- Validate the component's independence by building and testing each component separately from the rest of the project.
- Change the source code of shared components from any application that utilizes it.
- Get published changes in components on top of local modifications.
- Contribute back changes made to components directly from the consuming applications.
- Automatically wrap each component as an npm package.
- Distribute discrete components instead of a single massive package.
- Automate component versioning according to changes in its dependencies.
- Use with leading frameworks and tools: React, Vue, Angular, Mocha, Jest.

Bit works alongside Git, NPM, and Yarn.

Check out https://docs.bit.dev/docs/quick-start for further information about Bit.
