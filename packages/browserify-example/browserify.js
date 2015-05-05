console.log("example1 browserify.js");

// w/out var it becomes a package scoped variable 
uppercase1 = require('upper-case');  // exports a function

// we'll make this one global scoped via api.export() in package.js
appUppercase = uppercase1;
