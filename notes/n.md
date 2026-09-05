
setup

architecture of the application

1 what does the application do
2 who creates and who consumes the application
3 where does the data lies
4 public or authed
5 must it stay server side


the tools used for to build and maintain the application
1 next js 
2 typescript
3 sanity
4 clerk
5 posthog
6 coderabit

an product loop
build -> launch - measure - learn - improve

sanity
sanity is a headless CMS that allows you to manage and query your content efficiently.
1. create an account on sanity
2. create a new project on sanity

Auth
1. build it yourself
2. build by use clerk
3. create an account on clerk for the authentication

posthog
posthog is an analytics tool that helps you understand user behavior and track events.
1. create an account on posthog
2. integrate posthog with your application

coderabit
used for managing and automating development workflows.
1. create an account on coderabit
2. integrate coderabit with your development environment



installing ai agent skills
 

 a skill is tool-specified knowledge that the ai agent reads before it implements a feature
 that means your everyday prompts stay short
 each skill contains specific instructions and knowledge that the ai agent can refer to when performing tasks

 to install agent skills
 1. for sanity = npx skills add sanity-io/agent-toolkit
 2. for clerk = npx skills add clerk/skills



skills explain tools
how a tool wants to be used
/scope
/architect
/develop


agents.md
how this project wans to be built

plan beforre code
ask for approval naming and boundaries



prompts: after skills are installed

1. read the installed sanity and sanity context skills in the project. summarize what each skill is responsible for. do not change any files.


next to setup agens md
the file that ai tells what vertex is, how it plan work, when it asks you for guidance, and how it intends to implement features.

. its specifically for ai agents to plan and coordinate their actions within the project.


document:

/scope - what you are building and the boundaries of the project
/architect - the overall architecture and design decisions of the project
/audit - to write the project context
/sync - to synchronize the project state and updates accurate the project documentation

accordint to this you need to make the md file for agents with the following sections:

/scope
/architect
/audit
/sync


learn to generate the images of the ui of an app with chatgpt. the ui assets and all. 


imp: if you want to write agents md file for your project make it according to the structure that in the agents md format here.



# design system

before we build thea pages we need to solve one problem thats visual consistency across the application. we need a design system that defines the colors, typography, spacing, and other UI elements to ensure a cohesive look and feel.

we need to create a comprehensive design system ask the ai to strictly follow that system.
- you can check the design folder vertext-design-system image to check the design system consistency.


# implementation

use the claude extension in vscode to assist with implementing the design system and ensuring visual consistency across the application. ctrl+shift+p  search claude open focus input.

- DESIGN SYSTEM IMPLEMENTATION
- implement the the vertext design system and need to hold shift key and pass the image to the chat.

- HOME PAGE IMPLEMENTATION
- copy the vertex-home.png implement the vertex home page from the attatched ui.