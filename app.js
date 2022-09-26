// How to exports and require modules with nodejs
// If we want tovuse file system with node. we just require


// file system are core module
const fs = require('fs');

// If I want to use it module file in app.js file so bring it in.
const mod = require("./module");

// For both function...
mod.fun1();
mod.fun2();

