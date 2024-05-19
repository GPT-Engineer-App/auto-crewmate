# auto-crewmate


1. Read the entire prompt prior to starting. 

2. The program you are creating today is a GUI/UI based CrewAI program called "AutoCrew" which will integrate CrewAI, the (free to use) CrewAI tools package & other (free to use) API's, packages and other systems. Review, analyze & fully comprehend CrewAI & CrewAI tools at the following URLs, and ensure you understand all aspects, code, and all systems of CrewAI.   
Here are the URLs - ensure you fully completely read the contents of each URL as well as ALL additional hyperlinks available: 
https://github.com/joaomdmoura/CrewAI
https://github.com/joaomdmoura/crewAI-tools
https://docs.crewai.com/
https://docs.crewai.com/core-concepts/Tools/
https://docs.crewai.com/core-concepts/Agents/#creating-an-agent
https://docs.crewai.com/core-concepts/Tasks/#creating-a-task
https://docs.crewai.com/core-concepts/Processes/
https://docs.crewai.com/core-concepts/Crews/
https://docs.crewai.com/core-concepts/Memory/
https://docs.crewai.com/how-to/LLM-Connections/
https://docs.crewai.com/how-to/Customizing-Agents/           
(Here are some CrewAI examples on Github, please view the code for each individual file...)
https://github.com/joaomdmoura/crewAI-examples/tree/main/prep-for-a-meeting
https://github.com/joaomdmoura/crewAI-examples/tree/main/trip_planner
https://github.com/joaomdmoura/crewAI-examples/tree/main/instagram_post
https://github.com/joaomdmoura/crewAI-examples/tree/main/stock_analysis
https://github.com/joaomdmoura/crewAI-examples/tree/main/game-builder-crew
https://github.com/joaomdmoura/crewAI-examples/tree/main/CrewAI-LangGraph
https://github.com/joaomdmoura/crewAI-examples/tree/main/landing_page_generator
https://github.com/bhancockio/automate-youtube-with-crewai
https://github.com/AbubakrChan/crewai-streamlit-UI-business-product-launch
(Ensure that you include the following tools, however do NOT limit yourself to only including these tools...) 
https://docs.crewai.com/tools/TXTSearchTool/
https://docs.crewai.com/tools/FileReadTool/
https://docs.crewai.com/tools/WebsiteSearchTool/
https://docs.crewai.com/tools/GitHubSearchTool/
https://docs.crewai.com/tools/CodeDocsSearchTool/
https://docs.crewai.com/tools/YoutubeVideoSearchTool/
https://docs.crewai.com/tools/BrowserbaseLoadTool/#description
https://docs.crewai.com/tools/ScrapeWebsiteTool/
https://docs.crewai.com/tools/DirectoryReadTool/
https://docs.crewai.com/tools/DirectorySearchTool/
https://docs.crewai.com/tools/PDFSearchTool/

3. Perform extensive online research on all aspects of this prompt to ensure that you are writing code which will 100% work as intended with the CrewAI system & other required systems you need in order to fulfill all aspects of this prompt. 

4. Create a full GUI/UI which includes ALL of the following criteria: 
A. Colorized stylized, aesthetically pleasing GUI/UI, with a future-retro appearance with a dark colored theme similar to the Matrix but with cyan coloring instead of green. 
B. All of the text windows in the GUI/UI should look like old school terminal screens with vibrant cyan colored glowing text.
C. The border surrounding these text boxes/windows should make it appear as it is an actual old-school terminal. 
D All text font should be consolas or other console/terminal like text. 
E. All buttons should be old-school, retro but futuristic - a mesh of future-retro styling. 
F. The GUI/UI shall comprise of multiple pages/menus as follows, F1 being the intro/splash screen and F2 being the main menu: 

F1. Splash Screen: After starting the script to run/launch this program, the first thing the user will see is a splash screen. This splash screen shall contain the previously discussed color scheme & GUI/UI theming, along with the name "AutoCrew", and at the bottom in small font write, "Written & Created by Psychophoria". The splash screen shall have a loading bar, which shall go from 0% to 100% as the program loads. The loading bar should be glowing similar to an old school terminal, matching the other styling in the GUI/UI, with the loading bar being cyan. After the program finished loading, the splash screen should fade away & the next page (F2) shall appear. 

F2. This page is the main menu. This page is the main page where everything happens. The top of the page includes the name, "AutoCrew". All the agents shall be listed on a side panel, with a switch which allows the user to turn each individual agent off or on, as well as a small status window for each agent which shows their current status/action which is updated in real time. The center/upper section of the page contains a medium sized text box for the "INITIAL REQUEST" which is where the user writes the first prompt that is sent to CrewAI, with a button directly below the text box/window which allows the user to send the prompt - after the user sends the initial prompt, a yellow caution/warning pop-up (with warning symbols) will appear inside the window for 10 seconds telling the user NOT to enter any further text into this window and to use the update injector instead. Next to the title of the "REQUEST" text box is an illuminated switch (green for request & blue for update injector) which allows the user to switch this text box name & action from "REQUEST" to "UPDATE INJECTOR" - the update injector allows the user to send non-disruptive updates to CrewAI while it is running without interrupting the CrewAI's actions/running process, with the user's text instead being added to the CrewAI system while it is running in a way that is similar to guiding/updating the currently running CrewAI process. Below the request & update injector window/text box are 2x windows which provide the CrewAI verbose terminal output in real time - the window on the left is the full & complete output of CrewAI which includes everything, and the right window shows only the responses provided by the agents. The left side of this main menu page contains a labeled control panel. The control panel contains a collection of different illuminated dials, switches and buttons which allow the user to modify/change the CrewAI settings & agent settings, and also includes a few additional features. The settings in the control panel should allow the user to change settings in real time - be sure to include but not limit yourself to the following: a "continuous" toggle button which ensures that CrewAI will not stop running for any reason even the request has been fully accomplished 100% the CrewAI system shall continue to run and expand/improve upon what it has produced, a start/stop switch (resume & pause the CrewAI agents, but allows the agents to finish their train of thought/current action - the agents can also resume from where they left off when the button is pressed again), a kill switch (immediately stops the CrewAI agents), a save/export button (tells the agents to conclude their work, finalize anything they're working on, and export/save their work and or files - afterwards the agents will pause, but can be started again if the start/stop button is pressed), a local code execution button (allows agents/CrewAI to execute code locally), open workspace button (open the current CrewAI workspace), change workspace directory button, a three-way switch which allows the user to change the LLM system being used (can select from Ollama, Google/Gemini, or Groq), an API keys button which pops out a window where the user may enter their Google API key, Google CSE key, Groq API key, an Ollama model selector drop-down box which allows the user select from the currently available Ollama models, and at least another 10x buttons, switches or slides which allow adjustment of the CrewAI system, agents, or other related systems. The very bottom of the main menu page shall contain a cyan colored progress bar (which appears as a vial with glowing/flowing material inside) which spans 80% of the entire window size - this progress bar shall be updated every 60 seconds, and shall slowly fill up (from left to right) as the overall progress towards fully completing/achieving the "request" is made. This progress bar shall also contain a small status window below it which states the current estimated percentage of completion (should reflect the visual progress bar) as well as the estimated time remaining (in hours & minutes). The main menu shall also include visually pleasing aesthetics & styling which makes it feel as if the user is connected to a retro-futuristic computer system - do this by incorporating a wide variety of visual elements including but not limited to: the entire main menu window should be similar in aesthetics to that of an old vintage airline cockpit with futuristic additions blended in, a theme appropriate border surrounding the entire window, borders around each text box/window, the panel on the right & left should have a border & different colored background, buttons and switches and other interactive toggles shall be appear as real 3D objects and be animated and illuminated, wires & other computer systems shall be shown (appearing in the background) in between different panels, text boxes/windows, and other regions, and finally ensure that everything has a label which appears to be connected to the system it is representing. 

5. Ensure that you eliminate the need for an OpenAI API key by replacing it with the option to use one of the following options: Ollama (and any available/running models), Google/Gemini, and Groq.

6. Ensure that the agents have the ability to search/browse the web, and perform in-depth searches. In addition, the agents should be capable of performing tasks/actions on the internet similar to what a human is capable of doing, such as: creating a new account on a website, creating an email, logging into different websites, browsing through websites & clicking/interacting with different elements, etc. 

7. You shall include the following agents, all of which appear on the right panel of the main menu & can be toggled off/on: 
A. Master Agent (Oversees the other agents, generates & delegates tasks, coordinates between agents, relays messages back/forth between agents, opens communication between agents, communicates with the human)
B. Project Manger (Manages the "project" AKA the request made by the user, communicates with all agents as well as the Master Agent, collaborates with the Master Agent to generate tasks) 
C. Coding Agent (Capable of coding & executing code in all languages)
D. Internet Research Agent (Performs in-depth internet research & provides/communicates all agents with data related to their role & task) 
E. Social Media Agent (Capable of creating, running, maintaining social media accounts) 
F. Photo & Art Agent (Capable of generating photos, art, and other visual elements) 
G. Business Executive Agent (Capable of creating, running & maintaining a business)
H. Financial Executive Agent (Capable of creating financial accounts, running & maintaining finances, ensuring a budget is adhered to, and other financial tasks)
I. Videography Agent (Capable of creating video in all possible styles, from cartoon to photorealistic) 
J. Mixture of Experts (A mixture of experts, capable of filling in as needed, is capable of doing anything digitally)
K. Testing Agent (Will test any code, program, system, website, or anything else generated & produced by the Agents & CrewAI system as a whole - also acts as a quality control expert)
L. Advertising Agent (Expert in advertising, customer logistics, marketing, etc) 

8. Ensure that this CrewAI system is capable autonomously & continuously. If the "continuous" button has been toggled in the main menu, then even if the request has been accomplished to 100% completion, the CrewAI system & agents shall continue to run, expand upon their finalized output, improve upon what they have produced, etc. In the case of running a business, when the "continuous" button is toggled, the agents shall take on the role of running/maintaining the business as well as expanding/building upon their business in all aspects. 

9. You shall integrate all tools, packages, systems, or code you find online to ensure that you create a CrewAI system which is capable of literally any task which can be done on the computer. 

10. This CrewAI system shall (if requested) be capable of creating, developing & running/maintaining a full business - this can be anything from creating a monetized Youtube channel with videos, to generating & selling photos/art online, to running an online digital store, offering services such as web building or psychology, selling photo editing services, or seeking out & accomplishing free-lance coding jobs. 

11. This CrewAI system shall be capable of executing any digital task which can be accomplished by a human on the computer, such as doing online research, creating in-depth reports, writing/sending emails, creating videos, creating photos, writing/executing code, creating programs, creating accounts on websites, posting on forums or websites, or ANY other task possible. Ensure you incorporate tools, capabilities, and other systems which will allow this. 


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/auto-crewmate.git
cd auto-crewmate
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
