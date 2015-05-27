console.log("example1 browserify.js");

// w/out var it becomes a package scoped variable
uppercase1 = require('upper-case');  // exports a function

// we'll make this one global scoped via api.export() in package.js
appUppercase = uppercase1;


if (process.env.NODE_ENV === 'production')
  console.log('it\'s production!!');
else
  console.log('it\'s development...');
