# Component Libraries & Style Guides

This git repository is the third part of a larger project.
This larger project aims at developing web-applications with open data which are easy to maintaint due to the use of component lib's and styleguides. Below links to all the git repositories:
- [jsd_01_kickstart] (https://github.com/moppedijk/jsd_01_kickstart)
- [jsd_02_application] (https://github.com/moppedijk/jsd_02_application)
- [jsd_03_components] (https://github.com/moppedijk/jsd_03_components)

## Synopsis

The aim of generating an component library and style guide for this project was to create an development environment which is easy to maintain. This style guide needs to be developed for reuse like for example Bootstrap. But what's the difference between an component libraries, style guides, and toolkits?

In developing this part of the project I looked at the following tools:
- Pattern primer (on Node) (https://github.com/squashvoice/Pattern-Primer-on-Node)
- Fabricator (https://fbrctr.github.io/)
- Sourcejs (https://sourcejs.com/)
- Pattern lab (http://patternlab.io/)

Other tools:
- Living Style Guide Gem (https://livingstyleguide.org/)
- BEM tools (https://en.bem.info/toolbox/)
- Documented Style Sheets Parser (https://github.com/DSSWG/DSS)

## Code Example

For code examples see different folders in repository.

## Motivation

I teste a few tools for generating components and style guides and there are some differences and some similarities. I test the tools with a few HTML components like buttons, inputs and headings. See the different folders for reference.

### Pattern primer

This tool is realy simple but not really usefull for this project in combination with Meteorjs. This is a good tool if you want to create a preview of components for a client but it does not fit with the Meteor development flow. Meteorjs devides all the html and css into small components in combination with other styles. Pattern primer only works with one css file and that's not I want. Some extra note: I tested the Nodejs and Grunt versions and they did not work on my computer; correct me if i am wrong.

### Fabricator

I really like this tool because it has everything you need to build a component library. It's also possible to test the components whitin pages and deploy a package for further use.

### Sourcejs

This tool is really good developed and works great. On the other hand it does not really my project. Sourcejs gives me the feeling that it's developed to use when working with big team en good documentation is realy needed. Sourcejs has the focus on writing documentation for front-end componenents. It's to complex for this project to only use to create components for a small web-application. Fabricator for example has more focus on just components, and Sourcejs is just more comprehensive.

### Pattern Lab



---

I am searching for an easy tool for generating and viewing componenents. Write components files like HTML, CSS, and JS, view them, combine them, and deployment them.

## Installation

## API Reference

## Tests

## Contributors

## Licence
GNU General Public Licence 2.0
