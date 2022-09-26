// How to exports and require modules with nodejs
// If we want tovuse file system with node. we just require


// file system are core module
const fs = require('fs');

// If I want to use it module file in app.js file so bring it in.

// const mod = require("./module.js")
// const mod = require("./module")
const {fun1,fun2,num} = require("./module");

// const mod1 = require('./Modules/coder.js')
// const mod1 = require('./Modules/coder')
// with shortcut..
const mod1 = require ("./Modules")

// For both function...
// mod.fun1();
// mod.fun2();
fun1();
console.log(num);

mod1();



