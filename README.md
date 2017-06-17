* https://rolandomathi.as
* https://rolandomathias.github.io/portfolio/

# Requirements

* NodeJS (v6.x) - https://nodejs.org/en/
* Any text editor
* Any console/terminal

# Installation

* Clone this repository ( easiest way is to use [GitHub Desktop](https://desktop.github.com/) )
* Open console and navigate to repository directory
* Run `npm install`
* Run `bower install`
* Run `npm install --global gulp`

# Project structure

* `docs` - folder will contain build result ( minimised and cleaned final version of the website )
* `src` - folder with source files: all raw templates, styles, images and scripts 

All edits should be made in `src` folder and then project should be rebuilt each time
something was modified in `src` folder.

# Building a project

* Run `gulp` ( this will build everything into `docs` folder )
* Run `gulp post-inline` ( this will make last-pass optimisations in `docs` folder )

# Publishing changes

To upload changes to GitHub just commit and push your modifications to remote repository,
in GitHub desktop you can do it in two simple steps:

* Enter some commit message for your changeset and press "Commit"
* Press "Sync"
