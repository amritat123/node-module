// modules are indivisual file of node js.
// Here we have javascript file

const fun1= function (){
    console.log ("This is function fun1 inside of modules.js file");
}

const fun2 = function () {
    console.log(" this is function fun2 inside of module.js file");
}

// if exporting FUNC2 will be visible to public || but fun2 will be PRIVATE in this file only.
// module.exports = fun1;

// ........................Exports in another way........................
// Providing spacific name for somthing I am exporting.
// module.exports.fun1 = fun1;


// ......................Exports in another way in OBJECT FORM..........................
module.exports = { fun1,fun2};