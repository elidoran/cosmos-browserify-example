Package.describe({
  name: 'cosmos:browserify-example',
  version: '0.2.1',
  summary: 'First example package using cosmos:browserify',
  git: '',
  documentation: 'README.md'
});

// Declare NPM modules for Meteor to download into .npm/package
Npm.depends({
  'upper-case':'1.1.2'  // module exports a function
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['coffeescript', 'templating'], 'client');

  api.use(['cosmos:browserify@0.4.0'], 'client'); // need this package

  api.addFiles([
      'client/example.html',    // show some example results
      'client/example.coffee',  // package's Meteor script
      'client.browserify.js',           // browserify file
      'client.browserify.options.json'  // browserify options file
    ],
    'client'
  );

  // export it to global app scope
  api.export('appUppercase', 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cosmos:browserify-example');
  api.addFiles('test/example-tests.js');
});
