# nasjcodes.github.io
This site is used to show and track my progress in Software Development. Click [here](https://nasjcodes.github.io) to check it out!

## Issues
Redirects do not work for this page as Github pages uses https://nasjcodes.github.io/404.html for the custom 404 page instead of https://nasjcodes.github.io/<repo>/404.html.

## Description
Before delving further into HTML/CSS/JavaScript and JS frameworks, I wanted to create a basic website as a platform to showcase my projects first. Based on my basic understanding of web development, most modern web sites are built using established frameworks such as React or Ruby on rails, Angular JS etc. However, creating a website using Vanilla JS as a learning experience is widely recommended to solidify one's understanding of the background processes.

__Update 23 Jan 2019__:\
After completing several tutorials and courses on HTML/CSS/JavaScript, I have refactored my code to be more in line with best practices.

## Challenges
I have listed down some of the main challenges and decisions I had to make while creating this website.

### Style
__Update 23 Jan 2019__:\
I have styled the webpage from scratch without the help of Bootstrap. Additionally, I have also included media queries to optimize the layout for mobile, tablet, and desktop devices.

~~Although CSS styling is relatively simple, I decided to make use of [Bootstrap](https://getbootstrap.com/) as a quick and easy way to style the site. This allowed me to focus more on the functional details of the site using JavaScript. In the future, I will style the website without the use of Bootstrap.~~

### Traditional VS Single Page Application (SPA)
Through my research on making websites, I gathered that there are 2 basic types of web pages:
1. Traditional website - Every web page has its own html file, starting with "index.html" as the root. A template engine is often used to generate the html files.
2. Single Page Application - A single "index.html" file is used as the base, and pages are loaded/unloaded using a router in JavaScript.

Given that SPAs are mostly rendered client side, they are usually recommended for smaller websites as they provide a faster UX. The downsides of SPAs are longer initial load times (given the amount of .js files) and that users may not have JavaScript enabled. The latter problem may be solved by server-side rendering of components. The current iteration of the website is a basic SPA and does not have server-side rendering yet.

### Navigation
For my initial commit, I implemented site navigation using a hashchange event listener to switch pages. Although this was relatively simple, I found several issues that would affect the UX:
* I wanted to clean up the url by replacing /#/page_name with /page_name. This meant using window.history.replaceState to update the url. However, there was still a split second where the user could see the "#/" in the url.
* My implementation of hashchange combined with replaceState caused the page to fully reload (i.e. load index.html again) if the url started with "/".

After this, I found a seemingly better implementation of navigation using onclick. Each navigation link would call a function onclick and return false so that the browser does not direct to that link. This allowed the page to be loaded without changing the url. Browser history is added using window.history.pushState instead of window.history.replaceState.

### Redirects
Given that the entire website is technically using only "/index.html", I needed a way to navigate back to "/index.html" even if the user inputs "/page_name" in the url. Since this input will give a page not found error, I created a [Custom 404.html page](https://help.github.com/articles/creating-a-custom-404-page-for-your-github-pages-site/). This page runs a simple script that took the pathname ("/page_name") entered by the user and redirects to the root with a search string containing the pathname ("/?redirect=page_name"). Using window.location.search, the correct page can be loaded after redirecting.

### Git commits
When I first developed this website, my git commits were large with long intervals in between. From my understanding, this results in difficult-to-understand changes from a third-party perspective. As such, I have started the practice of commiting to git more frequently with small changes, allow a third-party to see more granular changes.

## TO-DO
* Style projects to be more visually pleasing.
* Possibly use the GitHub API to programmatically get repository details.
* Optimize loading times. Currently, all individual script files (modules) are loaded at the start. It is possible to minify and bundle these files for faster loading times. Alternatively, modules can be dynamically imported (limited browser support).
* Add ability for links to have children (/projects/project1).
* ~~Add my resume, about myself, and contact details. This page will be used as my portfolio landing page.~~
* ~~Add freeCodeCamp projects.~~
* ~~Style website with my own CSS stylesheet instead of relying on Bootstrap.~~

## Resources
I relied on 3 main pages as a reference for my SPA:\
[1](https://github.com/FermiDirak/fermidirak.github.io) - Uses onclick for better navigation.\
[2](https://github.com/w3cj/front-end-face-off-vanilla-js) - Uses MVC concept and has a more robust implementation of page component loading. I can still reference this for more improvements.\
[3](https://dev.to/rishavs/making-a-single-page-app-in-ye-good-olde-js-es6-3eng) - Uses ES6 modules.