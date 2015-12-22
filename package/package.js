Package.describe({
  name: 'cosmos:example-package',
  version: '1.0.0',
  summary: 'Example package using cosmos:browserify and Npm.depends()',
  git: '',
  documentation: 'README.md'
});

// Declare NPM modules for Meteor to download into .npm/package
Npm.depends({
  'upper-case':'1.1.2'  // module exports a function
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use(['coffeescript', 'templating'], 'client');

  api.use(['cosmos:browserify@0.9.3'], 'client'); // need this package

  api.addFiles([
      'client/example.html',    // show some example results
      'client/example.coffee',  // package's Meteor script
      'package.browserify.js',           // browserify file
      'package.browserify.options.json'  // browserify options file
    ],
    'client'
  );

  // OPTIONAL:
  //  exports it to app when added to an app
  //  exports it for other packages when they *use* this one
  // Don't export it unless you want another package or an app to get it
  api.export('uppercase', 'client');

});

Package.onTest(function(api) {
  api.use(['tinytest', 'coffeescript', 'cosmos:example-package'], 'client');
  api.addFiles('test/example-tests.coffee', 'client');
});
