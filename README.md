# Component Libraries & Style Guides

This git repository is the third part of a larger project.
This larger project aims at developing web-applications with open data which are easy to maintaint due to the use of component lib's and styleguides. Below links to all the git repositories:
- [jsd_01_kickstart] (https://github.com/moppedijk/jsd_01_kickstart)
- [jsd_02_application] (https://github.com/moppedijk/jsd_02_application)
- [jsd_03_components] (https://github.com/moppedijk/jsd_03_components)

## Synopsis

The aim of generating component libraries and style guides for this project was to create a development environment which is easy to maintain. This style guide needs to be developed for reuse like for example Bootstrap. In some research i came across a few concepts like component libraries, style guides, and toolkits but what's the difference? In my opinion component libraries are HTML/CSS/JS libraries which list components u can use on your website for instance buttons, and input fields. Others say that component libraries are also called pattern libraries or style guides. And then there are toolkits which are tools you could use for your website like buttons, and input fields. Confussing. The one thing they al have in common is that they share the idea of a modular approach in developing parts which can be reused whithin a website with which the parts are well documentated for the development team that uses the parts.

In developing this part of the project I looked at (and used) the following tools:
- Pattern primer (Node) (https://github.com/squashvoice/Pattern-Primer-on-Node)
- Fabricator (https://fbrctr.github.io/)
- Sourcejs (https://sourcejs.com/)

There are other tools yet to discover:
- Pattern lab (http://patternlab.io/)
- Living Style Guide Gem (https://livingstyleguide.org/)
- BEM tools (https://en.bem.info/toolbox/)
- Documented Style Sheets Parser (https://github.com/DSSWG/DSS)

## Code Example

For code examples see different folders in this repository.

## Motivation

I teste a few tools for generating components and style guides and there are some differences and some similarities. I test the tools with a few HTML components like buttons, inputs and headings. See the different folders for reference. The aim for using components and style guides was to create HTML/CSS code which only needs be maintained sometime but can be reused within the application for faster development. Only edit the components when needed. Below the tools I used with a short motivation/explanation.

### Pattern primer

This tool is realy simple but not really usefull for this project in combination with Meteorjs. It's a good tool if you want to create a preview of components for a client but it does not fit with the Meteor development flow. Meteorjs devides all the HTML and CSS into small components in combination with other styles. Pattern Primer only works with one CSS file and that's not what I want. Some extra note: I tested the Nodejs and Grunt versions and they did not work on my computer; correct me if i am wrong.

### Fabricator

I really like this tool because it has everything you need to build a component library. It's also possible to test the components whitin pages and deploy a package for further use. The installation was really easy and it provides the basic tools you need to develop components. 

### Sourcejs

This tool is really good developed and works great. On the other hand it does not really support my project. Sourcejs gives me the feeling that it's developed to use when working with big teams where good documentation is needed. Sourcejs has the focus on writing documentation for front-end componenents. It's to complex to only use to create components for a small web-application. Fabricator for example has more focus on just components, Sourcejs is just more comprehensive.

## Installation

For the installation of these tools check the websites:
- Pattern primer (https://github.com/squashvoice/Pattern-Primer-on-Node#installation)
- Fabricator (https://fbrctr.github.io/docs/)
- Sourcejs (https://sourcejs.com/docs/base/#install)

## Contributors

This project is contributed by Joost F. (https://github.com/joostf).

## Licence
GNU General Public Licence 2.0
