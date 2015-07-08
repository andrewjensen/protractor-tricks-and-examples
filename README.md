# protractor-tricks-and-examples
Protractor Tricks and Examples

This is a project containing useful things to know how to do in ProtractorJS, the excellent end-to-end testing framework. The project contains a fake "Widget" website with a few pages. The test cases check various things about each page, and the PageObject pattern is used to abstract most of the low-level protractor calls out of the test cases themselves.

The test website is non-Angular, showing how Protractor can be a great tool even for sites built outside of Angular.

## Installation

```
npm install -g http-server
npm install -g protractor
webdriver-manager update
```

## Running the tests

```
npm install
npm run server
npm test
```

## Resources

- http://ramonvictor.github.io/protractor/slides/
