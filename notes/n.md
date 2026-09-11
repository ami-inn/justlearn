
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

- AUTH IMPLEMENTATION
- using the clerk for the authentication

- SANITy
-  sanity is used for managing and querying content efficiently. Implement the sanity integration for content management and retrieval.
- sanity.config.ts the file is responsible for configuring the sanity client and defining the schema for the content types used in the application. Implement the necessary configurations and schema definitions to enable content management and retrieval through sanity.

analyse the data modeling on the agent md that we mentioned.
- give the prompt to claude: implement the sanity content model and studio for vertex (course,module,lesson,instructor,category) + the server side read client and data layer.

# Seeding the data
add the seedjson and vidos jsn seed sanity using the provided seedjson and viesjson files instead of generating new content.use the sanity cli import verify the doucment counts afterward and don not modify the files.

seed prompt: seed sample content in sanity. add a handfull of instructors and categories and atleast 10 different courses with modules and lesssons realated to programming development ai and so on so that the catalog and teh cross course wsearch have real data.keep the realations consistent s oa module equals the sum of its lessons and a course equals the sum of its modules.



# Courses page implementation
- provide the image and implement a course page as shown in attached ui wired with seeded sanity content

# posthog
- posthog is used for analytics and tracking user behavior. Implement the posthog integration to track user interactions and events within the application. Use the provided posthog configuration and event tracking setup to capture relevant analytics data for analysis and insights.
- npx -y @posthog/wizard@latest selfdriving the command to set up posthog in the project. follow the prompts to configure posthog and integrate it with the application.

- Lesson page implementation
- provide the image and implement a lesson page as shown in attached ui wired with seeded sanity content with the lesson video playing on the page
- for explanation: explain each generated or modified file for this feature including what changed why it changed how the lesson page reads sanity content how the video is renddered , how notes and resources are displayed and what i sholuld verify before testing donot change any files.

# SEARCH FEATURE
- the feature is  where you can type plain english and goes through all the videos and matches the metadata of the videos or tags or the title.rather than it goes throught the transcripts of the videos. 
- for this using sanity context skill and the search context skill.
- how this works is that your app has already has content in sanity but an ai model doesnt automatically  understand the context of the content, what modules is hwot eh lessons are structured so the job here to teach the agent what contnt is it allowed to see andhow should think about the content.
- the browser not directly talks to the sanity context the llm or any private api. the browser will send the search query to a server route in the next js application.and then the server route will use the sanity context setup to understand thesanity data set ask the model to search over the right content and return structured results.back to the ui. think of the sanity context as the connection between your app and your sanity content for ai owered retrievel. well use those skills
- open claude window- implement the intelligent search . connect eh sanity context mcp, the server side search api and the results page (video and lesson results). over courses and lessons

# TRANSCRIPT FEATURE
- offline ingestion of the video transcripts and then the ability to search over the transcripts. this is a separate feature from the search feature above. this is more like a transcript search where you can type in a query and it will search over the transcripts of the videos and return the relevant results.
- a script read the transcript and chapter data  and organise to timestamp chunks and then store in a json file. the json file will be used to search over the transcripts. the transcript search will be implemented in the next js application. the transcript search will be a separate page where you can type in a query and it will search over the transcripts and return the relevant results.
- implement the offline video ingestion pipeline that buildss the video documets with timestamped transcript chunks and chapter markers. prompt

# POSTHOG
add posthog tracking for the features built since the basic setup
- the search performed with query
-  search results opened with esult type
-  video play video
-  watch depth
-  resume used
-  lessons completed
-  and anything else that you believe is important to track within our application.
-  
follow posthog next js best practices for event naming and properties. capture server side where the action is server-side and dont track any perosnlly identifiable content beyond the clerk user id


future features

- search show the result . the vertex find the best video moments link the lesson to the timestamp and show the video moment in the search results. this is a future feature that will be implemented in the next phase of the project. this will require a more advanced search algorithm that can understand the context of the video and the lesson and link the search results to the relevant video moments.
- to describe ai
- think about what happens when chapters match versus when only the transcript matches. and rememeber the video documents from the ingestion lesson already have everyting you need if you get stuck my exact prompt is in th evideo kit but try yours first

-Upgrade search with two stage timestamp resolution (chapters first, transcript fallback) and on site timestamped playback. Result cards deep link to the lesson page at the matched second and the embedded player seeks to it. prompt 1
-Tune the search by writing the Context document scope filter and instructions, and shape the system prompt. Use @.claude/skills/dial-your-context and @.claude/skills/shape-your-agent prompt 2