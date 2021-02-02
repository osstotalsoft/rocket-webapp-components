# :boom: rocket-webapp-components

![Core](/assets/img/rocket-components-small.png)


An open-source and community-driven project to provide a consistent user interface across web applications. 
Ensuring a consistent look and feel, while harmonizing multiple products and applications, is a demanding and expensive task.
Therefore, our set of libraries cover the most common UI components (Material-UI component wrappers), patterns and layouts. 
It offers a design system and component library that allows teams the flexibility to quickly implement consistent UX, without needing to change the frontend framework or library. :sunglasses:

Key features:
- modularity: revolves around self-contained components, while encapsulating theme styles and behaviors
- flexibility: designed around theming capabilities, combines basic blocks to create complex components
- collaborative: contributors are welcomed, the bigger the community, the faster the releases cycles will be


## Installation
Bit components are stored on the bit registry located in https://bit.dev/totalsoft_oss/react-mui.
When installing @bit component with npm or yarn, they will try to install the components starting with @bit by resolving the @bit registry. This configuration is stored in an .npmrc configuration file.

First add a new `.npmrc` file in your project, if not exists, containing the following:

```shell
@bit:registry=https://node.bit.dev
//node.bit.dev/:_authToken=${BIT_TOKEN}
always-auth=true
```

> the always-auth=true is required when using Yarn. It is not required
> for npm.
  
```bash  
npm i @bit/totalsoft_oss.react-mui.kit.core
```  

Check-out this video to see how to install this library and some info about BIT_TOKEN: [Instalation and what is BIT_TOKEN](https://1drv.ms/v/s!AjNJY058hJ8vgRNx60Iq0ZJh0CR3?e=ak6waj).


## Leverage Bit CLI by using Azure DevOps

#### The best approach of working with the core of components
Bit platform comes with a performant CLI with which you can import, tag, and export components. (Of course, there are a lot of commands but for the sake of our purpose those three are enough). To work with components you are not supposed to have prior experience with Bit because Azure DevOps do that for you. But how? To answer, by pipeline steps we set in which there are certain commands for exporting and tagging components. You just have to do some changes in your components and set up a pull request. Afterward, the pipeline will carry your changes on Bit.

Please, take a look at this video for further understanding of these steps: [Working with Azure Pipeline](https://1drv.ms/v/s!AjNJY058hJ8vgRSKSG8XfBMoXbU8?e=3VFY19)

## Versioning
Components versioning is done using GitVersion (https://gitversion.net/docs/). Our approach is by using commit messages like so: adding ```+semver: breaking``` or ```+semver: major``` will cause the major version to be increased, ```+semver: feature``` or ```+semver: minor``` will bump minor and ```+semver: patch``` or ```+semver: fix``` will bump the patch.

## Test a specific component on your project before publishing it on Bit
Supposing you have several changes that need to be published on Bit. But how are you going to know that you are not breaking something else once you publish your changes or maybe you just want to see the behavior of your component under those specific changes you want to do.  For this, you can leverage the CLI of Bit. Bit have an import command which helps you to import the component on your project(see the image below). To get better understanding I will make an example with AddButton component in the next steps:
 In order to import the component, initiate your project workspace as a Bit workspace: 
```bash  
bit init
```  
> ⚠ Make sure you have Bit installed!

After the confirmation message that the workspace was initialized, run the following command:
```bash
bit import totalsoft_oss.react-mui/add-button
```
The command is also available on the component page.
![BitWorkflow](/assets/img/bit_1.png)
You get a message that the @react/core and @react/common are peer dependencies. This is ok, as your project already contains them.

Here is what happened:

A new top-level `components` folder is created that includes the code of the component, with its compiled code and node_modules.
The .bitmap file was modified to include the reference to the component
The package.json file is modified to point to the files rather than the remote package. Your package.json now displays:
```bash
{
  "@bit/totalsoft_oss.react-mui.add-button": "file:./components/add-button"
}
```
 Start your application to make sure it still works. As you'll see, no changes are required: Bit takes care of everything.
 Let's modify the AddButton component. Change the default value of the size to `small`.
 Run the React application:
 The app is not yet changed. That's because the Bit components are compiled by the bit compiler. In a separate terminal, run the `bit build` command to compile the changes. You should see that the compiler is installed:
 ```bash
 successfully installed the bit.envs/compilers/react@0.1.3 compiler
```
That will be followed by a successful compilation of all of the files.
Run the app again and you'll now see the changed button.

 ##  Bit in a nutshell
![BitWorkflow](/assets/img/BitWorkflow.png)

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

## Our Bit account

We have an account where we place all the components written in React gathered in a single package named _**core**_.

You should check out the following link https://bit.dev/totalsoft_oss/react-mui/kit/core, where you can see a lot of helpful information about the package, such as:

- the current version(with all the old versions along)
- the number of downloads
- the latest changes
- the description
- the providers which you can import the package with
- the overview of the package where you can test and write some code to see how it behave
- the dependencies
- the output of the build

Please, listen to this video to better comprehend all of the aforementioned sayings: [Bit info](https://1drv.ms/v/s!AjNJY058hJ8vgRKCFjagQvoBKuXO?e=AWkXMv)

