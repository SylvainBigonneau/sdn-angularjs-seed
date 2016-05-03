# Sedona angularjs seed - step 2

AngularJS to Angular2 transition : step 2 - SystemJS.

## Work In Progress

This is a work in progress.

Planned steps are :
- npm dependencies upgrade (done)
- jspm dependencies upgrade (done)
- externalise build tasks
- drop systemjs-route-bundler and replace it by a KISS gulp-jspm-build task
- migration from angular-ui-router to angular-component-router
- migration from jslint to eslint
- apply Sedona angularjs guidelines and (upgraded) eslint-config

----------
This project was initially duplicated from the [Swimlane's angular1-systemjs-seed project](https://github.com/Swimlane/angular1-systemjs-seed).

----------

Seed project for ES6 modules via SystemJS with ES6 syntax using Babel that lazy-load and bundle build with AngularJS.

This project does:

- ES6 Syntax via Babel with source maps
- ES6 Modules via SystemJS
- Karma / Jasmine unit tests with coverage report
- Lazy-loading modules via routes with AngularJS
- Easy watch/browser-sync/lint/test/build setup via Gulp
- LESS CSS Support with source maps and minification
- AngularJS Template Compilation

### Install & Run

1. `npm start`
2. Browse to `http://localhost:9000`

### Gulp Tasks

- `gulp test` to run karma tests
- `gulp webdriver-standalone` and `gulp sauce-test` to run e2e test
- `gulp lint` to run jshint
- `gulp release` to bundle, cache busting, and minify

### Versions
The project has been tested with the following environment:

- node v5.4.0
- npm v3.5.3
- jspm v0.16.33

### Tooling

- [EditorConfig](http://editorconfig.org/)
- [JSHint](http://jshint.com/install/)
- [VS Task Launcher](https://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708)

### Best Practices

- https://github.com/johnpapa/angularjs-styleguide
- https://github.com/gocardless/angularjs-style-guide
- http://sett.ociweb.com/sett/settApr2014.html

### Research & Resources

- https://github.com/angular/material-start/tree/es6
- https://github.com/systemjs/systemjs
- https://github.com/gocardless/es6-angularjs
- http://glenmaddern.com/articles/javascript-in-2015
- https://github.com/marcj/angular-es6-annotations
- https://github.com/robianmcd/angular-next
- https://github.com/ng-next/ng-next-example
