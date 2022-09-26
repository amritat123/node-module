// How to exports and require modules with nodejs
// If we want tovuse file system with node. we just require


// file system are core module
const fs = require('fs');

// If I want to use it module file in app.js file so bring it in.

// const mod = require("./module.js")
const mod = require("./module");

// const mod1 = require('./Modules/coder.js')
const mod1 = require('./Modules/coder')

// For both function...
mod.fun1();
mod.fun2();

mod1();

