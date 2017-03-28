# YEPS Views React

YEPS React Template rendering

[![NPM](https://nodei.co/npm/yeps-views-react.png)](https://npmjs.org/package/yeps-views-react)

[![npm version](https://badge.fury.io/js/yeps-views-react.svg)](https://badge.fury.io/js/yeps-views-react)
[![Build Status](https://travis-ci.org/evheniy/yeps-views-react.svg?branch=master)](https://travis-ci.org/evheniy/yeps-views-react)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/yeps-views-react/badge.svg?branch=master)](https://coveralls.io/github/evheniy/yeps-views-react?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/yeps-views-react/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/yeps-views-react/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/yeps-views-react)

[![Dependency Status](https://david-dm.org/evheniy/yeps-views-react.svg)](https://david-dm.org/evheniy/yeps-views-react)
[![devDependency Status](https://david-dm.org/evheniy/yeps-views-react/dev-status.svg)](https://david-dm.org/evheniy/yeps-views-react#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/yeps-views-react)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/yeps-views-react/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/yeps-views-react.svg)](https://github.com/evheniy/yeps-views-react/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/yeps-views-react.svg)](https://github.com/evheniy/yeps-views-react/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/yeps-views-react.svg)](https://github.com/evheniy/yeps-views-react/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/yeps-views-react.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)


## How to install

    npm i -S yeps-views-react
  

## How to use

views/index.jsx

    import React from 'react';
    
    export default props => <h1>{props.text}</h1>;
    
app.js

    const App = require('yeps');
    const views = require('yeps-views-react');
    
    const app = new App();
    
    app.all([
        views(__dirname + '/views');
    ]);
    
    app.then(async ctx => {
        return ctx.render('index.jsx', { text: 'Hello!' });
    });


## Links

* [yeps](https://github.com/evheniy/yeps) - YEPS
* [yeps-promisify](https://github.com/evheniy/yeps-promisify) - YEPS kernel
* [yeps-benchmark](https://github.com/evheniy/yeps-benchmark) - performance comparison koa2, express and node http
* [yeps-router](https://github.com/evheniy/yeps-router) - YEPS promise based router
* [yeps-error](https://github.com/evheniy/yeps-error) - YEPS 404/500 error handler
* [yeps-redis](https://github.com/evheniy/yeps-redis) - YEPS promise based redis client
* [yeps-mysql](https://github.com/evheniy/yeps-mysql) - YEPS promise based mysql client
* [yeps-boilerplate](https://github.com/evheniy/yeps-boilerplate) - YEPS app boilerplate
* [yeps-express-wrapper](https://github.com/evheniy/yeps-express-wrapper) - YEPS express wrapper
* [yeps-cors](https://github.com/evheniy/yeps-cors) - YEPS CORS
* [yeps-bodyparser](https://github.com/evheniy/yeps-bodyparser) - YEPS body parser
* [yeps-views](https://github.com/evheniy/yeps-views) - YEPS Template
* [yeps-method-override](https://github.com/evheniy/yeps-method-override) - YEPS method override